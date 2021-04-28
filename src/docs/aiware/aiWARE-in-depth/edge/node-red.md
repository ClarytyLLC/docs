# Controller / Engine Toolkit / Node-Red engine relationship

For Node-RED engines in V3F, the runtime logic is provided by a single Docker image (node-red-runner) -- which needs the `ENGINE_ID` + runtime definition associated with a build when the container is started.  The difference between Node-RED Engines and other engines is:

1\. A column exists in the `edge.build` table to hold the build runtime -- which is where the runtime definition is stored.  Controller will retrieve the runtime JSON of a build (via GraphQL) and store that in this column.

2\. When Controller asks an agent to start an engine, the runtime JSON needs to be given as well.

3\. Agent on the engine node will start the container with the given `dockerImage` (in this case it should be the `node-red-runner`) with the additional behavior:

    a. Store the `buildRuntime` to a file (e.g. `/cache/engines/{engineId}/{buildId}/runtime.json`). This file will be mounted to the engine Docker container in the same location (e.g. `-v /cache/engines/{engineId}/{buildId}/runtime.json:/cache/engines/{engineId}/{buildId}/runtime.json`).

    b.  Set the following environment variables when starting the engine Docker container:

 ```pre
    AIWARE_BUILD_RUNTIME t= to the file location as set in a)

    ENGINE_ID = the engine id (from the HostActionLaunch)

    BUILD_ID = the build id (from the HostActionLaunch)
```

   c. Agent will also set the `ENGINE_ID` and `BUILD_ID` for the engine.

4\. Engine Toolkit will be agnostic about this `AIWARE_BUILD_RUNTIME` -- the Node-RED process, however, will look for this variable -- which points to a file from which it can load the build runtime definition.

5\. With this approach, the Engine Toolkit does not have to do anything special for Node-RED engines.  The same framework will work for all kinds of engines.

**Node-RED plugins cache:**

* Need a folder to cache node-red plugins.
* The folder is shared by all engines in an organization.
* The folder name is given in AIWARE_AUTOMATE_SHARE_FOLDER environment variable.

## Node-RED (Automate) Engine Runner in Engine Toolkit

In V3F, engines actively get their work items from Controller given
their ENGINE\_IDs (environment variable or /var/manifest.json).  The
work items can be for any builds with the assumption that the engine
instance runs with the most recently deployed  build.

For Node Red engines in V3F, the engine logic will be provided by a
single Docker image (node-red-runner) -- which  will need  ENGINE\_ID +
runtime definition associated with a build when the container is
started.  The difference between NR Engines and other engines require
the following enhancements to the current V3 Edge components:

1\.   Need a column in the edge.build table to hold the build runtime --
    which is where the runtime definition being stored.  Controller will
    retrieve the runtime JSON of a build (via GraphQL) and store that in
    this column
2\.  When Controller asks an agent to start an engine, the runtime JSON
    should be given as well → A new field \`buildRuntime\` ofJSON should
    be added to the HostActionLaunch struct.
3\.  Agent on the engine node will start the container with the given
    \`dockerImage\` ( in this case it should be the
    node-red-runner) with the additional behavior:

a.  Store the buildRuntime to a file (e.g.
    /cache/engines/{engineId}/{buildId}/runtime.json).  This file will
    be mounted to the engine Docker container in the same location (e.g.
    -v
    /cache/engines/{engineId}/{buildId}/runtime.json:/cache/engines/{engineId}/{buildId}/runtime.json)
b.  Set the following environment variables when starting the engine
    Docker container:

```pre
AIWARE\_BUILD\_RUNTIME t= to the file location as set in a)

ENGINE\_ID = the engine id (from the HostActionLaunch)

BUILD\_ID = the build id (from the HostActionLaunch)
```

c.  Agent should also set the ENGINE\_ID and BUILD\_ID for the engine.

4\.  Engine toolkit will be agnostic about this AIWARE\_BUILD\_RUNTIME --
    the Node-RED process however will look for this variable -- again
    this points to a file where it can load the build runtime
    definition.
5\.  With this approach, engine toolkit does not have to do anything
    special for Node-RED engines.

The Node-RED (Automate) engine runner is a Docker image that has Engine Toolkit & Node-RED installed, and it acts as a proxy agent. The ENTRYPOINT for the Docker image should be `/app/engine node main.js`, where main.js is the Node-RED engine runner.

Node-RED engines are denoted with `"runtime":"nodeRed"` in their `manifest.json`.  They may have their own package requirements or custom execution environment that may take some time to install. Some optimizations could be done by having the engines execution runtime setup in a designated location in the File System, e.g., /cache/nodered/engines/{engineId}-{buildId} directory to contain scripts, JSON etc. to set up engine runtime environments.

The work item will be passed on to the Node-RED engine runner `/process` endpoint which then call into the engine's runtime execution code accordingly.

<!--
TODO: The getWork API to Controller would need to be enhanced to allow retrieving Node Red work items (e.g. need runtime parameter). 
-->