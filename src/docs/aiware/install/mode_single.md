# Install Single Mode

1. Become root
    ```bash
    sudo bash
    ```

2. Set the variables
    ```bash

    export AIWARE_MODE=single
    export AIWARE_DB_PORT=5432 # if PG is running locally
    export AIWARE_CACHE=/opt/aiware/cache
    export AIWARE_DB_ROOT=/opt/aiware/postgres
    export AIWARE_REGISTRY_ROOT=/opt/aiware/registry
    export AIWARE_REGION=us-east-1 # only relevant if running in AWS
    export AIWARE_HOST_EXPIRE=false
    export AIWARE_INIT_TOKEN=`uuidgen` # generate a random UUID for edge token
    export AIWARE_CONTROLLER=http://IP_OF_NODE:9000/edge/v1 # primary ip of the node

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

    Go to http://<HOST>:9000/edge/v1/version, or curl localhost:9000/edge/v1/version, for aiWARE Edge version information.  This will return information such as :

    { "version": "---
    build_date: Tue Feb 4 22:52:57 UTC 2020
    git_repo: realtime
    git_branch: HEAD
    git_commit: f8a8130c88b8ed5b0e50a8f26bf45d5d9b1a22e1
    git_author: al
    build_url: https://jenkins.veritone.com/job/aiware/job/edge-controller/1281/
    build_number: 1281
    " }


    Run a test Job:
    ai job create --help, to see how you can run a job.
    ai job get --help, to see how you can get job info.

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>