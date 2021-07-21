# Cluster Deployment

## Architecture

A full aiWARE Anywhere cluster comes with 12 run modes. A run mode is the cluster role of that instance that can be one or many of the following: `api`, `controller`, `db`, `es`, `engine`, `lb`, `minio`, `nfs`, `nsq`, `prometheus`, `redis`, `registry` To run a minimal cluster that can run jobs and produce results, the controller, engine, PostgreSQL database (db) and NFS nodes are necessary. Prometheus is necessary for monitoring and providing dynamic targets. 

With aiWARE Anywhere, in addition to having the ability to run cognitive engines on a local platform or cluster, you can also have the power of indexing your job results, storing the data in long-term storage and have the history of jobs available to you. With the controller, you have the brains of the cluster. With the api node(s), you add the hard drive capabilities and potentially, the graphical user interface (GUI). 

## Dependencies

* OS:  Ubuntu 18.04, Ubuntu 20.04, macOS 10.14 (Mojave), macOS 10.15 (Catalina), macOS 11 (Big Sur), Red Hat 7 (Docker EE Highly Recommended <sup>[1](#red-hat-docker-install)</sup>)
* Minimum Requirement: Docker with 2 CPUs and 16GB of RAM (Expectation 1 engine running at a time)
* Recommended Requirement: Docker with 4 CPUs and 16GB of RAM (Expectation 1-2 engine running at a time)
  * [Docker on macOS Installation Guide](https://docs.docker.com/docker-for-mac/install/)
  * [Docker on Ubuntu Installation Guide](https://docs.docker.com/engine/install/ubuntu/)

## Terminology 

*Controller Node*: A controller node of aiWARE is a node that is running with the `controller` run mode activated. The `db` and `nfs` run modes are usually co-located with the controller node. The controller node is responsible for job coordination. In addition, the controller node hosts a UI to monitor a cluster. If you are running multiple controller nodes in a cluster, select a single instance for the `db` run mode. Currently, the `db` run mode does not support high availability (HA).

*Engine Node*: An engine node of aiWARE is a node that runs tasks for the aiWARE stack. These instances are usually dedicated instances in that they only have the `engine` run mode.

*Run Modes*: A run mode is a label that enables an aiWARE instance to run. Available run modes: `api`, `controller`, `db`, `es`, `engine`, `lb`, `minio`, `nfs`, `nsq`, `prometheus`, `redis`, `registry`

## Cluster Types

There are several cluster types available with aiWARE.

| Cluster Type | Run Modes | Description |
| ------------ | --------- | ----------- |
| `coreless`   | `controller`, `db`, `engine`, `nfs`, `prometheus`, `registry` | `coreless` is the minimum cluster footprint for cognitive processing. This mode does not support the long-term storage of job results. |
| `anywhere` | `api`, `controller`, `db`, `es`, `engine`, `lb`, `minio`, `nfs`, `nsq`, `prometheus`, `redis`, `registry` | `anywhere` is a full-stack of aiWARE. This includes the cognitive processing footprint. In addition, this cluster type allows for long-term storage of job results, training of datasets, and engine benchmarking among other tasks. |

* At a minimum, the `controller`, `engine`, `db`, `nfs`, `prometheus`, and `registry` run modes are required. Available run modes: `api`, `controller`, `db`, `es`, `engine`, `lb`, `minio`, `nfs`, `nsq`, `prometheus`, `redis`, `registry` 

## Controller Node

The `controller` instance should run a minimum of the `controller`, `nfs`, and `db` (unless you are utilizing a managed database service such as [AWS RDS](https://aws.amazon.com/rds/)). 
1. Open a Terminal window. 
   
    <div class="collapse-accordion"><ul><li>
    <input type="checkbox" id="list-item-1">
    <label for="list-item-1"><span class="expandText">Open a Terminal window.</span><span class="collapseText">Click here to close this section.</span></label>
    <ul>
    <li class="inner-content">
   macOS: This can be done by opening Spotlight (⌘ + space) and typing `Terminal` followed by pressing the return key.
   
   Ubuntu: Press `Ctrl` + `Alt` + `T` to open a terminal window.
   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Change to root user 

   The aiWARE installation needs elevated privileges to install

    <div class="collapse-accordion"><ul><li>
    <input type="checkbox" id="list-item-2">
    <label for="list-item-2"><span class="expandText">Change to root user.</span><span class="collapseText">Click here to close this section.</span></label>
    <ul>
    <li class="inner-content">

    ```bash
    sudo bash 
    ```

    The root access is specified in Ubuntu Linux by root@hostname. For macOS, root indicates that you have root access.

    <!-- make the screenshot smaller -->
    <img src="https://user-images.githubusercontent.com/65766301/122611396-e3314800-d09e-11eb-8ce0-7fd9fbc5c2c6.PNG" width="500" align="middle" alt="screenshot 1"/>

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Setup Environment Variables 

   Review the [environment variables](/aiware/install/envs) for all available environment variables.

   <div class="collapse-accordion"><ul><li>
   <input type="checkbox" id="list-item-3">
   <label for="list-item-3"><span class="expandText">Setup Environment Variables.</span><span class="collapseText">Click here to close this section.</span></label>
   <ul>
   <li class="inner-content">

   The following environment environments are necessary for an initial installation. `AIWARE_MODE` indicates the mode that should be installed. `AIWARE_HOST_EXPIRE` prevents instances in a cloud (such as AWS) from termination. aiWARE gives each instance a lifecycle. `AIWARE_INIT_TOKEN` provides the initial admin token for the installation. 

   ```bash
   export AIWARE_MODE=controller,db,nfs
   export AIWARE_HOST_EXPIRE=false
   export AIWARE_LICENSE=<LICENSE_KEY>
   export AIWARE_INIT_TOKEN=`uuidgen`

   echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"
   ```

   `uuidgen` should be a globally unique identifier. If you don't have 'uuidgen` installed on
 your local machine, [UUID Generator](https://www.uuidgenerator.net/) is an alternate source.

   Note that the value of `AIWARE_INIT_TOKEN` is important. This will be the "Bearer Token" that you'll need to authorize calls to `aiware-agent` later, so make sure you record this somewhere.

   For the remainder of the cluster, install aiWARE in the same fashion, changing the environment variable `AIWARE_MODE` to include one or many of the `registry`, `engine`, `prometheus`, `nfs`, etc.

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>


1. Run install command

    <div class="collapse-accordion"><ul><li>
    <input type="checkbox" id="list-item-4">
    <label for="list-item-4"><span class="expandText">aiWARE Installation.</span><span class="collapseText">Click here to close this section.</span></label>
    <ul>
    <li class="inner-content">

    ```bash
    curl -sfL https://get.aiware.com |  sh -
    ```

    This will install the aiware-agent as a service.

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Validate the Installation

   Validate service installation by ensuring that this admin node is active.

   <div class="collapse-accordion"><ul><li>
   <input type="checkbox" id="list-item-5">
   <label for="list-item-5"><span class="expandText">Validate aiWARE Installation.</span><span class="collapseText">Click here to close this section.</span></label>
   <ul>
   <li class="inner-content">

   Run: docker ps to validate `aiware-controller`, `aiware-postgres` are running

   Please note the IP of the Admin box and use it for the other systems.

   Go to http://<HOST>:9000/edge/v1/version, or curl localhost:9000/edge/v1/version, for aiWARE Edge version information.  This will return information such as :

   ```bash
   { "version": "Build number: , Build time: 2021-04-27_19:30:26, Build commit hash: b6e1b627c20489463f7dca463200649af1000222" }
   ```

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

This completes the installation of an controller node. You can deploy more than one controller node if required for high availability. The variable `AIWARE_INIT_TOKEN` will need to be used for the installation and addition of controller nodes. 

HA PostgreSQL databases are not yet available but coming soon. 

## Engine (Worker) Node

Please note the IP of the controller node above and use it for the other systems. Do this for each engine instance.

1. Open a Terminal window. 
   
    <div class="collapse-accordion"><ul><li>
    <input type="checkbox" id="list-item-6">
    <label for="list-item-6"><span class="expandText">Open a Terminal window.</span><span class="collapseText">Click here to close this section.</span></label>
    <ul>
    <li class="inner-content">
   macOS: This can be done by opening Spotlight (⌘ + space) and typing `Terminal` followed by pressing the return key.
   
   Ubuntu: Press `Ctrl` + `Alt` + `T` to open a terminal window.
   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Change to root user 

   The aiWARE installation needs elevated privileges to install

    <div class="collapse-accordion"><ul><li>
    <input type="checkbox" id="list-item-7">
    <label for="list-item-7"><span class="expandText">Change to root user.</span><span class="collapseText">Click here to close this section.</span></label>
    <ul>
    <li class="inner-content">

    ```bash
    sudo bash 
    ```

    The root access is specified in Ubuntu Linux by root@hostname. For macOS, root indicates that you have root access.

    <!-- make the screenshot smaller -->
    <img src="https://user-images.githubusercontent.com/65766301/122611396-e3314800-d09e-11eb-8ce0-7fd9fbc5c2c6.PNG" width="500" align="middle" alt="screenshot 1"/>

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Setup Environment Variables 

   Review the [environment variables](/aiware/install/envs) for all available environment variables.

   <div class="collapse-accordion"><ul><li>
   <input type="checkbox" id="list-item-8">
   <label for="list-item-8"><span class="expandText">Setup Environment Variables.</span><span class="collapseText">Click here to close this section.</span></label>
   <ul>
   <li class="inner-content">

   ```bash
   export AIWARE_MODE=engine
   export AIWARE_HOST_EXPIRE=false
   export AIWARE_LICENSE=<LICENSE_KEY>
   export AIWARE_CONTROLLER=http://IP_OF_ADMIN_NODE:9000/edge/v1
   export AIWARE_INIT_TOKEN=`uuidgen`

   echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"
   ```

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Run install command

    <div class="collapse-accordion"><ul><li>
    <input type="checkbox" id="list-item-9">
    <label for="list-item-9"><span class="expandText">aiWARE Installation.</span><span class="collapseText">Click here to close this section.</span></label>
    <ul>
    <li class="inner-content">

    ```bash
    curl -sfL https://get.aiware.com |  sh -
    ```

    This will install the aiware-agent as a service.

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Validate the installation

   Validate service installation by ensuring that this node is active.

   <div class="collapse-accordion"><ul><li>
   <input type="checkbox" id="list-item-10">
   <label for="list-item-10"><span class="expandText">Validate aiWARE installation.</span><span class="collapseText">Click here to close this section.</span></label>
   <ul>
   <li class="inner-content">

   ```bash
   ai host ls --type engine --format json
   ```

   This step requires the aiWARE CLI to be configured to connect to your cluster. The above will list active `engine` nodes in your cluster. Review the list to ensure that the newly added node is present.

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>


## Install aiWARE Anywhere
aiWARE Anywhere brings the full stack of aiWARE to your cluster. The installation of aiWARE Anywhere requires the additional run modes of `api`, `db`, `es`, `lb`, `minio`, `nsq`, `redis`. If you don't have these run modes available in your cluster, please follow [the guide](#engine-node) to install a worker node.
1. Run install command for aiWARE applications

   ```bash
   ai hub install core
   ```

   This will install the aiware-agent as a service. You can check the status via running `service aiware-agent status` command or monitor it in real-time with `watch service aiware-agent status`.

## Deployment Considerations

### Configure aiWARE CLI

This step is helpful if you are working with an aiWARE Anywhere installation that is not on your local environment or if you are managing multiple aiWARE Anywhere clusters. 

Requirements: The aiWARE application on your local environment. 

1. Create `~/.config/aiware-cli.yaml`. 

   ```bash
   ---
   profiles:
     default:
       url: "http://localhost:9000/edge/v1"
       token: "$AIWARE_INIT_TOKEN"
   ```

   Replace the hostname under `url` with the hostname of the admin node from the [Admin Node step](#admin-node).

2. Validate CLI

   Run the following to retrieve a list of hosts in your cluster.

   ```bash
   ai host ls
   ```

### User Management

Refer to the [users' management](/aiware/manage/users) for details on managing users and organizations.

### Database
An existing PostgreSQL server can replace a `db` node. The `postgres` will have a new schema named `edge` added to it. Access to the `postgres` database on a PostgreSQL server is required.

### NFS
If using the `nfs` run mode, you can check to see if NFS is set on your instance by running `exportfs`. `exportfs` should list `/opt/aiware/nfs` as an exported share.

### Docker
Many of the services that run in the cluster run in Docker containers. As such, ensure that there is enough disk space available for the Docker root directory (typically located at `/var/lib/docker`).

### GPU CUDA Engine Hosts

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
### Network Storage
We don't recommend using NAS or SAN for the `AIWARE_ROOT` which is typically `/opt/aiware`. NAS or SAN can be used for the cluster cache and can replace the `nfs` run mode. 
### Network
These are the network ports required if you have a firewall. 
#### Connections within aiWARE cluster
| Source Run Mode | Target Run Mode | Port | Description |
| --- | --- | --- | --- |
| DB | Controller | 9000 | HTTP/HTTPS, can be changed |
| DB | Registry | 5000 | HTTP, is used to pull engines and other containers |
| DB | NFS | 2049 | TCP - Access to /cache |
| Controller | Controller | 9000 | HTTP/HTTPS - API |
| Controller | Registry | 5000 | HTTP, is used to pull engines and other containers |
| Controller | DB | 5432 | TCP, This is used to connect to the database |
| Controller | Automate | 5000-6000 | HTTP, This is the proxying of the HTTP connections to Automate Studio |
| Controller | NFS | 2049 | TCP - Access to /cache |
| Controller | Redis | 6379 | TCP, redis |
| Controller | NSQ | 4150, 4151, 4160, 4161 | HTTP & TCP, NSQ |
| Engine | Controller | 9000 | HTTP/HTTPS - API |
| Engine | Registry | 5000 | HTTP, is used to pull engines and other containers |
| Engine | NFS | 2049 | TCP - Access to /cache |
| Prometheus | Controller | 9000 | HTTP/HTTPS - API |
| Prometheus | *all* | 8000 | HTTP, agent /metrics |
| Prometheus | Controller | 8001 | HTTP, controller /metrics |
| DB | Controller | 9000 | HTTP/HTTPS, can be changed |
| DB | Registry | 5000 | HTTP, is used to pull engines and other containers |
| DB | NFS | 2049 | TCP - Access to /cache |

### SSL Certificates 

To add a SSL certificate to an installation of aiWARE Anywhere, you'll need the following: 

* A CA bundle. This should be a file with the certificate authority's certificate and all intermediate certificate authority certificates in a chain. (ca.pem)
* A server certificate. (server.pem)
* A server certificate key. (server.pem.key)

The certificates are located in the directory <AIWARE_ROOT>/haproxy/certs. For a standard installation of aiWARE, `AIWARE_ROOT` is `/opt/aiware`. Here are the installation steps:

```bash

sudo su 
cd /opt/aiware/haproxy/certs
# Replace the following files, ca.pem, server.pem and server.pem.key
vi ca.pem # Paste the CA bundle 
vi server.pem # Paste the server's certificate
vi server.pem.key # Paste the server's key
# Restart HAProxy
docker restart haproxy
```

### SELinux
```
Coming soon
```
### Sizing Guide
```
Coming soon
```
### RAM
For the `prometheus` node(s), please consider the RAM necessary for that node. The metrics that are scraped from the entire cluster must be able to fit onto the RAM of an instance. Prometheus can crash when it runs out of memory. 
### Swap
We recommend adding swap space to the `engine` nodes at a minimum. Swap adds processing room when the RAM on the system has been exhausted. For the engines, adding swap will aid with the speed of processing jobs and tasks. 
### Storage Space
We recommend a minimum of 50GB for base installation. For the Docker root directory of an `engine` node(s), we recommend a minimum of 500GB disk space. The `registry` node(s) typically requires enough disk space to manage the images needed to run engines. We recommend at least 500GB for this node type. Please refer to the (Sizing Guide)[#sizing-guide] for more information about tuning for disk space.
### Registry
Currently, the `registry` node(s) is not swappable with an existing Docker Registry. 
### Backups
We recommend that you back up the `db` node as that is where the most important data is store. The engine Docker containers are ephemeral. For extending the lifespan of metrics, consider tuning the `prometheus` node(s) to be able to accommodate the time-series database. 
### aiWARE Anywhere
aiWARE Anywhere adds the `api`, `redis`, `elasticsearch`, `nsq`, `lb`, and `minio` run modes to an existing cluster. We recommend that you size your cluster according to the (Sizing Guide)[#sizing-guide]. 
### Disaster Recovery
```
Coming soon
```

## Known Issues

### Red Hat Docker Install
An incompatible version of Docker is found in the Red Hat repository. [Docker 18.03](https://docs.docker.com/engine/release-notes/18.03/) or newer are required for aiWARE. 

<style>
     p, ul, ol, li { font-size: 18px !important;}

label {
        color: #fff;
    }
    
    .markdown-section code {
        border-radius: 2px;
        color: #322;
        font-size: .8rem;
        margin: 0 2px;
        padding: 3px 5px;
        white-space: pre-wrap;
    }
    
    .collapse-accordion { width:83%; padding-bottom: 25px; }

    .collapse-accordion ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .collapse-accordion label {
        display: block;
        cursor: pointer;
        padding: 4px 32px;
        border: 1px solid #fff;
        border-radius: 7px;
        border-bottom: none;
        background-color: #1871E8;
        position: relative;
    }

    .collapse-accordion label:hover {
        background: #999;
    }

    .collapse-accordion label:after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        text-indent: -9999px;
        border-top: 1px solid #f2f2f2;
        border-left: 1px solid #f2f2f2;
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        text-decoration: none;
        color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transform: rotate(135deg);
        left: 10px;
        top: 50%;
        margin-top: -5px;
    }

    .collapse-accordion input[type="checkbox"]:checked+label:after {
        transform: rotate(-135deg);
        top: 20px;
    }

    .collapse-accordion input[type="radio"]:checked+label:after {
        transform: rotate(-135deg);
        top: 20px;
    }

    .collapse-accordion label.last {
        border-bottom: 1px solid #fff;
    }

    .collapse-accordion ul ul li {
        padding: 10px;
    }

    .inner-content p{
        font-size: 18px;
    }
    .inner-content *{
        font-size: 18px;
    }
    .inner-content code *{
       font-size: 14px;
    }


    .collapse-accordion input[type="checkBox"] {
        position: absolute;
        left: -9999px;
    }
    
    .collapse-accordion input[type="radio"] {
        position: absolute;
        left: -9999px;
    }

    .collapse-accordion input[type="checkBox"]~ul {
        height: 0;
        transform: scaleY(0);
      transition: transform .2s ease-out;
    }
    
    .collapse-accordion input[type="radio"]~ul {
        height: 0;
        transform: scaleY(0);
        transition: transform .5s ease-out;
    }

    .collapse-accordion input[type="checkBox"]:checked~ul {
        height: 100%;
        transform-origin: top;
        transition: transform .5s ease-out;
        transform: scaleY(1);
    }

   .collapse-accordion input[type="radio"]:checked~ul {
        height: 100%;
        transform-origin: top;
        transition: transform .2s ease-out;
        transform: scaleY(1);
    }

    .collapse-accordion input[type="checkBox"]:checked+label {
        background:#00a2ff;
        border-bottom: 1px solid #fff;
    }

    .collapse-accordion input[type="radio"]:checked+label {
        background: red;
        border-bottom: 1px solid #fff;
    }

    .collapse-accordion input[type="checkbox"]:checked+label .collapseText {
        display: block;
    }

   .collapse-accordion input[type="radio"]:checked+label .collapseText {
        display: block;
    }

    .collapse-accordion input[type="checkbox"]:checked+label .expandText {
        display: none;
    }

.collapse-accordion input[type="radio"]:checked+label .expandText {
        display: none;
    }

    .collapseText {
        display: none;
    }

.info {
  margin-top: 50px;
color: #000;
  font-size: 24px;
}
.info span {
  color: red;
}

li {
    font-size: 16px;
}
</style>

