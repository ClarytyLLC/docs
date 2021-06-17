# EngineInstanceWorkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContainerStatus** | [**ContainerStatus**](ContainerStatus.md) |  | [optional] 
**EngineToolkitVersion** | **string** | The version of engine toolkit format to be gitbranch:gitcommit:epochBuildDate | [optional] 
**HostAction** | [**HostActionEnum**](HostActionEnum.md) |  | [optional] 
**HostID** | **string** |  | [optional] 
**RequestWorkForEngineIds** | **[]string** | This is the set of engine ids that this instance will get work for.  Controller will return the highest priority task across the set of engine ids | [optional] 
**TaskStatuses** | [**[]TaskStatusDetail**](TaskStatusDetail.md) |  | [optional] 
**WorkRequestDetails** | **string** |  | [optional] 
**WorkRequestID** | **string** |  | [optional] 
**WorkRequestStatus** | [**WorkRequestStatusEnum**](WorkRequestStatusEnum.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


