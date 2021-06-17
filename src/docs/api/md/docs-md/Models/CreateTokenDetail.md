# CreateTokenDetail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessAllOrganization** | [**Boolean**](boolean.md) |  | [optional] [default to null]
**apiRateLimitHour** | [**Long**](long.md) |  | [optional] [default to null]
**bytesRateLimitHour** | [**Long**](long.md) |  | [optional] [default to null]
**engineInstanceID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**expiration** | [**Long**](long.md) | The unix timestamp for the token expiration. If 0, then it does not expire | [optional] [default to null]
**hostID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**kvpJSON** | [**String**](string.md) |  | [optional] [default to null]
**maxAPI** | [**Long**](long.md) |  | [optional] [default to null]
**maxBytes** | [**Long**](long.md) |  | [optional] [default to null]
**maxTasks** | [**Long**](long.md) |  | [optional] [default to null]
**organizationIDs** | [**List**](UUID.md) | This is a list of Org ID that the token can access to. If accessAllOrganization is true, this value will be override. | [optional] [default to null]
**roleIDs** | [**List**](UUID.md) |  | [optional] [default to null]
**taskRateLimitHour** | [**Long**](long.md) |  | [optional] [default to null]
**type** | [**TokenTypeEnum**](TokenTypeEnum.md) |  | [optional] [default to null]
**userID** | [**UUID**](UUID.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

