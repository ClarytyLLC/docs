# Training an Engine

**APPROXIMATE READING TIME: 14 MINUTES**

>**Tip** Before getting started, we recommend reading about [how to quickly get started with aiWARE](/getting-started/quickstart/) and get familiar with our [cognitive engines](/cognitive-technology/). We recommend that you take a look at the [GraphQL Sandbox](https://api.veritone.com/v3/graphiql) and the Veritone's [Facebox](https://docs.veritone.com/#/developer/machine-box/boxes/facebox-overview) technology. We will use these to carry out face recognition. 

## Engines <!-- {docsify-ignore} -->

We must often train Cognitive engines to recognize features of interest. This training usually involves showing the engine various representative examples of the particular kinds of objects you want the engine to detect. We will run the engine in a special "training mode", and submitting exemplars to it, from which it can learn. The engine captures its learnings in a state file, which is later loaded by the engine when it is analyzing audio, video, or other data it may never have seen before.

In this tutorial, we will learn how to train an engine. We will discuss how we can train a face detection engine in aiWARE to recognize specific people. 

This is going to be a lot easier than it seems. We will use GraphQL mutations and queries to perform the following steps and train an engine:

- Create a library
- Create an entity in our library
- Add learnable assets to the entity
- Publish the Library
- Poll status of the training tasks

> For this tutorial, we shall use a face detection engine to analyze still images (rather than video). Note that the training principles and API methods that apply to still images also apply to audio and video engine training (and many other training scenarios).



### aiWARE Facial Detection

Veritone's aiWARE platform includes more than a dozen face detection engines, which vary in the available configuration options and other characteristics. The engine **Face Recognition - I - V2F** with ID `dcef5300-5cc1-4fe3-bd8f-5c4d3a09b281`  is a general-purpose face detection engine that is very easy to use "out of the box". It uses Veritone's [Facebox](https://docs.veritone.com/#/developer/machine-box/boxes/facebox-overview) technology to perform face recognition. 

> You can easily run Facebox locally or bundle a licensed version of it into your own standalone (non-aiWARE) application. To learn more about using Facebox offline, see our tutorial called [Teaching Facebox](https://docs.veritone.com/#/developer/machine-box/boxes/teaching-facebox).

This tutorial assumes that you will use the online (aiWARE-deployed) version of the engine. We will interact with aiWARE through the online GraphQL Sandbox IDE.

You must have a (free) Veritone system [login](https://www.veritone.com/onboarding/#/signUp) to complete this tutorial. 



## Expected Result <!-- {docsify-ignore} -->

We are going to train an engine to recognize Yoko Ono. At the end of this tutorial, we would have an engine that can analyze an image and determine if Yoko Ono appears in the image.

The engine should be able to take images, perform facial recognition, return a JSON with potential hits and associated confidence value. 

## Steps To Reproduce <!-- {docsify-ignore} -->

### Create a library

After you login into the Veritone application, go to [the GraphQL Sandbox](https://api.veritone.com/v3/graphiql) and run the following mutation:

```graphql
mutation CreateLibrary {
  createLibrary(input: {name: "Rock Stars", libraryTypeId: "people"}) {
    id
  }
}
```

This creates an empty Library object named "Rock Stars" in your organization and returns a library Id. 

```json
{
  "data": {
    "createLibrary": {
      "id": "a712a1f5-6fc0-4f09-b4fe-08fc39d1daa3"
    }
  }
}
```

Ensure you make a note of this `id`, as we will be using this in our next mutations. This empty library will act as a repository for the images on which we will perform facial recognition.

?> If you get authentication errors, then either your login has expired or you are not logged into a dev or stage environment. Please log in to [https://www.veritone.com](https://www.veritone.com) and then use the IDE at [https://api.veritone.com/v3/graphql](https://api.veritone.com/v3/graphiql).



### Create an entity in our library

In aiWARE, an Entity object puts together the various exemplars that define a detectable target. For example, for our engine to recognize Yoko Ono we will create an Entity called "Yoko". We will then assign multiple images of Yoko Ono to the entity. 

Let's first start by creating an entity in our library by running this mutation. We will use the `libraryId` that was returned in Step 1 to create the entity in the library:

```graphql
mutation createEntity {
  createEntity(input: {
    libraryId: "a712a1f5-6fc0-4f09-b4fe-08fc39d1daa3",
    name: "Yoko"}) {
    id
  }
}
```

This mutation, likewise, will return an `entityId` (which we'll need for the _next_ step).

```json
{
  "data": {
    "createEntity": {
      "id": "b3df8d84-a1ab-4a5e-842c-ce9556f0a8e8"
    }
  }
}
```

Next, we will add learnable assets to the entity.

### Add exemplar images to the entity

We will add exemplar images to the entity and use that to train our engine. Let's start by adding an image that exists online at https://i.pinimg.com/originals/a0/cc/e0/a0cce07f699ef0cd36cba57ce4cd9c51.jpg to the "Yoko" entity. The image looks like this:

![Yoko](images\yoko-1.png)

Run this mutation to add the image to our entity:

```graphql
mutation createEntityIdentifier {
  createEntityIdentifier(input: {
    entityId:"b3df8d84-a1ab-4a5e-842c-ce9556f0a8e8",
    identifierTypeId: "face",
    contentType:"image/jpeg",
    storeReference:true,
    url:"https://i.pinimg.com/originals/a0/cc/e0/a0cce07f699ef0cd36cba57ce4cd9c51.jpg"
  }) {
    id
  }
}
```

> You must see the `storeReference` flag to `true` to allow specifying images by reference rather than by value. If the value is false, then you must POST the mutation with a file upload - something we can't do in the GraphQL Sandbox. However, you can do this mode if you are using cURL, PostMan, or a custom code.



It is recommended to have more than one exemplar in your entity collection to train the engine. We can add as many images by simply running the above mutation with a new `url` value each time. Optionally, you can also use the *Library > Browse to Upload* button and upload the images directly.

![](images\EntityView.png)





### Publish the library

aiWARE is set up such that when you publish a library, all engines that can be trained using the library are automatically assigned training tasks targeting the library. 

> To know how you can configure the training process, see [Training Library-Enabled Engines](/developer/libraries/training?id=training-library-enabled-engines).



To publish your library, and start training of all applicable engines, run the following mutation (using our `libraryId` from Step 1):

```graphql
mutation publishLibrary {
  publishLibrary(id: "a712a1f5-6fc0-4f09-b4fe-08fc39d1daa3") {
    name
    entities {
      records {
        name
        id
        identifiers {
          records {
            url
          }
        }
      }
    }
  }
}
```

aiWARE publishes the engine, assigns training tasks to all "trainable" engines, automatically queues these tasks, and runs them in the background. This mutation creates (and/or updates) `engineModel` objects containing the engines' learnings as shown in the below JSON:

```
{
  "data": {
    "publishLibrary": {
      "name": "Rock Stars",
      "entities": {
        "records": [
          {
            "name": "Yoko",
            "id": "b3df8d84-a1ab-4a5e-842c-ce9556f0a8e8",
            "identifiers": {
              "records": [
                {
                  "url": "https://prod-veritone-library.s3.amazonaws.com/35351/entity-identifier/2021/5/3/a712a1f5-6fc0-4f09-b4fe-08fc39d1daa3/a4300d81-e3c1-42e2-bf4d-249ad069aa69.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQMR5VATUHU3MEGOA%2F20210623%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210623T153814Z&X-Amz-Expires=10800&X-Amz-Signature=483d45c91915d15201995155df21b59fd3b3c1bf3970f8434f74cae63edfcd80&X-Amz-SignedHeaders=host"
                },
                {
                  "url": "https://prod-veritone-library.s3.amazonaws.com/35351/entity-identifier/2021/5/3/a712a1f5-6fc0-4f09-b4fe-08fc39d1daa3/ec87bfd5-04b1-4180-b2a6-55f364dd9dfe.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQMR5VATUHU3MEGOA%2F20210623%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210623T153814Z&X-Amz-Expires=10800&X-Amz-Signature=44de9810862c8b97498f068a2895de005fa253bec4e50863a841ee1420817b62&X-Amz-SignedHeaders=host"
                },
                {
                  "url": "https://i.pinimg.com/originals/a0/cc/e0/a0cce07f699ef0cd36cba57ce4cd9c51.jpg"
                }
              ]
            }
          }
        ]
      }
    }
  }
}
```



### Poll status of the training tasks

We will poll the training tasks, created when you publish the engine, and know their latest status. We will use the `libraryid` to know the status of the various `engineModel` objects created for the training.

```graphql
query GetLibraryInfo {
  library(id:"a712a1f5-6fc0-4f09-b4fe-08fc39d1daa3") {
    engineModels {
      records {
        id
        trainStatus
        engine  {
          name
          id
        }
      }
    }
  }
}
```



This returns a response such as:

```
{
  "data": {
    "library": {
      "engineModels": {
        "records": [
          {
            "id": "0aa07939-9fab-4556-a01c-272aea0cb41c",
            "trainStatus": "complete",
            "engine": {
              "name": "Facial Detection-Veritone Inc-Chunk-Facebox-V3",
              "id": "ed949d52-af0f-4300-bef1-324adfa4c129"
            }
          },
          {
            "id": "b3665799-caaa-46b9-8a8c-a65e69d46e7e",
            "trainStatus": "complete",
            "engine": {
              "name": "Face Recognition - A V3",
              "id": "e62665c7-f855-4168-8aa3-668a7b0a50ea"
            }
          },
          {
            "id": "bca08e98-7eb4-4c75-b6f8-a305cac6582f",
            "trainStatus": "complete",
            "engine": {
              "name": "Amazon Rekognition - Face Recognition (USE) V3",
              "id": "df6e189f-8947-4c73-a30b-f786defc60e8"
            }
          },
          {
            "id": "f37433a4-9c82-4aaa-b66c-9cfd8134e337",
            "trainStatus": "complete",
            "engine": {
              "name": "Face Similarity - A V3",
              "id": "ab682a42-ffdb-40cd-a8f7-432905f0a5a1"
            }
          }
        ]
      }
    }
  }
}
```



> You can keep running the query the `trainStatus` field for all engines is `"complete"`. You must not run a job on a trained engine if the status is not yet shown as `"complete"`. The time taken to complete is different for each engine.

Each engine has a training record. All the engines can be trained using JPEG images. If you recall, in Step 3 we added assets (*EntityIdentifiers*) having `contentType:"image/jpeg"`.

### Create a job to use the engine

Now that we have trained the engine, let us select a trained engine (from the previous step) and run a job using it. We will perform this using GraphQL Sandbox IDE. 

Let's say we want to analyze an image from the web, such as the one below, to determine whether Yoko Ono appears in the image.

![Images](images\grammys.png)



We will use the engine "Face Recognition - A V3" (ID:`e62665c7-f855-4168-8aa3-668a7b0a50ea`) to perform this analysis. We will try and detect if Yoko is present by asking the engine to use the learnings associated with a `libraryEngineModelId` of `b3665799-caaa-46b9-8a8c-a65e69d46e7e`. This information is in one of the records shown in the data from Step 5. Note that the point of _training_ is to capture learnings in a file. We will then call that file to help analyze images that our engine has never seen before. 

Next, we will start a job using our Face Recognition engine. The job will invoke the library that the engine requires using the payload option of `mode: "library-run"`. We'll pass it to the appropriate `libraryId` and `libraryEngineModelId`.

Here's our Job:

```graphql
mutation createJob{
  createJob(input: {
    target:{
      startDateTime:1548432520,
      stopDateTime:1548436341,
      name:"Grammys pic by Gruen"
    },
    tasks: [{
         engineId:"b3665799-caaa-46b9-8a8c-a65e69d46e7e",
         payload:{
             url: "https://www.morrisonhotelgallery.com/images/big/R-361_J_Y_Friends_Grammys1975_Gruen.jpg"
         }
    },{
      engineId: "e62665c7-f855-4168-8aa3-668a7b0a50ea",
      payload:{
        mode:"library-run",
        libraryId: "b370ecab-88c0-4e2b-ae9c-7739a7ed16c7",
        libraryEngineModelId:"2c3a1855-7a29-457b-b8cc-3e4a869a130e"  
      }
    }
    ]
  }) {
    id
    targetId
  }
}
```



Note that by using `target` block, instead of a `targetId`, we allow aiWARE to create a TDO (Temporal Data Object) for this job on the fly. In this case, we do not need to pass a TDO to the job and will use the one created by aiWARE.

The first task, which involves the JPEG payload, uses a Webstream adapter to process the never-seen-before image. This process associates the image with a TDO (created dynamically for us), and as a result, the image will appear as a first-class media object in the [Veritone CMS](https://cms.veritone.com). The second task uses our Face Recognition engine. Note the `payload` fields. All 3 fields are _required_.

### Final Result

When we run the above mutation, we get a Job ID such as `"19104217_A517gxCHlk"` that we can use to poll the job and get the results. 

```graphql
query PollJob {
  job(id: "19104217_A517gxCHlk") {
    status
    targetId
    tasks {
      count
      records {
        status
        engine {name}
        taskOutput
        startedDateTime
        completedDateTime
      }
    }
  }
  engineResults(jobId: "19104217_A517gxCHlk") {
    records {
      assetId
      tdoId
      jsondata
    }
  }
}
```



In this query, we are polling _and_ requesting results in one query. The `engineResults` section is empty unless the job is complete. Once the job is complete, the section includes the results. 

The JSON that is returned by the job contains `jsondata` that (in turn) holds an array of potential hits, each with an associated confidence value. The job detects every face in the image and gives them a confidence value. For faces that match Yoko Ono, we get a high confidence value as well as an associated `entityId`. For example:

```json
{
  "startTimeMs": 0,
  "stopTimeMs": 0,
  "entityId": "7c7b08e6-6b72-48af-b768-043f023e15cc",
  "libraryId": "b370ecab-88c0-4e2b-ae9c-7739a7ed16c7",
  "object": {
    "type": "face",
    "entityId": "7c7b08e6-6b72-48af-b768-043f023e15cc",
    "libraryId": "b370ecab-88c0-4e2b-ae9c-7739a7ed16c7",
    "confidence": 0.8070940918637284,
    "boundingPoly": [
      {
        "x": 0.5814843152257078,
        "y": 0.2336734693877551
      },
      {
        "x": 0.6381025248661056,
        "y": 0.2336734693877551
      },
      {
        "x": 0.6381025248661056,
        "y": 0.31020408163265306
      },
      {
        "x": 0.5814843152257078,
        "y": 0.31020408163265306
      }
    ],
    "vendor": {
      "facebox": {}
    },
    "uri": "https://api.veritone.com/media-streamer/image/710916336/2019-01-25T16:08:40.000Z?x[0]=0.5814843152257078&amp;y[0]=0.2336734693877551&amp;x[1]=0.6381025248661056&amp;y[1]=0.2336734693877551&amp;x[2]=0.6381025248661056&amp;y[2]=0.31020408163265306&amp;x[3]=0.5814843152257078&amp;y[3]=0.31020408163265306"
  }
}
```

The result says that the engine is 80.7% confident that the face at the bounding polygon in question is Yoko Ono. The hit's bitmap is specified in the `uri` shown. That bitmap looks like this:

![Result bitmap](images\yoko-2.png)

The data for the hit includes an `entityId` identifying the face as belonging to "Yoko".



>Next, we recommend that you have a look at the [How to get your engine approved](how-to-get-engine-approved) tutorial.
>
>The above steps can be done either using the Veritone Library application or using the Sandbox APIs. These videos show these methods:
>
><div style="width: 35%"><iframe src="https://player.vimeo.com/video/375686558?color=ff9933&title=0&byline=0&portrait=0" style="border:0;top:0;left:0;width:50%;height:50%;" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
>
><div style="width: 35%"><iframe src="https://player.vimeo.com/video/375686298?color=ff9933&title=0&byline=0&portrait=0" style="border:0;top:0;left:0;width:50%;height:50%;" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
>
><div style="width: 35%"><iframe src="https://player.vimeo.com/video/375686491?color=ff9933&title=0&byline=0&portrait=0" style="border:0;top:0;left:0;width:50%;height:50%;" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>