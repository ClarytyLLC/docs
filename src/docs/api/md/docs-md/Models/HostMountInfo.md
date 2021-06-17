# HostMountInfo
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache\_number** | [**Integer**](integer.md) | the cache number for the nfs mount.  0 is /cache, 1 is /cache/1, ... | [optional] [default to null]
**ips** | [**List**](string.md) | The host name or IP to mount. | [optional] [default to null]
**local\_path** | [**String**](string.md) | The mount on the local filesystem | [optional] [default to null]
**mountType** | [**HostMountTypeEnum**](HostMountTypeEnum.md) |  | [optional] [default to null]
**options** | [**String**](string.md) | a comma separated list of options to pass into the mount commmand.  An example is nfsvers&#x3D;4,rsize&#x3D;1048576,wsize&#x3D;1048576,hard,timeo&#x3D;600,retrans&#x3D;2,noresvport | [optional] [default to null]
**port** | [**Integer**](integer.md) | The port the NFS service is listening on | [optional] [default to null]
**priority** | [**Integer**](integer.md) | The priority to mount them.  Lowest first to highest numbers.  For example, /cache is 10, /cache/1 is 100. If they have the same priority then they are run in random order for the priority number. | [optional] [default to null]
**server\_path** | [**String**](string.md) | The mount path to mount | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

