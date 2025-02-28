## aiware-agent engine-template create

Creates an engine template. category or job-definition should be specified for the template contents.

### Synopsis

Creates an engine template.  The template is a job DAG for cognitive processing by the engine.  There are predefined templates for transcription and translation categories.  Specialized templates can be set up for the engine by specifying the job-definition-file, name of the file containing the job DAG JSON definition.  If not specified, templateName is `standard`.

```
aiware-agent engine-template create --engine {engineID} [--template {templateName}] --category {category:transcription or translation} --job-definition-file {filename} [flags]
```

### Options

```
      --category string              --category {transcription, translation}
      --engine string                --engine engineID
  -h, --help                         help for create
      --job-definition-file string   --job-definition-file jobJSONFileName
      --template string              --template templateName (default "standard")
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

* [aiware-agent engine-template](/cli/aiware-agent_engine-template.md)	 - Contains subcommands to list, delete and load engine templates.

###### Auto generated by spf13/cobra on 20-Apr-2021
