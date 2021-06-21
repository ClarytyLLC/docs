# Contents <!-- {docsify-ignore} -->

* [Install on MacOS](#install-on-macos) 
* [Install on Ubuntu](#install-on-ubuntu)
* [Appendix](#appendix)

# Install

## Dependencies

* Minimum Requirement: Docker with 2 CPUs and 16GB of RAM (Expectation 1 engine running at a time)
* Recommendeded Requirement: Docker with 4 CPUs and 16GB of RAM (Expectation 1-2 engine running at a time)
* OS:  Ubuntu 18.04, Ubuntu 20.04, MacOS 10.14 (Mojave), MacOS 10.15 (Catalina), MacOS 11 (Big Sur)

## Install on MacOS

1. Open a Terminal window. This can be done by opening Spotlight (⌘ + space) and typing `Terminal` followed by pressing the return key.

2. Find the IP address of the machine. This can be done in terminal by running the following:
    ```bash
    export IPADDR=$(ifconfig | grep inet | grep -v inet6 | grep -v "169.254" | grep -v 127.0.0.1 | head -n1 | awk '{ print $2 }'); echo $IPADDR
    ```

3. Create necessary install directories 
    ```bash
    mkdir -p $HOME/aiware/cache
    mkdir -p $HOME/aiware/root
    ```

4. Set the variables
    ```bash
    export AIWARE_INIT_TOKEN=`uuidgen` # generate a random UUID for
    echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"
    ```

    Note that the value of `AIWARE_INIT_TOKEN` is important. This will be the "Bearer Token" that
    you'll need to authorize calls to `aiware-agent` later, so make sure you record this somewhere.

5. Run install command

    ```bash
    curl -sfL https://get.aiware.com | sh -
    ```

    This will install the aiware-agent as a service. You can check the status via running `launchctl list | grep aiware-agent`

6. Validate install

    Run: docker ps -a . This should show the aiware-prom-alertmgr, aiware-prometheus, cadvisor, aiware-controller, aiware-postgres, & aiware-registry.

    You can connect to the database at localhost:5342, or whichever port that you have specified for AIWARE_DB_PORT, with postgres/postgres as the username/password.

    Run: docker logs -tf aiware-controller, to see the activity of aiware-controller.

    Go to http://localhost:9000/edge/v1/version, or curl localhost:9000/edge/v1/version, for aiWARE Edge version information.  This will return information such as:

    ```bash
    { "version": "Build number: , Build time: 2021-04-27_19:30:26, Build commit hash: b6e1b627c20489463f7dca463200649af1000222" }
    ```

    Run a test Job:
    ai job create --help, to see how you can run a job.
    ai job get --help, to see how you can get job info.

7. Run install command for aiWARE Core

    ```bash
    ai --controller-token $AIWARE_INIT_TOKEN hub install core --channel prod
    ```

    This will install the aiware-agent as a service. You can check the status via running `service aiware-agent status` command, or monitor
    it in realtime with `watch service aiware-agent status`.

8. Test aiWARE GraphQL.
    ```bash
    curl --request POST --url http://localhost:8080/v3/graphql --header 'Authorization: Bearer root:2035f315-3bf9-44ea-9c33-71fc3d82ac04-17aa22ff-dbdd-40f5-ada1-a694c20c1719' --header 'Content-Type: application/json' --data '{"query":"query {
          me {
                  id
            }
        }"}'
    ```

    The above request should return the following:
    ```bash
    {
        "data": {
            "me": {
                "id": "7682"
            }
        }
    }
    ```

## Install on Ubuntu

1. Install Docker and dependencies
    ```bash
    sudo apt update -y 
    sudo apt install docker.io nfs-common awscli uuid prometheus-node-exporter -y
    ```

2. Find the IP address of the machine. This can be done in terminal by running the following:
    ```bash
    export IPADDR=$(ifconfig | grep inet | grep -v inet6 | grep -v "169.254" | grep -v 127.0.0.1 | head -n1 | awk '{ print $2 }'); echo $IPADDR
    ```

3. Set the variables
    ```bash
    export AIWARE_MODE=controller,db,api,lb,engine,redis,prometheus,minio,nsq,es
    export AIWARE_HOST_EXPIRE=false
    export AIWARE_INIT_TOKEN=`uuidgen` # generate a random UUID for edge token
    export AIWARE_CONTROLLER=http://$IPADDR:9000/edge/v1 # for localhost
    echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"
    ```
    Note that the value of `AIWARE_INIT_TOKEN` is important. This will be the "Bearer Token" that you'll need to authorize calls to `aiware-agent` later, so make sure you record this somewhere.

    This installation is a single user installation. If you want all users to use aiWARE, update the path of `AIWARE_HOME` to `/opt/aiware`

4. Run install command
    ```bash
    curl -sfL https://get.aiware.com | sudo -E sh -
    ```
    This will install the aiware-agent as a service. You can check the status via running `service aiware-agent status` command, or monitor it in realtime with `watch service aiware-agent status`.

5. Validate install

    Run: docker ps -a . This should show the aiware-prom-alertmgr, aiware-prometheus, aiware-controller, aiware-postgres, & aiware-registry.

    You can connect to the database at localhost:5342, or whichever port that you have specified for AIWARE_DB_PORT, with postgres/postgres as the username/password.

    Run: docker logs -tf aiware-controller, to see the activity of aiware-controller.

    Go to http://localhost:9000/edge/v1/version, or curl localhost:9000/edge/v1/version, for aiWARE Edge version information.  This will return information such as:

    ```bash
    { "version": "Build number: , Build time: 2021-04-27_19:30:26, Build commit hash: b6e1b627c20489463f7dca463200649af1000222" }
    ```

    Run a test Job:
    ai job create --help, to see how you can run a job.
    ai job get --help, to see how you can get job info.

6. Run install command for aiWARE Core

    ```bash
    ai --controller-token $AIWARE_INIT_TOKEN hub install core --channel prod
    ```

7. Test aiWARE GraphQL.
    ```bash
    curl --request POST --url http://localhost:8080/v3/graphql --header 'Authorization: Bearer root:2035f315-3bf9-44ea-9c33-71fc3d82ac04-17aa22ff-dbdd-40f5-ada1-a694c20c1719' --header 'Content-Type: application/json' --data '{"query":"query {
            me {
                    id
            }
        }"}'
    ```

    The above request should return the following:
    ```bash
    {
        "data": {
            "me": {
                "id": "7682"
            }
        }
    }
    ```
    
# Uninstall aiWARE Anhwhere
To uninstall aiWARE Anywhere, run the following script: 
```bash 
sh /usr/local/bin/aiware-agent-uninstall.sh
```

# Appendix
* [Docker on MacOS Installation Guide](https://docs.docker.com/docker-for-mac/install/)

## Environment variables for installation

| Variable | Default | Description |
|----------|---------|-------------|
| AIWARE_DB_PORT | 5432 | The port to use for the PostgreSQL database |
| AIWARE_HOME | /opt/aiware |The installation location for aiWARE |
| AIWARE_CACHE | /opt/aiware/cache | The the cache directory to mount NFS servers on each local box |
| AIWARE_AGENT_UPDATE_INTERVAL | 60 | The interval between updates on the agent to controller |
| AIWARE_RUN_CONFIG | /var/run/aiware-agent.json | Location of stored configuration of aiWARE | 
| AIWARE_REGION | us-east-1 | Only relevant for AWS | 
| INSTALL_AIWARE_SKIP_START | false | If set to `true`, skip starting aiware |
| INSTALL_AIWARE_SKIP_SERVICE | false | If set to `true`, skip installing as a service on the host |
| INSTALL_AIWARE_VERSION | nil | If set, install this particular version |
| INSTALL_AIWARE_CHANNEL | stable | This install the latest version from a particular channel.  The channels are: dev, stage, stable |
| INSTALL_AIWARE_BIN_DIR | /usr/local/bin | Directory to install aiware-agent binary, links, and uninstall scripts |
| INSTALL_AIWARE_SYSTEMD_DIR | /etc/systemd/system | Directory for systemd service |
| INSTALL_AIWARE_EXEC | agent | command to pass to the service when starting.  By default it starts the agent |

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>
