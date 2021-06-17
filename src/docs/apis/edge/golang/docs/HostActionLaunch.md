# HostActionLaunch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BuildId** | **string** | the buildId for the engine | [optional] 
**ContainerConfig** | [**HostActionLaunchContainerConfig**](HostActionLaunch_containerConfig.md) |  | [optional] 
**ContainerType** | [**ContainerTypeEnum**](ContainerTypeEnum.md) |  | [optional] 
**DockerImage** | **string** | Docker image to launch | [optional] 
**EngineId** | **string** | The id of the engine to launch | [optional] 
**Env** | [**[]EnvKeyValue**](EnvKeyValue.md) |  | [optional] 
**GpuType** | [**GpuEnum**](GPUEnum.md) |  | [optional] 
**IsGPU** | **bool** | If true, this requires a GPU | [optional] 
**LaunchId** | **string** | The Launch ID to use for the launch | [optional] 
**Name** | **string** | The name of the engine or process to launch. This is informational only. | [optional] 
**Runtime** | **string** | the runtime for the build | [optional] 
**RuntimeTTL** | **int32** | Seconds to run | [optional] 
**SoftMinMemory** | **int64** |  | [optional] 
**SoftMinvCPU** | **int32** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


