# Install aiWARE on Cluster

**APPROXIMATE READING TIME: **30 Minutes

## Before we begin  <!-- {docsify-ignore} -->

If you're new to Veritone aiWARE, we will recommend you to read about aiWARE and its benefits here

[aiWARE Overview]()

[aiWARE Benefits]()

[aiWARE-in-depth]()

## Installing aiWARE on Cluster  <!-- {docsify-ignore} -->

In this step by step tutorial we will explain how to install aiWARE operating system on a cluster. A full aiWARE Anywhere cluster comes with 12 run modes. A run mode is the cluster role of that instance that can be one or many of the following: `api`, `controller`, `db`, `es`, `engine`, `lb`, `minio`, `nfs`, `nsq`, `prometheus`, `redis`, `registry`.

To run a minimal cluster that can run jobs and produce results. An `admin` instance should run the minimum of the  aiWARE `controller`, `nfs` and `db` functionalities  while a worker nodes handles core functionalities for all the aiWARE applications.


## Expected Result <!-- {docsify-ignore} -->

After following this step-by step tutorial you will be able to successfully install aiWARE as a service on a cluster and test its  functionalities .

## Steps  <!-- {docsify-ignore} -->

### System Requirements

At a minimum three Linux Instances are required. One for Admin node ,worker node and aiWARE core functionalities . You can have more admin nodes and worker nodes deployed for better availability and performance.

- Preferred Linux OS for nodes : Ubuntu 18.04 or Ubuntu 20.04, Red Hat 7 (Requires Docker EE)
- Minimum Requirement for Admin Node : 2 CPUs, 20Gb of Initial Storage Space, and 4GB of RAM

- Minimum Requirements for Worker Node: 2CPUs, 20Gb of Initial Storage Space, and 4GB of RAM

- Minimum Requirements for aiWARE core Node: 2CPUs, 100Gb of Initial Storage Space, and 4GB of RAM

  Note :The above mentioned node requirements are just the starting points to initalize an aiWARE cluster .You will require additional system resources depending on the number of engines and run modes deployed.

## Setting up the Admin Node  <!-- {docsify-ignore} -->

### Step 1 : Open Terminal

Open Terminal and elevate command execution permissions to root using the command

Ubuntu: Press `Ctrl` + `Alt` + `T` to open a terminal window.

```
sudo bash
```

  This will ensure that all the steps are executed as root.

Screenshot 1

### Step 2: Install Docker and dependencies

aiWARE resources are packaged and deployed as [Docker](https://www.docker.com/) containers, so to initialize aiWARE ,docker and external dependencies are required,

To install docker and dependencies:

1)Copy the below command to the terminal and press enter to update the package information from all of the configured sources  

```bash
sudo apt update -y
```

Screenshot after execution:

screenshot 2

2) Install Docker and other external packages  using the below command

```
sudo apt install docker.io nfs-common awscli uuid prometheus-node-exporter -y
```

Response: This may take a minute or two .Here is the screenshot after successful installation

Screenshot 3

3)To verify whether the docker has installed enter:

```
docker --version
```

On successful installation the output would be like this

```
Docker version 20.10.2, build 20.10.2-0ubuntu1~20.04.2

```

### Step 3: Set up Variables

A Admin node should run a minimum of the `controller`, `nfs` and `db` run modes .

The below command will  setup different variables for these run modes and output the value of `AIWARE_INIT_TOKEN`   which will be required for installation and addition of admin nodes. Make sure to copy your `AIWARE_INIT_TOKEN` value somewhere safe.

```bash
export AIWARE_MODE=controller,db,nfs
export AIWARE_HOST_EXPIRE=false
export AIWARE_LICENSE=<LICENSE_KEY>
export AIWARE_INIT_TOKEN=`uuidgen`
echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"

```

Response: The value for our token is

```
843489f6-ecff-4d19-95b0-2359eff60ec8
```

### Step 4: Install the aiWARE agent

1.Now install the aiware-agent as a service using the following command

```bash
curl -sfL https://get.aiware.com |  sh -
```

Response after successful installation:

Screenshot 5

### Step 6: Validate Admin node

1.Run the following docker command to check the container status for running and non running aiWARE containers

```
docker ps -a
```

Response;

The response should show the `aiware-controller`, `aiware-postgres` container running.

screenshot 6

3.Go to http://:9000/edge/v1/version, or curl localhost:9000/edge/v1/version, for aiWARE Edge version information.

Response:

```
root@veritone-admin:/home/ubuntu# curl localhost:9000/edge/v1/version
{ "version": "Build number: , Build time: 2021-06-16_20:09:55, Build commit hash: dd27e7cf925434a9e3e6bcd0fc56f0f41b15308f" }
```

## Setting up the Worker Node <!-- {docsify-ignore} -->

### Step 1 : Open Terminal

Open Terminal in another ubuntu machine/instance and elevate command execution permissions to root using the command

```
sudo bash
```

  This will ensure that all the steps are executed as root.

Screenshot 7

### Step 2: Install Docker and dependencies

aiWARE resources are packaged and deployed as [Docker](https://www.docker.com/) containers, so to initialize aiWARE ,docker and external dependencies are required,

To install docker and dependencies:

1)Copy the below command to the terminal and press enter to update the package information from all of the configured sources  

```bash
sudo apt update -y
```

Screenshot after successful execution:

screenshot 8

2) Install Docker and other external packages  using the below command

```
sudo apt install docker.io nfs-common awscli uuid prometheus-node-exporter -y
```

Response: This may take a minute or two .Here is the screenshot after successful installation

Screenshot 9

3)To verify whether the docker has installed enter:

```
docker --version
```

On successful installation the output would be like this

```
Docker version 20.10.2, build 20.10.2-0ubuntu1~20.04.2

```

### Step 3: Set up Variables

A Worker node can consist of various run modes. We will install the `engine` run mode and initialize communication with admin node we just setup .

The below commands will  setup different variables for aiWARE `engine` run mode.

Note: Replace the value of the variable `IP_OF_ADMIN_NODE ` and `AIWARE_INIT_TOKEN` in the below command with the internal IP and `AIWARE_INIT_TOKEN`of  your admin node.The internal IP can be fetched by running the `ifconfig` command on your admin machine.


```bash
export AIWARE_MODE=engine
export AIWARE_HOST_EXPIRE=false
export AIWARE_LICENSE=<LICENSE_KEY>
export AIWARE_CONTROLLER=http://<IP_OF_ADMIN_NODE>:9000/edge/v1
export AIWARE_INIT_TOKEN=843489f6-ecff-4d19-95b0-2359eff60ec8  //replace this with your aiWARE token    echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"
```



### Step 4: Install the aiWARE agent

1.Now install the aiware-agent as a service using the following command

```bash
curl -sfL https://get.aiware.com | sudo -E sh -
```

screenshot 5

### Step 5: Validate worker node

To check whether worker node is working

1.[Configure aiWARE CLI](https://docs.veritone.com/#/aiware/install/cluster?id=configure-aiware-cli) by creating a `aiware-cli.yaml `  in the `~/.config`.directory. Add the below text to the file

```bash
---
profiles:
  default:
    url: "http://localhost:9000/edge/v1"
    token: "$AIWARE_INIT_TOKEN"
```

Replace the `localhost`  under `url` with the Internal IP of the admin node. Also replace `$AIWARE_INIT_TOKEN` value with admin node aiWARE token value.

2.Save the changes to the yaml file  and run the following command

```
ai host ls --type engine --format json
```

If the worker node is properly running the response should output a json response like below :

Note: The below response is formatted ,you might recieve unformatted output when running the above command.

```
{
   "Count":1,
   "Error":{
      "Description":"",
      "Detail":"",
      "Id":""
   },
   "Limit":100,
   "Offset":0,
   "Result":[
      {
         "AgentCommitID":"dd27e7cf925434a9e3e6bcd0fc56f0f41b15308f",
         "AgentLabel":"agent:eng",
         "AgentVersionNumber":"3.19.1.2878",
         "CloudProviderInstanceID":"i-06761dc2d218b46a2",
         "ControllerPort":9000,
         "CreatedDateTime":"2021-06-23T18:22:46Z",
         "DbPort":5432,
         "DockerHostID":"5S3C:V2FV:YQGE:EFWY:XMKX:GMZP:B7S6:K3LH:XZCP:TUKN:EUA5:PFFV",
         "DockerInfo":"
         "Drain":false,
         "DrainDetail":"",
         "DrainReason":"",
         "ExpirationDateTime":"2021-06-24T07:37:32Z",
         "GpuAvailable":0,
         "GpuType":"",
         "HostID":"be564a0d-158f-4439-87c3-99a4c3be83ed",
         "Ips":[
            "172.31.34.19"
         ],
         "IsAPI":false,
         "IsActive":true,
         "IsApps":false,
         "IsAssigned":true,
         "IsAutomate":false,
         "IsController":false,
         "IsDB":false,
         "IsES":false,
         "IsEngine":true,
         "IsEventing":false,
         "IsLB":false,
         "IsNFS":false,
         "IsNSQ":false,
         "IsPrometheus":false,
         "IsRedis":false,
         "IsRegistry":false,
         "LastUpdateDateTime":"2021-06-23T18:28:57Z",
         "Memory":0,
         "ModifiedDateTime":"2021-06-23T18:28:57Z",
         "NfsPartition":-1,
         "NfsPort":2049,
         "NumCPU":2,
         "NumEngines":0,
         "NumGPU":0,
         "RegistryPort":443,
         "RunModes":"",
         "ServerTypeID":"",
         "ServerTypeName":"",
         "ShouldExpire":false,
         "SuggestedRuntimeTTL":0,
         "TerminationDateTime":"0001-01-01T00:00:00Z",
         "TerminationDetail":"",
         "TerminationReason":"",
         "VcpuAvailable":2045
      }
   ],
   "Success":true,
   "level":"info",
   "message":"",
   "timestamp":"2021-06-23T18:29:56Z"
}
```



## Setting up Node for aiWARE Core <!-- {docsify-ignore} -->

### Step 1 : Open Terminal

Open Terminal and elevate command execution permissions to root using the command

Ubuntu: Press `Ctrl` + `Alt` + `T` to open a terminal window.

```
sudo bash
```

  This will ensure that all the steps are executed as root.

Screenshot 1

### Step 2: Install Docker and dependencies

aiWARE resources are packaged and deployed as [Docker](https://www.docker.com/) containers, so to initialize aiWARE ,docker and external dependencies are required,

To install docker and dependencies:

1)Copy the below command to the terminal and press enter to update the package information from all of the configured sources  

```bash
sudo apt update -y
```

2) Install Docker and other external packages  using the below command

```
sudo apt install docker.io nfs-common awscli uuid prometheus-node-exporter -y
```

Response: This may take a minute or two .Here is the screenshot after successful installation

3)To verify whether the docker has installed enter:

```
docker --version
```

On successful installation the output would be like this

```
Docker version 20.10.2, build 20.10.2-0ubuntu1~20.04.2

```

### Step 3: Set up Variables

The installation of aiWARE Core requires the additional run modes of `api`, `db`, `es`, `lb`, `minio`, `nsq`, `redis`. The below command will  setup different variables for `api`, `db`, `es`, `lb`, `minio`, `nsq`, `redis` run modes .

Note: Replace the value of the variable `IP_OF_ADMIN_NODE ` and `AIWARE_INIT_TOKEN` in the below command with the internal IP and `AIWARE_INIT_TOKEN`of  your admin node

```bash
export AIWARE_MODE=api,elasticsearch,lb,nsq,minio,redis
export AIWARE_HOST_EXPIRE=false
export AIWARE_LICENSE=<LICENSE_KEY>
export AIWARE_CONTROLLER=http://172.31.32.8:9000/edge/v1
export AIWARE_INIT_TOKEN=843489f6-ecff-4d19-95b0-2359eff60ec8
echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"

```

### Step 4: Install the aiWARE agent

1.Now install the aiware-agent as a service using the following command

```bash
curl -sfL https://get.aiware.com |  sh -
```

### Step 5: Validate the Node

Follow the Step 5 in Setting up the Worker node instructions

### Step 6: Install aiWARE Core

Run install command for aiWARE applications

```bash
ai hub install core
```

This will install the aiware-agent as a service. You can check the status via running `service aiware-agent status` command, or monitor it in realtime with `watch service aiware-agent status`

Response after successful installation:

screenshot aiware installed screenshot

## Final Result: <!-- {docsify-ignore} -->

In the response You will have a cluster running all the the production aiWARE applications. To validate whether all the applications are successfully installed and running perfectly. Run `docker ps` command to see all aiWARE applications running

The response should be similar to this:

screenshot :clusters which should be up after installation

## Next Steps <!-- {docsify-ignore} -->

Check additional aiWARE cluster deployment considerations [here](https://docs.veritone.com/#/aiware/install/cluster?id=deployment-considerations)

[Learn more about aiWARE and its Applications]()

- [Developer App  ]()
- [CMS App]()
- [Automate Studio Tutorials]()
- [Graphql API Tutorials]()

















































































































///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## Before we begin

If you're new to Veritone aiWARE, we will recommend you to read about aiWARE and its benefits here

[aiWARE Overview]()

[aiWARE Benefits]()

[aiWARE-in-depth]()

## Installing aiWARE on Cluster

In this step by step tutorial we will explain how to install aiWARE operating system on a cluster. A full aiWARE cluster consist of 12 run modes(`api`, `controller`, `db`, `elasticsearch`, `engine`, `lb`, `minio`, `nfs`, `nsq`, `prometheus`, `redis`, `registry`) which perform different cluster roles to run jobs and produce results.

All the run modes are not required to run a cluster. A minimal cluster can be started by the deploying the following run modes(`the controller`, `engine`, `PostgreSQL database (db)`  `NFS` and `Prometheus`)


## Expected Result

After following this step-by step tutorial you will be able to successfully install aiWARE as a service on a cluster and test its intelligent capabilities .

## Steps  

## Installing aiWARE on Ubuntu

### System Requirements

- Minimum Requirement for installing aiWARE : 2 CPUs, 50Gb of Initial Storage Space and 8GB of RAM

- Recommended Requirements :2 CPUs and 8GB of RAM (Expectation 1-2 engine running at a time)

- Operating System : Ubuntu 18.04 or Ubuntu 20.04.



## Step 1 : Open Terminal in Ubuntu

Open Terminal and access it as root user. Also, elevate command execution permissions to root using the command

```
sudo bash
```

  This will ensure that all the steps are executed as root.





## Step 2: Install Docker and dependencies

aiWARE resources are packaged and deployed as [Docker](https://www.docker.com/) containers, so to initialize aiWARE ,docker and external dependencies are required,

To install docker and dependencies:

1)Copy the below command to the terminal and press enter to update the package information from all of the configured sources  

```bash
sudo apt update -y
```

Screenshot 2



2) Install Docker and other external packages  using the below command

```
sudo apt install docker.io nfs-common awscli uuid prometheus-node-exporter -y
```

Response: This may take a minute or two .Here is the screenshot after successful installation

Screenshot 3

3)To verify whether the docker has installed enter:

```
docker --version
```

On successful installation the output would be like this
Screenshot 4





### Step 3: Fetch IP Address of the Machine

1. Install the  `net-tools`package using the command:

```
apt install net-tools
```

screenshot 5

2. Fetch the IP address of the machine and mark it to a variable `IPADDR` using

```
export IPADDR=$(ifconfig | grep inet | grep -v inet6 | grep -v "169.254" | grep -v 127.0.0.1 | head -n1 | awk '{ print $2 }'); echo $IPADDR
```

The response will output the IP address(172.17.0.1) of the machine(see the below screenshot)

screenshot 6



### Step 3: Set up Variables and Cluster Directories

Running the below command will  different variables and output the value of `AIWARE_INIT_TOKEN` which will be later used for authorization with aiWARE components. Make sure to copy your `AIWARE_INIT_TOKEN` value somewhere safe.

```bash
export AIWARE_DB_PORT=5432
export AIWARE_MODE=db,registry,nfs,prometheus
export AIWARE_HOST_EXPIRE=false
export INSTALL_AIWARE_CHANNEL=prod
export AIWARE_DB_MIGRATE=true
export AIWARE_DB_ROOT=/opt/aiware/postgres
export AIWARE_REGISTRY_ROOT=/opt/aiware/registry
export AIWARE_HOST_EXPIRE=false
export AIWARE_LICENSE=<LICENSE_KEY>
export AIWARE_INIT_TOKEN=`uuidgen`
curl -sfL https://get.aiware.com | sudo -E sh -

echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"
```

Response:

screenshot 7

The value for our  `AIWARE_INIT_TOKEN` is `f37c9708-0969-4ca7-b646-bed3e51845f1`

### Step 4: Install the aiWARE agent

1.Now install the aiware-agent as a service using the following command

```bash
curl -sfL https://get.aiware.com | sudo -E sh
```

Response after successful installation:

Screenshot 8

2.To check whether aiWARE agent is properly running run

```
 service aiware-agent status
```

Response:
The response should show active(running) and will show downloading progress for aiWARE containers. The process can take up to few minutes depending upon your internet speed. Press CTRL +C to exit out of the status service .

screesnhot 9

### Step 6: Validate aiWARE Installation

1.After some time ,run the following docker command to check the container status for running and non running aiWARE containers

```
docker ps -a
```

Response;

The response should show the following containers up and running.

screenshot 10

**Note:** It is possible that all the containers don't run up when running `docker ps -a` for the first time. Execute  `service aiware-agent status` to check whether the download of container images. You should see the following output after download completion.

screenshot 11  

2.Once all the required aiWARE containers up and running ,you can verify them by running them on their desired ports.

Run: exportfs to validate /opt/aiware/nfs is exported Run: docker ps to validate aiware-controller, aiware-postgres, aiware-registry are running

Please note the IP of the Admin box and use for the other systems.

Go to http://:9000/edge/v1/version, or curl localhost:9000/edge/v1/version, for aiWARE Edge version information.

Go to http://:9000/edge/v1/version, or curl localhost:9000/edge/v1/version, for aiWARE Edge version information. This will return information such as :

```
{ "version": "Build number: , Build time: 2021-04-27_19:30:26, Build commit hash: b6e1b627c20489463f7dca463200649af1000222" }
```



### Step 7: Running the Engine Node

Please note the IP of the Admin box above and use for the other systems. Do this for each engine instance.

 1: Again Elevate Permissions to Root using the command

```
sudo bash
```

This will ensure that all following steps are executed as root.

2. Setup Environment Variables and Directories

```bash
export AIWARE_MODE=engine
export AIWARE_CONTROLLER=http://IP_OF_ADMIN_NODE:9000/edge/v1
export AIWARE_HOST_EXPIRE=false
```

3. Run Installation Command

```bash
curl -sfL https://get.aiware.com | sudo sh -
```

4. Validate the Installation

ADD

5. Run install command for aiWARE applications

```bash
ai --controller-url http://<HOST>:9000/edge/v1/ --controller-token $AIWARE_INIT_TOKEN hub install core --channel prod
```

You can check the status of  via running `service aiware-agent status` command, or monitor it in realtime with `watch service aiware-agent status`.

### Final Result:

In the response You will have a cluster running all the the production aiWARE applications. To validate whether all the applications are successfully installed and running perfectly. Run docker ps to see all the run modes running

## Next Steps

[Learn more about aiWARE and its Applications]()

- [Developer App  ]()
- [CMS App]()
- [Automate Studio Tutorials]()
- [Graphql API Tutorials]()
