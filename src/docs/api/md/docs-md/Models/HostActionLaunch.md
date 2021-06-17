# HostActionLaunch
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buildId** | [**String**](string.md) | the buildId for the engine | [optional] [default to null]
**containerConfig** | [**HostActionLaunch_containerConfig**](HostActionLaunch_containerConfig.md) |  | [optional] [default to null]
**containerType** | [**ContainerTypeEnum**](ContainerTypeEnum.md) |  | [optional] [default to null]
**dockerImage** | [**String**](string.md) | Docker image to launch | [optional] [default to null]
**engineId** | [**String**](string.md) | The id of the engine to launch | [optional] [default to null]
**env** | [**List**](EnvKeyValue.md) |  | [optional] [default to null]
**gpuType** | [**GPUEnum**](GPUEnum.md) |  | [optional] [default to null]
**isGPU** | [**Boolean**](boolean.md) | If true, this requires a GPU | [optional] [default to null]
**launchId** | [**UUID**](UUID.md) | The Launch ID to use for the launch | [optional] [default to null]
**name** | [**String**](string.md) | The name of the engine or process to launch. This is informational only. | [optional] [default to null]
**runtime** | [**String**](string.md) | the runtime for the build | [optional] [default to null]
**runtimeTTL** | [**Integer**](integer.md) | Seconds to run | [optional] [default to null]
**softMinMemory** | [**Long**](long.md) |  | [optional] [default to null]
**softMinvCPU** | [**Integer**](integer.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

