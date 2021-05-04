<!-- add estimiated reading, should be an easy step by step. 
Target: Deploy on a Mac. 
Optional: Target environment, Ubuntu, Virtual Box or AWS. Add guides on setting up those machines. --> 
*Estimated install time: 60 minutes*
# Overview
The aiWARE platform lets you build and use end-to-end, AI-powered solutions — from data ingestion to intelligent data analysis — accessible in the application of your choice. aiWARE consists of several components include [Edge](/aiware/aiWARE-in-depth/?id=architectural-overview), [Core](/apis/), and various applications & engines.

To get started with aiWARE, you can either [signup online](https://www.veritone.com/devsignup/) and start using the Veritone-managed SaaS offering, or you can install aiWARE on your hardware.

aiWARE can run on a Linux box or on a Mac. This guide will help you set up aiWARE on your Mac. 

## Prerequisites 
- MacOS 10.14 or greater
- Docker Desktop Community 2.4.0.0 or greater ([Installation Guide](https://docs.docker.com/docker-for-mac/install/))
- Minimum Requirement: Docker with 2 CPUs and 16GB of RAM (Expectation 1 engine running at a time)
- Recommendeded Requirement: Docker with 4 CPUs and 16GB of RAM (Expectation 1-2 engine running at a time)

Refer to [Prerequisites](/aiware/install/prereq) for details on setting up a deployment environment for aiWARE. 

## Install on MacOS
The installation consists of the installation of aiWARE Edge and aiWARE Core. Edge is the processing component. Adding Core provides you with a full stack of aiWARE. This pairs the processing capabilities with applications, search and other data/object operations for aiWARE.
### Step 1: Open Terminal Widnow
Open spotlight (command + space), type Terminal to open a new terminal window
### Step 2: Install aiWARE
```
curl -sfL https://get.aiware.com | sudo -E sh -
```
### Step 3: Validate the installation
Run `curl localhost:9000/edge/v1/version`, for aiWARE Edge version information. This will return information such as:
```
{ "version": "Build number: , Build time: 2021-04-27_19:30:26, Build commit hash: b6e1b627c20489463f7dca463200649af1000222" }
```
This validates that the controller server is up and running. 
### Step 4: Install Core
```
ai --controller-token $AIWARE_INIT_TOKEN hub install core --channel prod
```
### Step 5: Run a sample job
```
ai job create --help
```

## Environment variables for installation
| Variable | Default | Description |
|----------|---------|-------------|
| AIWARE_MODE | nil | This is the mode for the host.  This can be comma separated list of modes.|
| AIWARE_CACHE | /cache | This is the directory used for cache |
| AIWARE_ROOT | /opt/aiware | This is the default directory for aiWARE. The current user needs write permission to this directory. |
| AIWARE_INIT_TOKEN | none | If set, the controller on startup will create this token |
