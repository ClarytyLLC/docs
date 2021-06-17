# CreateServerTypeDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_startup_script** | **str** |  | [optional] 
**aws_ami** | **str** |  | [optional] 
**aws_instance_profile** | **str** |  | [optional] 
**aws_instance_type** | **str** |  | [optional] 
**aws_key_name** | **str** |  | [optional] 
**aws_security_groups** | **list[str]** | aws subnets | [optional] 
**aws_spot** | **bool** |  | [optional] 
**aws_spot_max_price** | **float** |  | [optional] 
**aws_spot_persistent** | **bool** |  | [optional] 
**aws_subnets** | **list[str]** | aws subnets | [optional] 
**aws_tags_json** | **str** |  | [optional] 
**aws_user_data** | **str** |  | [optional] 
**disable_launching_backlog_engines** | **bool** |  | [optional] 
**gpu_type** | [**GPUEnum**](GPUEnum.md) |  | [optional] 
**has_gpu** | **bool** |  | [optional] 
**is_auto_scale_active** | **bool** |  | [optional] 
**max_servers** | **int** |  | [optional] 
**memory_bytes** | **int** |  | [optional] 
**min_servers** | **int** |  | [optional] 
**num_gpu** | **int** |  | [optional] 
**only_organization_id** | **str** |  | [optional] 
**run_modes** | [**list[RunModeEnum]**](RunModeEnum.md) | run modes | [optional] 
**server_config_json** | **str** |  | [optional] 
**server_provider** | [**ServerProviderEnum**](ServerProviderEnum.md) |  | [optional] 
**server_type_id** | **str** |  | [optional] 
**vcpus** | **int** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


