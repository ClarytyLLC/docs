# JobDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aborted_date_time** | **datetime** | This is the datetime the task was aborted | [optional] 
**completed_date_time** | **datetime** | This is the datetime the job was completed | [optional] 
**core_id** | **str** |  | [optional] 
**core_job_id** | **str** | Core Job ID | [optional] 
**core_recording_id** | **int** | This is the recording id in the core of the content for this job | [optional] 
**core_scheduled_job_id** | **int** | This is the core scheduled job id. | [optional] 
**core_source_id** | **int** | This is the Core Source Id | [optional] [default to 0]
**created_date_time** | **datetime** | This is the datetime the job was created | [optional] 
**current_retries** | **int** | This is the current retries for the job | [optional] [default to 0]
**due_date_time** | **datetime** | This is the time the job is due to be complete.  This is used by edge to set the priorities. | [optional] 
**internal_job_id** | **str** | Internal Job ID | [optional] 
**internal_organization_id** | **str** |  | [optional] 
**internal_scheduled_job_id** | **str** | The internal scheduled job id. | [optional] 
**is_template** | **bool** | If true, this job is a template | [optional] 
**job_config_json** | **str** | This is the job config expressed as JSON | [optional] 
**job_status** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] 
**job_template_id** | **str** | If set, this job was created from this job template | [optional] 
**max_retries** | **int** | This is the max retries for the job | [optional] [default to 0]
**modified_date_time** | **datetime** | This is the datetime the job was last modified. | [optional] 
**priority** | **int** | The priority for the job.  Default is 0. | [optional] [default to 0]
**scheduled_date_time** | **datetime** | If from scheduled job, this is the date when the job should be launched. There is sometimes a difference between scheduled and start to allow for the edge to start processing at the right time if warmup is needed. If not, blank | [optional] 
**send_output_to_uris** | **list[str]** | A list of URIs to send processed chunks when the engine completes them. | [optional] 
**start_date_time** | **datetime** | If from scheduled job, this is the date when the job should be started. This is a planning time not the actual whcih is startedDateTime.  If not, blank | [optional] 
**started_date_time** | **datetime** | This is the datetime the job was started (actual) | [optional] 
**stop_date_time** | **datetime** | If from scheduled job, this is the date when the job should be stopped. Start and Stop are used for recording from a stream.  If not, blank | [optional] 
**task_routes** | [**list[TaskRouteDetail]**](TaskRouteDetail.md) |  | [optional] 
**tasks** | [**list[TaskDetail]**](TaskDetail.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


