# EngineInstanceInfo
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalEngineIDs** | [**List**](string.md) | This is a list of additional engines this instance can handle | [optional] [default to null]
**buildID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**createdDateTime** | [**Date**](DateTime.md) | This is the datetime the core was created | [optional] [default to null]
**dockerContainerID** | [**String**](string.md) | The docker container PID | [optional] [default to null]
**drain** | [**Boolean**](boolean.md) | The current engine instance is draining or not | [optional] [default to null]
**engineID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**engineInstanceID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**engineToolkitVersion** | [**String**](string.md) | The engine toolkit version | [optional] [default to null]
**errors** | [**List**](Error.md) |  | [optional] [default to null]
**hostID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**lastUpdate** | [**Date**](DateTime.md) |  | [optional] [default to null]
**launchEnvVariables** | [**Object**](.md) |  | [optional] [default to null]
**launchID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**launchStatus** | [**LaunchStatusEnum**](LaunchStatusEnum.md) |  | [optional] [default to null]
**launchStatusInfo** | [**String**](string.md) | Additional to log about launch status | [optional] [default to null]
**licenseExpirationSeconds** | [**Integer**](integer.md) | Seconds till the license expires | [optional] [default to null]
**modifiedDateTime** | [**Date**](DateTime.md) | This is the datetime the core was last modified. | [optional] [default to null]
**runtimeExpirationSeconds** | [**Integer**](integer.md) | Seconds till runtime should expire | [optional] [default to null]
**startupTimestamp** | [**Long**](long.md) | Timestamp of engine instance startup in UTC | [optional] [default to null]
**status** | [**EngineStatusEnum**](EngineStatusEnum.md) |  | [optional] [default to null]
**warnings** | [**List**](Error.md) |  | [optional] [default to null]
**workRequestID** | [**UUID**](UUID.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

