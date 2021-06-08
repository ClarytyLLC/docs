| Name | Type | Default Value | Environment Var | Description |
 | :--- | :--- | :--- | :--- | :--- |
 | *agentproxy.enabled* | bool | false |  | The enabled flag for agent proxy |
| *agentproxy.port* | int64 | 9580 | _AIWARE_AGENT_PROXY_PORT_ | The port for the agent proxy listener |
| *agentproxy.websocket.enabled* | bool | false |  | The enabled flag for agent to controller via websocket |
| *allow.insecure_https* | bool | true | _AIWARE_HTTPS_INSECURE_ | Engines to allow insecure HTTPS |
| *autoremove_engines* | bool | true | _AIWARE_AUTOREMOVE_ENGINES_ | If enabled, the docker container for engine instances will be removed after the engine instance completes |
| *enginetoolkit.timestamps_collection_enabled* | bool | false |  | Whether to collect timestamps of engine toolkit, default false |
