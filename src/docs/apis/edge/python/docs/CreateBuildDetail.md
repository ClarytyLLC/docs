# CreateBuildDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_default_ttl** | **int** | The seconds on average a build should live if utilized | [optional] 
**build_id** | **str** |  | [optional] 
**build_state** | [**EngineBuildStateEnum**](EngineBuildStateEnum.md) |  | [optional] 
**disk_free_bytes** | **int** | The number of free bytes required to launch engine | [optional] 
**docker_image** | **str** | docker image | [optional] 
**engine_id** | **str** |  | [optional] 
**license_expiration_timestamp** | **int** | The unix timestamp on when the license for the engine expires.  If 0, then it does not expire | [optional] 
**manifest_cluster_size** | **str** | Engine Size from the Manifest | [optional] 
**manifest_custom_profile** | **str** | Engine Custom Profile from the Manifest | [optional] 
**manifest_engine_mode** | **str** | Engine Mode from the Manifest | [optional] 
**manifest_engine_name** | **str** | Name of the Engine from the Manifest | [optional] 
**manifest_gpu_supported** | [**GPUEnum**](GPUEnum.md) |  | [optional] 
**manifest_require_ec2** | **bool** | Does the engine require EC2 | [optional] 
**runtime** | **str** | JSON Data for runtime | [optional] 
**soft_gpu_limit** | **int** | The number of GPU required to launch engine | [optional] 
**soft_memory_bytes_limit** | **int** | The number of bytes required to launch this engine | [optional] 
**soft_vcpu_limit** | **int** | The number of VCPU based on 1024 required to launch engine | [optional] 
**version** | **int** | version of the engine | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


