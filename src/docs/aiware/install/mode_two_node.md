# Overview
This will install a two node system.  The first node will run the database, controller and NFS.  The second node will run an engine server.


## Admin Node
### Step 1: Elevate Permissions to Root
`sudo bash`

This will ensure that all following steps are executed as root.

### Step 2: Setup Environment Variables and Directories
```bash
export AIWARE_MODE=controller,db,registry,nfs,prometheus
export AIWARE_DB_PORT=5432 # if PG is running locally
export AIWARE_DB_ROOT=/opt/aiware/postgres
export AIWARE_REGISTRY_ROOT=/opt/aiware/registry
export AIWARE_REGION=us-east-1
export AIWARE_HOST_EXPIRE=false
export AIWARE_LICENSE=<LICENSE_KEY>
export AIWARE_INIT_TOKEN=`uuidgen` # generate a random UUID for edge token
```

### Step 3: Run Installation Command
```bash
curl -sfL https://get.aiware.com | sudo sh -
```

### Step 4: Validate the Installation
Run: exportfs to validate /opt/aiware/nfs is exported
Run: docker ps to validate aiware-controller, aiware-postgres, aiware-registry are running

Please note the IP of the Admin box and use for the other systems.
## Engine Node
### Step 1: Elevate Permissions to Root
`sudo bash`

This will ensure that all following steps are executed as root.
### Step 2: Setup Environment Variables and Directories
```bash
export AIWARE_MODE=engine
export AIWARE_REGION=us-east-1
export AIWARE_CONTROLLER=http://IP_OF_ADMIN_NODE:9000/edge/v1
export AIWARE_HOST_EXPIRE=false
```

### Step 3: Run Installation Command

```bash
curl -sfL https://get.aiware.com | sudo sh -
```

### Step 4: Validate the Installation
ADD
