# HostMountInfo

This payload directs the agent to mount the specified directories on the hosts.
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_number** | **int** | the cache number for the nfs mount.  0 is /cache, 1 is /cache/1, ... | [optional] 
**ips** | **list[str]** | The host name or IP to mount. | [optional] 
**local_path** | **str** | The mount on the local filesystem | [optional] 
**mount_type** | [**HostMountTypeEnum**](HostMountTypeEnum.md) |  | [optional] 
**options** | **str** | a comma separated list of options to pass into the mount commmand.  An example is nfsvers&#x3D;4,rsize&#x3D;1048576,wsize&#x3D;1048576,hard,timeo&#x3D;600,retrans&#x3D;2,noresvport | [optional] 
**port** | **int** | The port the NFS service is listening on | [optional] 
**priority** | **int** | The priority to mount them.  Lowest first to highest numbers.  For example, /cache is 10, /cache/1 is 100. If they have the same priority then they are run in random order for the priority number. | [optional] 
**server_path** | **str** | The mount path to mount | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


