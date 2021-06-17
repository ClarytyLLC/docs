# HostStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CPUUtilized** | **float32** | The CPU of the container as a percentage from 0-100 | [optional] 
**GPUAvailable** | **int32** | The number of GPU available | [optional] 
**ContainerStatus** | [**[]HostStatusContainer**](HostStatusContainer.md) |  | [optional] 
**DiskAvailableOptAiware** | **int64** | The available bytes in the /opt/aiware partition | [optional] 
**DiskAvailableRoot** | **int64** | The available bytes in the root partition | [optional] 
**EngineToolkitVersion** | **string** | The version of engine toolkit format to be gitbranch:gitcommit:epochBuildDate | [optional] 
**HostID** | **string** |  | [optional] 
**MemoryAvailable** | **int64** | The available memory to the container in bytes | [optional] 
**MemoryUsed** | **int64** | The memory used by container in bytes | [optional] 
**NumCPU** | **int32** | Total CPU | [optional] 
**NumContainers** | **int32** | The number of containers running | [optional] 
**NumEngineInstances** | **int32** | The number of engine instances running | [optional] 
**NumGPU** | **int32** | Total GPU | [optional] 
**VCPUAvailable** | **int32** | The number of vCPUs available.  THis is calculated by Number of CPUs * % available * 1024 | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


