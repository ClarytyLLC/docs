| Name | Type | Default Value | Environment Var | Description |
 | :--- | :--- | :--- | :--- | :--- |
 | *host* | string | local.aiware.com | _AIWARE_DOMAIN_NAME_ | This specifies the host for the load balancer |
| *port* | int64 | 8443 |  | This is the port to use for haproxy |
| *protocol* | string | https |  | This specifies the the protocol to use.  This has to be http or https |
| *root* | string | /opt/aiware/haproxy | _AIWARE_HAPROXY_ROOT_ | This specifies the filesystem root to use for haproxy |
| *subdomains* | bool | true |  | If true, this allows subdomains for haproxy such as minio.local.aiware.com |
