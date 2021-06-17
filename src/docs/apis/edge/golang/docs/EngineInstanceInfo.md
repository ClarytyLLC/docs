# EngineInstanceInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalEngineIDs** | **[]string** | This is a list of additional engines this instance can handle | [optional] 
**BuildID** | **string** |  | [optional] 
**CreatedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the core was created | [optional] 
**DockerContainerID** | **string** | The docker container PID | [optional] 
**Drain** | **bool** | The current engine instance is draining or not | [optional] 
**EngineID** | **string** |  | [optional] 
**EngineInstanceID** | **string** |  | [optional] 
**EngineToolkitVersion** | **string** | The engine toolkit version | [optional] 
**Errors** | [**[]Error**](Error.md) |  | [optional] 
**HostID** | **string** |  | [optional] 
**LastUpdate** | [**time.Time**](time.Time.md) |  | [optional] 
**LaunchEnvVariables** | **map[string]interface{}** |  | [optional] 
**LaunchID** | **string** |  | [optional] 
**LaunchStatus** | [**LaunchStatusEnum**](LaunchStatusEnum.md) |  | [optional] 
**LaunchStatusInfo** | **string** | Additional to log about launch status | [optional] 
**LicenseExpirationSeconds** | **int32** | Seconds till the license expires | [optional] 
**ModifiedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the core was last modified. | [optional] 
**RuntimeExpirationSeconds** | **int32** | Seconds till runtime should expire | [optional] 
**StartupTimestamp** | **int64** | Timestamp of engine instance startup in UTC | [optional] 
**Status** | [**EngineStatusEnum**](EngineStatusEnum.md) |  | [optional] 
**Warnings** | [**[]Error**](Error.md) |  | [optional] 
**WorkRequestID** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


