<!-- markdownlint-disable no-inline-html -->
<style>
         pre {
            overflow-x: auto;
            white-space: pre-wrap;
            white-space: -moz-pre-wrap;
            white-space: -pre-wrap;
            white-space: -o-pre-wrap;
            word-wrap: break-word;
         }
      </style>

# Single-Engine Jobs

In aiWARE V3F, a simplified job-creation option exists for situations in which you merely want to run one engine (representing one type of cognition) on a media file.
A "single-engine job" can be initiated using the `launchSingleEngineJob` mutation. This mutation has only two _required_ parameters: an `engineId`, and an `uploadUrl`.
The mutation will operate against the file of your choice (at the public URL you provide).

For situations in which you want to _reprocess_ a media file that was already previously ingested (and thus has an associated Temporal Data Object already), you can invoke  `launchSingleEngineJob` with parameters of `engineId` and `targetId` (representing the TDO's ID).

## Usage

To launch a job that operates against a file at a URL, your GraphQL mutation will look something like:

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

To launch a "reprocessing job" that operates against a known TDO, you would do:

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

In either case, the typical response would be:

```json
{
  "data": {
    "launchSingleEngineJob": {
      "id": "20072915_mrEONv6h0H",
      "targetId": "1100548727",
      "status": "pending"
    }
  }
}
```

You will then want to poll the job for its status, to see if it's `complete`.

```graphql
query getJobStatus {

  job(id: "20072914_VkqsK20wWf" ) {
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

## How It Works

You may notice, when you poll the job using the above query, that information for as many as five tasks (each with its own engine) gets returned.
That's because a job requires at least one ingestion engine (or _adapter_), and may require segment creators or other processing steps, as part of the data marshalling pipeline.
Plus, a cognition engine typically needs to hand off data to the aiWARE-native Output Writer engine (which is basically a data aggregator and format-validator) after cognitive processing is done.

This "pipeline," involving serial handoffs between engines, is a miniature workflow, which we sometimes call a DAG (Directed Acyclic Graph).
Normally, when you create a job using the `createJob` mutation (as described in detail in [Working with Jobs](quickstart/jobs/?id=working-with-jobs)), you specify the DAG explicitly, by specifying an array of `tasks` and an array of `routes`.
With `launchSingleEngineJob`, the DAG is pre-specified in advance, by a template associated with the engine.

> The single-engine-job template is not something you need to create yourself, unless you're an engine developer.

Almost every cognitive engine available in aiWARE comes with a default template. If you encounter an engine for which no template exists, any attempt to run `launchSingleEngineJob` will result in an error with a message of `"This engine does not specify a default single job template"`.
If you are an engine developer or an advanced user who wants to create a template, you can do it (see further below for more information), but in most cases you will find that you can simply rely on the existing template for an engine.

### Optional Fields

In the `launchSingleEngineJob` mutation, you can specify optional `fields` values in an array. The syntax for providing `fields` values is:

```pre
fields: [
  { fieldName:"priority", fieldValue:"-2" },
  { fieldName:"inputIsImage", fieldValue:"true" },
  { fieldName:"minConfidence", fieldValue:"0.5" },
  { fieldName:"clusterId", fieldValue:"rt-1cdc1d6d-a500-467a-bc46-d3c5bf3d6901" }
]
```

Any special parameter that a cognition engine might need to know about (e.g. `diarise` and `automaticPunctuation` for a transcription engine) should be specified this way.

In most cases, fields are optional. The only exception to this is if an engine has “libraryRequired=true” in its properties, in which case you _must_ provide a `libraryId` parameter in your fields. This is the only condition where a `fields` entry is required (unless there’s no default cluster ID defined for the job; this would mean the `clusterId` is required too).

There is no easy way to know in advance which (if any) fields are supported by a template, other than to examine the template itself. To inspect a template, use the following query (but substitute the appropriate `engineId` for your engine):

```graphql
query {
  engine(id:"c0e55cde-340b-44d7-bb42-2e0d65e98255") {
    name
    standaloneJobTemplates {
      type
      template
    }
  }
}
```

Parameters that can be specified in `fields` will look like:

```pre
{{#if priority}} \"priority\":{{{priority}}} {{/if}}
```

### Cluster ID

It's important to understand how _clusters_ work in aiWARE. Here, by "cluster," we mean a cluster of Edge Controllers &mdash; essentially, an Edge _instance_. The `clusterId` tells aiWARE's Core where to send work. (For more information on clusters, including how to discover them and/or create them, see [this discussion in the Working with Jobs quickstart](quickstart/jobs/?id=step-three-create-the-job)).

> When you create a cluster, you're registering a particular Edge instance with Core, so that calls made to the Core GraphQL server result in jobs being delegated back to the desired Edge instance.

If a default cluster has been set for a given Organization, you can run a job without specifying a cluster. (The default will be used.)
Unless you know for sure that your organization _has_ a default cluster, the safe thing to do is always specify a cluster ID when running a job. For example:

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

## Creating Your Own Single-Engine Job Template

!> This is an advanced topic. Unless you are an engine developer or have a special need to create or update the default template(s) for an engine, you will not need to read this section.

In order for `launchSingleEngineJob` to work, a pair of default templates (one for Upload jobs, and one for Reprocess jobs) must exist for the engine being used.

There are three ways to add "templated single-engine job" behavior to an engine:

* Templates can be specified for a given engine via the `updateEngine` mutation.
* Templates can be provided via a graphical UI in Veritone Developer's [Engine Configuration page](https://developer.veritone.com/engines/c0e55cde-340b-44d7-bb42-2e0d65e98255/config/details/testing-details).
* Templates can be bundled, as text files (`/var/reprocess_job.txt` and `/var/upload_job.txt`), into an engine build.

The best way to create a template is to start with an existing template, and modify it. Failing that, you can create a template _ab initio_ as follows:

1\. Start with a known-good `createJob` mutation that contains a tested/proven DAG (tasks and routes).

2\. Convert the body of the mutation to JSON. (Note that JSON requires comma separators between field:value pairs, whereas GraphQL does not. Also note that you should eliminate all GraphQL comments from the JSON. And keep the JSON itself free of JS comments.)

3\. Serialize the JSON to a string, so that (for example) all property names are enclosed in double-quotes.

4\. Convert passed-in parameters to `Handlebars.js` syntax. (See further discussion below.)

5\. Escape all double-quotes as `\"` and all newlines as `\n`.

When you're done, you'll have a string value that looks something like:

```pre
"{\n  \"target\":{\n    \"status\":\"downloaded\"\n  },\n  {{#if clusterId}} \"clusterId\":\"{{{clusterId}}}\", {{/if}}\n  {{#if notificationUri}} \"notificationUris\":[\"{{{notificationUri}}}\"], {{/if}}\n  \"tasks\":[\n    {\n      \"engineId\":\"9e611ad7-2d3b-48f6-a51b-0a1ba40fe255\",\n      \"payload\":{\n        \"url\":\"{{{UPLOAD_URL}}}\"\n      },\n      \"executionPreferences\":{\n        {{#if priority}} \"priority\":{{{priority}}} {{/if}}\n      },\n      \"ioFolders\":[\n        {\n          \"referenceId\":\"wsa-output\",\n          \"mode\":\"stream\",\n          \"type\":\"output\"\n        }\n      ]\n    },\n    {\n      \"engineId\":\"352556c7-de07-4d55-b33f-74b1cf237f25\",\n      \"executionPreferences\":{\n        {{#if priority}} \"priority\":{{{priority}}}, {{/if}}\n        \"parentCompleteBeforeStarting\":true\n      },\n      \"ioFolders\":[\n        {\n          \"referenceId\":\"pb-input\",\n          \"mode\":\"stream\",\n          \"type\":\"input\"\n        }\n      ]\n    },\n    {\n      \"engineId\":\"8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440\",\n      \"payload\":{\n        \"ffmpegTemplate\":\"audio\",\n        \"customFFMPEGProperties\":{\n          \"chunkSizeInSeconds\":{{#if chunkSizeInSeconds}} \"{{{chunkSizeInSeconds}}}\" {{else}} \"300\" {{/if}}\n        }\n      },\n      \"executionPreferences\":{\n        {{#if priority}} \"priority\":{{{priority}}}, {{/if}}\n        \"parentCompleteBeforeStarting\":true\n      },\n      \"ioFolders\":[\n        {\n          \"referenceId\":\"si-input\",\n          \"mode\":\"stream\",\n          \"type\":\"input\"\n        },\n        {\n          \"referenceId\":\"si-output\",\n          \"mode\":\"chunk\",\n          \"type\":\"output\"\n        }\n      ]\n    },\n    {\n      \"engineId\":\"{{{ENGINE_ID}}}\",\n      \"executionPreferences\":{\n        {{#if priority}} \"priority\":{{{priority}}}, {{/if}}\n        \"parentCompleteBeforeStarting\":true\n      },\n      \"ioFolders\":[\n        {\n          \"referenceId\":\"engine-input\",\n          \"mode\":\"chunk\",\n          \"type\":\"input\"\n        },\n        {\n          \"referenceId\":\"engine-output\",\n          \"mode\":\"chunk\",\n          \"type\":\"output\"\n        }\n      ]\n    }\n    ,\n    {\n      \"engineId\":\"8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3\",\n      \"executionPreferences\":{\n        {{#if priority}} \"priority\":{{{priority}}}, {{/if}}\n        \"parentCompleteBeforeStarting\":true\n      },\n      \"ioFolders\":[\n        {\n          \"referenceId\":\"ow-input\",\n          \"mode\":\"chunk\",\n          \"type\":\"input\"\n        }\n      ]\n    }\n  ],\n  \"routes\":[\n    {\n      \"parentIoFolderReferenceId\":\"wsa-output\",\n      \"childIoFolderReferenceId\":\"pb-input\"\n    },\n    {\n      \"parentIoFolderReferenceId\":\"wsa-output\",\n      \"childIoFolderReferenceId\":\"si-input\"\n    },\n    {\n      \"parentIoFolderReferenceId\":\"si-output\",\n      \"childIoFolderReferenceId\":\"engine-input\"\n    },\n    {\n      \"parentIoFolderReferenceId\":\"engine-output\",\n      \"childIoFolderReferenceId\":\"ow-input\"\n    }\n  ]\n}\n"
```

This string (actually, you will have _two_ strings: one for Upload-style jobs, and one for Reprocess-style jobs) is what you will pass as the `template` value(s) in `updateEngine`:

```graphql
mutation {
  updateEngine(
    input: {
      id:"c0e55cde-340b-44d7-bb42-2e0d65e98255"
      standaloneJobTemplates: [
        {
          type:Upload
          template:
"{\n  \"target\":{\n    \"status\":\"downloaded\"\n  },\n  {{#if clusterId}} \"clusterId\":\"{{{clusterId}}}\", {{/if}}\n  {{#if notificationUri}} \"notificationUris\":[\"{{{notificationUri}}}\"], {{/if}}\n  \"tasks\":[\n    {\n      \"engineId\":\"9e611ad7-2d3b-48f6-a51b-0a1ba40fe255\",\n      \"payload\":{\n        \"url\":\"{{{UPLOAD_URL}}}\"\n      },\n      \"executionPreferences\":{\n        {{#if priority}} \"priority\":{{{priority}}} {{/if}}\n      },\n      \"ioFolders\":[\n        {\n          \"referenceId\":\"wsa-output\",\n          \"mode\":\"stream\",\n          \"type\":\"output\"\n        }\n      ]\n    },\n    {\n      \"engineId\":\"352556c7-de07-4d55-b33f-74b1cf237f25\",\n      \"executionPreferences\":{\n        \"parentCompleteBeforeStarting\":true,\n        {{#if priority}} \"priority\":{{{priority}}} {{/if}}\n      },\n      \"ioFolders\":[\n        {\n          \"referenceId\":\"pb-input\",\n          \"mode\":\"stream\",\n          \"type\":\"input\"\n        }\n      ]\n    },\n    {\n      \"engineId\":\"8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440\",\n      \"payload\":{\n        \"ffmpegTemplate\":\"audio\",\n        \"customFFMPEGProperties\":{\n          \"chunkSizeInSeconds\":\"300\"\n        }\n      },\n      \"executionPreferences\":{\n        \"parentCompleteBeforeStarting\":true,\n        {{#if priority}} \"priority\":{{{priority}}} {{/if}}\n      },\n      \"ioFolders\":[\n        {\n          \"referenceId\":\"si-input\",\n          \"mode\":\"stream\",\n          \"type\":\"input\"\n        },\n        {\n          \"referenceId\":\"si-output\",\n          \"mode\":\"chunk\",\n          \"type\":\"output\"\n        }\n      ]\n    },\n    {\n      \"engineId\":\"{{{ENGINE_ID}}}\",\n      \"executionPreferences\":{\n        \"parentCompleteBeforeStarting\":true,\n        {{#if priority}} \"priority\":{{{priority}}} {{/if}}\n      },\n      \"ioFolders\":[\n        {\n          \"referenceId\":\"engine-input\",\n          \"mode\":\"chunk\",\n          \"type\":\"input\"\n        },\n        {\n          \"referenceId\":\"engine-output\",\n          \"mode\":\"chunk\",\n          \"type\":\"output\"\n        }\n      ]\n    },\n    {\n      \"engineId\":\"8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3\",\n      \"executionPreferences\":{\n        \"parentCompleteBeforeStarting\":true,\n        {{#if priority}} \"priority\":{{{priority}}} {{/if}}\n      },\n      \"ioFolders\":[\n        {\n          \"referenceId\":\"ow-input\",\n          \"mode\":\"chunk\",\n          \"type\":\"input\"\n        }\n      ]\n    }\n  ],\n  \"routes\":[\n    {\n      \"parentIoFolderReferenceId\":\"wsa-output\",\n      \"childIoFolderReferenceId\":\"pb-input\"\n    },\n    {\n      \"parentIoFolderReferenceId\":\"wsa-output\",\n      \"childIoFolderReferenceId\":\"si-input\"\n    },\n    {\n      \"parentIoFolderReferenceId\":\"si-output\",\n      \"childIoFolderReferenceId\":\"engine-input\"\n    },\n    {\n      \"parentIoFolderReferenceId\":\"engine-output\",\n      \"childIoFolderReferenceId\":\"ow-input\"\n    }\n  ]\n}\n"
          templateLanguage:Handlebars
        }
        {
          type:Reprocess
          template:
# from c0e55cde-340b-44d7-bb42-2e0d65e98255.Transcription-E-English-Global-V3.Reprocess.txt
"{\n  \"targetId\":\"{{{TARGET_ID}}}\",\n  {{#if notificationUri}} \"notificationUris\":[\"{{{notificationUri}}}\"], {{/if}}\n  {{#if clusterId}} \"clusterId\":\"{{{clusterId}}}\", {{/if}}\n  \"tasks\":[\n    {\n      \"engineId\":\"9e611ad7-2d3b-48f6-a51b-0a1ba40fe255\",\n      \"payload\":{\n        \"url\":\"{{{UPLOAD_URL}}}\"\n      },\n      \"executionPreferences\":{\n        {{#if priority}} \"priority\":{{{priority}}} {{/if}}\n      },\n      \"ioFolders\":[\n        {\n          \"referenceId\":\"wsa-output\",\n          \"mode\":\"stream\",\n          \"type\":\"output\"\n        }\n      ]\n    },\n    {\n      \"engineId\":\"8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440\",\n      \"payload\":{\n        \"ffmpegTemplate\":\"audio\",\n        \"customFFMPEGProperties\":{\n          \"chunkSizeInSeconds\":\"300\"\n        }\n      },\n      \"executionPreferences\":{\n        \"parentCompleteBeforeStarting\":true,\n        {{#if priority}} \"priority\":{{{priority}}} {{/if}}\n      },\n      \"ioFolders\":[\n        {\n          \"referenceId\":\"si-input\",\n          \"mode\":\"stream\",\n          \"type\":\"input\"\n        },\n        {\n          \"referenceId\":\"si-output\",\n          \"mode\":\"chunk\",\n          \"type\":\"output\"\n        }\n      ]\n    },\n    {\n      \"engineId\":\"{{{ENGINE_ID}}}\",\n      \"executionPreferences\":{\n        \"parentCompleteBeforeStarting\":true,\n        {{#if priority}} \"priority\":{{{priority}}} {{/if}}\n      },\n      \"ioFolders\":[\n        {\n          \"referenceId\":\"engine-input\",\n          \"mode\":\"chunk\",\n          \"type\":\"input\"\n        },\n        {\n          \"referenceId\":\"engine-output\",\n          \"mode\":\"chunk\",\n          \"type\":\"output\"\n        }\n      ]\n    },\n    {\n      \"engineId\":\"8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3\",\n      \"executionPreferences\":{\n        \"parentCompleteBeforeStarting\":true,\n        {{#if priority}} \"priority\":{{{priority}}} {{/if}}\n      },\n      \"ioFolders\":[\n        {\n          \"referenceId\":\"ow-input\",\n          \"mode\":\"chunk\",\n          \"type\":\"input\"\n        }\n      ]\n    }\n  ],\n  \"routes\":[\n    {\n      \"parentIoFolderReferenceId\":\"wsa-output\",\n      \"childIoFolderReferenceId\":\"si-input\"\n    },\n    {\n      \"parentIoFolderReferenceId\":\"si-output\",\n      \"childIoFolderReferenceId\":\"engine-input\"\n    },\n    {\n      \"parentIoFolderReferenceId\":\"engine-output\",\n      \"childIoFolderReferenceId\":\"ow-input\"\n    }\n  ]\n}\n"
          templateLanguage:Handlebars
        }
      ]
    }
  ) {
    id
  }
}
```

Note that `Upload` and `Reprocess` are predefined Enum values.

### Passed-in Parameters

Passed-in job parameters are substituted at runtime using `Handlebars.js`. This means any parameter that's passed in to `launchSingleEngineJob` will need to be properly mustache-escaped in the template using [Handlebars.js](https://handlebarsjs.com/) syntax.

Certain required parameters, such as `url` and `engineId`, must be formatted as MACRO_CASE, like this:

```pre
      "payload":{
        "url":"{{{UPLOAD_URL}}}"
      }
```

and:

```pre
 "engineId":"{{{ENGINE_ID}}}"
```

and, in the case of Reprocess jobs:

```pre
 "targetId":"{{{TARGET_ID}}}"
```

Note that triple-stache syntax needs to be used in order to avoid possible problems with inadvertent substitution of HTML entities in place of certain symbols (e.g. `&amp;` in place of `&`).

For _optional_ job- or task-level params, such as `priority`, use camel case, and null-test values before using them, like this:

 ```pre
"framesPerSecond":{{#if framesPerSecond}} "{{{framesPerSecond}}}" {{else}} "1" {{/if}}
 ```

As a best practice, you should plan on writing your template in such a way as to anticipate (i.e., support) the use of any and all possible optional parameters supported by the engine.

### A Complex Example

Suppose you have an engine that supports image/jpg processing, but you want to allow the user to supply input data either as a static image, or as a video.
 The DAG could be different, depending on whether the input is, in fact, an image (`ffmpegTemplate = “rawchunk”`) and uses the asset-creator engine (`"75fc943b-b5b0-4fe1-bcb6-9a7e1884257a"`), versus it being a video (`ffmpegTemplate = “frame”`) that needs the playback engine (`"352556c7-de07-4d55-b33f-74b1cf237f25"`).

To switch between these two settings, the client calling `launchSingleEngineJob` must define `inputiIsImage` (in `input.fields`) if the input is an image; and the user must _not_ define `inputIsImage` if the input is a video.

In addition, the template (for this example) needs to support an optional `minConfidence` value to pass into the engine.

The template (Reprocess version) would look like this, before escaping quotes and newlines:

```pre
{
   "target": {
     "status": "downloaded"
   },
   {{#if clusterId}} "clusterId": "{{{clusterId}}}", {{/if}}
   {{#if notificationUri}} "notificationUris": ["{{{notificationUri}}}"], {{/if}}
   "tasks": [
     {
       "engineId": "9e611ad7-2d3b-48f6-a51b-0a1ba40fe255",
       "payload": {
         "url": "{{{UPLOAD_URL}}}"
       },
       "executionPreferences": {
         {{#if priority}} "priority":{{{priority}}} {{/if}}
       },
       "ioFolders": [
         {
           "referenceId": "wsa-output",
           "mode": "stream",
           "type": "output"
         }
       ]
     },
     {
       {{#if inputIsImage}}
         "engineId": "75fc943b-b5b0-4fe1-bcb6-9a7e1884257a",
       {{else}}
         "engineId": "352556c7-de07-4d55-b33f-74b1cf237f25",
       {{/if}}
       "executionPreferences": {
         "parentCompleteBeforeStarting": true,
         {{#if priority}} "priority":{{{priority}}} {{/if}}
       },
       "ioFolders": [
         {
           "referenceId": "create-asset-input",
           "mode": "stream",
           "type": "input"
         }
       ]
     },
     {
       "engineId": "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440",
       "payload": {
         {{#if inputIsImage}}
           "ffmpegTemplate": "rawchunk"
         {{else}}
           "ffmpegTemplate": "frame",
           "customFFMPEGProperties": {
             "framesPerSecond": {{#if framesPerSecond}} "{{{framesPerSecond}}}" {{else}} "1" {{/if}}
           }
         {{/if}}
       },
       "executionPreferences": {
         "parentCompleteBeforeStarting": true,
         {{#if priority}} "priority":{{{priority}}} {{/if}}
       },
       "ioFolders": [
         {
           "referenceId": "si-input",
           "mode": "stream",
           "type": "input"
         },
         {
           "referenceId": "si-output",
           "mode": "chunk",
           "type": "output"
         }
       ]
     },
     {
       "engineId": "{{{ENGINE_ID}}}",
       "payload": {
         {{#if minConfidence}} "minConfidence":{{{minConfidence}}} {{/if}}
       },
       "executionPreferences": {
         "parentCompleteBeforeStarting": true,
         {{#if priority}} "priority":{{{priority}}} {{/if}}
       },
       "ioFolders": [
         {
           "referenceId": "engine-input",
           "mode": "chunk",
           "type": "input"
         },
         {
           "referenceId": "engine-output",
           "mode": "chunk",
           "type": "output"
         }
       ]
     },
     {
       "engineId": "8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3",
       "executionPreferences": {
         "parentCompleteBeforeStarting": true
         {{#if priority}}, "priority":{{{priority}}} {{/if}}
       },
       "ioFolders": [
         {
           "referenceId": "ow-input",
           "mode": "chunk",
           "type": "input"
         }
       ]
     }
   ],
   "routes": [
     {
       "parentIoFolderReferenceId": "wsa-output",
       "childIoFolderReferenceId": "create-asset-input"
     },
     {
       "parentIoFolderReferenceId": "wsa-output",
       "childIoFolderReferenceId": "si-input"
     },
     {
       "parentIoFolderReferenceId": "si-output",
       "childIoFolderReferenceId": "engine-input"
     },
     {
       "parentIoFolderReferenceId": "engine-output",
       "childIoFolderReferenceId": "ow-input"
     }
   ]
 }
```

A few things worth noting:

1\. Dynamic, data-driven adapter selection is achieved through the use of the following construction, which relies on `Handlebars.js` "helpers" syntax (for `if` and `else` blocks):

```pre
       {{#if inputIsImage}}
         "engineId": "75fc943b-b5b0-4fe1-bcb6-9a7e1884257a",
       {{else}}
         "engineId": "352556c7-de07-4d55-b33f-74b1cf237f25",
       {{/if}}
```

2\. The cognition engine can take a `minConfidence` parameter, thanks to:

```pre
       "payload": {
         {{#if minConfidence}} "minConfidence":{{{minConfidence}}} {{/if}}
       },

```

3\. You can supply a notification (callback) webhook, at runtime, by using the `notificationUris` feature of `createJob`, which is also available in `launchSingleEngineJob` if you implement support for it in your template, like this:

```pre
   {{#if notificationUri}} "notificationUris": ["{{{notificationUri}}}"], {{/if}}
```

In `launchSingleEngineJob`, you would pass your notification URI as a `fields` value:

```pre
fields: [
  { fieldName:"notificationUri", fieldValue:"https://mywebhook.com/endpoint" }
]
```

> In `createJob`, you can specify an _array_ of notification URIs. In `launchSingleEngineJob`, you could pass more than one URI, but you would need to have multiple `fieldName` fields defined for them in the template, such as `fieldName:"uri1"`, `fieldName:"uri2"`, etc.

4\. A `priority` value can be passed in a `fields` entry. (This value governs the execution priority of the job or task at runtime. It is a signed integer. Low values are high priority.) Due to the way this template is written, a single passed-in priority value will simply be applied at task level, to every task. You could easily alter this, however, to apply the priority only to one task.
