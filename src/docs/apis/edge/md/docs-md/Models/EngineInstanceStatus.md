# EngineInstanceStatus
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerStatus** | [**ContainerStatus**](ContainerStatus.md) |  | [optional] [default to null]
**engineInstanceID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**engineToolkitTimestamps** | [**EngineToolkitTimestamps**](EngineToolkitTimestamps.md) |  | [optional] [default to null]
**hostID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**mode** | [**EngineInstanceStatusModeEnum**](EngineInstanceStatusModeEnum.md) |  | [optional] [default to null]
**priorTimestamp** | [**Long**](long.md) | UTC Timestamp of last status update or start of new task | [optional] [default to null]
**secondsToTTL** | [**Integer**](integer.md) |  | [optional] [default to null]
**taskStatuses** | [**List**](TaskStatusDetail.md) |  | [optional] [default to null]
**timestamp** | [**Long**](long.md) | UTC Timestamp of NOW() | [optional] [default to null]
**workRequestDetails** | [**String**](string.md) |  | [optional] [default to null]
**workRequestID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**workRequestStatus** | [**WorkRequestStatusEnum**](WorkRequestStatusEnum.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

