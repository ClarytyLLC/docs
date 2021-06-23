# Maintenance

## Connecting to a Remote Environment
To connect to a remote deployment of aiWARE, create a directory named `.config` under your home directory. 
```bash
$ mkdir $HOME/.config
$ echo "Using $HOME/.config as the configuration directory for the aiWARE CLI"
```
Next, add the following content in a file named aiware-cli.yaml within the newly created directory $HOME/.config. Here are the contents of the file: 
```bash
---
profiles:
  default:
    url: "http://<IP_ADDR>:9000/edge/v1"
    token: "<CORE_TOKEN>"
```
You can now use the `default` profile with the `ai` command command to manage a remote cluster. Here's an example:
```bash 
$ ai --profile default engine ls
```

## Upgrading aiWARE

Upgrading aiWARE is a quick process. We'll need to stop the stack before we can perform an upgrade. If this is an HA deployment, review the [cluster guide](/aiware/install/cluster) for inforomation about upgrading your cluster.
```bash

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

# edit /etc/systemd/system/aiaware-agent.service.env as appropriate
vi /etc/systemd/system/aiware-agent.service.env
export $(cat /etc/systemd/system/aiware-agent.service.env | xargs)

# Please validate there is AIWARE_CONTROLLER
env | sort | grep AIWARE_

curl -sfL https://get.aiware.com | sh -
```

In the output you will see the docker version installed on your local machine.

![screenshot 4](https://user-images.githubusercontent.com/65766301/122611892-bdf10980-d09f-11eb-8c5b-45c2907f63e1.PNG)

## Engines

### List Existing Engines 
[Engines are the processing component of a task on the aiWARE stack](/cognitive-technology/jobs/). Get a list of installed engines. This command retrieves a list of installed engines on your system. 
```bash
$ ai engine ls
INFO[0000]  ID                                      Name                                    Type           State           
INFO[0000]  352556c7-de07-4d55-b33f-74b1cf237f25    Stream Ingestor II Playback Segment Creatorstream         active          
INFO[0000]  8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440    Stream Ingestor II FFMPEG               stream         active          
INFO[0000]  75fc943b-b5b0-4fe1-bcb6-9a7e1884257a    Stream Ingestor II Asset Creator        stream         active          
INFO[0000]  8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3    Output Writer                           chunk          active          
INFO[0000]  bb544ade-461c-11ea-8604-a3b3a83f5182    HTTP PUSH Adapter Chunk                 stream         active 
```

### Create a new engine category 
Engine categories group engines by purpose and function. The following adds a new engine category to your installation of aiWARE. 
```bash
# Creates an engine category with the name Ingestion and type Ingestion
# ai engine-category create <category name> <category type>
$ ai --profile default engine-category create Ingestion Ingestion
INFO[0000]  Build created: {2021-06-18 14:15:42 +0000 UTC ee119bdf-5e94-40d0-a909-9363bd9a718f Ingestion Ingestion 2021-06-18 14:15:42 +0000 UTC}
```
Note the engine category ID of `ee119bdf-5e94-40d0-a909-9363bd9a718f`
Create another category for transcription
```bash 
$ ai engine-category create Transcription Cognition
INFO[0000]  Build created: {2021-06-18 14:45:19 +0000 UTC 57dd7749-daf2-4773-9975-124d491d584d Transcription Cognition 2021-06-18 14:45:19 +0000 UTC} 
```

### Create an Engine
[Engines are the processing component of a task on the aiWARE stack](/cognitive-technology/jobs/). Adding an engine adds to the ability of your aiWARE deployment. 
```bash
$ cat > speechmatics.json <<EOF
{
	"ApplicationIDsJSON": "{}",
	"ChildPriorityAdjustmentOnComplete": 0,
	"CpuShares": 0,
	"DependencyJSON": "{}",
	"DontrunComplete": false,
	"EdgeVersion": 3,
	"EngineID": "c0e55cde-340b-44d7-bb42-2e0d65e98255",
	"EngineName": "Speechmatics Transcription (v7) - English (Global) V3",
	"EngineOutputType": "chunk",
	"EngineState": "active",
	"EngineType": "chunk",
	"FieldsJSON": "{}",
	"GetWorkInterval": 0,
	"IdleTimeout": 900,
	"InternalApplicationID": "",
	"JwtRightsJSON": "{}",
	"MaxProcessingSecondsPerWorkItem": 0,
	"MaxRunning": -1,
	"MaxWaitSecondsForChunk": 0,
	"MinAvailable": 0,
	"MinRunning": 0,
	"NumChunksPerWorkItem": 0,
	"ParallelProcessing": false,
	"ParentCompleteBeforeStart": false,
	"Preload": false,
	"PriorityAdjustment": -10,
	"ReplacementEngineID": "",
	"TtlPaddingInSeconds": 0,
	"UpdateStatusInterval": 0,
	"ValidationJSON": "{}",
	"level": "info",
	"message": ""
}
EOF
$ ai engine create --engine-category-name Transcription --organization-name internal speechmatics.json 
INFO[0000]                                               ApplicationIDsJSON="{}" ChildPriorityAdjustmentOnComplete=0 CpuShares=0 CreatedDateTime="2021-06-18 14:47:26 +0000 UTC" DependencyJSON="{}" DontrunComplete=false EdgeVersion=3 EngineCategoryID=57dd7749-daf2-4773-9975-124d491d584d EngineID=c0e55cde-340b-44d7-bb42-2e0d65e98255 EngineName="Speechmatics Transcription (v7) - English (Global) V3" EngineOutputType=chunk EngineState=active EngineType=chunk FieldsJSON="{}" GetWorkInterval=0 IdleTimeout=0 InternalApplicationID= InternalOrganizationID=ba043db9-57e1-4267-9434-294873d1cba2 JwtRightsJSON="{}" MaxProcessingSecondsPerWorkItem=0 MaxRunning=-1 MaxWaitSecondsForChunk=0 MinAvailable=5 MinRunning=75 ModifiedDateTime="2021-06-18 14:47:26 +0000 UTC" NumChunksPerWorkItem=0 ParallelProcessing=false ParentCompleteBeforeStart=false Preload=false PriorityAdjustment=0 ReplacementEngineID= TtlPaddingInSeconds=0 UpdateStatusInterval=0 ValidationJSON="{}"
```
Note the engine ID of `c0e55cde-340b-44d7-bb42-2e0d65e98255`.

### List Existing Engine Builds
Builds are versions of engines. You can list existing builds of an engine.
```bash
$ ai build ls c0e55cde-340b-44d7-bb42-2e0d65e98255
INFO[0000]  ID                                      EngineID                                State          Version         
INFO[0000]  7936f183-0273-4dba-ba8d-05d8ff0e3868    c0e55cde-340b-44d7-bb42-2e0d65e98255    deployed       16  
```
