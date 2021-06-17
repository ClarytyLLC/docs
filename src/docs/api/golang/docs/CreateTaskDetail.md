# CreateTaskDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CoreTaskId** | **string** | This is the core task id associated with this job | [optional] 
**CorrelationTaskId** | **string** | Correlation Task Id.  On create, this will be used instead of internalTaskId or coreTaskId on routes | [optional] 
**DueDateTime** | [**time.Time**](time.Time.md) | This is the time the task is due to be complete.  This is used by edge to set the priorities. | [optional] 
**EngineId** | **string** | The engineId to use.  If the engine is not available on edge, this will return an exception | 
**IoFolders** | [**[]CreateTaskIoInfo**](CreateTaskIOInfo.md) |  | [optional] 
**MaxEngines** | **int32** | The maximum number of engine instances to run against this task.  Defaults to 1 if parallelProcessing is false, or 2 otherwise. | [optional] 
**MaxProcessingSecondsPerWorkItem** | **int64** | The maximum number of seconds a work item can take.  If an engine instance is processing a chunk, engine toolkit will wait till the chunk is complete. | [optional] 
**MaxRetries** | **int32** | This is the max retries for the task | [optional] 
**MaxWaitSecondsForChunk** | **int64** | The maximum number of seconds to wait for a new chunk before completing. | [optional] 
**NumChunksPerWorkItem** | **int64** | The maximum number of chunks to process per work item | [optional] 
**ParallelProcessing** | **bool** | If true, multiple engine instances can process this task in parallel.  If false, maxEngines will be 1. | [optional] 
**ParentMustBeCompleteBeforeStarting** | **bool** | If true, this task won&#39;t start until the parent is complete | [optional] 
**PayloadJSON** | **string** | This is the payload encoded as a JSON string | [optional] 
**Priority** | **int32** | The priority for the task. Default is 0. | [optional] [default to 0]
**SendOutputToUris** | **[]string** | A list of URIs to send processed chunks when the engine completes them. | [optional] 
**TaskPayloadJSON** | **string** | This is the taskPayload as a JSON string | [optional] 
**TaskStatus** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


