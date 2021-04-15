# Install aiWARE Anywhere

To install aiWARE Anywhere on your local environment.

## Dependencies 

* Docker with 2 CPUs and 4GB of RAM
* Node v12
* Golang
* Git
* OS: Mac, Ubuntu 18.04, Ubuntu 20.04

## Installation

### Automated Installation
This installation will go through an automated run of deployment. Please run this in an empty directory as this script does perform some clean-up. 
```
curl https://aiware-prod-public.s3.us-east-2.amazonaws.com/anywhere | sh - 
```

Note: This method will delete any local Docker images related to aiWARE Anywhere. If you don't intend to do this, run through the step by step installation.

### Step By Step Installation
This will take you through a guided installation of aiWARE Anywhere. Start off by running the following: 
```
sh <(curl https://aiware-prod-public.s3.us-east-2.amazonaws.com/anywhere)
```
The first couple of steps involve clean-up of an existing environment. If you have been running aiWARE Anywhere and want to start afresh, enter 'y' for the following steps. Otherwise, enter 'n'.
```

        _                                        
       (_)                                       
   __ _ ___      ____ _ _ __ ___                 
  / _` | \ \ /\ / / _` | '__/ _ \                
 | (_| | |\ V  V / (_| | | |  __/                
  \__,_|_| \_/\_/ \__,_|_|  \___|                
                            | |                  
   __ _ _ __  _   ___      _| |__   ___ _ __ ___ 
  / _` | '_ \| | | \ \ /\ / / '_ \ / _ \ '__/ _ \
 | (_| | | | | |_| |\ V  V /| | | |  __/ | |  __/
  \__,_|_| |_|\__, | \_/\_/ |_| |_|\___|_|  \___|
               __/ |                             
              |___/                              

[INFO]  Performing preinstall checks.
[INFO]  Press any key to continue
[INFO]  Preinstallation cleanup
[INFO]  Stop and remove existing containers? (y/n)
y
[INFO]  Remove images? (y/n)
y
WARNING! This will remove all local volumes not used by at least one container.
Are you sure you want to continue? [y/N] y
```
The next question deals with downloading assets for aiWARE Anywhere. You can build assets locally (with the proper permissions). The default option here is `pkg_build` which will download nightly builds of the supporting Anywhere services to your machine:
```
[INFO]  Cleaning up /tmp/root
[INFO]  Creating /tmp/root
[INFO]  Core setup.
[INFO]  How do you want to setup core?
1) pull_images
2) build_locally
3) pkg_install
3
```


## Appendix 

### Installing Docker 
* [MacOS Docker Installation Guide](https://docs.docker.com/docker-for-mac/install/)
* [Ubuntu Docker Installation Guide](https://docs.docker.com/engine/install/ubuntu/)

### Installing Node
If you don't have node.js installed on your machine, we recommend that you install [NVM](https://github.com/nvm-sh/nvm). Node Version Manager (NVM) is a version manager for node.js. Instructions for installing NVM can be found on the [NVM Github Repository](https://github.com/nvm-sh/nvm#installing-and-updating). 

After installing NVM, you can run the following to install node.js v12:
```
$ nvm install 12
$ nvm use 12
$ node --version
```
This install node.js v12 and confirms that the appropriate version is installed.  
