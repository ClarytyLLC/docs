# UserDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessAllOrganization** | **bool** | A user can access to all organization or not. | [optional] 
**CreatedBy** | **string** |  | [optional] 
**CreatedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the core was created | [optional] 
**DatePasswordLastUpdated** | [**time.Time**](time.Time.md) | This is the datetime the password was last updated | [optional] 
**DisplayName** | **string** |  | [optional] 
**Email** | **string** |  | [optional] 
**Expiration** | [**time.Time**](time.Time.md) | This is the expiration datetime for the current user | [optional] 
**InternalOrganizationID** | **string** |  | [optional] 
**IsSuperAdmin** | **bool** |  | [optional] 
**IsSynchronized** | **bool** | This user was synchronized or not. | [optional] 
**KvpJSON** | **string** |  | [optional] 
**LastLoggedIn** | [**time.Time**](time.Time.md) | This is the datetime the user last logged in | [optional] 
**ModifiedBy** | **string** |  | [optional] 
**ModifiedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the core was last modified. | [optional] 
**OrganizationIDs** | **[]string** | This is a list of Org ID that the user can access to. | [optional] 
**PasswordChangeRequired** | **bool** |  | [optional] 
**PermissionIDs** | **[]string** |  | [optional] 
**RoleIDs** | **[]string** |  | [optional] 
**Status** | [**UserStatusEnum**](UserStatusEnum.md) |  | [optional] 
**UserID** | **string** |  | [optional] 
**UserName** | **string** |  | [optional] 
**UserSettingsJSON** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


