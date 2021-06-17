# EngineInstanceWorkItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**engine_id** | **str** |  | [optional] 
**engine_type** | [**EngineTypeEnum**](EngineTypeEnum.md) |  | [optional] 
**internal_job_id** | **str** | Internal Job ID | [optional] 
**internal_organization_id** | **str** |  | [optional] 
**internal_task_id** | **str** | Internal Task ID | [optional] 
**is_retry** | **bool** | If true, a prior version of this task has failed.  The outputs and inputs have to be reset based on the work that has been processed by the downstream tasks | [optional] 
**job_id** | **str** | Core Job ID | [optional] 
**max_processing_seconds_per_work_item** | **int** | The number of seconds a work item can take to process the chunks.  This will not interrupt a chunk processing time. | [optional] 
**max_wait_seconds_for_chunk** | **int** | The max time to wait for a chunk. Default is 0. | [optional] 
**num_chunks_per_work_item** | **int** | The number of units to process. Applicable to chunk engines, number of chunks to work on this task | [optional] 
**organization_id** | **int** | This is the organization id in core (int), not the internal organization id | [optional] 
**send_output_to_uris** | **list[str]** | A list of URIs to send processed chunks when the engine completes them. | [optional] 
**task_id** | **str** | Core Task ID | [optional] 
**task_i_os** | [**list[TaskIO]**](TaskIO.md) |  | [optional] 
**task_parent_status** | [**TaskStatusEnum**](TaskStatusEnum.md) |  | [optional] 
**task_payload** | **object** |  | [optional] 
**task_route_id** | **str** | the task route associated with this work item | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


