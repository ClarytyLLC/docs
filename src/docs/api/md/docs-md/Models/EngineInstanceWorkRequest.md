# EngineInstanceWorkRequest
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerStatus** | [**ContainerStatus**](ContainerStatus.md) |  | [optional] [default to null]
**engineInstanceID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**engineToolkitVersion** | [**String**](string.md) | The version of engine toolkit format to be gitbranch:gitcommit:epochBuildDate | [optional] [default to null]
**hostAction** | [**HostActionEnum**](HostActionEnum.md) |  | [optional] [default to null]
**hostID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**requestWorkForEngineIds** | [**List**](string.md) | This is the set of engine ids that this instance will get work for.  Controller will return the highest priority task across the set of engine ids | [optional] [default to null]
**taskStatuses** | [**List**](TaskStatusDetail.md) |  | [optional] [default to null]
**workRequestDetails** | [**String**](string.md) |  | [optional] [default to null]
**workRequestID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**workRequestStatus** | [**WorkRequestStatusEnum**](WorkRequestStatusEnum.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

