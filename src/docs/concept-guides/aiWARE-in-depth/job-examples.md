<style>
label {
        color: #fff;
    }
    
    .markdown-section code {
        border-radius: 2px;
        color: #882200;
        font-size: .8rem;
        margin: 0 2px;
        padding: 3px 5px;
        white-space: pre-wrap;
    }

    .collapse-accordion ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .collapse-accordion label {
        display: block;
        cursor: pointer;
        padding: 9px 30px;
        border: 1px solid #fff;
        border-bottom: none;
        background-color: #666;
        position: relative;
    }

    .collapse-accordion label:hover {
        background: #999;
    }

    .collapse-accordion label:after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        text-indent: -9999px;
        border-top: 1px solid #f2f2f2;
        border-left: 1px solid #f2f2f2;
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        text-decoration: none;
        color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transform: rotate(135deg);
        left: 10px;
        top: 50%;
        margin-top: -5px;
    }

    .collapse-accordion input[type="checkbox"]:checked+label:after {
        transform: rotate(-135deg);
        top: 20px;
    }

.collapse-accordion input[type="radio"]:checked+label:after {
        transform: rotate(-135deg);
        top: 20px;
    }

    .collapse-accordion label.last {
        border-bottom: 1px solid #fff;
    }

    .collapse-accordion ul ul li {
        padding: 10px;
        
    }


    .collapse-accordion input[type="checkBox"] {
        position: absolute;
        left: -9999px;
    }
.collapse-accordion input[type="radio"] {
        position: absolute;
        left: -9999px;
    }

    .collapse-accordion input[type="checkBox"]~ul {
        height: 0;
        transform: scaleY(0);
      transition: transform .2s ease-out;
    }
.collapse-accordion input[type="radio"]~ul {
        height: 0;
        transform: scaleY(0);
  transition: transform .5s ease-out;
    }

    .collapse-accordion input[type="checkBox"]:checked~ul {
        height: 100%;
        transform-origin: top;
        transition: transform .5s ease-out;
        transform: scaleY(1);
    }

.collapse-accordion input[type="radio"]:checked~ul {
        height: 100%;
        transform-origin: top;
        transition: transform .2s ease-out;
        transform: scaleY(1);
    }

    .collapse-accordion input[type="checkBox"]:checked+label {
        background:#88F;
        border-bottom: 1px solid #fff;
    }
.collapse-accordion input[type="radio"]:checked+label {
        background: red;
        border-bottom: 1px solid #fff;
    }

    .collapse-accordion input[type="checkbox"]:checked+label .collpaseText {
        display: block;
    }

.collapse-accordion input[type="radio"]:checked+label .collpaseText {
        display: block;
    }

    .collapse-accordion input[type="checkbox"]:checked+label .expandText {
        display: none;
    }

.collapse-accordion input[type="radio"]:checked+label .expandText {
        display: none;
    }

    .collpaseText {
        display: none;
    }

.info {
  margin-top: 50px;
color: #000;
  font-size: 24px;
}
.info span {
  color: red;
}
</style>

# Job Examples

Creating a long-form ("DAGful") `createJob` mutation is potentially somewhat tedious, since you need to supply configuration, task, payload, and routing information for the job, and that can be a lot of parameter values.
Also, it's not always obvious which adapter to use for which type of input. The examples shown on this page should help you get up to speed quickly. Feel free to adapt any of them to your needs.

<b>Tips</b>

* Be sure to substitute your actual cluster ID, `targetId` (TDO), input URL, etc. for the placeholder values in the examples.

* Refer to [Working with Jobs](quickstart/jobs/?id=working-with-jobs) for crucial information about tokens, clusters, notifications, and other topics.

* Check out [Adapters](/developer/engines/adapters/) for more information about how to create the _ingestion_ tasks in your job.

## Transcription from Video (.mp4)

In this scenario, we wish to obtain the text transcript (as VTN Standard output) of a video located an at online URL. The video is in `.mp4` format.

It's possible to split the input into five-minute chunks of audio. The way to do this is shown in the code. The code also shows how to create a TDO for the job on-the-fly, by declaring a `target` block instead of passing a `targetId` value.

<div class="collapse-accordion">
        <ul>
            <li>
                <input type="checkbox" id="list-item-1">
                <label for="list-item-1"><span class="expandText">Show code for Transcription from Video (.mp4)</span><span class="collpaseText">Hide code for Transcription from Video (.mp4)</span></label>
                <ul>
                    <li>
                    <p>Input: *.mp4 file at a publilc URL.</p><br/>
                    <code>
mutation createWSAJobV3JobDAGForNewTDO{
  createJob(input: {
    target: {
       startDateTime:1574311000 # <-- These time values are not critical to anything.
       stopDateTime: 1574315000
    }
    #targetId: "890661001" <-- If you know the TDO ID, you could use it here. Use targetId OR target{}, but not both.
    clusterId :"_YOUR_CLUSTER_ID"
    ##Tasks with IOFolders
    tasks: [
       {
         # webstream adapter
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
        # Chunk engine to split into audio chunks of 5min each
        engineId: "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440"  
        payload:{
          ffmpegTemplate: "audio"
          customFFMPEGProperties:{
            chunkSizeInSeconds: "300"
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
        # SM 
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
        # output writer for SM
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
    ##Routes : A route connect a parent output folder to a child input folder
    routes: [
      {  ## WSA--> PB
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
      {  ## Transcription --> output writer
        parentIoFolderReferenceId: "transcriptionOutputFolder"
        childIoFolderReferenceId: "owInputFolderFromTranscription"
        options: {}
      } 
    ]})  
    {
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
</code>
                    </li>                  
                </ul>
            </li>          
        </ul>
</div>

## Use MPEG Dash for processing of long videos

This example is a partial-flow example to show how the intake portion of a video job would need to differ in order to use MPEG Dash as the segmentation scheme. You can adapt this example to your actual cognition flow by using this ingestion DAG in your flow.

<div class="collapse-accordion">
        <ul>
            <li>
                <input type="checkbox" id="list-item-2">
                <label for="list-item-2"><span class="expandText">Show code for Using MPEG Dash</span><span class="collpaseText">Hide code for Using MPEG Dash</span></label>
                <ul>
                    <li>
                    <p>Input: *.mp4 file at a publilc URL.</p>
                    <p><b>Caution:</b> This is not a full cognition flow. It simply illustrates the intake strategy. Adapt this as the first part of your transcription or other flow.</p>
                    <code>
mutation createWSAMPEGDash{
  createJob(input: {
    target: {
      startDateTime:1574311000
      stopDateTime: 1574315000
    }
   # targetId: "890661001"
    clusterId :"_YOUR_CLUSTER_ID"   
    ##Tasks with IOFolders
    tasks: [
       {
         # webstream adapter
         engineId: "9e611ad7-2d3b-48f6-a51b-0a1ba40fe255"
         payload: {
          url: "https://vt-maxagg-test.s3.amazonaws.com/V3/redact/thomas1.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIUYE6VNCJLM7TZFQ%2F20200416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200416T054708Z&X-Amz-Expires=36000&X-Amz-SignedHeaders=host&X-Amz-Signature=81680455a41676d77b9a6976ddb0cc1c65a091407a876d1bddd5c10711dbf8f2"
           # url:"https://s3.amazonaws.com/src-veritone-tests/stage/20190505/0_40_Eric%20Knox%20BWC%20Video_40secs.mp4"
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
      		 parentCompleteBeforeStarting: false
        }
      }
            {
        # Playback engine to store mpeg-dash segments
        engineId: "29694232-a4f5-4622-a422-b48f206ca52a" 
        ioFolders: [
          {
            referenceId: "mpegDashInputFolder"
            mode: stream
            type: input
          }
        ]
        executionPreferences: {
      		 parentCompleteBeforeStarting: false
        }
      }
    ]  
    ##Routes : A route connect a parent output folder to a child input folder
    routes: [
      {  ## WSA--> PB
        parentIoFolderReferenceId: "wsaOutputFolder"
        childIoFolderReferenceId: "playbackInputFolder"
        options: {}
      },
      {  ## WSA --> chunkAudio
        parentIoFolderReferenceId: "wsaOutputFolder"
        childIoFolderReferenceId: "mpegDashInputFolder"
        options: {}
      } 
    ]  }) {
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
                    </code>
                     </li>                  
                </ul>
             </li>           
         </ul>
</div>
                  
## A 'library-train' job with Facebox

To run a training job, you need to:

* Set `mode:"library-train"` in your job's `payload`.

* Pass a `libraryId`.

* Pass a `libraryEngineModelId`, representing the [LibraryEngineModel](https://api.veritone.com/v3/graphqldocs/libraryenginemodel.doc.html) for your engine's learnings.

See also the [createLibraryEngineModel mutation](https://docs.veritone.com/#/apis/reference/mutation/?id=createlibraryenginemodel) and associated links at that URL. Also see the [How to Train a Cognitive Engine](https://docs.veritone.com/#/developer/engines/tutorial/engine-training-tutorial) tutorial.

<div class="collapse-accordion">
        <ul>
            <li>
                <input type="checkbox" id="list-item-21456">
                <label for="list-item-21456"><span class="expandText">Show code for Running a library-train Job</span><span class="collpaseText">Hide code for Running a library-train Job</span></label>
                <ul>
                    <li>
                    <p>Note that there is no "output" per se. This is a training job. The <b>libraryEngineModel</b> will be updated.</p><br/>
                    <code>
  createJob(input: { 
    clusterId :"_YOUR_CLUSTER_ID" # <-- Be sure to substitute your cluster ID
    tasks: [
       {
         engineId: "e62665c7-f855-4168-8aa3-668a7b0a50ea"
         payload: {
          mode:"library-train"
          libraryId:"743888a6-2275-4d32-8eba-e1fc7dd98798"
          libraryEngineModelId:"14811cf2-5d2b-4340-946f-6afcfe514d4e"
         }
      }
    ]
  }) {
    id
    tasks{
      records{
        id
        output
      }
    }
  }
}
                    </code>
                     </li>                  
                </ul>
             </li>           
         </ul>
</div>

## A 'library-run' job with Facebox

This shows how to create a job for an engine that requires a library. In essence, you need to pass a `libraryId` as well as a `libraryEngineModelId` in the payload, along with `mode: "library-run"`.

<div class="collapse-accordion">
        <ul>
            <li>
                <input type="checkbox" id="list-item-3">
                <label for="list-item-3"><span class="expandText">Show code for library-run job with Facebox</span><span class="collpaseText">Hide code for library-run job with Facebox</span></label>
                <ul>
                    <li>
                    <p>Input: *.mp4 file at a publilc URL.</p><br/>
                    <code>
mutation createFBJob {
  createJob(input: {
    # Pass a target block if you want to create a TDO on-the-fly. Otherwise pass a targetId. Use one or the other, not both.
    target: {
    	startDateTime: 1585782472
        stopDateTime : 1585785072
    }
    clusterId :"_YOUR_CLUSTER_ID"
    ##Tasks with IOFolders
    tasks: [
       {
         # WSA
         engineId: "9e611ad7-2d3b-48f6-a51b-0a1ba40fe255"
         payload: {
          url: "https://vt-maxagg-test.s3.amazonaws.com/V3/issue-1337/BradPitt_AngelinaJolie.mp4"
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
        # Chunk engine to split into frame (1 frame per second)
        engineId: "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440"  
        payload:{
           ffmpegTemplate: "frame"
           }
        ioFolders: [
        {
          referenceId: "chunkInputFolder"
          mode: stream
          type: input
        },
        {
          referenceId: "chunkOutputFolder"
          mode: chunk
          type: output
        }
        ],
       executionPreferences: {
      		 parentCompleteBeforeStarting: false
        }
      }
      {
        # Facebox
        engineId: "e62665c7-f855-4168-8aa3-668a7b0a50ea"
        payload: {
          mode: "library-run"
          libraryId:"743888a6-2275-4d32-8eba-e1fc7dd98798"
          libraryEngineModelId:"14811cf2-5d2b-4340-946f-6afcfe514d4e"
        }
        ioFolders: [
          {
            referenceId: "engineInputFolder"
            mode: chunk
            type: input
          },
         {
            referenceId: "engineOutputFolder"
            mode: chunk
            type: output
          }
        ]
      }
      {
        # output writer
        engineId: "8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3"  
        ioFolders: [
          {
            referenceId: "owInputFolder"
            mode: chunk
            type: input
          } 
        ]
      }
    ]
    ##Routes : A route connect a parent output folder to a child input folder
    routes: [
      {  ## WSA--> PB
        parentIoFolderReferenceId: "wsaOutputFolder"
        childIoFolderReferenceId: "playbackInputFolder"
        options: {}
      },
      {  ## WSA --> chunk
        parentIoFolderReferenceId: "wsaOutputFolder"
        childIoFolderReferenceId: "chunkInputFolder"
        options: {}
      }
      {  ## chunk  --> engine
        parentIoFolderReferenceId: "chunkOutputFolder"
        childIoFolderReferenceId: "engineInputFolder"
        options: {}
      }
      {  ## engine --> output writer
        parentIoFolderReferenceId: "engineOutputFolder"
        childIoFolderReferenceId: "owInputFolder"
        options: {}
      } 
    ]
  }) {
    targetId
    id
  }
}
                    </code>
                     </li>                  
                </ul>
             </li>           
         </ul>
</div>

## Running Facebox against a Single Image

This job assumes the engine's `libraryEngineModel` has already been trained, and now we want to pass the engine a single frame (a JPEG image) for analysis, to determine if any recognized faces are in the image.

<div class="collapse-accordion">
        <ul>
            <li>
                <input type="checkbox" id="list-item-4">
                <label for="list-item-4"><span class="expandText">Show code for Running Facebox against a Single Frame</span><span class="collpaseText">Hide code for Running Facebox against a Single Frame</span></label>
                <ul>
                    <li>
                    <p>Input: A JPEG file at a publilc URL.</p><br/>
                    <code>
mutation createFBJobFromFrame{
  createJob(input: {
    target: {
       startDateTime: 1585782472
       stopDateTime : 1585785072  
    }
    clusterId :"_YOUR_CLUSTER_ID"
    ##Tasks with IOFolders
    tasks: [
      {
        # Chunk engine to ingest frame as rawchunk
        engineId: "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440"  
        payload:{
          url: "https://vt-maxagg-test.s3.amazonaws.com/V3/images/scarlett1.jpeg"
          ffmpegTemplate: "rawchunk"
           }
        ioFolders: [
        {
          referenceId: "chunkOutputFolder"
          mode: chunk
          type: output
        }
        ],
       executionPreferences: {
      		 parentCompleteBeforeStarting: false
        }
      }
      {
        # FB 
        engineId: "e62665c7-f855-4168-8aa3-668a7b0a50ea"
        payload: {
          mode: "library-run"
          libraryId:"743888a6-2275-4d32-8eba-e1fc7dd98798"
          libraryEngineModelId:"14811cf2-5d2b-4340-946f-6afcfe514d4e"
        }
        ioFolders: [
          {
            referenceId: "engineInputFolder"
            mode: chunk
            type: input
          },
         {
            referenceId: "engineOutputFolder"
            mode: chunk
            type: output
          }
        ]
      }
      {
        # output writer
        engineId: "8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3"  
        ioFolders: [
          {
            referenceId: "owInputFolder"
            mode: chunk
            type: input
          } 
        ]
      }
    ]
    ##Routes : A route connect a parent output folder to a child input folder
    routes: [
      {  ## chunk  --> engine
        parentIoFolderReferenceId: "chunkOutputFolder"
        childIoFolderReferenceId: "engineInputFolder"
        options: {}
      }
      {  ## engine --> output writer
        parentIoFolderReferenceId: "engineOutputFolder"
        childIoFolderReferenceId: "owInputFolder"
        options: {}
      } 
    ]
  }) {
    targetId
    id
  }
}
                    </code>
                     </li>                  
                </ul>
             </li>           
         </ul>
</div>

## Translation Engine Example

Translation engines are chunk engines. Therefore, output from the Webstream Adapter (WSA) needs to be chunked by SI2 (StreamIngestor 2).
This example shows how to do it. The source text is English; it will be translated to French.

<div class="collapse-accordion">
        <ul>
            <li>
                <input type="checkbox" id="list-item-5">
                <label for="list-item-5"><span class="expandText">Show code for Running Translation on Text</span><span class="collpaseText">Hide code for Running Content Classification on Text</span></label>
                <ul>
                    <li>
                    <p>Input: A text file at a publilc URL.</p><br/>
                    <code>
mutation createTranslationJob{
  createJob(input: {
    # target: { startDateTime:1574311000, stopDateTime: 1574315000 }
    targetId: 1121185051    # comment this line if using without a TDO
    clusterId :"rt-1cdc1d6d-a500-467a-bc46-d3c5bf3d6901"
    tasks: [
       {
        # webstream adapter 
        engineId: "9e611ad7-2d3b-48f6-a51b-0a1ba40fe255"
        # payload: { url: "media URL" } 
        ioFolders: [
          { referenceId: "wsaOutputFolder", mode: stream, type: output }
        ],
        executionPreferences: { priority: -20 }
      }
      {
        # Chunk engine  
        engineId: "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440"  
        payload:{ ffmpegTemplate: "rawchunk" }
        ioFolders: [
          { referenceId: "chunkInputFolder", mode: stream, type: input },
          { referenceId: "chunkOutputFolder", mode: chunk, type: output }
        ],
        executionPreferences: { parentCompleteBeforeStarting: true, priority: -20 }
      }
      {
        # The translation engine 
        engineId: "1fc4d3d4-54ab-42d1-882c-cfc9df42f386"
        payload: { # uncomment the line below if using Amazon Translate V3
          # sourceLanguageCode: "en",
          target: "fr"
        }
        ioFolders: [
          { referenceId: "engineInputFolder", mode: chunk, type: input },
          { referenceId: "engineOutputFolder", mode: chunk, type: output }
        ],
        executionPreferences: {	parentCompleteBeforeStarting: true, priority: -20 }
      }
      {
        # output writer
        engineId: "8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3"  
        ioFolders: [
          { referenceId: "owInputFolder", mode: chunk, type: input }
        ],
        executionPreferences: {	parentCompleteBeforeStarting: true, priority: -20 }
      }
    ]
    routes: [
      {  ## WSA --> chunk
        parentIoFolderReferenceId: "wsaOutputFolder"
        childIoFolderReferenceId: "chunkInputFolder"
        options: {}
      }
      {  ## chunk --> Engine
        parentIoFolderReferenceId: "chunkOutputFolder"
        childIoFolderReferenceId: "engineInputFolder"
        options: {}
      }
      {  ## Engine --> output writer
        parentIoFolderReferenceId: "engineOutputFolder"
        childIoFolderReferenceId: "owInputFolder"
        options: {}
      } 
    ]
  }) {
    targetId
    id
  }
}
                    </code>
                     </li>                  
                </ul>
             </li>           
         </ul>
</div>

## Running Content Classification on Text

Text files are processed by chunk engines. The DAG looks like:

`WSA (Webstream Adapter) --> 
 SI2 (StreamIngestor 2) FFMPEG (ffmpegTemplate = "rawchunk") --> 
 ENGINE --> 
 OutputWriter`

<div class="collapse-accordion">
        <ul>
            <li>
                <input type="checkbox" id="list-item-5">
                <label for="list-item-5"><span class="expandText">Show code for Running Content Classification on Text</span><span class="collpaseText">Hide code for Running Content Classification on Text</span></label>
                <ul>
                    <li>
                    <p>Input: A text file at a publilc URL.</p><br/>
                    <code>
mutation createTextJob {
  createJob(input: {
    target: {  # A TDO will be created dynamically
       startDateTime:1574311000  # These timing values are dummy values, since the input is text.
       stopDateTime: 1574315000
    }
    clusterId :"YOUR CLUSTER" 
    ##Tasks with IOFolders
    tasks: [
       {
         # webstream adapter
         engineId: "9e611ad7-2d3b-48f6-a51b-0a1ba40fe255"
         payload: {
            url: "https://veritone-docs-prod.s3.amazonaws.com/test-data/text_analytics/cbc_news.txt"
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
        # Chunk engine to pass the stream output as one single rawchunk to the next tengine
        engineId: "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440"  
        payload:{
          ffmpegTemplate: "rawchunk"
          }
        ioFolders: [
        {
          referenceId: "chunkInputFolder"
          mode: stream
          type: input
        },
        {
          referenceId: "chunkOutputFolder"
          mode: chunk
          type: output
        }
        ],
       executionPreferences: {
      		 parentCompleteBeforeStarting: true
        }
      }
      {
        # Engine is Google Content Classification
        engineId: "374fab67-7726-4df1-b087-8878f1de206b"
        ioFolders: [
          {
            referenceId: "engineInputFolder"
            mode: chunk
            type: input
          },
         {
            referenceId: "engineOutputFolder"
            mode: chunk
            type: output
          }
        ]
      }
      {
        # output writer for SM
        engineId: "8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3"  
        ioFolders: [
          {
            referenceId: "owInputFolder"
            mode: chunk
            type: input
          } 
        ]
      }
    ]
    ##Routes : A route connect a parent output folder to a child input folder
    routes: [
      {  ## WSA --> chunkAudio
        parentIoFolderReferenceId: "wsaOutputFolder"
        childIoFolderReferenceId: "chunkInputFolder"
        options: {}
      }
      {  ## chunkAudio --> Engine
        parentIoFolderReferenceId: "chunkOutputFolder"
        childIoFolderReferenceId: "engineInputFolder"
        options: {}
      }
      {  ## Engine --> output writer
        parentIoFolderReferenceId: "engineOutputFolder"
        childIoFolderReferenceId: "owInputFolder"
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
                    </code>
                     </li>                  
                </ul>
             </li>           
         </ul>
</div>

## Object Detection Using Tagbox

This job processes a video (at a public URL) to obtain VTN Standard output that lists all the different kinds of objects identified in all frames of the video, with timestamps.

<div class="collapse-accordion">
        <ul>
            <li>
                <input type="checkbox" id="list-item-6">
                <label for="list-item-6"><span class="expandText">Show code for Object Detection Using Tagbox</span><span class="collpaseText">Hide code for Object Detection Using Tagbox</span></label>
                <ul>
                    <li>
                    <p>Input: *.mp4 file at a publilc URL.</p><br/>
                    <code>
  mutation objectDetectionJob {
       createJob(input: {
          target: {
            startDateTime : 1589333119
            stopDateTime : 1589334119
          }
          clusterId:"rt-242c1beb-653a-4299-bb33-2d8fb105d70b"
          tasks: [
            {
              engineId: "9e611ad7-2d3b-48f6-a51b-0a1ba40fe255"
              payload: {
                url:"https://vt-maxagg-test.s3.amazonaws.com/objects.mp4"
              },
              executionPreferences: {
                priority: -5
              },
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
              engineId: "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440"
              payload: {
                ffmpegTemplate: "frame"
              },
              executionPreferences: {
                parentCompleteBeforeStarting: true
                priority: -5
              }
              ioFolders: [
                {
                  referenceId: "chunkInputFolder"
                  mode: stream
                  type: input
                },
                {
                  referenceId: "chunkOutputFolder"
                  mode: chunk
                  type: output
                }
              ]
            },
            {
              # object detection engine
              engineId: "d66f553d-3cef-4c5a-9b66-3e551cc48b4b",
              executionPreferences: {
                maxEngines: 10
                parentCompleteBeforeStarting: true
                priority: -5
              },
              ioFolders: [
                {
                  referenceId: "engineInputFolder"
                  mode: chunk
                  type: input
                },
                {
                  referenceId: "engineOutputFolder"
                  mode: chunk
                  type: output
                }
              ]
            },
            {
              engineId: "8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3"  ## output writer 
              executionPreferences: {
                parentCompleteBeforeStarting: true
              },
              ioFolders: [
                {
                  referenceId: "owInputFolder"
                  mode: chunk
                  type: input
                }
              ]
            }
          ],
          routes: [
            {  ## WSA -> chunkAudio
              parentIoFolderReferenceId: "wsaOutputFolder"
              childIoFolderReferenceId: "playbackInputFolder"
              options: {}
            },
            {  ## WSA -> chunkAudio
              parentIoFolderReferenceId: "wsaOutputFolder"
              childIoFolderReferenceId: "chunkInputFolder"
              options: {}
            },
            {  ## chunkAudio --> Transcription
              parentIoFolderReferenceId: "chunkOutputFolder"
              childIoFolderReferenceId: "engineInputFolder"
              options: {}
            },
            {  ## Transcription --> output writer
              parentIoFolderReferenceId: "engineOutputFolder"
              childIoFolderReferenceId: "owInputFolder"
              options: {}
            }
          ]
        }) {
          id
          targetId
          status
        }
      }                  
                    </code>
                     </li>                  
                </ul>
             </li>           
         </ul>
</div>


<!--    ANOTEHR BLOCK 
<div class="collapse-accordion">
        <ul>
            <li>
                <input type="checkbox" id="list-item-7">
                <label for="list-item-7"><span class="expandText">Show code for Using MPEG Dash</span><span class="collpaseText">Hide code for Using MPEG Dash</span></label>
                <ul>
                    <li>
                    <p>Input: *.mp4 file at a publilc URL.</p><br/>
                    <code>Code goes here.</code>
                     </li>                  
                </ul>
             </li>           
         </ul>
</div>
-->

<!-- TEMPLATE 
## Another div

<div class="collapse-accordion">
        <ul>
            <li>
                <input type="checkbox" id="list-item-7">
                <label for="list-item-7"><span class="expandText">Show code for Using MPEG Dash</span><span class="collpaseText">Hide code for Using MPEG Dash</span></label>
                <ul>
                    <li>
                    <p>Input: *.mp4 file at a publilc URL.</p><br/>
                    <code>Code goes here.</code>
                     </li>                  
                </ul>
             </li>           
         </ul>
</div>
-->
