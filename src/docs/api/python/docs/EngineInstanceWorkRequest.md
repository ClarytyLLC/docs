# EngineInstanceWorkRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_status** | [**ContainerStatus**](ContainerStatus.md) |  | [optional] 
**engine_toolkit_version** | **str** | The version of engine toolkit format to be gitbranch:gitcommit:epochBuildDate | [optional] 
**host_action** | [**HostActionEnum**](HostActionEnum.md) |  | [optional] 
**host_id** | **str** |  | [optional] 
**request_work_for_engine_ids** | **list[str]** | This is the set of engine ids that this instance will get work for.  Controller will return the highest priority task across the set of engine ids | [optional] 
**task_statuses** | [**list[TaskStatusDetail]**](TaskStatusDetail.md) |  | [optional] 
**work_request_details** | **str** |  | [optional] 
**work_request_id** | **str** |  | [optional] 
**work_request_status** | [**WorkRequestStatusEnum**](WorkRequestStatusEnum.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


