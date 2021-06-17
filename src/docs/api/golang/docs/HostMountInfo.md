# HostMountInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CacheNumber** | **int32** | the cache number for the nfs mount.  0 is /cache, 1 is /cache/1, ... | [optional] 
**Ips** | **[]string** | The host name or IP to mount. | [optional] 
**LocalPath** | **string** | The mount on the local filesystem | [optional] 
**MountType** | [**HostMountTypeEnum**](HostMountTypeEnum.md) |  | [optional] 
**Options** | **string** | a comma separated list of options to pass into the mount commmand.  An example is nfsvers&#x3D;4,rsize&#x3D;1048576,wsize&#x3D;1048576,hard,timeo&#x3D;600,retrans&#x3D;2,noresvport | [optional] 
**Port** | **int32** | The port the NFS service is listening on | [optional] 
**Priority** | **int32** | The priority to mount them.  Lowest first to highest numbers.  For example, /cache is 10, /cache/1 is 100. If they have the same priority then they are run in random order for the priority number. | [optional] 
**ServerPath** | **string** | The mount path to mount | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


