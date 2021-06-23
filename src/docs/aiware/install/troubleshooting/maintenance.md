# Maintenance 
The following are maintenance steps that you can take to keep your cluster clean. 

## Upgrading aiWARE

Upgrading aiWARE is a quick process. We'll need to stop the stack before we can perform an upgrade. If this is an HA deployment, review the [cluster guide](/aiware/install/cluster) for inforomation about upgrading your cluster.
```bash

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

# edit /etc/systemd/system/aiaware-agent.service.env as appropriate
vi /etc/systemd/system/aiware-agent.service.env
export $(cat /etc/systemd/system/aiware-agent.service.env | xargs)

# Please validate there is AIWARE_CONTROLLER
env | sort | grep AIWARE_

curl -sfL https://get.aiware.com | sh -
```

In the output you will see the docker version installed on your local machine.

![screenshot 4](https://user-images.githubusercontent.com/65766301/122611892-bdf10980-d09f-11eb-8c5b-45c2907f63e1.PNG)

## Reinstalling aiWARE

To reinstall aiWARE, it's best to clean a previous installation before installing once again. This should be done only when you need a clean installation of aiWARE. 

To uninstall aiWARE Anywhere, run the following script: 
```bash 
sh /usr/local/bin/aiware-agent-uninstall.sh
```

After running the uninstall, you can install once again by [following the installation guide](/aiware/install/install). 

## Controller Won't Start (DB)
Please look at the logs of the controller. Running `docker logs aiware-controller` should provide an output of the logs. If you see:

```text
$ docker logs aiware-controller

2020-11-04T19:51:58.974618580Z 2020/11/04 19:51:58 Starting server....
2020-11-04T19:51:58.974642697Z 2020/11/04 19:51:58 InstanceID: 1604519518_c1cabd69-420a-441a-be4a-181e68cf9f0a
2020-11-04T19:51:58.974648379Z 2020/11/04 19:51:58 Build time: 2020-11-04_00:27:38, Build commit hash: 9f46c5d85096bd24bddb4d93d9e279a2dabcfdbe
2020-11-04T19:51:58.974652559Z 2020/11/04 19:51:58 AIWARE_LICENSING is disabled
2020-11-04T19:51:58.974694668Z time="2020-11-04T19:51:58Z" level=info msg="aiWARE Controller starting monitoring on port=8001"
2020-11-04T19:51:59.237624797Z >| Flyway Community Edition 6.2.3 by Redgate
2020-11-04T19:51:59.280962266Z !| ERROR:
2020-11-04T19:51:59.282180116Z !| Unable to obtain connection from database (jdbc:postgresql://localhost:5432/postgres?sslmode=disable) for user 'postgres': Connection to localhost:5432 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.
2020-11-04T19:51:59.284209921Z !| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2020-11-04T19:51:59.284223062Z !| SQL State  : 08001
2020-11-04T19:51:59.284226691Z !| Error Code : 0
2020-11-04T19:51:59.285008575Z !| Message    : Connection to localhost:5432 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.
2020-11-04T19:51:59.285020414Z !|
2020-11-04T19:51:59.301736996Z Error waiting for Cmd exit status 1
```

The main line in the output is `Connection to localhost:5432 refused`.  Please check `aiware-postgres` container.

The database `aiware-postgres` will probably show:
```text
2020-11-04T19:50:17.228255167Z PostgreSQL Database directory appears to contain a database; Skipping initialization
   2020-11-04T19:50:17.228259177Z
   2020-11-04T19:50:17.239307505Z 2020-11-04 19:50:17.238 UTC [1] FATAL:  database files are incompatible with server
   2020-11-04T19:50:17.239324833Z 2020-11-04 19:50:17.238 UTC [1] 
```

At this point, there are options:
1. Stay with the version of postgres installed on the cluster
1. Wipe database and start over
1. Update postgres

<!-- TBD  -->
## Clean Up Docker Images
You can periodically prune Docker images on Engine nodes. Engine nodes delete expired containers. However, Docker images remain on the instance. 
```bash
docker image prune -f 
```

## No Access to Docker 

When running a Docker command, the following message may appear: 

```bash
ubuntu@ip-127-0-0-1:~$ docker ps
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/json: dial unix /var/run/docker.sock: connect: permission denied
```

This means that the current user, `ubuntu`, does not have the access to the Unix socket used attached to the Docker daemon. More details can be [found here](https://docs.docker.com/engine/install/linux-postinstall/).

To provide access to the socket, run the following:

```bash
sudo useradd -aG docker ubuntu
```

## Ubuntu Specific Troubleshooting

## Install Docker and Dependencies

aiWARE resources are packaged and deployed as Docker containers , so to initialize aiWARE, Docker is required,
   
To install Docker and other required libraries:
   
Copy the below command to the terminal and press enter to update the package information from all of the configured sources.

```bash
apt update -y
apt install docker.io nfs-common awscli uuid prometheus-node-exporter -y
```

To verify whether the Docker has installed, enter:

```bash
docker --version
```

### Libcontainerd Unattended Upgrade 

Please note that these commands are valid when Systemd is installed on your instance.

Check that Docker and the aiWARE Agent are running
```bash
sudo systemctl status docker
sudo systemctl status aiware-agent
```

Running services will have the following status
```
● docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; disabled; vendor preset: enabled)
   Active: active (running) since Sat 2020-10-17 06:37:11 UTC; 1 months 15 days ago

● aiware-agent.service - aiWARE Edge
   Loaded: loaded (/etc/systemd/system/aiware-agent.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2020-12-01 18:18:42 UTC; 3min 51s ago
``` 

If you want to disable Unattended Upgrades, you can do so with the following steps (Please note that this will disable all security upgrades)
```bash
sudo apt-get remove unattended-upgrades
sudo systemctl stop apt-daily.timer
sudo systemctl disable apt-daily.timer
sudo systemctl disable apt-daily.service
sudo systemctl daemon-reload
```