# UpdateEngineDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_i_ds_json** | **str** | JSON Data for application_id | [optional] 
**child_priority_adjustment_on_complete** | **int** | When this task completes, adjust the priority of child tasks by this value | [optional] 
**cpu_shares** | **int** |  | [optional] 
**dependency_json** | **str** | JSON Data for dependency | [optional] 
**dontrun_complete** | **bool** | If true, do not run this engine.  Complete as soon as possible and do not assign work. | [optional] 
**edge_version** | **int** | edge version of the engine | [optional] 
**engine_category_id** | **str** | The UUID of the Engine Category | [optional] 
**engine_id** | **str** |  | [optional] 
**engine_name** | **str** | Name of the Engine | [optional] 
**engine_output_type** | [**EngineTypeEnum**](EngineTypeEnum.md) |  | [optional] 
**engine_state** | [**EngineStateEnum**](EngineStateEnum.md) |  | [optional] 
**engine_type** | [**EngineTypeEnum**](EngineTypeEnum.md) |  | [optional] 
**fields_json** | **str** | JSON Data for fields | [optional] 
**idle_timeout** | **int** |  | [optional] 
**internal_organization_id** | **str** |  | [optional] 
**jwt_rights_json** | **str** | JSON Data for jwt_rights | [optional] 
**max_processing_seconds_per_work_item** | **int** |  | [optional] 
**max_wait_seconds_for_chunk** | **int** |  | [optional] 
**min_available** | **int** |  | [optional] 
**min_running** | **int** |  | [optional] 
**num_chunks_per_work_item** | **int** |  | [optional] 
**parallel_processing** | **bool** | If true, the engine can handle multiple instances working against the same chunk task. | [optional] 
**parent_complete_before_start** | **bool** | If true, the engine waits for the parent(s) to be complete before starting | [optional] 
**preload** | **bool** | If it is &#x60;true&#x60;, that means the engine need to pull docker image to local | [optional] 
**priority_adjustment** | **int** | On new tasks with this engine, add this value to the priority of that task | [optional] 
**replacement_engine_id** | **str** |  | [optional] 
**update_status_interval** | **int** |  | [optional] 
**validation_json** | **str** | JSON Data for validation | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


