# Pre-requisites
aiWARE requires a Linux box or Linux VM running on a supported chipset (ARM64 or AMD64). It is not natively compatible with Windows or MacOS. You can use Ubuntu Linux running on VirtualBox VM to achieve successful installation on a Mac.

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

# Supported Cloud Platforms
aiWARE can run on any environment that provides a linux VM.  aiWARE can be infrastructure or cloud-aware if run on a supported cloud platform.  Currently, aiWARE supports:
* AWS
* Azure (Coming Soon)

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