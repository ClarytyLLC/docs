# Install aiWARE on Local Environment

**APPROXIMATE READING TIME: 5 MINUTES**

## Before we begin <!-- {docsify-ignore} -->

If you're new to Veritone aiWARE, we will recommend you to read about aiWARE and its benefits using the below links.

[aiWARE Overview]()

[aiWARE Benefits]()

[aiWARE-in-depth]()

## Installing aiWARE Locally  <!-- {docsify-ignore} -->

In this step-by-step tutorial, we will explain how to install the aiWARE operating system on your local computer. We will provide installation instructions for both Linux (Ubuntu) and Mac Operating systems for easy creation and deployment of aiWARE resources anywhere. If you would rather install aiWARE on the cluster, check the aiWARE cluster installation instructions [here.]()

## Expected Result <!-- {docsify-ignore} -->

After following this step-by-step tutorial, you will be able to successfully install aiWARE as a service on your local machine and test its intelligent capabilities.

## Steps  <!-- {docsify-ignore} -->

## Installing aiWARE on Ubuntu <!-- {docsify-ignore} -->

### System Requirements

-   Minimum Requirement for installing aiWARE: 2 CPUs and 4GB of RAM

- Recommended Requirements: 4 CPUs and 8GB of RAM

- Ubuntu Version  : Ubuntu 18.04, Ubuntu 20.04.



### Step 1: Open Terminal in Ubuntu

Open Terminal and access it as a root user. The root access is specified in Ubuntu Linux by root@hostname.

  ![screenshot 1](https://user-images.githubusercontent.com/65766301/122611396-e3314800-d09e-11eb-8ce0-7fd9fbc5c2c6.PNG)




### Step 2: Install Docker and dependencies

aiWARE resources are packaged and deployed as [Docker](https://www.docker.com/) containers , so to initialize aiWARE, Docker is required,

To install Docker and other required libraries:

1. Copy the below command to the terminal and press enter to update the package information from all of the configured sources  

```
sudo apt update -y
```
![screenshot 2](https://user-images.githubusercontent.com/65766301/122611797-8e420180-d09f-11eb-81cc-0558962c0607.PNG)

2. Install Docker and other external packages  using the below command

```
sudo apt install docker.io nfs-common awscli uuid prometheus-node-exporter -y
```

 This may take a minute or two. Here is the screenshot after successful installation

![screenshot 3](https://user-images.githubusercontent.com/65766301/122611853-ab76d000-d09f-11eb-9cf3-c41eb659d9c9.PNG)



3. To verify whether the Docker has installed, enter:

```
docker --version
```

In the output you will see the docker version installed on your local machine.

![screenshot 4](https://user-images.githubusercontent.com/65766301/122611892-bdf10980-d09f-11eb-8c5b-45c2907f63e1.PNG)


### Step 3: Fetch IP Address of the Machine

1. Install the  `net-tools` package using the command:

```
apt install net-tools
```

![screenshot 5](https://user-images.githubusercontent.com/65766301/122611945-da8d4180-d09f-11eb-8ba6-be230ce8d0ca.PNG)

2. Fetch the IP address of the machine and mark it to a variable `IPADDR` using the command

```
export IPADDR=$(ifconfig | grep inet | grep -v inet6 | grep -v "169.254" | grep -v 127.0.0.1 | head -n1 | awk '{ print $2 }'); echo $IPADDR
```

The response will output the IP address(172.17.0.1) of the machine(see the below screenshot)

![screenshot 6](https://user-images.githubusercontent.com/65766301/122611980-eda01180-d09f-11eb-842c-28f101098782.PNG)


### Step 4: Set up Variables for aiWARE

Running the below command will set four different variables and output the value of `AIWARE_INIT_TOKEN`, which will be later used for authorization with aiWARE components. Make sure to copy your `AIWARE_INIT_TOKEN` value somewhere safe.

```
export AIWARE_MODE=controller,db,api,lb,engine,redis,prometheus,minio,nsq,es
export AIWARE_HOST_EXPIRE=false
export AIWARE_INIT_TOKEN=`uuidgen`     # generate a random UUID for edge token
export AIWARE_CONTROLLER=http://$IPADDR:9000/edge/v1   # for localhost
echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"
```

Response:

![screenshot 7](https://user-images.githubusercontent.com/65766301/122612035-0e686700-d0a0-11eb-9686-dd745ab9b84a.PNG)

The value for our  `AIWARE_INIT_TOKEN` is `f37c9708-0969-4ca7-b646-bed3e51845f1`

### Step 5: Install the aiWARE Agent

1. Now install the aiWARE-agent as a service using the following command

```
curl -sfL https://get.aiware.com | sudo -E sh -
```

Response after successful installation:

![screenshot 8](https://user-images.githubusercontent.com/65766301/122612081-27711800-d0a0-11eb-9c13-eb06fad28a7f.PNG)

2. To check whether aiWARE Agent is properly running, run

```
 service aiware-agent status
```

Response:

The response should show active(running) and will show downloading progress for aiWARE containers. The process can take up to few minutes, depending upon your internet speed. Press CTRL +C to exit out of the status service screen.

![screenshot 9](https://user-images.githubusercontent.com/65766301/122612107-348e0700-d0a0-11eb-8d23-be00eeb3a6ec.PNG)


### Step 6: Validate aiWARE Installation

1. Once the downloading of containers is finished run the following docker command to check the container status for running and non-running aiWARE containers

```
docker ps -a
```
The response should show the following containers up and running.

![screenshot 10](https://user-images.githubusercontent.com/65766301/122612165-496a9a80-d0a0-11eb-9ae4-a4ed15f4d3f7.PNG)

**Note:** It is possible that all the containers don't run up when running `docker ps -a` for the first time. Execute  `service aiware-agent status`command to check whether the download of container images is done. You would only see all the containers after download completion.

![screenshot 11](https://user-images.githubusercontent.com/65766301/122612233-6bfcb380-d0a0-11eb-8bdf-f6df7e072334.PNG)

2. Once all the required aiWARE containers are up and running ,you can verify them by running them on their desired ports. For instance you can go to http://localhost:9000/edge/v1/version, or curl localhost:9000/edge/v1/version, for aiWARE Edge version information. This will return information such as:

```
{ "version": "Build number: , Build time: 2021-06-16_20:09:55, Build commit hash: dd27e7cf925434a9e3e6bcd0fc56f0f41b15308f" }
```

### Step 7: Testing aiWARE via GraphQL
To test the intelligent capabilities of *aiWARE*  we have to now set up the aiWARE Core.

1. Command for installing the aiWARE Core is :

```
ai hub install core --channel dev --controller-token $AIWARE_INIT_TOKEN
```

Here `AIWARE_INIT_TOKEN` variable contains the value of the bearer token, which is used for authenticating aiWARE operations.


In the response, you will see core components of aiWARE, such as the graphQL server. Developer app and frontend getting installed. On a successful installation, you will see no API errors and installed apps IP listed. (See the below screenshot)

![screenshot 12](https://user-images.githubusercontent.com/65766301/122612288-8171dd80-d0a0-11eb-9e25-92fa4d3dfb14.PNG)

2. Verify whether aiWARE core containers are up and running using

```
docker ps -a
```

3. You should see the list of containers mentioned in the below screenshot when all the aiWARE core services are up.


![screenshot 13](https://user-images.githubusercontent.com/65766301/122612370-9fd7d900-d0a0-11eb-95e0-4f24b450dd22.PNG)




4. If you do not see all the containers specified in the above screenshot, check the download progress of containers using the command

```
service aiware-agent status
```

![screenshot 14](https://user-images.githubusercontent.com/65766301/122612431-bd0ca780-d0a0-11eb-9157-53a2ae3c88d2.PNG)


5.If the download is still in progress ,let it complete ,the process can take up to 30 minutes or less depending upon your speed of internet connection.Once it is completed you will see the following status(see the below screenshot) and all the aiWARE containers will be ready to launch.

![screenshot 15](https://user-images.githubusercontent.com/65766301/122612467-cc8bf080-d0a0-11eb-9e58-795a33be6df3.PNG)



6. Once all the core containers are launched. They can be easily tested. For instance, let's test aiWARE GraphQL by sending an **POST** request to the **GRAPHQL** server.

```
curl --request POST --url http://localhost:8080/v3/graphql --header 'Authorization: Bearer root:2035f315-3bf9-44ea-9c33-71fc3d82ac04-17aa22ff-dbdd-40f5-ada1-a694c20c1719' --header 'Content-Type: application/json' --data '{"query":"query {
        me {
                id
        }
    }"}'
```

### Final Result:

In the response, GraphQL will send an API response which means aiWARE components are successfully installed and responding perfectly. To know more about GraphQL commands, visit [here](https://docs.veritone.com/#/apis/tutorials/graphql-basics).

```
{
    "data": {
        "me": {
            "id": "7682"
        }
    }
}

```




## Installing aiWARE on Mac <!-- {docsify-ignore} -->

   System Requirements

-   Minimum Requirement for installing aiWARE: 2 CPUs and 4GB of RAM

-   Recommended Requirements: 4 CPUs and 8GB of RAM

- OS: Ubuntu 18.04, Ubuntu 20.04, MacOS 10.14 (Mojave), MacOS 10.15 (Catalina), MacOS 11 (Big Sur)

### Step 1:Open Terminal in Mac

Open a Terminal window. This can be done by opening Spotlight (⌘ + space) and typing `Terminal` followed by pressing the return key.

![screenshot 16](https://user-images.githubusercontent.com/65766301/122614191-ccd9bb00-d0a3-11eb-8ce0-809ce5f3ac4a.PNG)

### Step 2: Install Docker for Mac

Navigate to Docker for Mac download [website](https://docs.docker.com/docker-for-mac/install/) and download the docker package. Follow the installation steps and after success Installation, you will see docker desktop running on the upper right of your mac.

![docker mac](https://user-images.githubusercontent.com/65766301/122614221-dbc06d80-d0a3-11eb-9361-8839b49f644f.PNG)


### Step 3: Find the IP address of the machine.

The IP address of yiur machine can be found by running the following command in the terminal:

```
export IPADDR=$(ifconfig | grep inet | grep -v inet6 | grep -v "169.254" | grep -v 127.0.0.1 | head -n1 | awk '{ print $2 }'); echo $IPADDR
```

In the response the terminal will output the IP address of the machine(see the below screenshot).

![screenshot 16](https://user-images.githubusercontent.com/65766301/122614255-f0046a80-d0a3-11eb-8c51-e3c6eda65d22.PNG)

### Step 4: Setup aiWARE directories

1. Use the following command  to create the necessary aiWARE `cache` and `root` directories

```
mkdir -p $HOME/aiware/cache
mkdir -p $HOME/aiware/root
```

2. Verify whether the directories are created using the command

      ```
      cd aiware
      ```

       and

      ```
      ls
      ```

You will see the created directories listed like this.

![screenshot 17](https://user-images.githubusercontent.com/65766301/122614313-0b6f7580-d0a4-11eb-9ea4-4253b2c87d1b.PNG)

### Step 5: Set up aiWARE Variables

Use the below command to setup aiWARE variables

```
export AIWARE_INIT_TOKEN=`uuidgen` # generate a random UUID for
export AIWARE_MODE=all
echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"
```

Note that the value of `AIWARE_INIT_TOKEN` is important. This will be the "Bearer Token" that you'll need to authorize calls to `aiware-agent` later, so make sure you record this somewhere.

![screenshot 18](https://user-images.githubusercontent.com/65766301/122614367-23df9000-d0a4-11eb-99f7-a4c83c60d2ce.PNG)

### Step 6: Install aiWARE Agent

Run the following  command to install aiWARE Agent as a service

```
curl -sfL https://get.aiware.com | sh -
```
![screenshot 19](https://user-images.githubusercontent.com/65766301/122617222-77a0a800-d0a9-11eb-8905-febe9d2a1125.PNG)

To check the status of aiWARE Agent and download progress of container images, run `launchctl list | grep aiware-agent` command every few minutes.

Note that downloading of container images will take some time let the process complete before moving to the next step.


### Step 7: Validate aiWARE Installation

1. Once all the container images are downloaded, run the following docker command to check the container status for running and non-running aiWARE containers

```
docker ps -a
```
The response should show the following containers up and running.

![screenshot 10](https://user-images.githubusercontent.com/65766301/122614634-a700e600-d0a4-11eb-936a-def5f7a8505e.PNG)


2.Once all the required aiWARE containers are up and running ,you can verify them by running them on their desired ports. For instance you can go to http://localhost:9000/edge/v1/version, or curl localhost:9000/edge/v1/version, for aiWARE Edge version information. This will return information such as:

```
{ "version": "Build number: , Build time: 2021-06-16_20:09:55, Build commit hash: dd27e7cf925434a9e3e6bcd0fc56f0f41b15308f" }
```

### Step 8: Testing aiWARE via GraphQL

To test the intelligent capabilities of *aiWARE*  we have to now set up the aiWARE Core.

1. Command for installing the  aiWARE Core is :

```
ai hub install core --channel dev --controller-token $AIWARE_INIT_TOKEN
```

Here `AIWARE_INIT_TOKEN` variable contains the value of the bearer token, which is used for authenticating aiWARE operations.

Response:
In the response, you will see core components of aiWARE such as graphQL server, developer app, and frontend getting installed. On a successful installation, you will see no API errors and installed apps IP listed.

![screenshot 12](https://user-images.githubusercontent.com/65766301/122614697-c861d200-d0a4-11eb-8a36-04c6f6a94b86.PNG)


2. Verify whether aiWARE core containers are up and running using

```
docker ps -a
```

3. You should see a list of containers specified in the below screenshot when all the aiWARE core services are up.

![screenshot 13](https://user-images.githubusercontent.com/65766301/122615216-c5b3ac80-d0a5-11eb-8921-03d78f2c6547.PNG)

Note: If the specified containers dont show up, check the download progress of the container images by running the `launchctl list | grep aiware-agent` command  and wait for the download to complete.


4. Once all the aiWARE core components are up and running. They can be easily tested ; for instance, let's check aiWARE GraphQL API by sending an **POST** request to the **GRAPHQL** server.

```
curl --request POST --url http://localhost:8080/v3/graphql --header 'Authorization: Bearer root:2035f315-3bf9-44ea-9c33-71fc3d82ac04-17aa22ff-dbdd-40f5-ada1-a694c20c1719' --header 'Content-Type: application/json' --data '{"query":"query {
        me {
                id
        }
    }"}'
```


### Final Result:

In the response, GraphQL will send an API response which means aiWARE components are successfully installed and working perfectly. To know more about GraphQL basics, visit [here](https://docs.veritone.com/#/apis/tutorials/graphql-basics)

```
{
    "data": {
        "me": {
            "id": "7682"
        }
    }
}
```

## Next Steps <!-- {docsify-ignore} -->

- [Install aiWARE on Cluster]()
- [Know more about GraphQL API through Tutorials](https://docs.veritone.com/#/apis/tutorials/graphql-basics)
- [Read about aiWARE Core and its Applications]()


































‌
