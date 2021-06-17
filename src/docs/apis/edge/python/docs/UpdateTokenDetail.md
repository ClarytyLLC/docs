# UpdateTokenDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_all_organization** | **bool** |  | [optional] 
**api_rate_limit_hour** | **int** |  | [optional] 
**bytes_rate_limit_hour** | **int** |  | [optional] 
**engine_instance_id** | **str** |  | [optional] 
**expiration** | **int** | The unix timestamp for the token expiration. If 0, then it does not expire | [optional] 
**host_id** | **str** |  | [optional] 
**kvp_json** | **str** |  | [optional] 
**max_api** | **int** |  | [optional] 
**max_bytes** | **int** |  | [optional] 
**max_tasks** | **int** |  | [optional] 
**organization_i_ds** | **list[str]** | This is a list of Org ID that the token can access to. If accessAllOrganization is true, this value will be override. | [optional] 
**role_i_ds** | **list[str]** |  | [optional] 
**task_rate_limit_hour** | **int** |  | [optional] 
**type** | [**TokenTypeEnum**](TokenTypeEnum.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


