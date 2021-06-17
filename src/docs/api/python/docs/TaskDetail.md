# TaskDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aborted_date_time** | **datetime** | This is the datetime the task was aborted | [optional] 
**build_id** | **str** |  | [optional] 
**child_task_i_ds** | **list[str]** | Array of Internal Child Task Id | [optional] 
**chunk_count_info** | [**ChunkCountInfo**](ChunkCountInfo.md) |  | [optional] 
**completed_date_time** | **datetime** | This is the datetime the task was completed | [optional] 
**core_job_id** | **str** | This is the core job id associated with this job | [optional] 
**core_recording_id** | **int** | This is the recording id in the core of the content for this job | [optional] 
**core_task_id** | **str** | This is the core task id associated with this job | [optional] 
**created_date_time** | **datetime** | This is the datetime the core was created | [optional] 
**current_retries** | **int** | This is the current retries for the task | [optional] [default to 0]
**due_date_time** | **datetime** | This is the time the task is due to be complete.  This is used by edge to set the priorities. | [optional] 
**engine_category_id** | **str** | Category Id | [optional] 
**engine_category_name** | **str** | Category name | [optional] 
**engine_id** | **str** |  | [optional] 
**engine_name** | **str** | Engine name | [optional] 
**error_count** | **int** | This is the error count for the task | [optional] 
**failure_detail** | **str** | If there is an error, the detail will be set here. | [optional] 
**failure_reason** | [**FailureReasonEnum**](FailureReasonEnum.md) |  | [optional] 
**internal_job_id** | **str** | Internal Job ID | [optional] 
**internal_organization_id** | **str** |  | [optional] 
**internal_task_id** | **str** | Internal Task ID | [optional] 
**io_folders** | [**list[TaskIOInfo]**](TaskIOInfo.md) |  | [optional] 
**is_template** | **bool** | If true, this job is a template | [optional] 
**max_engines** | **int** | The maximum number of engine instances to run against this task.  Defaults to 1 if parallelProcessing is false, or 2 otherwise. | [optional] 
**max_retries** | **int** | This is the max retries for the task | [optional] 
**modified_date_time** | **datetime** | This is the datetime the core was last modified. | [optional] 
**parallel_processing** | **bool** | If true, multiple engine instances can process this task in parallel.  If false, maxEngines will be 1. | [optional] 
**parent_must_be_complete_before_starting** | **bool** | If true, this task won&#39;t start until the parent is complete | [optional] 
**parent_task_id** | **str** | Internal Parent Task Id | [optional] 
**payload_json** | **str** | This is the payload encoded as a JSON string | [optional] 
**scheduled_date_time** | **datetime** | If from scheduled job, this is the date when the task should be launched. There is sometimes a difference between scheduled and start to allow for the edge to start processing at the right time if warmup is needed. If not, blank | [optional] 
**send_output_to_uris** | **list[str]** | A list of URIs to send processed chunks when the engine completes them. | [optional] 
**start_date_time** | **datetime** | If from scheduled job, this is the date when the task should be started. This is a planning time not the actual which is startedDateTime.  If not, blank | [optional] 
**started_date_time** | **datetime** | This is the datetime the task was started (actual) | [optional] 
**stop_date_time** | **datetime** | If from scheduled job, this is the date when the task should be stopped. Start and Stop are used for recording from a stream.  If not, blank | [optional] 
**task_output_son** | **str** | This is the taskOutput as a JSON string | [optional] 
**task_payload_json** | **str** | This is the taskPayload as a JSON string | [optional] 
**task_status** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] 
**task_template_id** | **str** | If set, this task was created from this task template. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


