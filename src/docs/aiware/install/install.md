# Install

## Dependencies

* Minimum Requirement: Docker with 2 CPUs and 16GB of RAM (Expectation 1 engine running at a time)
* Recommendeded Requirement: Docker with 4 CPUs and 16GB of RAM (Expectation 1-2 engine running at a time)
* OS:  Ubuntu 18.04, Ubuntu 20.04, MacOS 10.14 (Mojave), MacOS 10.15 (Catalina), MacOS 11 (Big Sur)

## Install on MacOS
This covers an installation on MacOS. For Ubuntu or AWS installation, please refer to the AWS Install Guide.

1. Open a Terminal window. This can be done by opening Spotlight (⌘ + space) and typing `Terminal` followed by pressing the return key.

2. Set the variables
    ```bash

    mkdir -p $HOME/aiware
    export AIWARE_MODE=controller,db,api,lb,engine,redis,prometheus,minio,nsq,es
    export AIWARE_DB_PORT=5432 # if PG is running locally
    export AIWARE_CACHE=$HOME/aiware/cache
    export AIWARE_DB_ROOT=$HOME/aiware/postgres
    export AIWARE_REGISTRY_ROOT=$HOME/aiware/registry
    export AIWARE_CACHE=$HOME/aiware/cache # please make sure this exists
    export AIWARE_ROOT=$HOME/aiware/root
    export AIWARE_AGENT_UPDATE_INTERVAL=15
    export AIWARE_RUN_CONFIG=$HOME/aiware/aiware-config.json
    export AIWARE_REGION=us-east-1 # only relevant if running in AWS
    export AIWARE_HOST_EXPIRE=false
    export AIWARE_INIT_TOKEN=`uuidgen` # generate a random UUID for edge token
    export AIWARE_CONTROLLER=http://127.0.0.1:9000/edge/v1 # for localhost

    echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"
    ```

    Note that the value of `AIWARE_INIT_TOKEN` is important. This will be the "Bearer Token" that
    you'll need to authorize calls to `aiware-agent` later, so make sure you record this somewhere.

3. Run install command

    ```bash
    curl -sfL https://get.aiware.com | sh -
    ```

    This will install the aiware-agent as a service. You can check the status via running `service aiware-agent status` command, or monitor
    it in realtime with `watch service aiware-agent status`.

4. Validate install

    Run: docker ps -a . This should show the aiware-prom-alertmgr, aiware-prometheus, cadvisor, aiware-controller, aiware-postgres, & aiware-registry.

    You can connect to the database at localhost:5342, or whichever port that you have specified for AIWARE_DB_PORT, with postgres/postgres as the username/password.

    Run: docker logs -tf aiware-controller, to see the activity of aiware-controller.

    Go to http://localhost:9000/edge/v1/version, or curl localhost:9000/edge/v1/version, for aiWARE Edge version information.  This will return information such as :

    ```
    { "version": "Build number: , Build time: 2021-04-27_19:30:26, Build commit hash: b6e1b627c20489463f7dca463200649af1000222" }
    ```

    Run a test Job:
    ai job create --help, to see how you can run a job.
    ai job get --help, to see how you can get job info.

5. Run install command for aiWARE applications

    ```bash
    ai --controller-token $AIWARE_INIT_TOKEN hub install core --channel prod
    ```

    This will install the aiware-agent as a service. You can check the status via running `service aiware-agent status` command, or monitor
    it in realtime with `watch service aiware-agent status`.

## Environment variables for installation

| Variable | Default | Description |
|----------|---------|-------------|
| INSTALL_AIWARE_SKIP_START | false | If set to `true`, skip starting aiware |
| INSTALL_AIWARE_SKIP_SERVICE | false | If set to `true`, skip installing as a service on the host |
| INSTALL_AIWARE_VERSION | nil | If set, install this particular version |
| INSTALL_AIWARE_CHANNEL | stable | This install the latest version from a particular channel.  The channels are: dev, stage, stable |
| INSTALL_AIWARE_BIN_DIR | /usr/local/bin | Directory to install aiware-agent binary, links, and uninstall scripts |
| INSTALL_AIWARE_SYSTEMD_DIR | /etc/systemd/system | Directory for systemd service |
| INSTALL_AIWARE_EXEC | agent | command to pass to the service when starting.  By default it starts the agent |