<!-- markdownlint-disable -->

<!-- THIS IS STEALTH CONTENT (this page is deliberately not listed in sidebar) -->

# How to Run aiWARE Locally

1. Clone this repo [https://github.com/veritone/realtime](https://github.com/veritone/realtime)

2. Create a cluster using the mutation shown below. (Replace the name and containerTag. Service token can remain the same.) Make sure to save your cluster ID, as it is needed anytime you want to run V3 locally.

```graphql
mutation createCluster {
  createCluster (input: {
    name: "aiwareTeam1",
    allowedEngines: ["all"],
    dockerCredentials: {},
    type: RT,
    containerTag: "aiwareTeam1",
    paused: false,
    memorySize: "20gb",
    storageSize: "10gb",
    bypassAllowedEngines: true,
    collaborators: [],
    subscriptions: [],
    tags: ["aiware-agent"],
    status: active,
    mediaStorage: core,
    mediaStoragePath: "",
    serviceToken: "fake-token",
  } 
  ) {
    id
  }
}
```

1. Export cluster id from above to environment variable:

     `export AIWARE\_CLUSTERID=your-cluster-id`
     
2. Export the ENV environment variable (defaulted to `prod`):

     `export ENV=prod`
     
3. From the realtime root directory, `cd` into the directory that has the required scripts:

     `cd services/edge-agent/envs/local/`
     
4. Run the database script:
 
      `./run-db.sh`
      
5. Run the Controller script:
 
      `./run-controller.sh`
      
  NOTE: You may need to install adoptopenjdk:
   
      `brew cask install adoptopenjdk`
      
  ALSO: You may need to install flyway with `brew install flyway` and possible dependencies as they come up.
  
6. Download the following file from Jenkins: [https://jenkins.veritone.com/job/aiware/job/edge-controller/lastSuccessfulBuild/artifact/\*zip\*/archive.zip](https://jenkins.veritone.com/job/aiware/job/edge-controller/lastSuccessfulBuild/artifact/*zip*/archive.zip)
  
In a terminal, run the following:

```
unzip ~/Downloads/archive.zip
mv archive/dist/edge\* . 
tar xvf archive/dist/sql.tar
```

7. You should now see a sql directory with 7 .sql files and one README. The Controller can now be run.

    `./run-controller.sh`
    
8. The daemon is now running! Open a new terminal and go to the same directory as before.

    `cd realtime/services/edge-agent/envs/local`
    
9. Reset the cluster ID env variable:

    `export AIWARE\_CLUSTERID=your-cluster-id`
    
10. Run `./run-agent-engine.sh`

### Test the Local  Environment

Your aiWARE V3 environment is now ready to test. Run a job via graphQL with your cluster ID (see mutation below).

1. Go to http://localhost:9000/edge/v1/ping
2. Look in Postico: host: localhost port: 5432 user: postgres pass: postgres
3. Go to edge schema: view -> show navigation sidebar, see tables under edge: go to job: see the job you created, similarly for task. One without task ID is output writer.
4. Go to token table, grab one (token id).
5. Go to `/tmp/cache` in Finder (open . )
6. txt, e4: shows local organization ID; under it is the job for that org; then job ID; then task; then task IDs. Expand a task ID; you can find log file for that task

```graphql
mutation createJobForEdge{
  createJob(input: {
	target: {
  	  startDateTime:1574311000
  	  stopDateTime: 1574315000
	},
	clusterId :"rt-242c1beb-653a-4299-bb33-2d8fb105d70b",
	tasks: [
   	{
     	# webstream adapter
     	engineId: "9e611ad7-2d3b-48f6-a51b-0a1ba40fe255"
     	payload: {
      	  url:"https://s3.amazonaws.com/src-veritone-tests/stage/20190505/0_40_Eric%20Knox%20BWC%20Video_40secs.mp4"
     	}
   	},
  	{
    	engineId: "352556c7-de07-4d55-b33f-74b1cf237f25" # playback
  	},
  	{
    	engineId: "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440" # chunk audio
    	payload:{
      	ffmpegTemplate: "audio",
#     	chunkOverlap: 15,
      	customFFMPEGProperties:{
        	chunkSizeInSeconds: "30"
      	}
    	}
  	},
  	{
    	# engine to run
    	engineId: "c0e55cde-340b-44d7-bb42-2e0d65e98255"
  	}
	]
  }) {
	id
  }
}
 
query myEdgeJobs($clusterId:ID) {
  jobs(clusterId:$clusterId){
	records{
  	  id
  	  targetId
  	  tasks {
    	records{
      	  id
      	  engineId
      	  status
      	  taskPayload
      	  taskOutput
    	}
  	  }
	}
  }
}  
```
