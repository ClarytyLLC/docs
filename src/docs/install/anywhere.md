# Install aiWARE Anywhere

To install aiWARE Anywhere on your local environment.

## Dependencies 

* Docker with 2 CPUs and 4GB of RAM
* Node v12
* OS: Mac, Ubuntu 18.04, Ubuntu 20.04

## Installation

```
curl https://get.aiware.com/anywhere | sh - 
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
