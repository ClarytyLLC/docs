# CreateTaskDetail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coreTaskId** | [**String**](string.md) | This is the core task id associated with this job | [optional] [default to null]
**correlationTaskId** | [**String**](string.md) | Correlation Task Id.  On create, this will be used instead of internalTaskId or coreTaskId on routes | [optional] [default to null]
**dueDateTime** | [**Date**](DateTime.md) | This is the time the task is due to be complete.  This is used by edge to set the priorities. | [optional] [default to null]
**engineId** | [**UUID**](UUID.md) | The engineId to use.  If the engine is not available on edge, this will return an exception | [default to null]
**ioFolders** | [**List**](CreateTaskIOInfo.md) |  | [optional] [default to null]
**maxEngines** | [**Integer**](integer.md) | The maximum number of engine instances to run against this task.  Defaults to 1 if parallelProcessing is false, or 2 otherwise. | [optional] [default to null]
**maxProcessingSecondsPerWorkItem** | [**Long**](long.md) | The maximum number of seconds a work item can take.  If an engine instance is processing a chunk, engine toolkit will wait till the chunk is complete. | [optional] [default to null]
**maxRetries** | [**Integer**](integer.md) | This is the max retries for the task | [optional] [default to null]
**maxWaitSecondsForChunk** | [**Long**](long.md) | The maximum number of seconds to wait for a new chunk before completing. | [optional] [default to null]
**numChunksPerWorkItem** | [**Long**](long.md) | The maximum number of chunks to process per work item | [optional] [default to null]
**parallelProcessing** | [**Boolean**](boolean.md) | If true, multiple engine instances can process this task in parallel.  If false, maxEngines will be 1. | [optional] [default to null]
**parentMustBeCompleteBeforeStarting** | [**Boolean**](boolean.md) | If true, this task won&#39;t start until the parent is complete | [optional] [default to null]
**payloadJSON** | [**String**](string.md) | This is the payload encoded as a JSON string | [optional] [default to null]
**priority** | [**Integer**](integer.md) | The priority for the task. Default is 0. | [optional] [default to 0]
**sendOutputToUris** | [**List**](string.md) | A list of URIs to send processed chunks when the engine completes them. | [optional] [default to null]
**taskPayloadJSON** | [**String**](string.md) | This is the taskPayload as a JSON string | [optional] [default to null]
**taskStatus** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

