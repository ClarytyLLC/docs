# TaskStatusDetail

Represent a task status as being worked on by an engine instance.  This can be sent as part of heartbeat status update or when getting new work. The updates are deltas since last post
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_jobs_action** | [**list[CreateJobsAction]**](CreateJobsAction.md) |  | [optional] 
**engine_id** | **str** |  | [optional] 
**error_count** | **int** | How many errors since last error update | [optional] 
**error_details** | **str** | JSON string containing an array of JSON Object to describe indvidiual errors e.g. [{\&quot;id\&quot;:\&quot;xxx\&quot;, \&quot;msg\&quot;:\&quot;xxx\&quot;},..] | [optional] 
**failure_reason** | [**FailureReasonEnum**](FailureReasonEnum.md) |  | [optional] 
**inputs** | [**list[TaskIOStatus]**](TaskIOStatus.md) |  | [optional] 
**internal_job_id** | **str** | Internal Job ID | [optional] 
**internal_task_id** | **str** | Internal Task ID | [optional] 
**outputs** | [**list[TaskIOStatus]**](TaskIOStatus.md) |  | [optional] 
**prior_timestamp** | **int** | UTC Timestamp of last status update or start of new task | [optional] 
**processed_stats** | [**TaskProcessedStats**](TaskProcessedStats.md) |  | [optional] 
**retry_count** | **int** | How many retries since last status update | [optional] 
**task_action** | [**TaskActionEnum**](TaskActionEnum.md) |  | [optional] 
**task_output** | **object** | available at the end of a batch, when getting the next batch to work, or last heartbeat before exiting. May not present in heartbeat update | [optional] 
**task_route_id** | **str** | the task route associated with this work item | [optional] 
**task_status** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] 
**timestamp** | **int** | UTC Timestamp of NOW() | [optional] 
**work_request_id** | **str** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


