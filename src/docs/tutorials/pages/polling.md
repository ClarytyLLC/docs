# Polling

**APPROXIMATE READING TIME: 4 MINUTES**

>**Tip** Before getting started, we recommend to read about [Training an Engine](training-an-engine) and [Working with Jobs](#/developer/engines).

## Polling a Job for Status <!-- {docsify-ignore} -->

In this tutorial, we will learn together how to do perform polling. You can review the status of your job by polling its status. The possible statuses of a job are:

- Pending
- Complete
- Running
- Canceled
- Queued
- Failed

Usually in [segment processing](https://docs.veritone.com/#/developer/engines/processing-modes/segment-processing/), engines are expected to respond with their results within seconds. However, processing, often, can take longer.

For [external processing](https://docs.veritone.com/#/developer/engines/deployment-model/?id=external-processing) engines built with the [engine toolkit](https://docs.veritone.com/#/developer/engines/toolkit/), aiWARE offers a method of scheduling polling tasks that continuously check the status of long-running operations.

To run a polling engine, the engine should do the following when it receives a message:

1. Upload content to the third-party service.
2. Start processing

In most cases, the third-party service returns an ID or provides other methods to track the progress of a processing job.

## Expected Result <!-- {docsify-ignore} -->

At the end of this tutorial, we would have created a scheduled polling task and then executed the scheduled task. The task will provide the status of the job.



## Steps To Reproduce <!-- {docsify-ignore} -->

### Step 1: Schedule a Polling Task

The usual engine output message is in the `vtn-standard` format. However, an engine that wants to track the long-running task will return a message in the following format:

```json
{
  "type": "schedule_poll_task",
  "timestampUTC": 1556044929525,
  "nextPollTimeUTC": 1556045109525,
  "taskId": "<the task's ID>",
  "taskPayload": {
    "workId": "<some external tracking ID>",
    "isPollTask": true,
    "origTaskId": "<the task's ID>",
    "origTdoId": "<the TDO's ID>",
    "origJobId": "<the job's ID>",
    "origCallTimeUTC": 1556044929525,
    "engineConfig": {}
  }
}
```

In the body, there are four keys:

| Key               | Explanation                                                  |
| ----------------- | ------------------------------------------------------------ |
| `type`            | This must be set to `"schedule_poll_task"` to indicate the response should schedule polling. |
| `timestampUTC`    | The current time in UTC epoch milliseconds.                  |
| `nextPollTimeUTC` | The time when you want to start the polling task in UTC epoch milliseconds. This should usually be at least a minute in the future. |
| `taskPayload`     | The information required by the engine to poll for status. For example, as show in the example above, it may `workId` to reference the external service's ID and `origTaskId` to return results. We can structure this object per the requirements of the engine. The object is handed to the scheduled polling task as a whole. |

> The next scheduled polling task receives a new task ID, but the results are posted to the original task ID. You must pass the original task ID in the taskPayload so that the next run of the engine knows which task to report results against.



### Step 2: Execute a Scheduled Task 

When the time specified in `nextPollTimeUTC` key passes, a new task is created and a new segment is submitted to the engine. The engines inspect the payload to determine if it is a polled task. If it is a polled task, then the engine checks the third-party for status based on the data passed in `taskPayload`. If it is not a polled task, then the engine submits an external job.

 When the engine receives this task, it should inspect the payload to determine if it is a polled task. If so, instead of submitting an external job as before, the engine should check the third-party service for status based on the data passed in `taskPayload`. If the job is complete, the engine should return the result as a normal `vtn-standard` response but referencing the original task ID. If the job is not complete, the engine should return another polling message in the same structure as the previous one.




### Final result

When the job is running and incomplete, the engine returns another polling message in the same structure as the above example. When the job is completed, the engine returns the results as  a normal `vtn-standard` response with a reference to the original task ID. 

