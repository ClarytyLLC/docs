| Name | Type | Default Value | Environment Var | Description |
 | :--- | :--- | :--- | :--- | :--- |
 | *alertmanager.enable_update* | bool | true |  | enable prometheus alert manager config update and reload |
| *alertmanager.repeat_interval_min* | int64 | 30 |  | prometheus alert manager repeat interval in minutes |
| *autoscale.for_interval_min* | int64 | 15 |  | prometheus rules for auto-scale FOR: interval minutes |
| *image* | string | prom/prometheus:v2.21.0 | _AIWARE_PROMETZHEUS_IMAGE_ | This specifies docker image to use for the prometheus service.   |
| *port* | int64 | 9090 | _AIWARE_PROMETHEUS_PORT_ | This specifies port to use for NFS. |
| *prometheus.enable_update* | bool | true |  | enable prometheus prometheus config update and reload |
| *prometheus.scrape_interval_sec* | int64 | 30 |  | prometheus scrape and evaluation interval seconds |
| *root* | string | /opt/aiware/prometheus | _AIWARE_PROMETHEUS_ROOT_ | *Secure* The root to use for prometheus |
