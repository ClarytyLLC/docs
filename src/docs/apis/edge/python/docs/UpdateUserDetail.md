# UpdateUserDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_all_organization** | **bool** | A user can access to all organization or not. | [optional] 
**display_name** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**expiration** | **int** | The unix timestamp for the user expiration. If 0, then it does not expire | [optional] 
**internal_organization_id** | **str** |  | [optional] 
**invite_requested** | **bool** |  | [optional] 
**invite_url** | **str** |  | [optional] 
**is_super_admin** | **bool** | This can be only updated to true by another super admin. | [optional] 
**kvp_json** | **str** |  | [optional] 
**organization_i_ds** | **list[str]** | This is a list of Org ID that the user can access to. | [optional] 
**password** | **str** |  | [optional] 
**password_change_required** | **bool** |  | [optional] 
**role_i_ds** | **list[str]** |  | [optional] 
**status** | [**UserStatusEnum**](UserStatusEnum.md) |  | [optional] 
**user_id** | **str** |  | [optional] 
**user_settings_json** | **str** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


