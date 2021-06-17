# Install aiWARE Anywhere

To install aiWARE Anywhere on your local environment.

## Dependencies 

* Docker with 2 CPUs and 16GB of RAM
* OS: Mac, Ubuntu 18.04, Ubuntu 20.04

## Install aiWARE Anywhere on Ubuntu 18.04
### Install Dependencies
Install the following dependencies to prepare you for the installation.
```
sudo apt update -y 
sudo apt upgrade -y 
# install packages
sudo apt-get install -y nfs-common uuid
# install NFS
sudo apt-get install -y nfs-kernel-server
```
Install the AWS CLI only if the system is running on an AWS instance. 

In addition, the Docker engine is required to run aiWARE Anywhere.  
```
sudo apt install docker.io -y
```
### Install aiWARE Anywhere
To install the agent with the full stack on a single instance, you'll need to set the following environment variables.
```
# Use for both agent & controller
export AIWARE_MODE=controller,redis,db,nsq,es,api,lb,minio,engine # This excludes controller since you will run it separately
export AIWARE_AGENT_UPDATE_INTERVAL=5
export AIWARE_INIT_TOKEN=`uuidgen`; echo $AIWARE_INIT_TOKEN
```

To install aiWARE Agent, run
```
curl -sfL https://get.aiware.com | sudo -E sh -
/usr/local/bin/aiware-agent --controller-token $AIWARE_INIT_TOKEN hub install core --channel dev
```

## Install aiWARE Anywhere on MacOS
For MacOS, the Docker engine can be installed using a package from the [Docker website](https://docs.docker.com/docker-for-mac/install/). MacOS 10.14 or greater is required to run Docker.

### Install aiWARE Anywhere
To install the agent with the full stack on a single instance, you'll need to set the following environment variables.
```
# Use for both agent & controller
export AIWARE_MODE=controller,redis,db,nsq,es,api,lb,minio,engine # This excludes controller since you will run it separately
export AIWARE_AGENT_UPDATE_INTERVAL=5
export AIWARE_INIT_TOKEN=`uuidgen`; echo $AIWARE_INIT_TOKEN
```

To install aiWARE Agent, run
```
curl -sfL https://get.aiware.com | sudo -E sh -
/usr/local/bin/aiware-agent --controller-token $AIWARE_INIT_TOKEN hub install core --channel dev
```
## Appendix 

### Installing Docker 
* [MacOS Docker Installation Guide](https://docs.docker.com/docker-for-mac/install/)
* [Ubuntu Docker Installation Guide](https://docs.docker.com/engine/install/ubuntu/)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>