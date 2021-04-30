<!-- add estimiated reading, should be an easy step by step. 
Target: Deploy on a Mac. 
Optional: Target environment, Ubuntu, Virtual Box or AWS. Add guides on setting up those machines. --> 
# Overview
The aiWARE platform lets you build and use end-to-end, AI-powered solutions — from data ingestion to intelligent data analysis — accessible in the application of your choice. aiWARE consists of several components include [Edge](/aiware/aiWARE-in-depth/?id=architectural-overview), [aiWARE APIs](/apis/), and applications. 

aiWARE can run on a Linux box or a Mac. This guide will set up aiWARE on your Mac. 
## Prerequisites 
- MacOS 10.14 or greater
- [Docker](https://docs.docker.com/docker-for-mac/install/)
- Minimum Requirement: Docker with 2 CPUs and 16GB of RAM (Expectation 1 engine running at a time)
- Recommendeded Requirement: Docker with 4 CPUs and 16GB of RAM (Expectation 1-2 engine running at a time)

Refer to [Prerequisites](/aiware/install/prereq) for details on setting up a deployment environment for aiWARE. 

## Steps
THe installation consists of the installation of aiWARE Edge and aiWARE Core. Edge is the processing component. Adding Core provides you with a full stack of aiWARE. This pairs the processing capabilities with applications, search and other data/object operations for aiWARE.
### Step 1: Open Terminal Widnow
Open spotlight (command + space), type Terminal to open a new terminal window
### Step 2: Get IP adress
```bash
export IPADDR=$(ifconfig | grep inet | grep -v inet6 | grep -v "169.254" | grep -v 127.0.0.1 | head -n1 | awk '{ print $2 }'); echo $IPADDR
```
### Step 3: Create necessary install directories 
Create aiWARE directories 
```bash
mkdir -p $HOME/aiware/cache
mkdir -p $HOME/aiware/root
```
### Step 4: Environment Variables
Enter the following environment variables in the terminal window 
```bash
export AIWARE_MODE=controller,db,api,lb,engine,redis,prometheus,minio,nsq,es
export AIWARE_DB_PORT=5432 # if PG is running locally
export AIWARE_CACHE=$HOME/aiware/cache
export AIWARE_DB_ROOT=$HOME/aiware/root/postgres
export AIWARE_REGISTRY_ROOT=$HOME/aiware/root/registry
export AIWARE_CACHE=$HOME/aiware/cache # please make sure this exists
export AIWARE_ROOT=$HOME/aiware/root
export AIWARE_AGENT_UPDATE_INTERVAL=15
export AIWARE_RUN_CONFIG=$HOME/aiware/aiware-config.json
export AIWARE_REGION=us-east-1 # only relevant if running in AWS
export AIWARE_HOST_EXPIRE=false
export AIWARE_INIT_TOKEN=`uuidgen` # generate a random UUID for edge token
export AIWARE_CONTROLLER=http://$IPADDR:9000/edge/v1 # for localhost

echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"
```
### Step 5: Install aiWARE
```
curl -sfL https://get.aiware.com | sudo -E sh -
```
### Step 6: Validate the installation
Run `curl localhost:9000/edge/v1/version`, for aiWARE Edge version information. This will return information such as:
```
{ "version": "Build number: , Build time: 2021-04-27_19:30:26, Build commit hash: b6e1b627c20489463f7dca463200649af1000222" }
```
This validates that the controller server is up and running. 
### Step 7: Install Core
```
ai --controller-token $AIWARE_INIT_TOKEN hub install core --channel prod
```
### Step 8: Run a sample job
```
/usr/local/bin/ai job create --help
```

# Appendix
* [Docker on MacOS Installation Guide](https://docs.docker.com/docker-for-mac/install/)

## Environment variables for installation
| Variable | Default | Description |
|----------|---------|-------------|
| AIWARE_MODE | nil | This is the mode for the host.  This can be comma separated list of modes.|
| AIWARE_CACHE | /cache | This is the directory used for cache |
| AIWARE_ROOT | /opt/aiware | This is the default directory for aiWARE. THe current user needs write permission to this directory. |
| AIWARE_INIT_TOKEN | none | If set, the controller on startup will create this token |