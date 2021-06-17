# ResourceDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**URI** | **string** | Resource URI. This field is presented only in responses | [optional] 
**URITemplate** | **string** | URI template in the go template format. | [optional] 
**BindingType** | [**ResourceBindingTypeEnum**](ResourceBindingTypeEnum.md) |  | [optional] 
**CreatedBy** | **string** |  | [optional] 
**CreatedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the core was created | [optional] 
**HostID** | **string** |  | [optional] 
**ModifiedBy** | **string** |  | [optional] 
**ModifiedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the core was last modified. | [optional] 
**Name** | **string** | The name of the resource | [optional] 
**Nsqadmin** | **string** | This is the nsqadmin \&quot;host:port\&quot;. | [optional] 
**Nsqd** | **string** | This is the nsqd \&quot;host:port\&quot;. | [optional] 
**Nsqlookupd** | **string** | This is the nsqlookupd \&quot;host:port\&quot;. | [optional] 
**Params** | **string** | JSON encoded field | [optional] 
**PgDatabase** | **string** | If postgres, this is the name of the postgres database | [optional] 
**PgPass** | **string** | If postgres, this is the user password.  This will be encrypted in storage | [optional] 
**PgUser** | **string** | If postgres, this is the user name | [optional] 
**RedisDB** | **int64** | This is the redis DB number. | [optional] 
**RedisToken** | **string** | If Redis, this is the Redis token. | [optional] 
**ResourceID** | **string** | Resource ID | [optional] 
**ResourceState** | [**ResourceStateEnum**](ResourceStateEnum.md) |  | [optional] 
**ResourceType** | [**ResourceTypeEnum**](ResourceTypeEnum.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


