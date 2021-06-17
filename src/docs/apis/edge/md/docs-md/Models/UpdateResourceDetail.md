# UpdateResourceDetail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**URITemplate** | [**String**](string.md) | URI template in the go template format. | [optional] [default to null]
**bindingType** | [**ResourceBindingTypeEnum**](ResourceBindingTypeEnum.md) |  | [optional] [default to null]
**hostID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**minioAccessKey** | [**String**](string.md) | If Minio, this is the access key. | [optional] [default to null]
**minioSecretKey** | [**String**](string.md) | If Minio, this is the secret key. | [optional] [default to null]
**name** | [**String**](string.md) | The name of the resource | [optional] [default to null]
**params** | [**String**](string.md) | JSON encoded field | [optional] [default to null]
**pgDatabase** | [**String**](string.md) | If postgres, this is the name of the postgres database | [optional] [default to null]
**pgPass** | [**String**](string.md) | If postgres, this is the user password.  This will be encrypted in storage | [optional] [default to null]
**pgUser** | [**String**](string.md) | If postgres, this is the user name | [optional] [default to null]
**recoveryStrategy** | [**ResourceRecoveryStrategyEnum**](ResourceRecoveryStrategyEnum.md) |  | [optional] [default to null]
**redisDB** | [**Long**](long.md) | This is the redis DB number. | [optional] [default to null]
**redisToken** | [**String**](string.md) | If Redis, this is the Redis token. | [optional] [default to null]
**redisUser** | [**String**](string.md) | If Redis, this is the user name. | [optional] [default to null]
**resourceID** | [**UUID**](UUID.md) | Resource ID | [optional] [default to null]
**resourceState** | [**ResourceStateEnum**](ResourceStateEnum.md) |  | [optional] [default to null]
**resourceType** | [**ResourceTypeEnum**](ResourceTypeEnum.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

