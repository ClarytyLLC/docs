# Working with Jobs

In aiWARE, the main unit of work is the _Job_. A Job, in turn, wraps Tasks; and the work for each Task is done by an _engine_.

> Jobs are typically long-running, since there may be multiple Tasks within a Job, each one operating on a potentially large media file. Thus, Jobs operate asynchronously and you should plan on polling the Job to discover its [status](#job-status).

This page gives a quick overview of how Jobs work in aiWARE. We will show examples of how to run a job using the GraphQL API (the "cloud API") as well as the Edge REST API (which is tyically used in on-premise/hosted aiWARE).

The process involves these steps:

* [Step One](#step-one-authorization-getting-a-token): Authorization and Authentication (Get a Token)
* [Step Two](#step-two-choose-an-engine): Choose an Engine
* [Step Three](#step-three-create-the-job): Create the Job
* [Step Four](#step-four-poll-for-status): Poll for Status
* [Step Five](#step-five-obtain-the-results): Obtain the Results

## Step One: Authorization (Getting a Token)

Regardless of which API you use, an API token must be included in the request's Authorization Header, with the value formatted as: `Bearer <yourtokenhere>`. (See examples below.)

There are several ways to obtain the required token.

1\. If you have Admin rights for your Organization, log into the Veritone Platform and select Admin from the App Picker drop-down. Then click the API Keys widget, and click **New API Key**.

2\. Use GraphQL to run the `userLogin` mutation. (This mutation is the only one that can be run without a token.) Example:

```graphql
mutation userLogin {
  userLogin(input: {userName: "jdoe@mycompany.com" password: "Password123"}) {
    token
  }
}
```

3\. Use OAuth to obtain a token programmatically (as described in our [Build Your Own AI App](/developer/applications/app-tutorial/app-tutorial-step-2?id=authentication-option-2-oauth) tutorial).

Use the first option if you need a long-lasting token (i.e., one that will not expire in a day). Take care to store it properly.

The second option produces a short-lived (~1 day) session token, 36 ASCII bytes in length, looking like `8a2d0596-2447-40f8-8ea1-cfebaec68459`.

The third option produces a [JSON Web Token (JWT)](https://jwt.io/) of around one kilobyte in length. (The actual size will vary somewhat, but is always around 1024 bytes.) It expires in a day.

### How to Use the Token in an API Call

The token is simply a String. One possible way to use it in a web client is shown below:

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

## Step Two: Choose an Engine

### Using GraphQL

You may want to start by finding all the possible _categories_ of cognition engine:

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

If you know the category you're interested in, query for engines in that category (but provide a reasonable limit on the number of records returned). In the following query, we ask for engines that can do translation; and at the same time, we ask for the _custom fields and options_ that each translation engine supports:

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

Make a GET request to `/admin/engines`. This will return a list of the available engines on a given instance of Edge.

The response is a JSON array, inclusive of these three key-value pairs:

* `"engineCategoryID": "3fa85f64-5717-4562-b3fc-2c963f66afa6"` (the category ID of the engine &mdash; transcription, translation, etc.)

* `"engineID": "3fa85f64-5717-4562-b3fc-2c963f66afa6"` (the ID of the engine itself, for creating the job)

* `"engineName": "string"` (the human-readable name of the engine, for populating a UI)

## Step Three: Create the Job

### Using GraphQL

Jobs run on clusters, so you should obtain a cluster ID before going further. If your Organization has already created clusters, find their IDs with this query:

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

If no clusters exist, create one with:

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

Take note of the ID that is returned. You will need this `clusterId` for running your Job.

A Job will need to operate against a Temporal Data Object (TDO), which is a generic data wrapper for storing metadata about media files. You can create a TDO on the fly by passing a `target` block to your `createJob` mutation (as shown in the  example below). If you aalready know the ID of an existing TDO you want to use, pass that ID (as a String) in the `targetId` field.

The following example shows how to set up (and run) a transcription job against an .mp4 file (see the `payload.url` in the first Task object).

Each Task has (at a minimum) an `engineId` and one or more `ioFolders`. The `routes` array shows how data gets routed between Tasks.

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

Take note of the `id` (Job ID) that is returned. You'll need this to poll for status.

### Using the Edge REST API

If you are running a hosted instance of aiWARE Edge, POST your job to `/proc/job/create`. The `curl` command could look something like this:

```bash
curl --request POST \
 --url http://localhost:9000/edge/v1/proc/job/create \
 --header 'authorization: Bearer <token here>' \
 --header 'content-type: application/json' \
 --data '<the JSON shown below, starting with { "jobs" '
 ```

The JSON data payload would look something like the following. (A translation job is shown.)

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

Note that the input file is not uploaded directly but is specified via URL (in a serialized payload object). Also note that fields containing "UUID___" need to contain a unique identifier in the form of a UUID. (You can use any UUID-generation library for this.)

## Step Four: Poll for Status

### Using GraphQL

Pass your job's ID to a `job` query, as follows:

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

### Job Status

The possible statuses of a Job are:

```pre
pending
complete
running
cancelled
queued
failed
```

### Using the Edge REST API

Poll for job status by making a GET request to `/proc/job/<job id here>/outputs`.
Replace &lt;job id here&gt; with the `InternalJobId` returned earlier.

Continue to make GET requests to this endpoint every minute or so, until a JSON file is returned in the `name` key of the outputs array of the API response. For example, in blue below:

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

## Step Five: Obtain the Results

### Using GraphQL

You can query for results based on `engineId` or `jobId`.

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

Download the engine results. Note that `InternalJobId` from Step 3 and the value of `name` from Step 4 must be included in the GET request.
An example in `curl` is shown below.

```bash
curl --request GET \
 --url http://localhost:9000/edge/v1/proc/job/<job id here>/output/<file name here>.json \
 --header 'authorization: Bearer <token here>'
```

## Requesting a Specific Output Format

Sometimes you may want a particular flavor of output (such as `ttml` or `srt` for captioning).
In that case, you can use the `createExportRequest` mutation:

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

The response:

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

Since an export request may take time to process, you should poll until the status is complete,
using the `id` returned above.

```graphql
query exportRequest {
  exportRequest(id: "a2efc2bb-e09f-40bf-a2bc-1d25297ac2f7") {
    status
    assetUri
    requestorId
  }
}
```

The response (showing that the export is, in this case, incomplete):

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

When the status becomes `complete`, you can retrieve the results at the URL returned in the `assetUri` field.

## Delete a TDO and/or Its Content

If a TDO is no longer needed, it can be deleted from an organization’s files
to free up storage space or comply with organizational policies.
The API provides flexible options that allow you to delete a TDO and all of its assets,
or clean up a TDO's content by removing the associated assets so the TDO can be reused
and new assets can be created.

!> Deleting a TDO data permanently removes contents from aiWARE and they will no longer be accessible via CMS, search, or any other method.
**Deleting a TDO cannot be undone**!

### Delete a TDO and All Assets

To delete a TDO and all asset metadata, make a request to the `deleteTDO` mutation
and pass the TDO `id` as an argument.
This operation is processed immediately at the time of the request and
permanently deletes the specified TDO *as well as its assets* from the organization's account.
Any subsequent requests against the TDO or assets will return an error.

First, we'll look at how to delete the entire TDO.
Then we'll discuss how to remove *just the content items*.

#### Example: Delete a TDO

```graphql
mutation{
  deleteTDO(id: "44512341")
     {
      id
      message
      }
    }
```

The response is:

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

To remove just the asset (content) associated with a TDO, while retaining the TDO/container
and asset metadata, make a request to the `cleanupTDO` mutation with the TDO `id`.
This mutation uses the `options` parameter along with any combination of the values below
to specify the type(s) of data to be deleted.

* `storage`: Deletes the TDO's assets from storage, including engine results. Asset metadata will remain until the TDO/container is deleted.
* `searchIndex`: Deletes all search index data. The TDO and its assets will no longer be accessible through search.
* `engineResults`: Deletes engine results stored on related task objects. Engine results that are stored as assets will remain unless `storage` is passed as a value in the request.

!> Requests that do not use the `options` parameter will remove the TDO's content from `storage` and the `search index` by default.

#### Example: Remove TDO Content (storage, engineResults)

```graphql
mutation {
  cleanupTDO(id: "44512341", options: [storage, engineResults]) {
      id
      message
  }
}
```

Response:

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
