# Single Machine Install <!-- {docsify-ignore} -->

**APPROXIMATE READING TIME: 35 MINUTES**

Follow these instructions to install aiWARE Anywhere on a single machine. 
<!-- Replace the above with Hub once released https://hub.aiware.com -->

## System Requirements
### Minimum

* OS:  Ubuntu 18.04, Ubuntu 20.04, macOS 10.14 (Mojave), macOS 10.15 (Catalina), macOS 11 (Big Sur)
* Storage: 150 GB available space
* Memory: 2 CPUs and 16GB of RAM to run 1 engine at a time. In AWS, this is usually a m4.xlarge or m5.xlarge. 
* Docker Engine
  * [Docker on macOS installation guide](https://docs.docker.com/docker-for-mac/install/)
  * [Docker on Ubuntu installation guide](https://docs.docker.com/engine/install/ubuntu/)

### Recommended

* Storage: 500 GB available space
* Memory: 4 CPUs and 16GB of RAM to run 1-2 engines at a time.

## Install aiWARE Anywhere

1. Open a Terminal window. 
   
   > macOS shortcut: Open **Spotlight** (⌘ + space) and type _Terminal_, then press **Return**.<br>
   > Ubuntu shortcut: Press **Ctrl+Alt+T**.

1. Run `sudo bash` to change to the root user. This gives you the elevated privileges needed to install aiWARE. The root access is specified in Ubuntu Linux by `root@<hostname>`. For macOS, `root` indicates that you have root access.

1. Review the following [environment variables](/aiware/install/envs) you'll need so you can set them up in the next step. This step is optional if you've done it already.

    * `AIWARE_MODE` is the mode that should be installed. `AIWARE_MODE` with `single` mode installs the entire aiWARE stack on a single instance. This variable is broken up for a [cluster installation](/aiware/install/cluster).
    * `AIWARE_HOST_EXPIRE` prevents instances in a cloud (such as AWS) from terminating. aiWARE gives each instance a lifecycle.
    * `AIWARE_INIT_TOKEN` contains your `uuidgen`. `uuidgen` must be unique because it's the initial admin token for your installation and is also your bearer token for calls to `aiware-agent`, so write it down.
    
    ?> Don't have 'uuidgen' installed on your local machine? Run `uuidgen install` or use [UUID Generator](https://www.uuidgenerator.net/).

1. Run this command to set up your environment variables.

    ```bash
    export AIWARE_MODE=redis,db,nsq,es,api,lb,minio,engine,automate,controller
    export AIWARE_HOST_EXPIRE=false
    export AIWARE_INIT_TOKEN=`uuidgen` # generate a random UUID

    # Set a domain for aiware - REQ'd if using Core due to SSL for the applications
    # export AIWARE_DOMAIN_NAME=dev-local.aiware.com
        
    echo "AIWARE_INIT_TOKEN is $AIWARE_INIT_TOKEN" # print the random UUID
    ```

    ?> If you want to use aiWARE applications, you need to install aiWARE Anywhere on a private domain name, [set up an SSL certificate](#Adding-SSL-Certificates), and add the `AIWARE_DOMAIN_NAME` environment variable using the command below. 
    <!-- single needs updating in code-->
    <!-- #export AIWARE_MODE=controller,db,api,lb,engine,redis,prometheus,minio,nsq,es,automate -->
    <!-- if AIWARE_MODE isn't set, assume single -->

    ```bash
    export AIWARE_DOMAIN_NAME=dev-local.aiware.run # the `AIWARE_DOMAIN_NAME` environment variable
    ```

    <!-- Tip: If you are reinstalling aiWARE on the machine, make sure that the variables are set to the right values. [Learn more](/aiware/troubleshooting/maintenance) -->

5. Install the aiware-agent as a service.

    ```bash
    curl -sfL https://get.aiware.com |  sh -
    ```

    If it installs correctly, you’ll see `[INFO] aiware <version number> installed`.

## Validate the Installation

1. Validate the service installation by checking that the aiWARE Service is running.

   <div class="collapse-accordion"><ul><li>
   <input type="checkbox" id="list-item-5">
   <label for="list-item-5"><span class="expandText">macOS Service Validation.</span><span class="collapseText">Click here to close this section.</span></label>
   <ul>
   <li class="inner-content">

   macOS: Run `launchctl list | grep aiware-agent`.

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

   Ubuntu: Run `service aiware-agent status` or monitor it in real-time with `watch service aiware-agent status`.

   ![screenshot 3](https://user-images.githubusercontent.com/53197964/123047225-e5064e80-d3b1-11eb-8972-cdee8d8ee45d.png)

   </li>                  
   </ul>
   </li>          
   </ul>
   </div>

1. Run `docker ps -a` to validate that the Docker containers for aiWARE start as expected. You should see `aiware-prom-alertmgr`, `aiware-prometheus`, `cadvisor`, `aiware-controller`, and other services with the prefix `aiware-`. 

   ![List of aiware services](https://user-images.githubusercontent.com/53197964/123047643-64941d80-d3b2-11eb-8148-8eb58cf1ddc3.png)

   If you notice any issues, visit the [Troubleshooting page](/aiware/install/troubleshooting/maintenance) for help.

1.    Confirm that the aiWARE API is running and accessible by going to http://localhost:9000/edge/v1/version or running `curl localhost:9000/edge/v1/version`. If it succeeds, you'll see aiWARE Edge version information like this:

   ```bash
   { "version": "Build number: , Build time: 2021-04-27_19:30:26, Build commit hash: b6e1b627c20489463f7dca463200649af1000222" }
   ```

   > If you're running aiWARE on a VM or remote machine, replace "localhost" with the IP address or hostname of that machine. 

1. Configure aiWARE CLI, a helpful tool that interacts with the aiWARE stack you just deployed. 

    Run `mkdir -p ~/.config` to create a new, hidden folder called config, then run `touch ~/.config/aiware-cli.yaml` to create a `.yaml` file. This file helps if you're working with an aiWARE Anywhere installation that's not on your local environment or if you're managing multiple aiWARE Anywhere clusters.

    > `ls -a` shows all files in the directory, including hidden files.

1. Copy the command below, replace `<YOUR $AIWARE_INIT_TOKEN>` with your `uuid` token from the installation step, then run the command. This lets you run aiware commands without providing a bearer token every time.

   ```bash
   cat << 'EOF' > aiware-cli.yaml
   ---
   profiles:
     default:
       url: "http://localhost:9000/edge/v1"
       token: "<YOUR $AIWARE_INIT_TOKEN>"
    EOF
   ```
    
1. Create a new user with the aiWARE CLI so you can access tools such as the Edge UI. Run the command below to create a new user called `admin-user` with the password `test123`.
    
   ```bash
   ai users create -a --display-name Admin -e admin@admin.com --password test123 admin-user
   ```

1. Run install command for aiWARE Core (optional).
   <!-- to be removed -->
   <!-- Note the default channel -->
   <!-- Add to installation script, assume single -->

    ```bash
    ai hub install core
    ```

    This will install the aiware-agent as a service. Once the install completes, the terminal will print "Installation is completed". You can check the status by running `service aiware-agent status` command or monitor it in real-time with `watch service aiware-agent status`.

1. Adding SSL Certificates 

   To add a SSL certificate to an installation of aiWARE Anywhere, you'll need the following:

    * A server certificate. (server.pem)
    * A server certificate key. (server.pem.key)
    * (Optional) A CA bundle. This should be a file with the certificate authority's certificate and all intermediate certificate authority certificates in a chain. (ca.pem)

   The certificates are located in the directory <AIWARE_ROOT>/haproxy/certs. The below will add the certificates for dev-local.aiware.run. For a standard installation of aiWARE, `AIWARE_ROOT` is `/opt/aiware`. Here are the installation steps:

   ```bash
   
   sudo su
   cd /opt/aiware/haproxy/certs
   # Replace the following files, ca.pem, server.pem and server.pem.key
   # Download server.pem for dev-local.aiware.run
   curl https://get.aiware.com/anywhere/certs/server.pem -sLO
   # Download server.pem.key for dev-loca.aiware.run
   curl https://get.aiware.com/anywhere/certs/server.pem.key -sLO
   # Restart HAProxy container
   docker restart aiware-haproxy
   ```

## Next Steps 

   Explore the full capabilities of aiWARE. You can review the following applications or jobs that you can take advantage of:

   - [Admin](/aiware/aiWARE-in-depth/apps/?id=admin) <!-- doublecheck -->
   - [Automate Studio](/aiware/aiWARE-in-depth/apps/?id=automate-studio)
   - [CMS](/aiware/aiWARE-in-depth/apps/?id=cms)
   - [Developer](/aiware/aiWARE-in-depth/apps/?id=developer)
   - [Tutorials](/tutorials/pages/getting-started) <!-- update the link -->
 

## Uninstall aiWARE Anywhere
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

