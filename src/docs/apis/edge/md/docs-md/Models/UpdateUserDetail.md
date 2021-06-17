# UpdateUserDetail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessAllOrganization** | [**Boolean**](boolean.md) | A user can access to all organization or not. | [optional] [default to null]
**displayName** | [**String**](string.md) |  | [optional] [default to null]
**email** | [**String**](string.md) |  | [optional] [default to null]
**expiration** | [**Long**](long.md) | The unix timestamp for the user expiration. If 0, then it does not expire | [optional] [default to null]
**internalOrganizationID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**inviteRequested** | [**Boolean**](boolean.md) |  | [optional] [default to null]
**inviteURL** | [**String**](string.md) |  | [optional] [default to null]
**isSuperAdmin** | [**Boolean**](boolean.md) | This can be only updated to true by another super admin. | [optional] [default to null]
**kvpJSON** | [**String**](string.md) |  | [optional] [default to null]
**organizationIDs** | [**List**](UUID.md) | This is a list of Org ID that the user can access to. | [optional] [default to null]
**password** | [**String**](string.md) |  | [optional] [default to null]
**passwordChangeRequired** | [**Boolean**](boolean.md) |  | [optional] [default to null]
**roleIDs** | [**List**](UUID.md) |  | [optional] [default to null]
**status** | [**UserStatusEnum**](UserStatusEnum.md) |  | [optional] [default to null]
**userID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**userSettingsJSON** | [**String**](string.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

