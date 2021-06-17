# CreateTokenDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessAllOrganization** | **bool** |  | [optional] 
**ApiRateLimitHour** | **int64** |  | [optional] 
**BytesRateLimitHour** | **int64** |  | [optional] 
**EngineInstanceID** | **string** |  | [optional] 
**Expiration** | **int64** | The unix timestamp for the token expiration. If 0, then it does not expire | [optional] 
**HostID** | **string** |  | [optional] 
**KvpJSON** | **string** |  | [optional] 
**MaxAPI** | **int64** |  | [optional] 
**MaxBytes** | **int64** |  | [optional] 
**MaxTasks** | **int64** |  | [optional] 
**OrganizationIDs** | **[]string** | This is a list of Org ID that the token can access to. If accessAllOrganization is true, this value will be override. | [optional] 
**RoleIDs** | **[]string** |  | [optional] 
**TaskRateLimitHour** | **int64** |  | [optional] 
**Type** | [**TokenTypeEnum**](TokenTypeEnum.md) |  | [optional] 
**UserID** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


