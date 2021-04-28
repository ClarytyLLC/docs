# Install

To install aiWARE Agent, run

```bash
curl -sfL https://get.aiware.com | sudo sh -
```

## Environment variables for installation

| Variable | Default | Description |
|----------|---------|-------------|
| INSTALL_AIWARE_SKIP_START | false | If set to `true`, skip starting aiware |
| INSTALL_AIWARE_SKIP_SERVICE | false | If set to `true`, skip installing as a service on the host |
| INSTALL_AIWARE_VERSION | nil | If set, install this particular version |
| INSTALL_AIWARE_CHANNEL | prod | This install the latest version from a particular channel.  The channels are: dev, stage, prod |
| INSTALL_AIWARE_BIN_DIR | /usr/local/bin | Directory to install aiware-agent binary, links, and uninstall scripts |
| INSTALL_AIWARE_SYSTEMD_DIR | /etc/systemd/system | Directory for systemd service |
| INSTALL_AIWARE_EXEC | agent | command to pass to the service when starting.  By default it starts the agent |

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