# aiWARE Anywhere - Proof of Concept Installation

This step-by-step guide will help you have a instance of aiWARE Anywhere on a local environment. This can be used as a proof of concept environment to test any engines or applications on the aiWARE platform. 

## Dependencies

* Docker with 2 CPUs and 16GB of RAM
* OS:  Ubuntu 18.04, Ubuntu 20.04

## Install aiWARE Anywhere on Ubuntu 18.04 / 20.04

1. Become root
    ```bash
    sudo bash
    ```

2. Install Dependencies
   ```
   apt update -y
   apt install docker.io uuid nfs-common nfs-kernel-server
   ```

2. Set the variables and install
    ```bash

    export AIWARE_MODE=controller,prometheus,redis,db,nsq,es,api,lb,minio,engine 
    export AIWARE_AGENT_UPDATE_INTERVAL=5
    export AIWARE_INIT_TOKEN=`uuidgen`
    curl -sfL https://get.aiware.com | sudo -E sh -
/usr/local/bin/aiware-agent --controller-token $AIWARE_INIT_TOKEN hub install core --channel dev

    echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"
    ```

    Note that the value of `AIWARE_INIT_TOKEN` is important. This will be the "Bearer Token" that
    you'll need to authorize calls to `aiware-agent` later, so make sure you record this somewhere.

3. Validate controller install

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

4. Run install command for aiWARE applications

    ```bash
    /usr/local/bin/aiware-agent --controller-token $AIWARE_INIT_TOKEN hub install core --channel dev
    ```

    This will install the aiware-agent as a service. You can check the status via running `service aiware-agent status` command, or monitor
    it in realtime with `watch service aiware-agent status`.

5.    Run a test Job:
       Run the following to run a test Spanish translation job
       ```
       JOB_ID=$(curl -X POST --url "http://localhost:9000/edge/v1/proc/job/create" --header "Authorization: Bearer $AIWARE_INIT_TOKEN" --header "Content-Type: application/json" --data '{"jobs":[{"internalOrganizationID":"","jobStatus":"queued","taskRoutes":[{"taskChildId":"ADAPTER_CORR_TASK_ID"},{"taskChildId":"CHUNK_CORR_TASK_ID","taskChildInputId":"CHUNK_INPUT","taskParentId":"ADAPTER_CORR_TASK_ID","taskParentOutputId":"ADAPTER_OUTPUT"},{"taskChildId":"SM_CORR_TASK_ID","taskChildInputId":"SM_INPUT","taskParentId":"CHUNK_CORR_TASK_ID","taskParentOutputId":"CHUNK_OUTPUT"},{"taskChildId":"OW_CORR_TASK_ID","taskChildInputId":"OW_INPUT","taskParentId":"SM_CORR_TASK_ID","taskParentOutputId":"SM_OUTPUT"}],"tasks":[{"correlationTaskId":"ADAPTER_CORR_TASK_ID","engineId":"9e611ad7-2d3b-48f6-a51b-0a1ba40fe255","ioFolders":[{"correlationID":"ADAPTER_OUTPUT","mode":"stream","type":"output"}],"maxEngines":1,"taskPayloadJSON":"{\"url\":\"https://test-chunk-engine.s3.amazonaws.com/AC.mp4\"}","taskStatus":"pending", "priority":-150},{"correlationTaskId":"CHUNK_CORR_TASK_ID","engineId":"8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440","ioFolders":[{"correlationID":"CHUNK_INPUT","mode":"stream","type":"input"},{"correlationID":"CHUNK_OUTPUT","mode":"chunk","type":"output"}],"maxEngines":1,"parentMustBeCompleteBeforeStarting":true,"taskPayloadJSON":"{\"customFFMPEGProperties\":{\"chunkSizeInSeconds\":\"60\"},\"ffmpegTemplate\":\"audio\"}","taskStatus":"pending", "priority":-150},{"correlationTaskId":"SM_CORR_TASK_ID","engineId":"c0e55cde-340b-44d7-bb42-2e0d65e98255","ioFolders":[{"correlationID":"SM_INPUT","mode":"chunk","type":"input"},{"correlationID":"SM_OUTPUT","mode":"chunk","type":"output"}],"maxEngines":1,"maxRetries":10,"numChunksPerWorkItem":5,"parentMustBeCompleteBeforeStarting":true,"taskStatus":"pending", "priority":-150},{"correlationTaskId":"OW_CORR_TASK_ID","engineId":"8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3","ioFolders":[{"correlationID":"OW_INPUT","mode":"chunk","type":"input"}],"maxEngines":1,"maxRetries":10,"taskStatus":"pending", "priority":-150}]}]}'  | jq '.internalJobIds[]' | tr -d '"'); echo "The job ID is: $JOB_ID. If the job ID is empty, then there's an issue with the installation".
       sleep 60
       # Check the job status
       curl -X GET --url "http://localhost:9000/edge/v1/proc/job/$JOB_ID/status" --header "Authorization: Bearer $AIWARE_INIT_TOKEN" --header "Content-Type: application/json"
       ```

At this point, you should have the full stack of aiWARE running at your finger tips. 
