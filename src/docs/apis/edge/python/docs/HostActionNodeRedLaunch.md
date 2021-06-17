# HostActionNodeRedLaunch

Launch request
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_id** | **str** | the buildId for the engine | [optional] 
**container_config** | [**HostActionLaunchContainerConfig**](HostActionLaunchContainerConfig.md) |  | [optional] 
**container_type** | [**ContainerTypeEnum**](ContainerTypeEnum.md) |  | [optional] 
**core_id** | **str** | core system id of graphql | [optional] 
**core_token** | **str** | The core token of the current user. | [optional] 
**docker_container_name** | **str** | Docker container name to launch | [optional] 
**docker_image** | **str** | Docker image to launch | [optional] 
**engine_id** | **str** | The id of the engine to launch | [optional] 
**env** | [**list[EnvKeyValue]**](EnvKeyValue.md) |  | [optional] 
**host_id** | **str** | HostID of the node-red container | [optional] 
**launch_id** | **str** | The Launch ID to use for the launch | [optional] 
**name** | **str** | The name of the engine or process to launch. This is informational only. | [optional] 
**port** | **str** | Port of the node-red container | [optional] 
**runtime_ttl** | **int** | Seconds to run | [optional] 
**soft_min_memory** | **int** |  | [optional] 
**soft_minv_cpu** | **int** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


