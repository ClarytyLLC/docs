# Pre-requisites
aiWARE requires a Linux box or Linux VM running on a supported chipset (ARM64 or AMD64). It is not natively compatible with Windows or MacOS. You can use Ubuntu Linux running on VirtualBox VM to achieve successful installation on a Mac.

# Environment Variables
These may be set before the agent installer is run.  At least `AIWARE_MODE` must be set.

| Variable | Default | Description |
|----------|---------|-------------|
| AIWARE_MODE | nil | This is the mode for the host.  This can be comma separated list of modes.  Valid values are: None (Default), All, Single, Engine, db, Controller, NFS, redis, nsq, api, service, lb | 
| INSTALL_AIWARE_SKIP_START | False | If true, the installer will not start aiWARE |
| INSTALL_AIWARE_SKIP_SERVICE | False | If true, the installer will not install aiWARE  as a service |
| AIWARE_GIT_VERSION | nil | If set, this specifies the git commit to use for the version |
| INSTALL_AIWARE_VERSION | nil | If set, this is the aiWARE version to use for the install |
| INSTALL_AIWARE_CHANNEL | prod | This specifies what channel to use for installation.  Options are prod, stage and dev. |
| INSTALL_AIWARE_BIN_DIR | /usr/local/bin | This specifies the location of the binary directory for aiWARE binaries |
| INSTALL_AIWARE_SYSTEMD_DIR | /etc/systemd/system | This specifies the systemd directory |
| INSTALL_AIWARE_NAME | agent | This will create the binary as `aiware-agent` |
| INSTALL_AIWARE_EXEC | nil | These are the arguments for `aiware-agent` |
| INSTALL_RELEASES_URL | https://get.aiware.com/dist | This is the url the installer will use to download the binaries |
| INSTALL_RELEASES_URL_PREFIX | dist | this is the prefix used for binaries |

## aiWARE Configuration Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| AIWARE_CONTROLLER | http://_LOCAL_IP_:9000/edge/v1 | URI to controller. Either config or AIWARE_CONTROLLER is required.  This will default to http://_IP_:9000/edge/v1 |
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
| AIWARE_MODE | None | This is the mode for the host.  This can be comma separated list.  Valid values are: None (Default), All, Single, Engine, Database, Controller, NFS |
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

# Network

## Connections within aiWARE cluster
| Source Run Mode | Target Run Mode | Port | Description |
| --- | --- | --- | --- |
| DB | Controller | 9000 | HTTP/HTTPS, can be changed |
| DB | Registry | 5000 | HTTP, this is used to pull engines and other containers |
| DB | NFS | 2049 | TCP - Access to /cache |
| Controller | Controller | 9000 | HTTP/HTTPS - API |
| Controller | Registry | 5000 | HTTP, this is used to pull engines and other containers |
| Controller | DB | 5432 | TCP, This is used to connect to the database |
| Controller | Automate | 5000-6000 | HTTP, This is the proxying of the HTTP connections to Automate Studio |
| Controller | NFS | 2049 | TCP - Access to /cache |
| Controller | Redis | 6379 | TCP, redis |
| Controller | NSQ | 4150, 4151, 4160, 4161 | HTTP & TCP, NSQ |
| Controller | ElasticSearch | 9200 | HTTP/HTTPS |
| Engine | Controller | 9000 | HTTP/HTTPS - API |
| Engine | Registry | 5000 | HTTP, this is used to pull engines and other containers |
| Engine | NFS | 2049 | TCP - Access to /cache |
| Prometheus | Controller | 9000 | HTTP/HTTPS - API |
| Prometheus | *all* | 8000 | HTTP, agent /metrics |
| Prometheus | Controller | 8001 | HTTP, controller /metrics |
| DB | Controller | 9000 | HTTP/HTTPS, can be changed |
| DB | Registry | 5000 | HTTP, this is used to pull engines and other containers |
| DB | NFS | 2049 | TCP - Access to /cache |

## Outgoing connections
| Type | Source | Target | Port(s) | Description
| ---- | ----- | ----- | ----- | ----- |
| Installation | VM | get.aiware.com | 443 | This is part of the installation scripts which retrieves install.sh and a binary for the agent.  This is hosted by cloudfront and s3. |
| Docker Registry | Registry, Engine | registry.central.aiware.com | 443 | his hosts the aiware docker images and engines.  This is hosted behind an ALB. |

To get the temporary IPs to whitelist and then remove, please whitelist the IPs from the `host` command.
```bash
host get.aiware.com
host registry.central.aiware.com
```

Example of the host command for `get.aiware.com`
```bash
host get.aiware.com                                                                                                                                                                                                                195ms  Wed Feb 24 14:14:28 2021
get.aiware.com is an alias for d1tukvcgurukjs.cloudfront.net.
d1tukvcgurukjs.cloudfront.net has address 99.84.79.126
d1tukvcgurukjs.cloudfront.net has address 99.84.79.26
d1tukvcgurukjs.cloudfront.net has address 99.84.79.35
d1tukvcgurukjs.cloudfront.net has address 99.84.79.52
d1tukvcgurukjs.cloudfront.net has IPv6 address 2600:9000:2163:e200:e:c4fd:a200:93a1
d1tukvcgurukjs.cloudfront.net has IPv6 address 2600:9000:2163:7600:e:c4fd:a200:93a1
d1tukvcgurukjs.cloudfront.net has IPv6 address 2600:9000:2163:6a00:e:c4fd:a200:93a1
d1tukvcgurukjs.cloudfront.net has IPv6 address 2600:9000:2163:3e00:e:c4fd:a200:93a1
d1tukvcgurukjs.cloudfront.net has IPv6 address 2600:9000:2163:2200:e:c4fd:a200:93a1
d1tukvcgurukjs.cloudfront.net has IPv6 address 2600:9000:2163:5800:e:c4fd:a200:93a1
d1tukvcgurukjs.cloudfront.net has IPv6 address 2600:9000:2163:3800:e:c4fd:a200:93a1
d1tukvcgurukjs.cloudfront.net has IPv6 address 2600:9000:2163:3400:e:c4fd:a200:93a1
```

## Exposed ports to clients

Currently, only the Controller API Port (9000) is exposed externally to the cluster.  Typically, a load balancer is installed
between the client and the Controllers either as port 80 or 443.

# Supported Operating Systems
* Ubuntu 18.04
* Ubuntu 20.04
* Red Hat 7.9

# Supported Cloud Platforms
aiWARE can run on any environment that provides a linux VM.  aiWARE can be infrastructure or cloud-aware if run on a supported cloud platform.  Currently, aiWARE supports:
* AWS
* Azure

# Minimum Hardware
* 8GB RAM
* 100GB root partition

# Required packages

* docker.io - For running docker containers
* nfs-common - For connecting to NFS servers
* uuid - for generating UUIDs
* awscli - if using AWS

```bash
# system should be current
apt-get update -y
apt-get upgrade -y

# install packages
apt-get install -y docker.io nfs-common awscli uuid
```

## NFS

```bash
apt-get install -y nfs-kernel-server
```

## Node statistics
aiWARE uses prometheus to collect host statistics.  To get these statistics, please include this in the startup of the server.

```bash
wget https://github.com/prometheus/node_exporter/releases/download/v1.0.1/node_exporter-1.0.1.linux-amd64.tar.gz
tar -xzf node_exporter-1.0.1.linux-amd64.tar.gz
service prometheus-node-exporter stop
cp node_exporter-1.0.1.linux-amd64/node_exporter /usr/bin/prometheus-node-exporter
curl https://get.aiware.com/files/nfs-prometheus-node-exporter -o prometheus-node-exporter
cp prometheus-node-exporter /etc/default
```

# Required directories

aiWARE by default installs into `/opt/aiware`.  This can be changed with `AIWARE_ROOT` environment variable.

# Known Issues
## 172.0.0.0/8 Are not supported

Currently `172.0.0.0.0/8` are not supported.  Please use `10.0.0.0/8` or `192.168.0.0/16` instead.
