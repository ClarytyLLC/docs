# Brainstorm

Currently, we already have the following commands for [engines](src/docs/cli/aiware-agent_engine_load.md) and [apps](src/docs/cli/aiware-agent_service_install.md):
```
aiware-agent engine load
aiware-agent service install <path-to-config-file> [flags]
```
```
aiware-agent engine list 
This would need to go to Hub
```

```
aiware-agent engine install <engine-id>
Retrieve the engine information from Hub and install it on the cluster the aiWARE Agent would go to
```

```
aiware-agent engine list installed 
List the engines installed locally on the local cluster of aiWARE Anywhere
Runs GET /admin/engines
```

``` 
aiware-agent engine upload <engine-id>
Start a process of uploading an engine to Hub? This engine must be available locally 
```

```
aiware-agent engine remove <engine-id>
Remove an engine from a local instance of aiWARE Anywhere
POST /engine/{EngineID}/build/{BuildID}/delete
POST /admin/engine/{EngineID}/delete 
```

```
aiware-agent service list 
This would need to go to Hub
```

```
aiware-agent service install <service-id>
Retrieve the service information from Hub and install it on the cluster the aiWARE Agent would go to. Should fail if the api instance type is not in the host table 
```

```
aiware-agent service list installed 
List the services installed locally on the local cluster of aiWARE Anywhere
```

``` 
aiware-agent service upload <engine-id>
Start a process of uploading an service to Hub? This service must be available locally
```

```
aiware-agent service remove <engine-id>
Remove an service from a local instance of aiWARE Anywhere
```
