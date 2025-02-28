## aiware-agent stats

Returns stats of the host and the docker containers it is running.

### Synopsis

Returns stats of the host and the docker containers it is running.

```
aiware-agent stats [flags]
```

### Options

```
  -h, --help            help for stats
  -o, --output string   File or URI to write the stats to. When empty, the standard output is used.
  -v, --verbose         When specified the stats are verbose.
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

* [aiware-agent](/cli/aiware-agent.md)	 - Provides CLI as well as launching edge services as agent

###### Auto generated by spf13/cobra on 20-Apr-2021
