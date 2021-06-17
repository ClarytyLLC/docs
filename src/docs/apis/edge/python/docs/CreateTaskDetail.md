# CreateTaskDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_task_id** | **str** | This is the core task id associated with this job | [optional] 
**correlation_task_id** | **str** | Correlation Task Id.  On create, this will be used instead of internalTaskId or coreTaskId on routes | [optional] 
**due_date_time** | **datetime** | This is the time the task is due to be complete.  This is used by edge to set the priorities. | [optional] 
**engine_id** | **str** | The engineId to use.  If the engine is not available on edge, this will return an exception | 
**io_folders** | [**list[CreateTaskIOInfo]**](CreateTaskIOInfo.md) |  | [optional] 
**max_engines** | **int** | The maximum number of engine instances to run against this task.  Defaults to 1 if parallelProcessing is false, or 2 otherwise. | [optional] 
**max_processing_seconds_per_work_item** | **int** | The maximum number of seconds a work item can take.  If an engine instance is processing a chunk, engine toolkit will wait till the chunk is complete. | [optional] 
**max_retries** | **int** | This is the max retries for the task | [optional] 
**max_wait_seconds_for_chunk** | **int** | The maximum number of seconds to wait for a new chunk before completing. | [optional] 
**num_chunks_per_work_item** | **int** | The maximum number of chunks to process per work item | [optional] 
**parallel_processing** | **bool** | If true, multiple engine instances can process this task in parallel.  If false, maxEngines will be 1. | [optional] 
**parent_must_be_complete_before_starting** | **bool** | If true, this task won&#39;t start until the parent is complete | [optional] 
**payload_json** | **str** | This is the payload encoded as a JSON string | [optional] 
**priority** | **int** | The priority for the task. Default is 0. | [optional] [default to 0]
**send_output_to_uris** | **list[str]** | A list of URIs to send processed chunks when the engine completes them. | [optional] 
**task_payload_json** | **str** | This is the taskPayload as a JSON string | [optional] 
**task_status** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


