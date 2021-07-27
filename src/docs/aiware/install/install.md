# Contents <!-- {docsify-ignore} -->

**APPROXIMATE READING TIME: 35 MINUTES**

* [Single Instance Install](#single-instance-install) 
* [Install on Ubuntu](#install-on-ubuntu)
* [Uninstall aiWARE Anywhere](#uninstall-aiware-anywhere)
* [Appendix](#appendix)

# Install
You can install [aiWARE via Hub](/aiware/hub). Alternatively, you can follow the instructions below. 
<!-- Replace the above with Hub once released https://hub.aiware.com -->

## Dependencies

* OS:  Ubuntu 18.04, Ubuntu 20.04, macOS 10.14 (Mojave), macOS 10.15 (Catalina), macOS 11 (Big Sur)
* Minimum Requirement: Docker with 2 CPUs and 16GB of RAM (Expectation 1 engine running at a time). In AWS, this is usually a m4.xlarge or m5.xlarge. 
* Recommended Requirement: Docker with 4 CPUs and 16GB of RAM (Expectation 1-2 engines running at a time)
* 150 GB of available disk is the minimum requirement. 500 GB of available disk space is recommended. 
* Docker Engine
  * [Docker on macOS Installation Guide](https://docs.docker.com/docker-for-mac/install/)
  * [Docker on Ubuntu Installation Guide](https://docs.docker.com/engine/install/ubuntu/)

## Single Instance Install

1. Open a Terminal window. 
   
    <div class="collapse-accordion"><ul><li>
    <input type="checkbox" id="list-item-1">
    <label for="list-item-1"><span class="expandText">Open a Terminal window.</span><span class="collapseText">Click here to close this section.</span></label>
    <ul>
    <li class="inner-content">
   macOS: This can be done by opening Spotlight (⌘ + space) and typing `Terminal` followed by pressing the return key.
   
   Ubuntu: Press `Ctrl` + `Alt` + `T` to open a terminal window.
   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Change to the root user 

   The aiWARE installation needs elevated privileges to install

    <div class="collapse-accordion"><ul><li>
    <input type="checkbox" id="list-item-2">
    <label for="list-item-2"><span class="expandText">Change to the root user.</span><span class="collapseText">Click here to close this section.</span></label>
    <ul>
    <li class="inner-content">

    ```bash
    sudo bash 
    ```

    The root access is specified in Ubuntu Linux by root@hostname. For macOS, root indicates that you have root access.

    <!-- make the screenshot smaller -->
    <img src="https://user-images.githubusercontent.com/65766301/122611396-e3314800-d09e-11eb-8ce0-7fd9fbc5c2c6.PNG" width="500" align="middle" alt="screenshot 1"/>

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Set up environment variables (Optional).

    <div class="collapse-accordion"><ul><li>
    <input type="checkbox" id="list-item-3">
    <label for="list-item-3"><span class="expandText">Set up environment variables (Optional).</span><span class="collapseText">Click here to close this section.</span></label>
    <ul>
    <li class="inner-content">

    The following environment environments are necessary for an initial installation. `AIWARE_MODE` indicates the mode that should be installed. `AIWARE_MODE` with `single` mode installs the entire aiWARE stack on an instance. This is suitable for a single instance installation. This variable is broken up for a [cluster installation](/aiware/install/cluster). `AIWARE_HOST_EXPIRE` prevents instances in a cloud (such as AWS) from termination. aiWARE gives each instance a lifecycle. `AIWARE_INIT_TOKEN` provides the initial admin token for the installation. 
    <!-- single needs updating in code-->
    <!-- #export AIWARE_MODE=controller,db,api,lb,engine,redis,prometheus,minio,nsq,es,automate -->
    <!-- if AIWARE_MODE isn't set, assume single -->

    ```bash
    export AIWARE_MODE=single
    export AIWARE_HOST_EXPIRE=false
    export AIWARE_INIT_TOKEN=`uuidgen` # generate a random UUID for
    echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN"
    ```

    `uuidgen` should be a globally unique identifier. If you don't have 'uuidgen` installed on your local machine, [UUID Generator](https://www.uuidgenerator.net/) is an alternate source.

    Note that the value of `AIWARE_INIT_TOKEN` is important. This will be the "Bearer Token" that
    you'll need to authorize calls to `aiware-agent` later, so make sure you record this somewhere.

    Set the [environment variables](/aiware/install/envs) that you want before installation. 

    Tip: If you are reinstalling aiWARE on the machine, make sure that the variables are set to the right values. [Learn more](/aiware/troubleshooting/maintenance)

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Run install command

    <div class="collapse-accordion"><ul><li>
    <input type="checkbox" id="list-item-4">
    <label for="list-item-4"><span class="expandText">aiWARE Installation.</span><span class="collapseText">Click here to close this section.</span></label>
    <ul>
    <li class="inner-content">

    ```bash
    curl -sfL https://get.aiware.com |  sh -
    ```

    This will install the aiware-agent as a service.

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

# Post Install

## Validate aiWARE

We need to ensure that the aiware-agent service is running. 

1. Service Validation

   Validate service installation by ensuring that the aiWARE Service is running.

   <div class="collapse-accordion"><ul><li>
   <input type="checkbox" id="list-item-5">
   <label for="list-item-5"><span class="expandText">macOS Service Validation.</span><span class="collapseText">Click here to close this section.</span></label>
   <ul>
   <li class="inner-content">

   macOS: You can check the status of the installation via running `launchctl list | grep aiware-agent`

   ![screenshot 2](https://user-images.githubusercontent.com/53197964/123053909-37973900-d3b9-11eb-9e29-590a14a113c6.png)

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

   <div class="collapse-accordion"><ul><li>
   <input type="checkbox" id="list-item-6">
   <label for="list-item-6"><span class="expandText">Ubuntu Service Validation.</span><span class="collapseText">Click here to close this section.</span></label>
   <ul>
   <li class="inner-content">

   Ubuntu: This will install the aiware-agent as a service. You can check the status via running `service aiware-agent status` command or monitor it in real-time with `watch service aiware-agent status`.

   ![screenshot 3](https://user-images.githubusercontent.com/53197964/123047225-e5064e80-d3b1-11eb-8972-cdee8d8ee45d.png)

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Docker Container Validation 
   
   Validate that the Docker containers for aiWARE start as expected. 

   <div class="collapse-accordion"><ul><li>
   <input type="checkbox" id="list-item-7">
   <label for="list-item-7"><span class="expandText">Docker container validation.</span><span class="collapseText">Click here to close this section.</span></label>
   <ul>
   <li class="inner-content">

   Run: `docker ps -a`. This should show the `aiware-prom-alertmgr`, `aiware-prometheus`, `cadvisor`, `aiware-controller`, and other services with the prefix `aiware-` 

   ![screenshot 4](https://user-images.githubusercontent.com/53197964/123047643-64941d80-d3b2-11eb-8148-8eb58cf1ddc3.png)

   If you notice any issues, visit the [Troubleshooting page](/aiware/install/troubleshooting/maintenance) for steps to address potential issues. 

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. aiWARE Validation 

   Check to see if the aiWARE API is running and accessible. 

   <div class="collapse-accordion"><ul><li>
   <input type="checkbox" id="list-item-8">
   <label for="list-item-8"><span class="expandText">aiWARE validation.</span><span class="collapseText">Click here to close this section.</span></label>
   <ul>
   <li class="inner-content">

   Go to http://localhost:9000/edge/v1/version, or curl localhost:9000/edge/v1/version, for aiWARE Edge version information.  This will return information such as:

   ```bash
   { "version": "Build number: , Build time: 2021-04-27_19:30:26, Build commit hash: b6e1b627c20489463f7dca463200649af1000222" }
   ```

   If you are running aiWARE on a VM or remote machine, replace localhost with the IP address or hostname of that machine. 

   If you run into issues, visit the [Troubleshooting page](/aiware/install/troubleshooting/maintenance) for steps to address potential issues. 

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Configure aiWARE CLI 

   The aiWARE CLI is a helpful tool that interacts with aiWARE stack just deployed. 

   <div class="collapse-accordion"><ul><li>
   <input type="checkbox" id="list-item-9">
   <label for="list-item-9"><span class="expandText">aiWARE CLI Configuration.</span><span class="collapseText">Click here to close this section.</span></label>
   <ul>
   <li class="inner-content">

   Create `~/.config/aiware-cli.yaml`. This step is helpful if you are working with an aiWARE Anywhere installation that is not on your local environment or if you are managing multiple aiWARE Anywhere clusters. 

   ```bash
   ---
   profiles:
     default:
       url: "http://localhost:9000/edge/v1"
       token: "<INSERT $AIWARE_INIT_TOKEN here>"
   ```
    
   Replace `$AIWARE_INIT_TOKEN` with the actual token from the installation step. The value should be in UUID format.

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Create User(s) Using aiWARE CLI

   A new user needs to be created to access tools such as the Edge UI. 

   <div class="collapse-accordion"><ul><li>
   <input type="checkbox" id="list-item-10">
   <label for="list-item-10"><span class="expandText">Create a user.</span><span class="collapseText">Click here to close this section.</span></label>
   <ul>
   <li class="inner-content">

   Running the following using the aiWARE CLI will create a new user `admin-user` with the password `test123`
    
   ```bash
   ai users create -a --display-name Admin -e admin@admin.com --password test123 admin-user
   ```
   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Run install command for aiWARE Core (Optional)
   <!-- to be removed -->
   <!-- Note the default channel -->
   <!-- Add to installation script, assume single -->

   <div class="collapse-accordion"><ul><li>
   <input type="checkbox" id="list-item-11">
   <label for="list-item-11"><span class="expandText">Install aiWARE Core.</span><span class="collapseText">Click here to close this section.</span></label>
   <ul>
   <li class="inner-content">

    ```bash
    ai hub install core
    ```

    This will install the aiware-agent as a service. You can check the status via running `service aiware-agent status` command or monitor
    it in real-time with `watch service aiware-agent status`.

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Next Steps 

   Explore the full capabilities of aiWARE. You can review the following applications or jobs that you can take advantage of:

   - [Admin](/aiware/aiWARE-in-depth/apps/?id=admin) <!-- doublecheck -->
   - [Automate Studio](/aiware/aiWARE-in-depth/apps/?id=automate-studio)
   - [CMS](/aiware/aiWARE-in-depth/apps/?id=cms)
   - [Developer](/aiware/aiWARE-in-depth/apps/?id=developer)
   - [Tutorials](/tutorials/pages/getting-started) <!-- update the link -->
 

# Uninstall aiWARE Anywhere
To uninstall aiWARE Anywhere, run the following script: 
```bash 
sh /usr/local/bin/aiware-agent-uninstall.sh

# optionally remove data
sudo rm -rf /opt/aiware
```


<style>
     p, ul, ol, li { font-size: 18px !important;}

label {
        color: #fff;
    }
    
    .markdown-section code {
        border-radius: 2px;
        color: #322;
        font-size: .8rem;
        margin: 0 2px;
        padding: 3px 5px;
        white-space: pre-wrap;
    }
    
    .collapse-accordion { width:83%; padding-bottom: 25px; }

    .collapse-accordion ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .collapse-accordion label {
        display: block;
        cursor: pointer;
        padding: 4px 32px;
        border: 1px solid #fff;
        border-radius: 7px;
        border-bottom: none;
        background-color: #1871E8;
        position: relative;
    }

    .collapse-accordion label:hover {
        background: #999;
    }

    .collapse-accordion label:after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        text-indent: -9999px;
        border-top: 1px solid #f2f2f2;
        border-left: 1px solid #f2f2f2;
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        text-decoration: none;
        color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transform: rotate(135deg);
        left: 10px;
        top: 50%;
        margin-top: -5px;
    }

    .collapse-accordion input[type="checkbox"]:checked+label:after {
        transform: rotate(-135deg);
        top: 20px;
    }

    .collapse-accordion input[type="radio"]:checked+label:after {
        transform: rotate(-135deg);
        top: 20px;
    }

    .collapse-accordion label.last {
        border-bottom: 1px solid #fff;
    }

    .collapse-accordion ul ul li {
        padding: 10px;
    }

    .inner-content p{
        font-size: 18px;
    }
    .inner-content *{
        font-size: 18px;
    }
    .inner-content code *{
        font-size: 14px;
    }


    .collapse-accordion input[type="checkBox"] {
        position: absolute;
        left: -9999px;
    }
    
    .collapse-accordion input[type="radio"] {
        position: absolute;
        left: -9999px;
    }

    .collapse-accordion input[type="checkBox"]~ul {
        height: 0;
        transform: scaleY(0);
      transition: transform .2s ease-out;
    }
    
    .collapse-accordion input[type="radio"]~ul {
        height: 0;
        transform: scaleY(0);
        transition: transform .5s ease-out;
    }

    .collapse-accordion input[type="checkBox"]:checked~ul {
        height: 100%;
        transform-origin: top;
        transition: transform .5s ease-out;
        transform: scaleY(1);
    }

   .collapse-accordion input[type="radio"]:checked~ul {
        height: 100%;
        transform-origin: top;
        transition: transform .2s ease-out;
        transform: scaleY(1);
    }

    .collapse-accordion input[type="checkBox"]:checked+label {
        background:#00a2ff;
        border-bottom: 1px solid #fff;
    }

    .collapse-accordion input[type="radio"]:checked+label {
        background: red;
        border-bottom: 1px solid #fff;
    }

    .collapse-accordion input[type="checkbox"]:checked+label .collapseText {
        display: block;
    }

   .collapse-accordion input[type="radio"]:checked+label .collapseText {
        display: block;
    }

    .collapse-accordion input[type="checkbox"]:checked+label .expandText {
        display: none;
    }

.collapse-accordion input[type="radio"]:checked+label .expandText {
        display: none;
    }

    .collapseText {
        display: none;
    }

.info {
  margin-top: 50px;
color: #000;
  font-size: 24px;
}
.info span {
  color: red;
}

li {
    font-size: 16px;
}
</style>
