# Implementing Callbacks

**APPROXIMATE READING TIME: 8 MINUTES**

>**Tip** Before getting started, you recommend to read about [training an engine](training-an-engine.md) and [engine developer's toolkit](deploy-to-veritone).

## Callbacks <!-- {docsify-ignore} -->

In this tutorial, you will learn how to create callbacks. Your engine may need to delegate work to a long-running external processes that may or may not have human intervention. For example, consider the following scenarios:

* human-aided training of a feature-detection or classification engine to improve the engine's accuracy.
* complex transcription or translation workflows, that require text to be approved or corrected by human domain experts before it can be passed to downstream logic.
* real-time intervention by human operators to augment the performance of a "chat bot".



You will need to implement a callback when your engine needs to call out to an external service. Alternatively, you can choose to [poll the external service](/developer/engines/polling/). If you want the external service to return results fairly quickly (less than one minute), then you should consider [polling](/developer/engines/polling/). However, if you want the external service takes many minutes or hours to complete its job then you must consider implementing callbacks.

As an example, consider a facial recognition engine that has been trained against a library of faces but has accuracy problems with some faces. In this case, the engine might benefit from benefit from human-intervention-based "edge case" training. You may implement a callback that allows human intervention. 

The image below illustrates this scenario that allows human intervention with the use of callbacks:

![Human Review](images\HumanReview-1.png)

In the above diagram, a facial recognition engine identifies a face with low confidence. To improve the confidence level and to train the image to recognize this face again later, the engine pauses (as shown in Step 2 below) while it sends the low-confidence data out to a Human Review and Labeling service.

![Human Review](images\HumanReview-2.png)

The Human Review and Labeling service reports its results (Step 3), the engine resumes operation. In the meantime, the engine's library is updated with new data and the engine's reliability is improved.

![Human Review](images\HumanReview-3.png)







## Expected Result <!-- {docsify-ignore} -->

You can use the features on the Veritone platform to create a flow that can handle these scenarios. You must configure your engine to:

1\. Call out to an external service.

2\. Shut itself down.

3\. Be woken up later, when the external service calls the aiWARE platform back.

In this flow pattern, the engine doesn't just yield thread time to other processes &mdash; it actually _exits_, freeing up the CPU for other work. When aiWARE receives the "wakeup" request from the outside service, it starts the engine up again. This lets the engine continue working from where it left off.

By the end of this tutorial, you will, as an engine developer, know how to implement an engine that uses this type of workflow.

> The pause-and-resume execution pattern described here can be utilized by _any_ engine that needs to call out to a long-running external service.
> Though we use the term "Human Review" in this pattern, there is no requirement for human involvement _per se_.

## Steps To Implement a Callback<!-- {docsify-ignore} -->

You can use any cognitive engine to implement the callback pattern. There are no special build considerations, such as manifest fields indicating that the engine can be paused, or configuration options. The engine processes normally until the engine decides it needs to call our to a service.

At this point, the engine will:

1. Perform any internal housekeeping required before going to sleep, such as closing open file handles or database connections.
2. [Create a wakeup URL](#step-1-creating-the-wakeup-url). The wakeup URL also includes [a wakeup token](#step-2-obtain-wakeup-token) and any data payload(s) the external service will need. 
3. [Update the engine's task status to `paused`](#step-2-pause-the-engine).
4. [Restart the task](#step3-restart-the-task).

### Step 1: Create the Wakeup URL

You must create a wakeup URL for the task before you pause it. This wakeup URL will be combined with the wakeup token and state data, and passed when re-activating/waking up the task.

When the external service completes it task, it calls aiWARE (Edge) back using the callback URL that is usually in this form:

`https://push2.aws-prod-rt.veritone.com/callback?jwt=ENGINE_TOKEN&engineId=ENGINE_ID&data=DATA`

where,

- `ENGINE_TOKEN` is a [JSON Web Token](#obtain-a-wakeup-token) obtained from Veritone
- `DATA` is any [data you want to send to the engine](#create-a-state-data) when resuming

#### Obtain a wakeup token

You must use a valid [JSON Web Token](https://tools.ietf.org/html/rfc7519) (JWT), while resuming an engine, to guard against malicious calls. 

You can get a JWT (to give to a trusted third party) by making a `getEngineJWT` call to the GraphQL server, at the usual Veritone API endpoint using the following mutation:

```graphql
mutation getWakeupToken($engineId: ID!, $tdoId: ID!, $jobId: ID!, $taskId: ID!) {
    getEngineJWT(input: {
      engineId: $engineId
      resource: {
        tdoId: $tdoId
        jobId: $jobId
        taskId: $taskId
      }
    }) {
      engineId
      token
      resource {
        applicationId
        tdoId
        jobId
        taskId
      }
    }
  }
```



aiWARE requires that you include the token in the URL's parameters for all incoming requests. The JWT contains a cryptographic hash that can be verified by aiWARE for authenticity (originated with a particular engine and task). After aiWARE (Edge) has validated the token, it will restart your engine so that it can continue processing.

#### Create State Data

You can send your engine state data to help resume the task as a part of the callback URL. You can include the data in the `data` parameter of the callback URL.

For example, assume you want to send the following JSON to the engine when the task resumes:

```json
{
  "isCallback": true,
  "myExternalJobRef": "xyz"
}
```



You can change this JSON to a string and set it as value of the `data` field in the callback URL. In most cases, you call the external service to initiate interaction, and receive a `JobID` from the service. You can store the `JobID` in your state data, so that on resuming  your engine knows how to query the external service for any additional data that is relevant to this specific job.

You can also pass any JSON-serializable data in the `data` field of the callback URL. 

### Step 2: Pause the Engine 

As a final step before your engine exits, it should post a task status update, setting its status to `paused`. You must have completed any internal housekeeping required before going to sleep, such as closing open file handles or database connections.

### Step 3: Restart the Task

You can use the wakeup URL to restart the task. When your engine is restarted by Edge, it is associated with the same `taskId` as before so the same task continues operation.

After you restart the engine, it must check the `PAYLOAD_JSON` environment variable to see if the `isCallback` field is set to `true`. This variable indicates that the engine is running in callback mode.

A `PAYLOAD_JSON` may look something like this:

```metadata json
{
    jobId: "123",
    token: "xxxxxxx",
    taskId: "456",
    recordingId: "78901234",
    applicationId: "abc",
    organizationId: "7682",
    isCallback: true,
    data: "\{\"myStateData\":\"xyz\"\}",
    veritoneApiBaseUrl: "https://api.veritone.com"
}
```

The engine should check the `data` field of this JSON object for any data required to resume operation. Once the task is resumed, your engine can retrieve finished output from the external service. This data can then be further processed, or encoded as `vtn-standard` output, and sent to `createAsset`.

