# HostStatus
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CPUUtilized** | [**Float**](float.md) | The CPU of the container as a percentage from 0-100 | [optional] [default to null]
**GPUAvailable** | [**Integer**](integer.md) | The number of GPU available | [optional] [default to null]
**containerStatus** | [**List**](HostStatusContainer.md) |  | [optional] [default to null]
**diskAvailableOptAiware** | [**Long**](long.md) | The available bytes in the /opt/aiware partition | [optional] [default to null]
**diskAvailableRoot** | [**Long**](long.md) | The available bytes in the root partition | [optional] [default to null]
**engineToolkitVersion** | [**String**](string.md) | The version of engine toolkit format to be gitbranch:gitcommit:epochBuildDate | [optional] [default to null]
**hostID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**memoryAvailable** | [**Long**](long.md) | The available memory to the container in bytes | [optional] [default to null]
**memoryUsed** | [**Long**](long.md) | The memory used by container in bytes | [optional] [default to null]
**numCPU** | [**Integer**](integer.md) | Total CPU | [optional] [default to null]
**numContainers** | [**Integer**](integer.md) | The number of containers running | [optional] [default to null]
**numEngineInstances** | [**Integer**](integer.md) | The number of engine instances running | [optional] [default to null]
**numGPU** | [**Integer**](integer.md) | Total GPU | [optional] [default to null]
**vCPUAvailable** | [**Integer**](integer.md) | The number of vCPUs available.  THis is calculated by Number of CPUs * % available * 1024 | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

