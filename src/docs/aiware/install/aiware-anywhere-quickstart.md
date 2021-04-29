<!-- add estimiated reading, should be an easy step by step. 
Target: Deploy on a Mac. 
Optional: Target environment, Ubuntu, Virtual Box or AWS. Add guides on setting up those machines. --> 
# Overview
The aiWARE platform lets you build and use end-to-end, AI-powered solutions — from data ingestion to intelligent data analysis — accessible in the application of your choice. aiWARE consists of several components include [Edge](/aiware/aiWARE-in-depth/?id=architectural-overview), [aiWARE APIs](/apis/), and applications. 

aiWARE can run on a Linux box or a Mac. This guide will set up aiWARE on your Mac. 
## Prerequisites 
- MacOS 10.14 or greater
- [Docker](https://docs.docker.com/docker-for-mac/install/)
- 2 CPUs and 16GB of RAM

Root is not required or recommended.

Refer to [Prerequisites](/aiware/install/prereq) for details on setting up a deployment environment for aiWARE. 

## Steps
THe installation consists of the installation of aiWARE Edge and aiWARE Core. Edge is the processing component. Adding Core provides you with a full stack of aiWARE. This pairs the processing capabilities with applications, search and other data/object operations for aiWARE.
### Step 1: Open Terminal Widnow
Open spotlight (command + space), type Terminal to open a new terminal window
### Step 2: Create necessary install directories 
Create aiWARE directories 
```
mkdir -p $HOME/aiware/cache
mkdir -p $HOME/aiware/root
```
### Step 3: Environment Variables
Enter the following environment variables in the terminal window 
```
export AIWARE_MODE=controller,redis,db,nsq,es,api,lb,minio,engine
export AIWARE_CACHE=$HOME/aiware/cache
export AIWARE_ROOT=$HOME/aiware/root
export AIWARE_AGENT_UPDATE_INTERVAL=5
export AIWARE_RUN_CONFIG=$HOME/aiware/aiware-config.json
export AIWARE_DB_MIGRATE=true
export AIWARE_INIT_TOKEN=`uuid`; echo "Using token $AIWARE_INIT_TOKEN"
```
### Step 4: Install aiWARE
```
curl -sfL https://get.aiware.com | sudo -E sh -
```
### Step 5: Validate the installation
Run `curl localhost:9000/edge/v1/version`, for aiWARE Edge version information. This will return information such as:
```
{
"version": "---
build_date: Tue Feb 4 22:52:57 UTC 2020
git_repo: realtime
git_branch: HEAD
git_commit: f8a8130c88b8ed5b0e50a8f26bf45d5d9b1a22e1
git_author: joe
build_url: https://build_url/job/aiware/job/edge-controller/1281/
build_number: 1281
"
}
```
This validates that the controller server is up and running. 
### Step 5: Install Core
Core extends
```
/usr/local/bin/ai --controller-token $AIWARE_INIT_TOKEN hub install core --channel stable
```
### Step 6: Run a sample job
```
/usr/local/bin/ai job create 
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