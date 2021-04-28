<!-- markdownlint-disable -->
# How to Install aiWARE Edge

This page describes how to install, configure, and validate an instance of Veritone aiWARE Edge (Coreless) for use in a fully network-isolated deployment.

## Prerequisites

This procedure requires a Linux machine (physical or virtual) running on a supported chipset (ARM64, x86, or AMD64).

> You can use Ubuntu Linux running on VirtualBox VM to achieve successful installation on a Mac.

Specifically, you will need a machine with:

* 2 x CPU, 8-Cores each Intel Xeon or similar
* 32GB RAM DDR4
* At least 400GB of disk space per box
* Ubuntu Linux 18.04 or higher

## Machine Configuration

Before proceeding, please ensure that the following required setup actions have been completed on each physical/virtual machine before proceeding with the aiWARE Edge installation.

| **#** | **Action** | **Commands** |
| --- | --- | --- |
| 1) | Install docker.io, nfs-common, awscli, &amp; uuid packages | apt-get update -yapt-get upgrade -yapt-get install -y docker.io nfs-commonapt-get install -y awscli uuid |
| 2) | Create aiWARE directory and mount disk | mkdir -p /opt/aiware# Replace sdXX with a data disk. If all on the root disk, skip the belowmkfs.ext4 /dev/sdXXmount /dev/sdXX /opt/aiware |
| 3) | Create local directories | mkdir -p |
| 4) | Map /cache | # Only on the single node and admin nodeln -s /opt/aiware/nfs /cache |
| 5) | Install Logging Components (optional) | apt-get install -y prometheus-node-exporter |
| 6) | Firewall | Please either disable the firewall (ufw disable) or enable the following ports:<br/> --2049, 5432, 8000, 8001, 9000, 9001, 9090, 9093
 |

## Installation

Run Mode: Single Node

**Step 1: Elevate Permissions to Root**

`sudo bash`

This will ensure that all following steps are executed as root.

**Step 2: Setup Environment Variables &amp; Directories**

```bash
export AIWARE_MODE=single

export AIWARE_DB_PORT=5432 # if PG is running locally

export AIWARE_CACHE=/opt/aiware/cache

export AIWARE_DB_ROOT=/opt/aiware/postgres

export AIWARE_REGISTRY_ROOT=/opt/aiware/registry

export AIWARE_REGION=us-east-1 # only relevant if running in AWS

export AIWARE_HOST_EXPIRE=false

export AIWARE_INIT_TOKEN

export AIWARE_CONTROLLER=http://IP_OF_NODE:9000/edge/v1
```

!> NOTE: Do not use a loopback IP address in conjunction with port 9000.

**Step 3: Run Installation Command**

`curl -sfL https://get.aiware.com | sh -`

This will install the `aiware-agent` as a service. You can check the status via service aiware-agent status.

**Step 4: Validate the Installation**

1. Run: `docker ps -a .` This should show the aiware-prom-alertmgr, aiware-prometheus, cadvisor, aiware-controller, aiware-postgres, &amp; aiware-registry.

1. You can connect to the database at `localhost:5342`, or whichever port that you have specified for AIWARE\_DB\_PORT, with postgres/postgres as the username/password.

1. Run: `docker logs -tf aiware-controller` to see the activity of aiware-controller.

1. Go to [http://\&lt;HOST\&gt;:9000/edge/v1/version](http://10.10.7.92:9000/edge/v1/version), or `curl localhost:9000/edge/v1/version`, for aiWARE Edge version information.  This will return information such as :

```
{ 
&quot;version&quot;: &quot;---&quot;

build\_date: Tue Feb 4 22:52:57 UTC 2020

git\_repo: realtime

git\_branch: HEAD

git\_commit: f8a8130c88b8ed5b0e50a8f26bf45d5d9b1a22e1

git\_author: aa

build\_url: https://jenkins.veritone.com/job/aiware/job/edge-controller/1281/

build\_number: 1281

}
```

Useful commands:
  1. `ai job create --help`, to see how you can run a job.
  2. `ai job get --help`, to see how you can get job info.

### Appendix

#### Environment Variables

| **Variable** | **Default Value** | **Description** |
| --- | --- | --- |
| AIWARE\_CONTROLLER | nil | URI to controller. Either config or AIWARE\_CONTROLLER is required |
| AIWARE\_LOG\_LEVEL | info | The API Token to use with controller |
| AIWARE\_LICENSE | nil | The license key for aiWARE |
| AIWARE\_CORE\_TOKEN | nil | Token for aiWARE CORE |
| AIWARE\_CLUSTERID | nil | Cluster Id for aiWARE CORE |
| AIWARE\_CORE\_URL | [https://api.veritone.com/v3/graphql](https://api.veritone.com/v3/graphql) | URL for Veritone API |
| AIWARE\_HOST\_IP | nil | Agent will use this IP instead of trying to figure out which IP to use if the host has multiple |
| AIWARE\_DB\_MIGRATE | Migrate the Database if it is on an older or non-existent schema version |   |
| AIWARE\_MODE | None | This is the mode for the host. This can be comma separated list. Valid values are: None (Default), All, Single, Engine, Database, Controller, NFS, Docker |
| AIWARE\_SERVER\_TYPE | Nil | This defaults to the host type from the cloud provider. |
| AIWARE\_NFS\_ROOT | /opt/aiware/nfs | This is the default directory for serving NFS /cache |
| AIWARE\_CACHE | /cache | This is the directory used for cache |
| AIWARE\_HOST\_EXPIRE | true | If yes or true, this host will expire. If any other value, then the host will not expire |
| AIWARE\_AUTOREMOVE\_ENGINES | true | This sets AutoRemove on the docker containers after they exit |
| AIWARE\_DB\_HOST | localhost | The port to use when launching PG |
| AIWARE\_DB\_PORT | 5432 | The port to use when launching PG |
| AIWARE\_DB\_USERNAME | postgres | The username to use when launching Postgres |
| AIWARE\_DB\_PASSWORD | postgres | The password to use when launching Postgres |
| AIWARE\_DB\_DBNAME | postgres | The database to use for postgres |
| AIWARE\_DB\_ROOT | /opt/aiware/postgres | The postgres root |
| AIWARE\_DB\_IMAGE | postgres:11 | The postgres image to launch |
| AIWARE\_DB\_MAX\_OPEN | 19 | Max open connections |
| AIWARE\_DB\_MAX\_IDLE | 2 | Max idle connections |
| AIWARE\_NFS\_ROOT | /opt/aiware/nfs | The nfs root |
| AIWARE\_NFS\_PERMITTED | empty | Set to 10.\* to permit 10.0.0.0/8 IPs otherwise unrestricted |
| AIWARE\_NFS\_MOUNT\_OPTS | nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport,lookupcache=positive | Options used for mount the NFS shares |
| AIWARE\_REGISTRY\_ROOT | /opt/aiware/registry | The registry root |
| AIWARE\_REGISTRY\_PORT | 9001 | The port to use when launching the docker registry |
| AIWARE\_REGISTRY\_IMAGE | registry:latest |   |
| AIWARE\_CONTROLLER\_PORT | 9000 | The port to use when launching controller |
| AIWARE\_CONTROLLER\_IMAGE | aiware-controller:latest | The image to use when launching controller |
| AIWARE\_CORE\_URL | NULL |   |
| AIWARE\_CONTROLLER\_AUTH\_DISABLED | NULL | Disable authentication |
| AIWARE\_PROMETHEUS\_IMAGE | prom/prometheus:v2.14.0 | The prometheus image to launch |
| AIWARE\_PROMETHEUS\_PORT | 9090 | The port to use for prometheus |
| AIWARE\_PROMETHEUS\_ROOT | /opt/aiware/prometheus | The directory that will be used for /etc/prometheus |
| AIWARE\_AWSLOGS\_ENABLED | false | Enable AWSLOGS/Cloudwatch for agents |
| AIWARE\_AWSLOGS\_REGION | us-east-1 | Region for the logs |
| AIWARE\_AWSLOGS\_GROUP | aiware | Log group for the logs |
| AIWARE\_AWSLOGS\_STREAM | v3f | Log stream to use |