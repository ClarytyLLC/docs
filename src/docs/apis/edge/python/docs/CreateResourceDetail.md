# CreateResourceDetail

This is the create request for a resource object
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri_template** | **str** | URI template in the go template format. | [optional] 
**binding_type** | [**ResourceBindingTypeEnum**](ResourceBindingTypeEnum.md) |  | [optional] 
**host_id** | **str** |  | [optional] 
**name** | **str** | The name of the resource | [optional] 
**params** | **str** | JSON encoded field | [optional] 
**pg_database** | **str** | If postgres, this is the name of the postgres database | [optional] 
**pg_pass** | **str** | If postgres, this is the user password.  This will be encrypted in storage | [optional] 
**pg_user** | **str** | If postgres, this is the user name | [optional] 
**redis_db** | **int** | This is the redis DB number. | [optional] 
**redis_token** | **str** | If Redis, this is the Redis token. | [optional] 
**resource_state** | [**ResourceStateEnum**](ResourceStateEnum.md) |  | [optional] 
**resource_type** | [**ResourceTypeEnum**](ResourceTypeEnum.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


