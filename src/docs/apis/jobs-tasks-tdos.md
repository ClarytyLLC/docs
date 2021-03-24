# Jobs, Tasks, and TDOs

Throughout our APIs and this documentation, you will see frequent reference to Jobs, Tasks, and TDOs (Temporal Data Objects). These are the workhorse objects of Veritone's aiWARE platform.

Let's take a quick look at each of these, in reverse order:

## TDO (Temporal Data Object)

The [Temporal Data Object](https://api.veritone.com/v3/graphqldocs/temporaldataobject.doc.html) is an all-purpose container object, aggregating information about jobs, assets, and temporal data (among other things).

Important facts to know about TDOs are:

* You will generally need to manage the lifecycle of a TDO yourself. Although some engines may create a TDO on their own, it is far more common that you will submit a TDO &mdash; that _you_ created &mdash; when kicking off a Job with `createJob()`.

* When you no longer need a TDO, you can [delete it programmatically](/apis/job-quickstart/?id=delete-a-tdo-andor-its-content), or you can [purge its contents](/apis/job-quickstart/?id=remove-tdo-content). Otherwise, it lives forever.

* TDOs you create are generally visible (and thus usable) only by members of your Organization.

* You will often [create an empty TDO programmatically](/apis/job-quickstart/?id=create-a-tdo), then run an ingestion task on it to populate it with a media asset.

* When processing a media file referenced in your TDO, an engine will produce its own output (e.g., transcription output) in the form of a `vtn-standard` asset, which will be attached to your TDO _by reference_.

* A TDO can contain multiple assets of multiple types. (See [Asset Types](/apis/tutorials/asset-types?id=asset-types) for more information.)

## Task

The [Task](https://api.veritone.com/v3/graphqldocs/task.doc.html) is the smallest unit of work in aiWARE.

Things to know:

* A Task specifies an [engine](https://api.veritone.com/v3/graphqldocs/engine.doc.html) that will be run against a TDO.

* Tasks are run as part of a [Job](https://api.veritone.com/v3/graphqldocs/job.doc.html) (see below).

* A Task can be queried at any time using the GraphQL `task()` method.

* The possible status values that a Task can have are shown below.

```graphql
enum TaskStatus {
  pending
  running
  complete
  queued
  accepted
  failed
  cancelled
  standby_pending
  waiting
  resuming
  aborted
  paused
}
```

> If a Task finishes with a status of `aborted` or `failed`, it will cause the Job of which it is a part to finish with a status of `failed`.

## Job

The [Job](https://api.veritone.com/v3/graphqldocs/job.doc.html) is a higher-level unit of work that wraps one or more Tasks.

> If you need to aggregate Jobs into an even higher-level unit of work, consider using [Veritone Automate Studio](https://automate.veritone.com/) to create a multi-Job workflow.

Things to remember:

* You can create and queue (and thus essentially launch, immediately and asynchronously) a job using the GraphQL `createJob()` method.

* A Job needs to operate against a TDO. You should specify the TDO's ID in the `targetID` property when you call `createJob()`.

* The order in which you list Tasks, in your call to `createJob()`, is important. If your Job needs to ingest a media file, the ingestion-engine task should be the first Task in your list of Tasks.

* You can (and should) check a Job's status using the Job ID returned by `createJob()`. (See [Check the Job Status](/apis/job-quickstart/?id=check-the-job-status) for an example of how to do this.)

* A Job can have any of the status values shown below.

```graphql
enum JobStatus {
  pending
  complete
  running
  cancelled
  queued
  failed
}
```

> Be sure to consult the [Job Quickstart Guide](/apis/job-quickstart/) for a more complete discussion of how to create, run, monitor, and obtain data from Jobs.

## Ingestion

Ingestion refers to the intake of media files into a CMS, DAM, or MAM system.
When a file is ingested, it is generally copied to a secure location, registered with the host system, and optionally chunked, transcoded, tagged, indexed, thumbnailed, and/or subjected to other "normalizing" operations, such that the system can operate on all ingested files reliably, using the same APIs, with the same expectations, no matter where a file originally came from.

In Veritone's aiWARE system, a file can undergo cognitive processing if and only if it has been ingested.
The two most common ways to ingest a media file for processing in aiWARE are:

1\. Create a TDO and pull the media asset into it, in one operation, using `createTDOWithAsset()`. (See [this example](/apis/examples?id=create-tdo-and-upload-asset) in our API docs.)

2\. Create a TDO manually and then run an ingestion job on it using `createJob()` in conjunction with an appropriate ingestion engine (also called an [adapter](/developer/adapters/?id=adapter-workflow)).
Veritone aiWARE offers many ready-to-use ingestion engines tailored to various intake scenarios, such as pulling videos (or other files) from YouTube, Google Drive, Dropbox, etc.
To see a list of the available ingestion engines (adapters) in aiWARE, run the following GraphQL query:

 ```graphql
 query listIngestionEngines {
   engines(filter: {
     type: Ingestion
   }) {
     records {
       name
       id
     }
   }
 }
 ```

> You'll commonly use the Webstream Adapter &mdash; with ID `"9e611ad7-2d3b-48f6-a51b-0a1ba40feab4"` &mdash; to pull files from public URIs.

### Example Jobs

The following example assumes that you have already created a TDO with ID `1100548727`.

```graphql
mutation {
  launchSingleEngineJob(
    input: {
      targetId: "1100548727"
      engineId:"c0e55cde-340b-44d7-bb42-2e0d65e98255"
      fields:[]
    }
  ) {
    id
    targetId
    status
  }
}
```
?> In the latest aiWARE, there is no need to set `isReprocessingJob:true` when running single-engine jobs of the kind shown above. If you supply a TDO (as a `targetId` value), it is assumed that you are processing the file associated with that TDO.

To launch a job against a file on the web, run a mutation that looks like this:

```graphql
mutation {
  launchSingleEngineJob(
    input: {
      uploadUrl:"https://s3-wzd-dv-fulfill-or-1.s3-us-west-2.amazonaws.com/HitchhikersGuide.mp4"
      engineId:"c0e55cde-340b-44d7-bb42-2e0d65e98255"
      fields:[]
    }
  ) {
    id
    targetId
    status
  }
}
```

In both of the above mutations, the job will be mounted on your organization's default cluster, by default. If you want to specify a particular cluster ID to run the job on, you can do it like this:

```graphql
mutation {
  launchSingleEngineJob(
    input: {
      uploadUrl:"https://s3-wzd-dv-fulfill-or-1.s3-us-west-2.amazonaws.com/HitchhikersGuide.mp4"
      engineId:"c0e55cde-340b-44d7-bb42-2e0d65e98255"
      fields: [
        { fieldName:"clusterId", fieldValue:"rt-1cdc1d6d-a500-467a-bc46-d3c5bf3d6901" }
      ]
    }
  ) {
    id
    targetId
    status
  }
}
```

Configuration fields required by an engine can also be set this way. For example:

```js
fields: [
  { fieldName:"inputIsImage", fieldValue:"true" },
  { fieldName:"minConfidence", fieldValue:"0.5" },
]
```

Any special parameter that a cognition engine might need to know about (e.g. `diarise` and `automaticPunctuation` for a transcription engine) should be specified this way.

For detailed information on how to use `launchSingleEngineJob`, see [Single-Engine Jobs](/overview/aiWARE-in-depth/single-engine-jobs?id=single-engine-jobs).
