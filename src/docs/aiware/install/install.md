# Install

## Dependencies

* Docker with 2 CPUs and 16GB of RAM
* OS:  Ubuntu 18.04, Ubuntu 20.04, Mac

## Environment variables for installation

| Variable | Default | Description |
|----------|---------|-------------|
| INSTALL_AIWARE_SKIP_START | false | If set to `true`, skip starting aiware |
| INSTALL_AIWARE_SKIP_SERVICE | false | If set to `true`, skip installing as a service on the host |
| INSTALL_AIWARE_VERSION | nil | If set, install this particular version |
| INSTALL_AIWARE_CHANNEL | stable | This install the latest version from a particular channel.  The channels are: dev, stage, stable |
| INSTALL_AIWARE_BIN_DIR | /usr/local/bin | Directory to install aiware-agent binary, links, and uninstall scripts |
| INSTALL_AIWARE_SYSTEMD_DIR | /etc/systemd/system | Directory for systemd service |
| INSTALL_AIWARE_EXEC | agent | command to pass to the service when starting.  By default it starts the agent |

## Install
1. Become root
    ```bash
    sudo bash
    ```

2. Set the variables
    ```bash

    export AIWARE_MODE=single
    export AIWARE_DB_PORT=5432 # if PG is running locally
    export AIWARE_CACHE=/opt/aiware/cache
    export AIWARE_DB_ROOT=/opt/aiware/postgres
    export AIWARE_REGISTRY_ROOT=/opt/aiware/registry
    export AIWARE_REGION=us-east-1 # only relevant if running in AWS
    export AIWARE_HOST_EXPIRE=false
    export AIWARE_INIT_TOKEN=`uuidgen` # generate a random UUID for edge token
    export AIWARE_CONTROLLER=http://IP_OF_NODE:9000/edge/v1 # primary ip of the node

    echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"
    ```

    Note that the value of `AIWARE_INIT_TOKEN` is important. This will be the "Bearer Token" that
    you'll need to authorize calls to `aiware-agent` later, so make sure you record this somewhere.

3. Run install command

    ```bash
    curl -sfL https://get.aiware.com | sh -
    ```

    This will install the aiware-agent as a service. You can check the status via running `service aiware-agent status` command, or monitor
    it in realtime with `watch service aiware-agent status`.

4. Validate install

    Run: docker ps -a . This should show the aiware-prom-alertmgr, aiware-prometheus, cadvisor, aiware-controller, aiware-postgres, & aiware-registry.

    You can connect to the database at localhost:5342, or whichever port that you have specified for AIWARE_DB_PORT, with postgres/postgres as the username/password.

    Run: docker logs -tf aiware-controller, to see the activity of aiware-controller.

    Go to http://<HOST>:9000/edge/v1/version, or curl localhost:9000/edge/v1/version, for aiWARE Edge version information.  This will return information such as :

    { "version": "---
    build_date: Tue Feb 4 22:52:57 UTC 2020
    git_repo: realtime
    git_branch: HEAD
    git_commit: f8a8130c88b8ed5b0e50a8f26bf45d5d9b1a22e1
    git_author: al
    build_url: https://jenkins.veritone.com/job/aiware/job/edge-controller/1281/
    build_number: 1281
    " }


    Run a test Job:
    ai job create --help, to see how you can run a job.
    ai job get --help, to see how you can get job info.

5. Run install command for aiWARE applications

    ```bash
    /usr/local/bin/aiware-agent --controller-token $AIWARE_INIT_TOKEN hub install core --channel stable
    ```

    This will install the aiware-agent as a service. You can check the status via running `service aiware-agent status` command, or monitor
    it in realtime with `watch service aiware-agent status`.


## Optional User Data Components

### Logging to ElasticSearch (Optional)
```bash
cat >/var/local/fluent-bit.conf <<EOF
[SERVICE]
    Flush         1
    Log_Level     info
    Daemon        off
    HTTP_Server   On
    HTTP_Listen   0.0.0.0
    HTTP_Port     2020

[INPUT]
    Name              tail
    Path              /var/lib/docker/containers/*/*.log
    DB                /var/log/flb.db
    Mem_Buf_Limit     5MB
    Skip_Long_Lines   On
    Refresh_Interval  10

[OUTPUT]
    Name            es
    Host            elasticsearch
    Port            9200
    Logstash_Format On
    Logstash_Prefix v3f-prod1-nfs
    Type            flb_type
    Time_Key        @timestamp
    Retry_Limit     False
EOF

docker run -d --name fluent-bit -v /var/lib/docker/containers:/var/lib/docker/containers -v /var/local/fluent-bit.conf:/fluent-bit/etc/fluent-bit.conf fluent/fluent-bit:1.4
```

### Node Exporter (Recommended)

This is used to provide OS level information about the host.

```bash
apt-get install -y prometheus-node-exporter
wget https://github.com/prometheus/node_exporter/releases/download/v0.18.1/node_exporter-0.18.1.linux-amd64.tar.gz
tar -xzf node_exporter-0.18.1.linux-amd64.tar.gz
service prometheus-node-exporter stop
cp node_exporter-0.18.1.linux-amd64/node_exporter /usr/bin/prometheus-node-exporter
curl https://get.aiware.com/files/nfs-prometheus-node-exporter -o prometheus-node-exporter
cp prometheus-node-exporter /etc/default
service prometheus-node-exporter start
```

Sample /etc/default/nfs-prometheus-node-exporter.  This is what is persisted at [https://get.aiware.com/files/nfs-prometheus-node-exporter](https://get.aiware.com/files/nfs-prometheus-node-exporter)
```bash
ARGS="--collector.diskstats.ignored-devices=^(ram|loop|fd|(h|s|v|xv)d[a-z]|nvme\\d+n\\d+p)\\d+$ \
      --collector.filesystem.ignored-mount-points=^/(sys|proc|dev|run)($|/) \
      --collector.netdev.ignored-devices=^lo$ \
      --collector.textfile.directory=/var/lib/prometheus/node-exporter \
      --collector.nfs \
      "
```

### Example User Data
```bash
#!/bin/bash

# Env Vars
export AIWARE_MODE="nfs"
export INSTALL_AIWARE_CHANNEL=prod
export AIWARE_SERVERTYPE=62f55bfd-e2f8-4c90-8d1c-84c52a144a43
export AIWARE_CONTROLLER="https://edge-prod.aws-prod-rt.veritone.com/edge/v1"

# Mount disks
mkfs -t ext4 /dev/xvdd
mkdir -p /opt/aiware
mount /dev/xvdd /opt/aiware
mkswap /dev/xvdc
swapon /dev/xvdc


# Install base packages
apt-get update && apt-get upgrade -y && apt-get install -y docker.io awscli nfs-common nfs-kernel-server prometheus-node-exporter

# Install Node Exporter
cd /tmp
wget https://github.com/prometheus/node_exporter/releases/download/v0.18.1/node_exporter-0.18.1.linux-amd64.tar.gz
tar -xzf node_exporter-0.18.1.linux-amd64.tar.gz  # Install from tgz as ubuntu package repo is really old
service prometheus-node-exporter stop
cp node_exporter-0.18.1.linux-amd64/node_exporter /usr/bin/prometheus-node-exporter
curl https://get.aiware.com/files/nfs-prometheus-node-exporter -o prometheus-node-exporter
cp prometheus-node-exporter /etc/default
service prometheus-node-exporter start

# Run aiware install for the service
curl -sfL https://get.aiware.com | bash -
```

## GPU CUDA Engine Hosts

For aiWARE to launch engines with nvidia GPUs, the following must be met:
* At least Docker 19.0.3
* nvidia-cuda-toolkit installed
* nvidia-driver-XXX installed (at least 450)
* nvidia-container-runtime
* Normal requirements for engine server met


This is an example user data for GPUs on Ubuntu 20.04:

```bash
curl -s -L https://nvidia.github.io/nvidia-container-runtime/gpgkey | apt-key add -
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-container-runtime/$distribution/nvidia-container-runtime.list | tee /etc/apt/sources.list.d/nvidia-container-runtime.list
apt-get update && apt-get upgrade -y

apt-get install -y golang nvidia-cuda-toolkit nfs-common nvidia-driver-450 nvidia-container-runtime docker.io
service docker restart

# test it
docker run -it --rm --gpus all ubuntu nvidia-smi
```