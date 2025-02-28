## aiware-agent

Provides CLI as well as running as aiware agent

### Synopsis

An Edge is deployed by installing and running a single executable, aiWARE Agent.  Agent is responsible
for the installation and management of all Edge Subsystems described throughout this document.
EA provides environment and installation parameters to the subsystem being launched.
In an Edge deployment, Agent is the only native process that is run directly on the host operating system.
All other subsystems are launched by agent as docker containers.


aiWARE Agent leverages a configuration file, ~/.config/aiware-cli.yaml,  for the connection profiles including the default.

Example config:
profiles:
   default:
      url: https://localhost:9000/edge/v1
      token: 12345678-1234-1234-1234-123456789497
      core-url: https://api.veritone.com/v3/graphql
      core-token: sso-token:12345678
      clusterid: rt-1cdc1d6d-a500-467a-1234-d3c5bf3d6999


```
aiware-agent [flags]
```

### Options

```
  -c, --config string             CLI Config file to use.  By default it will be /home/ubuntu/.config/aiware-cli.yaml
      --controller-token string   Bearer token to use for authenticating operations.
      --controller-url string     Controller URL to use for the CLI.  If specified, this will be used instead of what is in the configuration. (default "http://localhost:9000/edge/v1")
  -d, --debug                     Enables debug output
  -f, --format string             The output format.  The values are text, log or json. (default "text")
  -h, --help                      help for aiware-agent
  -p, --profile string            The profile to use.  If not specified, the profile named 'default' will be used.  The profiles are set in ~/.config/aiware-cli.yaml (default "default")
  -q, --quiet                     Disables output extra output except the main output
      --sample-app                Indicates whether it should install the sample app
```

### SEE ALSO

* [aiware-agent admin](/cli/aiware-agent_admin.md)	 - Contains administrative subcommands.
* [aiware-agent agent](/cli/aiware-agent_agent.md)	 - Initializes edge services, monitors host stats, launches, terminates and monitors docker containers
* [aiware-agent aiware-core](/cli/aiware-agent_aiware-core.md)	 - Contains subcommands to perform operations on core
* [aiware-agent build](/cli/aiware-agent_build.md)	 - Contains subcommands for engine builds.
* [aiware-agent check](/cli/aiware-agent_check.md)	 - Check the system for initial problems on running aiWARE
* [aiware-agent completion](/cli/aiware-agent_completion.md)	 - generate the autocompletion script for the specified shell
* [aiware-agent config](/cli/aiware-agent_config.md)	 - Contains commands to list, get and set configuration values for the edge cluster.
* [aiware-agent core](/cli/aiware-agent_core.md)	 - Contains sub-commands to manage the aiWARE Core service
* [aiware-agent dag](/cli/aiware-agent_dag.md)	 - Contains subcommands to perform dag operations such as create, start, stop, update, pause, and unpause a DAG
* [aiware-agent endpoint](/cli/aiware-agent_endpoint.md)	 - Contains commands supporting endpoints
* [aiware-agent engine](/cli/aiware-agent_engine.md)	 - Contains subcommands get and alter engine information.
* [aiware-agent engine-category](/cli/aiware-agent_engine-category.md)	 - Contains subcommands to list, delete and load engine categories.
* [aiware-agent engine-instance](/cli/aiware-agent_engine-instance.md)	 - Contains subcommands for engine instances.
* [aiware-agent engine-template](/cli/aiware-agent_engine-template.md)	 - Contains subcommands to list, delete and load engine templates.
* [aiware-agent host](/cli/aiware-agent_host.md)	 - Contains subcommands to assign, terminate, reboot, drain and show statistics of a host
* [aiware-agent hub](/cli/aiware-agent_hub.md)	 - Contains subcommands to manipulate hub.
* [aiware-agent job](/cli/aiware-agent_job.md)	 - Contains subcommands to create, update, get and delete jobs
* [aiware-agent license](/cli/aiware-agent_license.md)	 - Contains subcommands to manipulate licenses.
* [aiware-agent org](/cli/aiware-agent_org.md)	 - Contains subcommands to create, delete and update organizations.
* [aiware-agent schedule](/cli/aiware-agent_schedule.md)	 - Contains subcommands to perform schedule operations
* [aiware-agent services](/cli/aiware-agent_services.md)	 - Contains subcommands to update, list and delete services.
* [aiware-agent setup](/cli/aiware-agent_setup.md)	 - Contains subcommands to perform setup operations
* [aiware-agent stats](/cli/aiware-agent_stats.md)	 - Returns stats of the host and the docker containers it is running.
* [aiware-agent task](/cli/aiware-agent_task.md)	 - Contains subcommands to perform task operations
* [aiware-agent template](/cli/aiware-agent_template.md)	 - Contains subcommands to perform template operations
* [aiware-agent tools](/cli/aiware-agent_tools.md)	 - Admin tools
* [aiware-agent users](/cli/aiware-agent_users.md)	 - aiWARE users

###### Auto generated by spf13/cobra on 16-Aug-2021
