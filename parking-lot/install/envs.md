# Environment Variables
These must be set before curl is run to install the agent.

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| AIWARE_CONTROLLER | nil | URI to controller. Either config or AIWARE_CONTROLLER is required |
| AIWARE_LOG_LEVEL | info | The API Token to use with controller |
| AIWARE_LICENSE | nil | The license key for aiWARE |
| AIWARE_CORE_TOKEN | nil | Token |
| AIWARE_CLUSTERID | nil | Cluster Id |
| AIWARE_CORE_URL | https://api.veritone.com/v3/graphql | URL for Veritone API |
| AIWARE_HOST_IP | nil | Agent will use this IP instead of trying to figure out which IP to use if the host has multiple |
| AIWARE_SLACK_URL | nil | Slack URL to use |
| AIWARE_SLACK_CHANNEL | nil | If enabled, will use the default slack channel |
| AIWARE_ENVIRONMENT | local | The name of the environment |
| AIWARE_DB_MIGRATE | Migrate the DB UP first thing |
| AIWARE_MODE | None | This is the mode for the host.  This can be comma separated list.  Valid values are: None (Default), All, Single, Engine, Database, Controller, NFS, Docker |
| AIWARE_SERVER_TYPE | Nil | This defaults to the host type from the cloud provider.
| AIWARE_NFS_ROOT | /data | This is the default directory for serving NFS /cache |
| AIWARE_RUN_CONFIG | /var/run/aiware-agent.json | |
| AIWARE_CACHE | /cache | This is the directory used for cache |
| AIWARE_HOST_EXPIRE | true | If yes or true, this host will expire.  If any other value, then the host will not expire |
| AIWARE_AUTOREMOVE_ENGINES | true | This sets AutoRemove on the docker containers after they exit |
| AIWARE_REGISTRY_ROOT | /opt/aiware/registry | The registry root |
| AIWARE_REGISTRY_PORT | 9001 | The port to use when launching the docker registry |
| AIWARE_REGISTRY_IMAGE | registry:latest | |
| AIWARE_CONTROLLER_PORT | 9000 | The port to use when launching controller |
| AIWARE_CONTROLLER_IMAGE | aiware-controller:latest | The image to use when launching controller |
| AIWARE_CONTROLLER_AUTH_DISABLED | NULL | Disable authentication |
| AIWARE_CONTROLLER_PRIMARY_DISABLE | false | Disables primary for controller |
| AIWARE_PROMETHEUS_IMAGE | prom/prometheus:v2.14.0 | The prometheus image to launch |
| AIWARE_PROMETHEUS_PORT | 9090 | The port to use for prometheus |
| AIWARE_PROMETHEUS_ROOT | /opt/aiware/prometheus | The directory that will be used for /etc/prometheus |
| AIWARE_AWSLOGS_ENABLED | false | Enable AWSLOGS/Cloudwatch for agents |
| AIWARE_AWSLOGS_REGION | us-east-1 | Region for the logs |
| AIWARE_AWSLOGS_GROUP | aiware | Log group for the logs |
| AIWARE_AWSLOGS_STREAM | v3f | Log stream to use |
| AIWARE_ES_IMAGE | docker.elastic.co/elasticsearch/elasticsearch | ElasticSearch Docker image to launch |
| AIWARE_ES_VERSION | 7.7.1 | ElasticSearch version to launch |
| AIWARE_ES_PORT | 9200 | Port to use for ElasticSearch |
| AIWARE_ES_HOST | localhost | Host to use for ElasticSearch |
| AIWARE_ES_DISCOVERYTYPE | single-mode | The mode of ElasticSearch to run. Currently only single-mode is available. Works only with elasticsearch mode |
| AIWARE_ES_DATA | /opt/aiware/elasticsearch | The root directory for ElasticSearch. Works only with elasticsearch mode |
| AIWARE_ES_MASTER | true | If the node is a master node for ElasticSearch. Works only with elasticsearch mode |
| AIWARE_ES_MEMORYLOCK | true | Memory lock of heap space during garbage collection. Works only with elasticsearch mode |
| AIWARE_ES_CLUSTERNAME | aiware-elasticsearch | The name of the ElasticSearch cluster. Works only with elasticsearch mode |
| AIWARE_ES_HEAPSIZE | 1g | Heap size of Elasticsearch. Works only with elasticsearch mode |
| AIWARE_LOG_SHIPPER | beats | Type of log shipper to use |
| AIWARE_INIT_TOKEN | none | If set, the controller on startup will create this token |

## Environment Variables for Engines Launched

| Variable | Default | Description | Availble |
|----------|---------|-------------|----------|
| AIWARE_CONTROLLER | nil | URI to controller. Either config or AIWARE_CONTROLLER is required | Engine Toolkit Only |
| AIWARE_HOST_ID | <hostId> | HostId | All |
| AIWARE_ID | <launchId> | Launch Id Request | All |
| AIWARE_LICENSE | | License Key for Engine Toolkit | Engine Toolkit Only |
| AIWARE_EXPIRATION | NOW()+900 | Expiration time for the Engine Toolkit | All |
| AIWARE_ENGINE_ID | <engineId> | | All |
| AIWARE_ENGINE_SCRATCH | /cache/engine/<engineId>/scratch | | All |
| AIWARE_ENGINE_INSTANCE_SCRATCH | /cache/engine/<engineId>/<launchId> | | All |
