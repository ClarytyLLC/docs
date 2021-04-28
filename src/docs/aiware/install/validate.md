# Validate

## Docker containers
Run `docker ps -a` .

Depending on the mode, this will show various containers.

- controller
    - `aiware-controller`
- database
    - `aiware-postgres`
- registry
    - `aiware-registry`
- prometheus
    - `aiware-prometheus`


## Database
You can connect to the database at localhost:5342, or whichever port that you have specified for AIWARE_DB_PORT, with postgres/postgres as the username/password.

`telnet localhost 5432`

## Controller

Run:
```bash
docker logs -tf aiware-controller
```

This will show the output of controller logs
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