# Build your first Engine using Developer App

**APPROXIMATE READING TIME: 30 MINUTES**

## Before we begin  <!-- {docsify-ignore} -->

If you're new to Veritone aiWARE and Developer app, we recommend you read about aiWARE and Developer App using the below links.

[aiWARE Overview](https://docs.veritone.com/#/aiware/README)

[aiWARE Applications](https://docs.veritone.com/#/aiware/aiWARE-in-depth/apps/)

[Developer App Guide]()

## Building your own Engine <!-- {docsify-ignore} -->

In this guide, we will provide steps to build your first engine app using the [Veritone Developer](https://docs.veritone.com/#/developer/) App, a self-service environment through which registered developers get easy access to tools, documentation, APIs, adapters, cognitive engines, or data schemas to extend aiWARE for their use


## Expected Result <!-- {docsify-ignore} -->

After following this step-by-step tutorial, you will be successfully able to build your own Engine using the Developer App.

## Creating an Engine: Overview <!-- {docsify-ignore} -->

All Engines in aiWARE are packaged as executable [Docker](https://www.docker.com/) containers, which are exposed via webhook through a [Veritone's Engine Developer Toolkit]((https://hub.docker.com/r/veritone/aiware-engine-toolkit).). An engine webhook can pass data as a JSON object or in XML format, which makes them widely compatible with all the programming languages. The most common languages used for implementing engines are Go, Node.js, and Python.

For building a cognitive engine, you will need to choose what type of extraction capabilities you want to derive insights. For the sake of the demonstration, we are choosing a simple text-processing engine that extracts words from a file.

At a high level, there are four steps you need to carry out to build your first engine using developer app

- Step 1: Setting up your project — Initalizing the development environment.

- Step 2: Configuring the Engine   ‐ During this step, the engine will be configured using Veritone Developer App.

- Step 3: Testing  the Engine Locally .

- Step 4 ; Pushing the engine build to Veritone aiWARE

- Step 5:  Testing the Engine in aiWARE

  Okay. Ready to get started? Let's go.

## Step 1:Setting up the project <!-- {docsify-ignore} -->

- #### **A Developer Veritone Account**.

  Sign up [here](https://www.veritone.com/onboarding/#/signUp?type=automate?) using your email and username.

  ![](https://i.imgur.com/OU1ZnGs.png)



- #### **Docker installed on your (Mac, Linux, or virtualized Linux) development machine**


Docker Installation Instructions for Mac can be found [here](https://docs.docker.com/docker-for-mac/install/)

Steps for Installing Docker on Ubuntu can be found below:

1. Update the `apt` package index and install packages to allow `apt` to use a repository over HTTPS:

   ```
   sudo apt-get update

   sudo apt-get install \
       apt-transport-https \
       ca-certificates \
       curl \
       gnupg \
       lsb-release
   ```

2. Add Docker's official GPG key:

   ```
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

3. Use the following command to set up the **stable** repository.

   ```
   echo \
     "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

4. Update the `apt` package index, and install the *latest version* of Docker Engine and containerd, or go to the next step to install a specific version:

```
 sudo apt-get update
 sudo apt-get install docker-ce docker-ce-cli containerd.io
```

5.Verify that Docker Engine is installed correctly by running the `hello-world` image.

```
sudo docker run hello-world
```

This command downloads a test image and runs it in a container. On a successful install, it prints an informational message.

Sample Response after successful Docker Installation:
![](https://i.imgur.com/KDqUeVF.png)

### Cloning the Code Repository

1.Clone the V3-Engine Examples code [ repository ](https://github.com/veritone/V3-Engine-Examples), which contains sample code for the Veritone Keyword Extraction Engine.

```
git clone https://github.com/veritone/V3-Engine-Examples
```

Response:

```
Cloning into 'V3-Engine-Examples'...
remote: Enumerating objects: 192, done.
remote: Counting objects: 100% (192/192), done.
remote: Compressing objects: 100% (126/126), done.
remote: Total 192 (delta 75), reused 97 (delta 36), pack-reused 0
Receiving objects: 100% (192/192), 196.46 KiB | 4.01 MiB/s, done.
Resolving deltas: 100% (75/75), done.

```

2. Navigate to the directory

```
cd V3-Engine-Examples/
```

 The directory contains code for different types of cognitive engines as follows.

- A EXIF engine written in Go

- Sentiment Analysis using Python

- Hello World Keyword Extraction Engine using Javascript


In our case, we are building a simple test processing engine, so we will have a look at the files located in the  `javascript/hello-world ` folder. It contains the following files:

  ```
Dockerfile  index.js               manifest.json
README.md   keyword-extraction.js  package.json
  ```

| File                                                         | Action                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Dockerfile](https://github.com/veritone/V3-Engine-Examples/blob/master/javascript/hello-world/Dockerfile) | Contains all the commands that a user would call to assemble an engine docker image |
| [index.js](https://github.com/veritone/V3-Engine-Examples/blob/master/javascript/hello-world/index.js) | Executes javascript code in the keyword-extraction.js file and responds to HTTP requests ( `GET` or `POST`) |
| [keyword-extraction.js](https://github.com/veritone/V3-Engine-Examples/blob/master/javascript/hello-world/keyword-extraction.js) | Contains a simple vocabulary-extraction logic that automatically detects vocabulary words from unstructured text data received as input. |
| *****[manifest.json](https://github.com/veritone/V3-Engine-Examples/blob/master/javascript/hello-world/manifest.json) | Holds information about your engine (such as its engine id, concurrent request handling limits, supported input formats, and type of engine). Manifests are included with your build docker image. |
| [package.json]()                                             | Holds various metadata relevant to the project dependencies. Express web application framework and Multer node package is used as a middleware for handling multipart/form-data . |

*An engine id is a Veritone-assigned ID of your engine, which we will generate using Veritone UI in the next step.




## Step 2: Configuring the Engine <!-- {docsify-ignore} -->

1.Go to https://developer.veritone.com/ and sign in using your Veritone developer account credentials created earlier.

![](https://i.imgur.com/sXC75cN.png)

2. Click on the blue Create New button (upper left) and select engine from the dropdown list.
   ![](https://i.imgur.com/zDhOPPe.png)
3. Select the Engine Class and capability type. In our case, we are selecting a Text engine that has Keyword Extraction capabilities.

![](https://i.imgur.com/2bBcMKi.jpg)

4. Scroll down the page, select segment as **Engine Mode**.

![Click on the Segment-mode tile](https://docs.veritone.com/docs/developer/engines/tutorial/NewEngine-Mode.png)



The rationale for choosing a segment engine mode over a stream is its stateless queue operations. A segment engine does not have to keep track of data that came before or after it. In contrast, Stream Engines process data in streams and keeps track of the order in which it is processed.

Since the test processing engine does not have to keep track of words coming before or after it, a segment engine is the best use case here.
Note: Batch Engine Mode is also available as an engine mode, but it is deprecated. We will recommend using segment message or stream engine modes instead.

5.Select the supported input types. Since we are creating a test processing engine, all the text MIME types can be selected as input.
Select `text/csv``text/html`, `text/plain`, and `text/plain;charset=utf-8`.
![](https://i.imgur.com/MDTHQJa.png)

6. Leave custom fields for inputs blank for now. Read more about [Custom Fields](https://docs.veritone.com/#/developer/engines/custom-fields/) if you want to set a custom input field.

   ![](https://i.imgur.com/dxVMvTC.png)

7.Click the **NEXT** button to proceed to the Testing Detail page.

![](https://i.imgur.com/mXXnrv5.jpg)



Here you can provide a processing flow for your engine; they are not a mandatory field to specify. You can click **NEXT** and come back later to supply default job mutations after your engine is created.

> If you see a prompt of "Are you sure you want to continue?" click **CONTINUE ANYWAY**.

8.Click the **NEXT** button to select the deployment model for the engine

![Select deployment model](https://docs.veritone.com/docs/developer/engines/tutorial/NewEngine-deployment.png)

All the model types are self-explanatory, and for the test processing engine, we will select Network Isolated as it does not have to connect with the external web endpoints.

9. Click **NEXT** to go to the final step to specify the engine name and add a description.

   ![](https://i.imgur.com/9vOs6QJ.jpg)



10. Specify an optional icon, provide other information info about the engine and click on review. (See the below screenshot)

![](https://i.imgur.com/EwJsjWi.jpg)

> Specifying whether your engine requires a library is mandatory to move to the review step. A library-enabled engine typically identifies assets from the provided library and acts on an engine execution. Depending on the type of engine, you might require a specific library, but in our case, it is not a requirement.(Read more about [Library Engines](https://docs.veritone.com/#/developer/libraries/engines?id=library-enabled-engines))

12.Clicking the **REVIEW** button will bring up an **Engine Summary** dialog in which you can check the accuracy of the selections you've made thus far. Edit the selections before clicking on the **CREATE ENGINE PROFILE** button as some of the variables cannot be changed after creation.

![](https://i.imgur.com/58FFdGB.jpg)



##

13. On successful creation, clicking on the **CREATE ENGINE PROFILE**  will redirect you to the **Builds** overview page (which would have three tabs: **BUILDS** **TASKS** and **LOGS**). *Note that your engine's ID is shown near the top of the page, under the engine name.*
    Now you can generate a `manifest.json` file for creating docker builds and testing your engine  by clicking **GENERATE MANIFEST**



1. A **Manifest** dialog will appear, containing the text of your `manifest.json` file.

![](https://i.imgur.com/d75JzNI.jpg)



15.Copy the contents from the `manifest.json` file into the `V3-Engine-Examples/javascript/hello-world/manifest.json`  file of the development machine. Delete the old manifest configuration and add info to the new manifest contents if necessary.



![](https://i.imgur.com/xXN75JN.jpg)

.

## Step 3: Test your engine Locally <!-- {docsify-ignore} -->

This step assumes that you have already created a deployable engine build. The deployable build will be tested locally using Veritone's Engine Developer's Toolkit **test mode**.

To fire up a container in test mode.

1.Open a terminal and run the following command:

```bash
docker run -e "VERITONE_TESTMODE=true"  -p 9090:9090 -p 8080:8080 --name hello-world --rm -it hello-world
```

This will fire up the 'hello-world` container in *test mode*, exposing ports 9090 and 8080 for WebHooks and Test Console App.

> `--rm` tag is added in the [run](https://docs.docker.com/engine/reference/commandline/run/) command to remove the container when it exits. This mitigates the  `container is already running` error when you re rerun it.

2.If your engine launched normally, you should see a console message something like this:

```pre
2021/06/03 15:08:23 Veritone Engine Toolkit [linux/amd64] 0.0.0:HEAD:bc2cfa3dc1a5e8e9f9a68ed62ccec3123182a82a, built on 2021-06-01_19:04:52 (1622574327)
2021/06/03 15:08:23 PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
2021/06/03 15:08:23 HOSTNAME=fb3353bdfef7
2021/06/03 15:08:23 TERM=xterm
2021/06/03 15:08:23 VERITONE_TESTMODE=true
2021/06/03 15:08:23 VERITONE_WEBHOOK_READY=http://0.0.0.0:8080/ready
2021/06/03 15:08:23 VERITONE_WEBHOOK_PROCESS=http://0.0.0.0:8080/process
2021/06/03 15:08:23 HOME=/root
time="2021-06-03T15:08:23Z" level=debug msg="EI [EI:71eaaa5a-015e-4d71-bf8b-baf805601b83] engine: running"
time="2021-06-03T15:08:23Z" level=debug msg="EI [EI:71eaaa5a-015e-4d71-bf8b-baf805601b83] WARNING: Test mode (remove VERITONE_TESTMODE before putting into production)"
time="2021-06-03T15:08:23Z" level=debug msg="EI [EI:71eaaa5a-015e-4d71-bf8b-baf805601b83] running subprocess for testing..."
no push IP configured ... not pushing to pushgatewway
time="2021-06-03T15:08:23Z" level=debug msg="EI [EI:71eaaa5a-015e-4d71-bf8b-baf805601b83] running test console..."

        The Engine Toolkit Test Console is now running.

        Go to: http://localhost:9090/
Running test mode on port %s9090

```

3.Open a web browser on your development machine and go to http://localhost:9090/. You should see the **Veritone Engine Toolkit Test Console** page:

![Test console home page](https://docs.veritone.com/docs/developer/engines/tutorial/TestConsole-1.png)

Scroll down the page to "Manifest file." You should see a green **LOOKS GOOD** badge:

![Test console manifest badge](https://docs.veritone.com/docs/developer/engines/tutorial/TestConsole-2.png)

> If the badge is red and contains a failure notice, re-build your engine and run it again in test mode.

4.If you scroll down further in the test console, you will see a **Process webhook test** subheading; this is where you test the engine for results.
![Test Console form elements](https://docs.veritone.com/docs/developer/engines/tutorial/TestConsole-3.png)

#### How it Works:

A **Chunk file** File-picker is used to specify a test file for input. For MIME type enter a supported MIME type by your engine.

The various other form fields (`startOffsetMS,` `width,` `height,` etc.) apply only to visual media, so our test processing engine code will ignore these fields.

To get the results, click on the green **Submit request** button to cause the `engine` driver to hit our `/process` webhook with the test-mode data chunk we've configured.

![](https://i.imgur.com/x1fK5mD.png)

The output from the engine code has extracted "vocabulary words" from (`manifest.json`) and captured them in the appropriate output format as results.
(NOTE: The Engine output in the above screenshot has been edited for length.)

## Step 4: Push your engine build to Veritone  <!-- {docsify-ignore} -->

1.Log in to [Veritone](https://developer.veritone.com/).Developer App

2. Click the **ENGINES** link in the This should cause the main content area of the page to refresh and show your Hello World engine (along with any other engines you've onboarded): Your engine will show engine state inactive since it is not deployed

Screenshot -pushing engine



3. Click on your engine's name to reveal the Builds page. If you've never uploaded any builds, the page will show **Create a New Build** near the top, with instructions shown underneath that heading:

screenshot build the engine

If you **have** uploaded builds before, you will see a list of them, along with status information for each one, similar to this:



\4. Now Create a New Build specifying the docker image url for your image ours is  hello world so the path would be

```bash
docker.veritone.com/hello-world
```



5.Once you provide the image url and click on create build option you should see approved status for your engine build

screenshot :approved
6.Now click on deploy on the right and you will see the status Deployed in few minutes
screenshot deployed

Note  If an abnormal status is showing, use the menu control at the right edge of the list item to expose (and select) the **Download Build Report** command. (The Build Report is a JSON file that will contain clues as to what's wrong with the build.)

screenshot :build report for errors



## Step 5: Test your engine in aiWARE  <!-- {docsify-ignore} -->

 Now that you've onboarded an engine (and set its status to DEPLOYED), you can test the engine in a live Job, in aiWARE.

One of the easiest ways to do this is, of course, to use the [GraphQL Playground](https://api.veritone.com/v3/graphq) web IDE.

1. Log in to [Veritone Developer App]((https://developer.veritone.com/)).

2. Navigate to the [GraphQL Sandbox IDE](https://api.veritone.com/v3/graphql).

3. In the GraphQL Sandbox, create — and then execute — a query like the following, using *your* engine's ID:

```graphql
query myEngine{
  engine(id:"386e022f-edd1-46ec-b1cc-84d203a37250"){
    builds {
      records {
        id
        status
      }
    }
    name
    state
    ownerOrganizationId
    isPublic
    manifest
    mode
    outputFormats
    supportedInputFormats
    supportedSourceTypes
  }
}
```

This query will show you the status of each build of your engine. If one of your builds is shown as `"status": "deployed"`, that specific build is the one that will be invoked when you try to run a job using your engine.

Response:

```
{
  "data": {
    "engine": {
      "builds": {
        "records": [
          {
            "id": "2c8ac7d7-cf3c-4a65-8a2d-d41d09cdc00f",
            "status": "deployed"
          }
        ]
      },
      "name": "Keyword Extraction--Chunk-V3",
      "state": "active",
      "ownerOrganizationId": "36267",
      "isPublic": false,
      "manifest": {
        "engineMode": "chunk",
        "supportedInputTypes": [
          "text/csv",
          "text/html",
          "text/plain",
          "text/plain; charset=utf-8"
        ]
      },
      "mode": "Chunk",
      "outputFormats": null,
      "supportedInputFormats": null,
      "supportedSourceTypes": null
    }
  }
}
```

Screenshot: graphql



4.To test the engine, run a GraphQL mutation that looks like this (being sure to substitute your engine's ID in the appropriate place):
The mutation has four tasks: an ingestion task involving the Veritone Webstream Adapter, a chunking task (in case the data is large enough to need chunking), our cognition engine, and Output Writer (a Veritone engine that aggregates JSON results).

```graphql
mutation createVocabExtractionJob{
  createJob(input: {
    target: { startDateTime:1574311000, stopDateTime: 1574315000 }
    # targetId: 1121185051    # comment this line if using without a TDO
    clusterId :"rt-1cdc1d6d-a500-467a-bc46-d3c5bf3d6901"
    tasks: [
       {
        # webstream adapter (WSA)
        engineId: "9e611ad7-2d3b-48f6-a51b-0a1ba40fe255"
        payload: { url: "http://se.cs.depaul.edu/Java/Chapter04/Lincoln.txt" }
        ioFolders: [
          { referenceId: "wsaOutputFolder", mode: stream, type: output }
        ],
        executionPreferences: { priority: -20000 }
      }
      {
        # data-chunking engine  
        engineId: "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440"  
        payload:{ ffmpegTemplate: "rawchunk" }
        ioFolders: [
          { referenceId: "chunkInputFolder", mode: stream, type: input },
          { referenceId: "chunkOutputFolder", mode: chunk, type: output }
        ],
        executionPreferences: { parentCompleteBeforeStarting: true, priority: -20000 }
      }
      {
        # The hello-world engine -- PUT YOUR ENGINE'S ID HERE:
        engineId: "60e9e757-9638-44c9-bb48-67c65332a70f"
        ioFolders: [
          { referenceId: "engineInputFolder", mode: chunk, type: input },
          { referenceId: "engineOutputFolder", mode: chunk, type: output }
        ],
        executionPreferences: {    parentCompleteBeforeStarting: true, priority: -20000 }
      }
      {
        # output writer
        engineId: "8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3"  
        ioFolders: [
          { referenceId: "owInputFolder", mode: chunk, type: input }
        ],
        executionPreferences: {    parentCompleteBeforeStarting: true, priority: -20000 }
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
```

Sample Response:

```json
{
  "data": {
    "createJob": {
      "targetId": "1610398547",
      "id": "21072706_NM714cPLpl"
    }
  }
}
```

The `id` of `"21072706_NM714cPLplh"` is the Job ID. The `targetId` is the ID of the TDO (Temporal Data Object) associated with this job.

5.To determine the job's status, go back to developer app -> engines and check tasks you should see the job status as queued over time  this would change and task would become from `queued` to `running` to `complete` (or `failed`, if something went wrong).

Screenshot:Jobs in the task menu

## Final Result <!-- {docsify-ignore} -->

When the job finishes (with a `status` of `complete`), run the following query to obtain the engine's results (but again, substitute the correct `jobId`):

```graphql
query getEngineOutput {
  engineResults(jobId:"21072706_NM714cPLpl") {
    records {
      tdoId
      engineId
      startOffsetMs
      stopOffsetMs
      jsondata
      assetId
      userEdited
    }
  }
}
```

For our Hello World engine, results will typically look similar to this:

```json
{
   "taskId": "21072706_NM714cPLpl",
   "generatedDateUTC": "0001-01-01T00:00:00Z",
   "validationContracts": [
      "keyword"
   ],
   "object": [
      {
         "label": "the",
         "type": "keyword"
      },
      {
         "label": "Gettysburg",
         "type": "keyword"
      },
      {
         "label": "Address",
         "type": "keyword"
      },
      {
         "label": "Fourscore",
         "type": "keyword"
      },
      {
         "label": "and",
         "type": "keyword"
      },
      {
         "label": "seven",
         "type": "keyword"
      },
      {
         "label": "years",
         "type": "keyword"
      },
      {
         "label": "ago",
         "type": "keyword"
      }
   ]
}
```

(NOTE: The keyword-object array in this JSON fragment has been edited for length.)

## Next Steps <!-- {docsify-ignore} -->

The developer app also provides access to  many more aiWARE resources that enable users to organize, manage, search, analyze, and extend their cognitively enriched content. Learn more about them [here](https://docs.veritone.com/#/aiware/aiWARE-in-depth/apps/)

Also know

- [How to build an adapter using developer app]()
- [How to build a schema using developer app]()
- [How to build an app using developer app ]()
