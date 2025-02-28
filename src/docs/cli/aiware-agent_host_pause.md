## aiware-agent host pause

Puts the host in a paused state.

### Synopsis

Puts the host in a paused state.

```
aiware-agent host pause [flags]
```

### Options

```
  -h, --help   help for pause
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
```

### SEE ALSO

* [aiware-agent host](/cli/aiware-agent_host.md)	 - Contains subcommands to assign, terminate, reboot, drain and show statistics of a host

###### Auto generated by spf13/cobra on 3-Jun-2021

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>
