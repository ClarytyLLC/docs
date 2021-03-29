| Name | Type | Default Value | Environment Var | Description |
 | :--- | :--- | :--- | :--- | :--- |
 | *admin.controller_public_url* | string |  | _AIWARE_CONTROLLER_PUBLIC_URL_ | The public URL of controller for external access of authorized AIWare resources |
| *admin.edge_ui_app_id* | string | 28066868-0e6a-4636-8a3d-9199d8ed2eda |  | The app ID for Edge UI, this value should not be empty if log in to our system by OAuth2 |
| *admin.edge_ui_session_timeout* | int64 | 3600000 |  | The expiration for a session on Edge admin UI in milliseconds |
| *awslogs_enabled* | bool | false | _AIWARE_AWSLOGS_ENABLED_ | When launching docker containers whether or not to use awslogs logger for docker.  For containers that are part of the agent role, this must be set as environment variables on agent startup. |
| *awslogs_group* | string | aiware | _AIWARE_AWSLOGS_GROUP_ | Group for AWSLOGS.  For containers that are part of the agent role, this must be set as environment variables on agent startup. |
| *awslogs_region* | string | us-east-1 | _AIWARE_AWSLOGS_REGION_ | Region for AWSLOGS.  For containers that are part of the agent role, this must be set as environment variables on agent startup. |
| *awslogs_stream* | string | computed | _AIWARE_AWSLOGS_GROUP_ | Stream for AWSLOGS.  For containers that are part of the agent role, this must be set as environment variables on agent startup. |
| *controller_urls* | string | http://localhost:9000/edge/v1 | _AIWARE_CONTROLLER_ | The URLs to use for controllers for the agents to connect with the aiWARE System |
| *environment* | string | aiware | _AIWARE_ENVIRONMENT_ | The environment name for this aiWARE edge install |
| *job_pruning_max_age_secs* | int64 | 432000 |  | The max age of a job after which a job will be pruned |
| *license* | string |  | _AIWARE_LICENSE_ | The aiWARE LICENSE to use for the system |
| *log_level* | string | info | _AIWARE_LOG_LEVEL_ | The log level to use for the system. Valid values - trace, debug, info, warn, error, fatal |
| *log_shipper* | string |  | _AIWARE_LOG_SHIPPER_ | The log shipper to use. Valid values - Filebeat |
| *shutdown_grace_period_sec* | int64 | 360 |  | The shutdown grace period before a host gets terminated |
| *slack_channel* | string |  | _AIWARE_SLACK_CHANNEL_ | The channel to use for notifications for slack |
| *slack_url* | string | no_url | _AIWARE_SLACK_URL_ | The url to use for notifications |
| *storage.type* | string | nfs |  | Type of the storage |
| *token.user.expiration_duration* | string | 24h |  | The expiration time for a user token in duration. This like `1m`, `1h`, ... |
| *update_host_status.interval_seconds* | int64 | 60 | _AIWARE_AGENT_UPDATE_INTERVAL_ | The interval between updates on the agent to controller |
| *upgrade.channel* | string | prod | _AIWARE_ADMIN_UPGRADE_CHANNEL_ | This is the channel to use for releases. Default is prod. |
| *upgrade.enabled* | string | false | _AIWARE_ADMIN_UPGRADE_ENABLED_ | If enabled, upgrade the agents and components to the latest for that channel |
| *upgrade.interval_seconds* | int64 | 900 | _AIWARE_ADMIN_UPGRADE_INTERVAL_SECONDS_ | If enabled, upgrade the agents and components to the latest for that channel |
| *upgrade.url* | string | https://get.aiware.com/dist | _AIWARE_ADMIN_UPGRADE_URL_ | This is the url to check for releases.  Default is https://get.aiware.com/dist. |
