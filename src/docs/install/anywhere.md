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
```
curl https://aiware-prod-public.s3.us-east-2.amazonaws.com/anywhere -O
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
