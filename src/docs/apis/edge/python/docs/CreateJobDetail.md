# CreateJobDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_id** | **str** |  | [optional] 
**core_job_id** | **str** | This is the core job id associated with this job | [optional] 
**core_recording_id** | **int** | This is the recording id in the core of the content for this job | [optional] 
**core_source_id** | **int** | This is the Core Source Id | [optional] [default to 0]
**current_retries** | **int** | This is the current retries for the job | [optional] [default to 0]
**due_date_time** | **datetime** | This is the time the job is due to be complete.  This is used by edge to set the priorities. | [optional] 
**internal_organization_id** | **str** |  | 
**job_config_json** | **str** | This is the job config expressed as JSON | [optional] 
**job_status** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] 
**send_output_to_uris** | **list[str]** | A list of URIs to send processed chunks when the engine completes them. | [optional] 
**task_routes** | [**list[TaskRouteDetail]**](TaskRouteDetail.md) |  | [optional] 
**tasks** | [**list[CreateTaskDetail]**](CreateTaskDetail.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


