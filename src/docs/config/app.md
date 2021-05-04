| Name | Type | Default Value | Environment Var | Description |
 | :--- | :--- | :--- | :--- | :--- |
 | *domain* | string | local.aiware.com | _AIWARE_DOMAIN_NAME_ | This is the host and domain name used for aiWARE Load Balancer(s).  Applications will need a root. This will be provided as part of the environment variables (AIWARE_DOMAIN_NAME) to services and engines. |
| *haproxy_configrefresh* | int64 | 60 | _AIWARE_HAPROXY_CONFIGREFRESH_ | The time period betwen HAProxy configuration refreshes |
| *haproxy_root* | string | /opt/aiware/haproxy | _AIWARE_HAPROXY_ROOT_ | This specifies the filesystem root to use for haproxy |
