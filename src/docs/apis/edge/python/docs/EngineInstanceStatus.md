# EngineInstanceStatus

payload for updateEngineInstanceStatus API -
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_status** | [**ContainerStatus**](ContainerStatus.md) |  | [optional] 
**host_id** | **str** |  | [optional] 
**mode** | [**EngineInstanceStatusModeEnum**](EngineInstanceStatusModeEnum.md) |  | [optional] 
**prior_timestamp** | **int** | UTC Timestamp of last status update or start of new task | [optional] 
**seconds_to_ttl** | **int** |  | [optional] 
**task_statuses** | [**list[TaskStatusDetail]**](TaskStatusDetail.md) |  | [optional] 
**timestamp** | **int** | UTC Timestamp of NOW() | [optional] 
**work_request_details** | **str** |  | [optional] 
**work_request_id** | **str** |  | [optional] 
**work_request_status** | [**WorkRequestStatusEnum**](WorkRequestStatusEnum.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


