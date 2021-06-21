# Working with Jobs

**aiWare** lets you define Jobs that in turn consist of Tasks. A job is the smallest building block that can be processed by the engine. All engines in aiWARE break up a workflow into multiple jobs. You must understand that a typical workflow might use multiple engines. Jobs, and their tasks, lets you design and build your workflow utilizing the [available engines](/cognitive-technology/).

> Typically, jobs consist of multiple tasks and each task operates on a potentially large media file. All jobs run asynchronously and are mostly long-running. You must plan to poll a job to know its [status](#step-four-poll-for-status) periodically.

This topic lets you quickly understand how you can create a job, poll the job status, and get the job results. We will use both GraphQL (for cloud) and Edge REST API (on-premise/hosted) examples to demonstrate the process. We will also see [how you can delete a TDO](#delete-a-tdo-andor-its-content) when it is no longer required.

**To run a job, you must:**

1. [Step One: Get a Token](#step-one-get-a-token)
2. [Step Two: Select and Engine](#step-two-select-an-engine)
3. [Step Three: Create the Job](#step-three-create-the-job)
4. [Step Four: Poll for Status](#step-four-poll-for-status)
5. [Step Five: View Results](#step-five-view-results)



You can also [export the results in specific output formats](#export-the-results-in-a-specific-output-format).



## **Step One: Get a Token**

You must use an API token to access any aiWare API. The token must be included in the request’s Authorization Header and the value must be formatted as `Bearer <yourtokenhere>`. 

You can get an authorization token using one of the following methods:

- Generating an API key if you have admin-level privileges for your organization:

  1. Log into the Veritone Platform.
  2. Select Admin from the App Picker drop-down. 
  3. Click the API Keys widget, and click New API Key to generate a new API.

  This generates a long-last token that you must store safely.

- Running the `userLogin` mutation (the only mutation that you can run without a token) using GraphQL to run the `userLogin` mutation.

  ```graphql
  mutation userLogin {
    userLogin(input: {userName: "jdoe@mycompany.com" password: "Password123"}) {
      token
    }
  }
  ```

  This generates a token that expires in a day and is 36 ASCII bytes in length, such as `8a2d0596-2447-40f8-8ea1-cfebaec68459`.

- Using OAuth to get a token. For more information, see [Build Your Own AI App](/developer/applications/app-tutorial/app-tutorial-step-2?id=authentication-option-2-oauth) tutorial.

  This generates a [JSON Web Token (JWT)](https://jwt.io/) of around one kilobyte in length that expires in a day.



All tokens are strings that must be included in the request’s Authorization Header. Following is a sample of using the token in a web client:

```js
    const API_ENDPOINT = 'https://api.veritone.com/v3/graphql';

   // Pass a GraphQL query and a bearer token, get payload suitable for POSTing.
   function createVeritonePayload(q, token) {
     let theHeaders = {};
     theHeaders['Content-Type'] = 'application/json';
     if (token) theHeaders['Authorization'] = 'Bearer ' + token;
     let theBody = JSON.stringify({
       query: q
     });
     return {
       body: theBody,
       headers: theHeaders,
       method: 'POST'
     };
   }

   // Do a POST and get JSON back.
   async function fetchJSONviaPOST(API_ENDPOINT, payload) {
     return fetch(API_ENDPOINT, payload).then(function(response) {
       if (!response.ok) {
         throw new Error('fetch() gave status = ' + response.status);
       }
       return response.json();
     });
   }
```



## Step Two: Select an Engine

After generating a token, you must select a cognition engine that you want to use to run your job. However, you must first get all available engines and review them to understand which engine suits your job.

### Using GraphQL

To get all engines’ information, you must start with finding all the possible *categories* of cognition engine. To find categories, query for categories using the following sample code:

```graphql
query enumerateCognitionEngineCategories {
  engineCategories(type:"Cognition") {
    records {
      categoryType
      totalEngines
      id
      description
      type {
        name
      }
    }
  }
}
```



Once you know the category you want, query for engines in the category (“Translate” in this example). You must set a reasonable limit on the number of records returned. The following sample query returns engines that can translate, and lists the custom fields and options supported by each engine:

```graphql
{
  engines(limit: 100,category:"Translate") {
    count
    records {
      id
      category {
        id
        name
      }
      fields {
        name
        type
        max
        min
        step
        info
        label
        defaultValue
        options {
          key
          value
        }
      }
    }
  }
}
```



### Using the Edge REST API

You get a list of all engines using the Edge REST API by making a GET request to `/admin/engines`. This returns a list of the available engines on a given instance of Edge.

The response is a JSON array that includes three key-value pairs:

- The category ID of the engine(transcription, translation, and so on).

  `"engineCategoryID": "3fa85f64-5717-4562-b3fc-2c963f66afa6"` 

- The engine ID that will be used to create the job.

  `"engineID": "3fa85f64-5717-4562-b3fc-2c963f66afa6"`

- The name of the engine

  `"engineName": "string"`



## Step Three: Create the Job

Once you know the engine category, you can create the job.

### Using GraphQL

You must get the ID of the cluster on which you want to run the job. You can find existing clusters in your organization using the following query:

```graphql
{
  clusters {
    records {
      id
      name
      organizationId
    }
  }
}
```

If your organization does not have any existing clusters, then you can create a cluster using the following query:

```graphql
mutation createCluster {
  createCluster (input: {
    name: "myTeam1",
    allowedEngines: ["all"],
    dockerCredentials: {},
    type: RT,
    containerTag: "myTeam1",
    paused: false,
    memorySize: "20gb",
    storageSize: "10gb",
    bypassAllowedEngines: true,
    collaborators: [],
    subscriptions: [],
    tags: ["aiware-agent"],
    status: active,
    mediaStorage: core,
    mediaStoragePath: "",
    serviceToken: "fake-token",
  }
  ) {
    id
  }
}
```

Jobs operate on a Temporal Data Object (TDO), which is a generic data wrapper that stores metadata about media files. You can dynamically create a TDO by passing a `target` block to your `createJob` mutation. Alternatively, you can use an existing TDO by passing its ID in the `targetId` field. You can delete the TDO and its content after your job is complete.

The below example shows how you can set up and run a transaction job on an .mp4 file (passed in the payload attribute). All tasks have an `engineId` and one or more `ioFolders`. The `routes` array shows how the data gets routed between Tasks.

```graphql
mutation {
  createJob(input: {
  
    # Supply target-block info if you want to create a TDO on the fly.
    target: {
       startDateTime:1574311000
       stopDateTime: 1574315000
    }
  
    #targetId: "890661001" # Supply the TDO ID here if you have one (in which case, do not use the target block above).
  
    clusterId: "_YOUR_CLUSTER_ID"

    # Tasks and their ioFolders
    tasks: [
       {
         # Webstream Adapter (WSA)
         engineId: "9e611ad7-2d3b-48f6-a51b-0a1ba40fe255"
         payload: {
            url:"https://s3.amazonaws.com/src-veritone-tests/stage/20190505/0_40_Eric%20Knox%20BWC%20Video_40secs.mp4"
         }
         ioFolders: [
          {
            referenceId: "wsaOutputFolder"
            mode: stream
            type: output
          }
         ]
      }
      {
        # Playback engine to store playback segments
        engineId: "352556c7-de07-4d55-b33f-74b1cf237f25"
        ioFolders: [
          {
            referenceId: "playbackInputFolder"
            mode: stream
            type: input
          }
        ]
        executionPreferences: {
            parentCompleteBeforeStarting: true
        }
      }
      {
        # Chunk engine to split into audio chunks
        engineId: "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440"  
        payload:{
          ffmpegTemplate: "audio"
          customFFMPEGProperties:{
            chunkSizeInSeconds: "20"
           }
          }
        ioFolders: [
        {
          referenceId: "chunkAudioInputFolder"
          mode: stream
          type: input
        },
        {
          referenceId: "chunkAudioOutputFolder"
          mode: chunk
          type: output
        }
        ],
       executionPreferences: {
          parentCompleteBeforeStarting: true
        }
      }
      {
        # Speechmatics engine
        engineId: "c0e55cde-340b-44d7-bb42-2e0d65e98255"
        ioFolders: [
          {
            referenceId: "transcriptionInputFolder"
            mode: chunk
            type: input
          },
         {
            referenceId: "transcriptionOutputFolder"
            mode: chunk
            type: output
          }
        ]
      }
      {
        # Output Writer (to collate VTN-Standard output)
        engineId: "8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3"  
        ioFolders: [
          {
            referenceId: "owInputFolderFromTranscription"
            mode: chunk
            type: input
          }
        ]
      }
    ]

    ##Routes : A route connects a parent output folder to a child input folder
    routes: [
      {  ## WSA--> Playback
        parentIoFolderReferenceId: "wsaOutputFolder"
        childIoFolderReferenceId: "playbackInputFolder"
        options: {}
      },
      {  ## WSA --> chunkAudio
        parentIoFolderReferenceId: "wsaOutputFolder"
        childIoFolderReferenceId: "chunkAudioInputFolder"
        options: {}
      }
      {  ## chunkAudio --> Transcription
        parentIoFolderReferenceId: "chunkAudioOutputFolder"
        childIoFolderReferenceId: "transcriptionInputFolder"
        options: {}
      }
      {  ## Transcription --> Output Writer
        parentIoFolderReferenceId: "transcriptionOutputFolder"
        childIoFolderReferenceId: "owInputFolderFromTranscription"
        options: {}
      }
    ]
  }) {

    id
    targetId
    clusterId

    tasks {
      records{
        id
        engineId
        payload
        taskPayload
        status
        output
        ioFolders {
          referenceId
          type
          mode
        }
      }
    }
    routes {
      parentIoFolderReferenceId
      childIoFolderReferenceId
    }
  }
}
```

 The job `id` returned is used to [poll the job for status](#step-four-poll-for-status).

### Using the Edge REST API

You can create a job on a hosted instance of aiWARE Edge by sending a POST request to `/proc/job/create`. Below is a sample `curl` command:

```bash
curl --request POST \
 --url http://localhost:9000/edge/v1/proc/job/create \
 --header 'authorization: Bearer <token here>' \
 --header 'content-type: application/json' \
 --data '<the JSON shown below, starting with { "jobs" '
```

Below is a sample JSON data payload for a translation job:

```json
{
 "jobs": [
   {
     "dueDateTime": "2020-02-18T20:49:18.331Z",
     "tasks": [
       {
         "correlationTaskId": "__TRANSLATION_TASK_ID_UUID__",
         "dueDateTime": "2020-02-18T20:49:18.331Z",
         "engineId": "95c910f6-4a26-4b66-96cb-488befa86466",
         "ioFolders": [
           {
             "correlationID": "__TRANSLATION_TASK_OUTPUT_ID_UUID__",
             "mode": "chunk",
             "optionsJSON": "{}",
             "type": "output"
           }
         ],
         "maxEngines": 1,
         "maxRetries": 10,
         "payloadJSON": "{\"url\":\"https://vt-maxagg-test.s3.amazonaws.com/media/spanish.txt\"}",
         "taskPayloadJSON": "{\"url\":\"https://vt-maxagg-test.s3.amazonaws.com/media/spanish.txt\"}",
         "taskStatus": "pending",
         "priority": -10
       },
       {
         "correlationTaskId": "__OUTPUT_WRITER_TASK_ID_UUID__",
         "dueDateTime": "2020-02-14T20:49:18.331Z",
         "engineId": "8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3",
         "ioFolders": [
           {
             "correlationID": "__OUTPUT_WRITER_TASK_INPUT_ID_UUID__",
             "mode": "chunk",
             "optionsJSON": "{}",
             "type": "input"
           }
         ],
         "maxEngines": 1,
         "maxRetries": 10,
         "payloadJSON": "{}",
         "taskPayloadJSON": "{}",
         "taskStatus": "pending"
       }
     ],
     "taskRoutes": [
       {
         "taskChildId": "__TRANSLATION_TASK_ID_UUID__"
       },
       {
         "taskParentId": "__TRANSLATION_TASK_ID_UUID__",
         "taskParentOutputId": "__TRANSLATION_TASK_OUTPUT_ID_UUID__",
         "taskChildId": "__OUTPUT_WRITER_TASK_ID_UUID__",
         "taskChildInputId": "__OUTPUT_WRITER_TASK_INPUT_ID_UUID__"
       }
     ]
   }
 ]
}
```

The input file is no uploaded but is specified via a URL(in a serialized payload object). The fields containing “UUID___” must include a unique identifier in the form of a UUID. You can use any UUID-generation library to generate these values.

## Step Four: Poll for Status

You can review the status of the job you created by polling it for status. The possible statuses of a job are:

- Pending
- Complete
- Running
- Canceled
- Queued
- Failed

### Using GraphQL

To poll a job status, you run the following `job` query by passing the job’s `id`:

```graphql
query jobStatus {
  job(id: "19093817_Mdsq3lksrB") {
    status
    createdDateTime
    targetId
    tasks {
      records {
        log {
          uri
          text
        }
        status
        taskOutput
        createdDateTime
        modifiedDateTime
        id
        engine {
          id
          name
          category {
            name
          }
        }
      }
    }
  }
}
```

### Using the Edge REST API

You can poll a job status by sending a GET request to `/proc/job/<job id here>/outputs` with the `InternalJobId`. You can periodically make GET requests until a JSON file is returned in the `name` key of the outputs array of the API response:

```json
{
 "outputs": {
   "internalJobID": "e1484460-7cb5-4cab-87ea-436c4768904f",
   "outputs": [
     {
       "created": 1581102672,
       "name": "vtn-standard-489cbc5b-b6b0-43d5-8b12-e790865986b5.json",
       "size": 4344
     }
   ]
 }
}
```

## Step Five: View Results

Once the job is completed, you can get the results for your job. Optionally, you can also [request output in specific output formats](#export-the-results-in-a-specific-output-format).

### Using GraphQL

You can query for results of a job based on `engineId` or `jobId`.

```graphql
query  {
  engineResults(jobId:"YOUR_JOB_ID") {
    records {
      tdoId
      engineId
      startOffsetMs
      stopOffsetMs
      jsondata
      assetId
  }
}
```

### Using the Edge REST API

You can download the engine results by passing `InternalJobId` from Step 3 and `name` from Step 4, as shown in the `curl` sample below.

```bash
curl --request GET \
 --url http://localhost:9000/edge/v1/proc/job/<job id here>/output/<file name here>.json \
 --header 'authorization: Bearer <token here>'
```

## Export the Results in a Specific Output Format

You can export the results in specific output formats (such as `ttml` or `srt` for captioning) using the `createExportRequest` mutation: 

```graphql
mutation createExportRequest {
  createExportRequest(input: {
    includeMedia: false,
    tdoData: [{tdoId: "431011721"}],
    outputConfigurations: [{
      engineId: "71ab1ba9-e0b8-4215-b4f9-0fc1a1d2b44d",
      formats: [{
        extension: "vtt",
        options: {newLineOnPunctuation: false}
      }]
    }]
  }) {
    id
    status
    organizationId
    createdDateTime
    modifiedDateTime
    requestorId
    assetUri
  }
}
```

Below is a sample response:

```json
{
  "data": {
    "createExportRequest": {
      "id": "a2efc2bb-e09f-40bf-a2bc-1d25297ac2f7",
      "status": "incomplete",
      "organizationId": "17532",
      "createdDateTime": "2019-04-25T20:45:20.784Z",
      "modifiedDateTime": "2019-04-25T20:45:20.784Z",
      "requestorId": "960b3fa8-1812-4303-b58d-4f0d227f2afc",
      "assetUri": null
    }
  }
}
```

An export request may take time to process. You can poll the request status using the `id`, until the status is complete.

```graphql
query exportRequest {
  exportRequest(id: "a2efc2bb-e09f-40bf-a2bc-1d25297ac2f7") {
    status
    assetUri
    requestorId
  }
}
```

Below is a sample response where the export is incomplete:

```json
{
  "data": {
    "exportRequest": {
      "status": "incomplete",
      "assetUri": null,
      "requestorId": "960b3fa8-1812-4303-b58d-4f0d227f2afc"
    }
  }
}
```

When the status changes to `complete`, you can retrieve the results at the URL returned in the `assetUri` field.

## Delete a TDO and/or Its Content

Jobs operate on a Temporal Data Object (TDO), which is a generic data wrapper that stores metadata about media files. You can delete a TDO, when it is no longer required, from your organization’s files to free up storage space or to comply with organizational policies. You can either delete a TDO and all its assets or delete only its assets so that the TDO can be reused.

> When you delete TDO data, the data is permanently removed from aiWARE and will not be accessible through CMS, search, or any other method. You cannot revert this change.

### Delete a TDO and All Assets

You can remove a TDO and all its asset metadata, by requesting to `deleteTDO` mutation with the TDO `id`. The operation is processed immediately after the request and permanently deletes the TDO *as well as its assets* from the organization's account. Any subsequent requests against the TDO or assets will return an error.

Below is a sample request to delete a TDO with `id 44512341`:

```graphql
mutation{
  deleteTDO(id: "44512341")
     {
      id
      message
      }
    }
```

Below is a sample response:

```json
{
  "data": {
    "deleteTDO": {
      "id": "44512341",
      "message": "TemporalDataObject 44512341 was deleted."
    }
  }
}
```

### Remove TDO Content

You can remove only the content associated with a TDO, while keeping the TDO and asset metadata, by requesting to the `cleanupTDO` mutation with the TDO `id`. You can specify the types of data you want to delete in the `options` parameter:

* `storage`: Deletes the TDO's assets from storage, including the engine results. The asset metadata will remain until the TDO or container is deleted.
* `searchIndex`: Deletes all search index data. The TDO and its assets will no longer be accessible through search.
* `engineResults`: Deletes engine results stored on related task objects. The engine results that are stored as assets will remain unless `storage` is passed as a value in the request.

Below is a sample request to remove TDO Content (storage, engineResults):

```graphql
mutation {
  cleanupTDO(id: "44512341", options: [storage, engineResults]) {
      id
      message
  }
}
```

> If you do not use the `options` parameter, then the request will remove the TDO's content from `storage` and the `search index`.



Below is a sample response:

 ```json
 {
  "data": {
    "cleanupTDO": {
      "id": "44512341",
      "message": "Data deleted from 44512341:  storage,engineResults"
    }
  }
}
 ```

### For More Information

* [Jobs, Tasks, and TDOs](/apis/jobs-tasks-tdos)
* [Job Processing](https://docs.veritone.com/#/overview/aiWARE-in-depth/job-processing)
* [Using GraphQL](/apis/using-graphql)
* All supported [Mutations](/apis/reference/mutation/) and [Queries](/apis/reference/query/)
* [GraphQL API Examples](/apis/examples)
* [Edge REST API](/apis/edge/index.html)


<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>