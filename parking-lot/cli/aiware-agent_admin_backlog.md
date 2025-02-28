## aiware-agent admin backlog

This provides CLI for managing the backlog

### Synopsis

This provide CLI for managing the backlog

```
aiware-agent admin backlog [flags]
```

### Options

```
  -h, --help   help for backlog
```

### Options inherited from parent commands

```
  -c, --config string             CLI Config file to use.  By default it will be /home/ubuntu/.config/aiware-cli.yaml
      --controller-token string   Bearer token to use for authenticating operations.
      --controller-url string     Controller URL to use for the CLI.  If specified, this will be used instead of what is in the configuration. (default "http://localhost:9000/edge/v1")
  -d, --debug                     Enables debug output
  -f, --format string             The output format.  The values are text, log or json. (default "text")
  -p, --profile string            The profile to use.  If not specified, the profile named 'default' will be used. (default "default")
  -q, --quiet                     Disables output extra output except the main output
```

### SEE ALSO

* [aiware-agent admin](/cli/aiware-agent_admin.md)	 - Contains administrative subcommands.
* [aiware-agent admin backlog clear](/cli/aiware-agent_admin_backlog_clear.md)	 - Clears the backlog
* [aiware-agent admin backlog ls](/cli/aiware-agent_admin_backlog_ls.md)	 - List the backlog
* [aiware-agent admin backlog reset-alloc](/cli/aiware-agent_admin_backlog_reset-alloc.md)	 - Resets the alloc table

###### Auto generated by spf13/cobra on 20-Apr-2021
