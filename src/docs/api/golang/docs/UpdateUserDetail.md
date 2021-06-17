# UpdateUserDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessAllOrganization** | **bool** | A user can access to all organization or not. | [optional] 
**DisplayName** | **string** |  | [optional] 
**Email** | **string** |  | [optional] 
**Expiration** | **int64** | The unix timestamp for the user expiration. If 0, then it does not expire | [optional] 
**InternalOrganizationID** | **string** |  | [optional] 
**InviteRequested** | **bool** |  | [optional] 
**InviteURL** | **string** |  | [optional] 
**IsSuperAdmin** | **bool** | This can be only updated to true by another super admin. | [optional] 
**KvpJSON** | **string** |  | [optional] 
**OrganizationIDs** | **[]string** | This is a list of Org ID that the user can access to. | [optional] 
**Password** | **string** |  | [optional] 
**PasswordChangeRequired** | **bool** |  | [optional] 
**RoleIDs** | **[]string** |  | [optional] 
**Status** | [**UserStatusEnum**](UserStatusEnum.md) |  | [optional] 
**UserID** | **string** |  | [optional] 
**UserSettingsJSON** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


