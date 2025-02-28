## aiware-agent services update

update service image

### Synopsis

update service image

```
aiware-agent services update [service-id] [flags]
```

### Options

```
      --channel string    (default "prod")
  -h, --help             help for update
```

### Options inherited from parent commands

```
  -c, --config string             CLI Config file to use.  By default it will be /home/ubuntu/.config/aiware-cli.yaml
      --controller-token string   Bearer token to use for authenticating operations.
      --controller-url string     Controller URL to use for the CLI.  If specified, this will be used instead of what is in the configuration. (default "http://localhost:9000/edge/v1")
  -d, --debug                     Enables debug output
  -f, --format string             The output format.  The values are text, log or json. (default "text")
  -p, --profile string            The profile to use.  If not specified, the profile named 'default' will be used.  The profiles are set in ~/.config/aiware-cli.yaml (default "default")
  -q, --quiet                     Disables output extra output except the main output
      --sample-app                Indicates whether it should install the sample app
```

### SEE ALSO

* [aiware-agent services](/cli/aiware-agent_services.md)	 - Contains subcommands to update, list and delete services.

###### Auto generated by spf13/cobra on 16-Aug-2021
