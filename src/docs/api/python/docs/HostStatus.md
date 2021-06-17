# HostStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_utilized** | **float** | The CPU of the container as a percentage from 0-100 | [optional] 
**gpu_available** | **int** | The number of GPU available | [optional] 
**container_status** | [**list[HostStatusContainer]**](HostStatusContainer.md) |  | [optional] 
**disk_available_opt_aiware** | **int** | The available bytes in the /opt/aiware partition | [optional] 
**disk_available_root** | **int** | The available bytes in the root partition | [optional] 
**engine_toolkit_version** | **str** | The version of engine toolkit format to be gitbranch:gitcommit:epochBuildDate | [optional] 
**host_id** | **str** |  | [optional] 
**memory_available** | **int** | The available memory to the container in bytes | [optional] 
**memory_used** | **int** | The memory used by container in bytes | [optional] 
**num_cpu** | **int** | Total CPU | [optional] 
**num_containers** | **int** | The number of containers running | [optional] 
**num_engine_instances** | **int** | The number of engine instances running | [optional] 
**num_gpu** | **int** | Total GPU | [optional] 
**v_cpu_available** | **int** | The number of vCPUs available.  THis is calculated by Number of CPUs * % available * 1024 | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


