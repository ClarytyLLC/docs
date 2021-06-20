# How to View Job and Task Logs

Below, we discuss how to use the Edge REST APIs to obtain engine logs at the job and task levels. This is done with GET calls.

## Getting Job Logs

### Cloud

URL will be of the form:

https://controller-v3f.aws-prod-rt.veritone.com/edge/v1/proc/job/Internal_JobID/data

Headers:

Authorization : Bearer $Your_Bearer_Token

### Local

Note: Your local base URL may be different.

URL will be of the form:

http://localhost:9000/edge/v1/proc/job/Internal_JobID/data

Headers:

Authorization : Bearer $Your_Bearer_Token

## Getting Task Logs

### Cloud

URL will be of the form:

https://controller-v3f.aws-prod-rt.veritone.com/edge/v1/proc/task/Internal_TaskID/data

Headers:

Authorization : Bearer $Your_Bearer_Token

### Local

Note: Your local base URL may be different.

URL will be of the form:

http://localhost:9000/edge/v1/proc/task/Internal_TaskID/data

Headers:

Authorization : Bearer $Your_Bearer_Token

#### Notes

* The API returns a ZIP file which must be downloaded as such. Unpack before viewing.
* Here’s a CURL example for job:
`curl -H "Authorization: Bearer $AIWARE_TOKEN" -o /tmp/$task.zip $AIWARE_CONTROLLER_URI/edge/v1/proc/job/$job/data`
  * The following is required to download the Zip archive rather than just return raw text: `-o /tmp/$task.zip`
* The token must be appropriate to the Organization in which the Job was created.
If you have access to your cluster’s Edge V3 Postgres database, you can query the DB for an API token with this query: `SELECT * FROM edge.token WHERE type = ‘api’`

## Reading the Data

> Note: Complete step 1 below only if you used the API to get _Job_ logs. Omit this step if you obtained _Task_ logs.

1\. Expand the directory until you find the “task” folder you are interested in.

> The structure should resemble `/cache/<a_number>/<a_GUID>/job/<your_first_3_job_characters>/<your_jobID>`

2\. You can view routing details with the job-manifest files (JSON is easier to read).

3\. Expand `/task/<your_taskID>`.

4\. The log folder contains all engine logs.

> The logs contain data both from aiWARE and your specific engine. To view the logs coming from your engine, open these log files and search for FROM ENGINE.

5\. The **wr.json** file (same directory level as the log folder) contains the engine output aggregated by Output Writer (if it was included in your tasks).

6\. The **tmp** folder (same directory level as the **log** folder) contains information about processing time for aiWARE components as well as for your engine. The time it takes for your engine to process a single chunk can be found under `1050:processChunk`.
