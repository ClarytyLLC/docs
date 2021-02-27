| Name | Type | Default Value | Environment Var | Description |
 | :--- | :--- | :--- | :--- | :--- |
 | *alertmanager.enable_update* | bool | false |  | enable prometheus alert manager config update and restart |
| *alertmanager.repeat_interval_min* | int64 | 30 |  | prometheus alert manager repeat interval in minutes |
| *autoscale.for_interval_min* | int64 | 15 |  | prometheus rules for auto-scale FOR: interval minutes |
| *image* | string | prom/prometheus:v2.21.0 | _AIWARE_PROMETZHEUS_IMAGE_ | This specifies docker image to use for the prometheus service.   |
| *port* | int64 | 9090 | _AIWARE_PROMETHEUS_PORT_ | This specifies port to use for NFS. |
| *root* | string | /opt/aiware/prometheus | _AIWARE_PROMETHEUS_ROOT_ | *Secure* The root to use for prometheus |
