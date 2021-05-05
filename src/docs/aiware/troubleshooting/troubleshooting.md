# Upgrading

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

# DB

## Queries are starting to time out
Well, if the queries are starting to time out, then you may not have enough IOPS for the system queries.  First you will need to lookup what the IOPS are for the data disk.  Next you can use a tool like `iostat` to check the iops or tps.

### Not enough Disk IO
This command will print the tps every 5 seconds for `/dev/xvdd`. Please replace `/dev/xvdd` with the real data disk.

```bash
iostat -std /dev/xvdd 3
```

This will report something like:
```bash

10/27/20 07:36:13
Device             tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
xvdd           2975.60     76320.80     26794.40     381604     133972
```

If the limit is 3000 and tps is normally very close or exceeding 3000, you should add more IOPS to the system.

You can also validate this by running the following query.  You should see wait_type as `IO`.  If so, that is a good indication the system needs more IO throughput.

```sql
SELECT pid,
     now() - pg_stat_activity.query_start AS duration,
     query,
     state,
     pg_stat_activity.*
FROM pg_stat_activity
WHERE (now() - pg_stat_activity.query_start) > INTERVAL '1 seconds'
AND state != 'idle'
ORDER BY duration DESC
LIMIT 1000;
```

Options:
1. Increase IOPS for the volume in the cloud provider
1. If on premise, consider upgrading the disk to a faster disk such as NVMe.
1. If tps are mostly reads, consider increasing the memory available to the DB.

### Not enough CPU


# Controller

## Controller won't start (DB)

Please look at the logs of the controller.  If you see:

```text
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

### Wipe database
```bash
docker stop aiware-postgres
rm -rf /opt/aiware/postgres/*
docker start aiware-postgres
```

## Update postgres
```bash
docker exec postgres-old pg_dumpall -U postgres
docker exec -i postgres-new psql -U postgres

```
## Excessive connections to DB Server

If db_max_idle is set too low and you have a pattern of active db connections going up and down, `db_max_idle` is set too low.  `db_max_idle` should be the difference between the peak and valley plus a small delta.

To diagnose, ssh into a controller box and run `netstat -an | grep 5432`

# NFS

## Out of storage

aiWARE automatically cleans up storage after a set period.  If more storage is required for that period due to higher processing volumes, you can run the following on the NFS servers:

This is expressed in minutes.  This will remove everything older than 1440 minutes (24 hours).  Please adjust as appropriate.
```bash

cd /opt/aiware/nfs

find 0* -mmin +1440  -type f -print -exec rm {} \; &
find 1* -mmin +1440  -type f -print -exec rm {} \; &
find 2* -mmin +1440  -type f -print -exec rm {} \; &
find 3* -mmin +1440  -type f -print -exec rm {} \; &
find 4* -mmin +1440  -type f -print -exec rm {} \; &
find 5* -mmin +1440  -type f -print -exec rm {} \; &
find 6* -mmin +1440  -type f -print -exec rm {} \; &
find 7* -mmin +1440  -type f -print -exec rm {} \; &
find 8* -mmin +1440  -type f -print -exec rm {} \; &
find 9* -mmin +1440  -type f -print -exec rm {} \; &
find a* -mmin +1440  -type f -print -exec rm {} \; &
find b* -mmin +1440  -type f -print -exec rm {} \; &
find c* -mmin +1440  -type f -print -exec rm {} \; &
find d* -mmin +1440  -type f -print -exec rm {} \; &
find e* -mmin +1440  -type f -print -exec rm {} \; &
find f* -mmin +1440  -type f -print -exec rm {} \; &
```

# Operating System

## Ubuntu

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
