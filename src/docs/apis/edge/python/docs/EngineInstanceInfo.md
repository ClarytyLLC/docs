# EngineInstanceInfo

EngineInstance Information
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_engine_i_ds** | **list[str]** | This is a list of additional engines this instance can handle | [optional] 
**build_id** | **str** |  | [optional] 
**created_date_time** | **datetime** | This is the datetime the core was created | [optional] 
**docker_container_id** | **str** | The docker container PID | [optional] 
**drain** | **bool** | The current engine instance is draining or not | [optional] 
**engine_id** | **str** |  | [optional] 
**engine_instance_id** | **str** |  | [optional] 
**engine_toolkit_version** | **str** | The engine toolkit version | [optional] 
**errors** | [**list[Error]**](Error.md) |  | [optional] 
**host_id** | **str** |  | [optional] 
**last_update** | **datetime** |  | [optional] 
**launch_env_variables** | **object** |  | [optional] 
**launch_id** | **str** |  | [optional] 
**launch_status** | [**LaunchStatusEnum**](LaunchStatusEnum.md) |  | [optional] 
**launch_status_info** | **str** | Additional to log about launch status | [optional] 
**license_expiration_seconds** | **int** | Seconds till the license expires | [optional] 
**modified_date_time** | **datetime** | This is the datetime the core was last modified. | [optional] 
**runtime_expiration_seconds** | **int** | Seconds till runtime should expire | [optional] 
**startup_timestamp** | **int** | Timestamp of engine instance startup in UTC | [optional] 
**status** | [**EngineStatusEnum**](EngineStatusEnum.md) |  | [optional] 
**warnings** | [**list[Error]**](Error.md) |  | [optional] 
**work_request_id** | **str** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


