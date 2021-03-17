| Name | Type | Default Value | Environment Var | Description |
 | :--- | :--- | :--- | :--- | :--- |
 | *automate_cache_root* | string | automate | _AIWARE_AUTOMATE_SHARED_CACHE_ | The cache directory to shared node-red packages for node-red engines |
| *cache* | string | /cache | _AIWARE_CACHE_ | The the cache directory to mount NFS servers on each local box |
| *forecaster.recalc.interval_sec* | int64 | 300 |  | Interval seconds to recalculate ratios |
| *forecaster.shard.high_water_mark* | int64 | 2147483647 |  | Max NFS shard to include in ratio calculation |
| *forecaster.shard_blacklist* | string |  |  | *Secure* The NFS shards to blacklist, comma separated list of integer shards (starting at 1) |
| *nfs_mount_opts* | string | nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport,lookupcache=positive | _AIWARE_NFS_MOUNT_OPTS_ | Options to use in the export for NFS |
| *nfs_permitted* | string |  | _AIWARE_NFS_PERMITTED_ | Set to 10.* to permit 10.0.0.0/8 IPs otherwise unrestricted |
| *port* | int64 | 2049 | _AIWARE_NFS_PORT_ | This specifies port to use for NFS. |
| *root* | string | /opt/aiware/nfs | _AIWARE_NFS_ROOT_ | *Secure* The NFS Root to use on NFS Boxes |
