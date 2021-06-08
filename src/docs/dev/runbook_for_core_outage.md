
<style>
     p, ul, ol, li { font-size: 18px !important; }
</style>

# Edge Dependency on core

Edge services or engines that need core connection:

* CRON legacy scheduler to create jobs
* CRON job creation to create jobs
* CRON interval scheduler (not enabled)
* CRON scheduled job downloader to update scheduled jobs table
* Adhoc loop to pull job
* Engine loop to update engines / builds from core to edge
* UpdateTask sync to core
* Engines such as Playback for storing media segments for TDOs and Output Writers for writing back engine outputs
* CRON launching scheduled jobs
* Job creation plan ahead time (broken)
* CRON overal enable/disable switch


While most services can still be functional when core graphql service is interrupted, however 
there are a few configuration items to be set for edge to recover once graphql service is restored.
For example playback and output writer tasks can be retried at a later time; though the default values
may be too small for extended outage.  All the configuration items are expected to be set in the `edge.config`
table for the clusters -- note that this will need to be set across ALL clusters that connected to the same core.

## ACTION ITEMS

1.  Disable services by setting corresponding values in `edge.config`
1.  ASG management for engine clusters


### edge.config 
 

| Function | Configuration Item | Note | Setting to prepare for outage | Reset after outage is finished |
|----------|--------------------|-----------------|--------|------|
| Delay of reprocessing of playback and output writer tasks | `controller` section,  `task.reprocessing.delay_in_seconds` | default is `300` (seconds).  For extended outage, this should be set to 50 to 75% of the expected outage in seconds.  Note there are the 3-day maximum age of the data for these tasks so the maximum should be < 2 days in seconds   | ||
| Maximum number of retries for task reprocessing | `controller` section, `task.reprocessing.max_retries` | default is 3.  And can be left as is |||
| Enable/disable CRON interval scheduler | `controller` section, `cron.interval_scheduler_enabled` | default is false, should be set to false |||
| Enable/disable CRON scheduled job downloader | `controller` section, `primary.cron.sched_job_downloader_enabled` | should be set to true |||
| Enable/disable CRON legacy scheduler | `controller` section, `primary.cron.scheduler_enabled` | should be set to true |||
| Enable/disable adhoc job downloader | `controller` section, `primary.cron.adhoc_enabled` | should be set to true |||
| Enable/disable all of CRON | `controller`, `primary.cron.enabled` | should be set to true |||
| Enable/disable CRON job creation | `controller`, `primary.cron.job_creation_enabled` | should be set to true |||
| Set CRON job creation SLOW channel plan ahead minutes | `controller`, `primary.cron.job_creation_slow_plan_ahead_min` | defaults to 180 (3h) |1440|180|
| Set CRON job creation SLOW channel plan ahead minutes | `controller`, `primary.cron.job_creation_slow_workers` | defaults to 20 |40|24|
| Set CRON job creation FAST channel plan ahead minutes | `controller`, `primary.cron.job_creation_fast_plan_ahead_min` | defaults to 30 (30m) |||
| Set CRON legacy scheduler plan ahead minutes | `controller`, `primary.cron.scheduler.plan_ahead_min` | defaults to 180 (3h) |
| ??? | `controller`, `primary.engine_launch.enabled` | ??? |
| ??? | `controller`, `primary.update_stats.enabled` | ??? |
| ??? | `controller`, `task_status.enable` | ??? |
| Set amount of funcs for syncing task statuses | `controller`, `primary.updatetasks.num_funcs`| defaults to 5 | | 0


## ASG management


1. Scale down engine nodes




## Notes

#### PROD

The following clusters need to be prepared:


| cluster | Notes |
|---------|-------|
| prd1 |will start disconnection from core 30m prior to start of upgrade|
| prd3 |will start disconnection from core at 3pm prep meeting|
| prd5 |will start disconnection from core at 3pm prep meeting|
| bmg |will start disconnection from core at 3pm prep meeting| 
| iheart |will start disconnection from core at 3pm prep meeting|
| prd4 ? ||

### Process for prd3, prd5, bmg clusters
1. Disconnect from core setting above config parameters and disable auto-scale
1. Cycle primary
1. Set AWS ASG for engine to not launch terminated engine hosts
1. When backlog is gone, drain all engines

### Process for ihrt cluster
1. Disconnect from core setting above config parameters and disable auto-scale
1. `Abort all existing scheduled jobs from edge.job` (possibly `queued` jobs as well)
1. `Abort all existing scheduled tasks from edge.task and edge.task_route` (possibly `queued` tasks as well)
	1. Increasing plan ahead won't work for ihrt because iHeart adapter is getting segment time from Core and then update Core. There will be issues when multiple scheduled tasks for the same source get picked up around the same time 
	1. iHeart adapter will pick up where it was left automatically when new tasks are scheduled
1. Cycle primary
1. Set AWS ASG for engine to not launch terminated engine hosts
1. When backlog is gone, drain all engines

#### UK 

##### 2021/01/08 Preparation

<table>
	<tr>
		<th>config_section</th>
		<th>config_key</th>
		<th>config_value</th>
		<th>kvp</th>
		<th>created_date_time</th>
		<th>modified_date_time</th>
		<th>service_id</th>
		<th>engine_id</th>
	</tr>
	<tr>
		<td>controller</td>
		<td>task.reprocessing.delay_in_seconds</td>
		<td>1800</td>
		<td>{}</td>
		<td>1610157550</td>
		<td>1610157550</td>
		<td><i>NULL</i></td>
		<td><i>NULL</i></td>
	</tr>
	<tr>
		<td>controller</td>
		<td>primary.cron.enabled</td>
		<td>false</td>
		<td>{}</td>
		<td>1610156320</td>
		<td>1610157406</td>
		<td><i>NULL</i></td>
		<td><i>NULL</i></td>
	</tr>
	<tr>
		<td>controller</td>
		<td>primary.updatetasks.num_funcs</td>
		<td>0</td>
		<td>{}</td>
		<td>1610157228</td>
		<td>1610157228</td>
		<td><i>NULL</i></td>
		<td><i>NULL</i></td>
	</tr>
	<tr>
		<td>controller</td>
		<td>primary.cron.job_creation_enabled</td>
		<td>false</td>
		<td>{}</td>
		<td>1589809858</td>
		<td>1610157031</td>
		<td><i>NULL</i></td>
		<td><i>NULL</i></td>
	</tr>
	<tr>
		<td>controller</td>
		<td>primary.cron.adhoc_enabled</td>
		<td>false</td>
		<td>{}</td>
		<td>1597727031</td>
		<td>1610156954</td>
		<td><i>NULL</i></td>
		<td><i>NULL</i></td>
	</tr>
	<tr>
		<td>controller</td>
		<td>primary.cron.scheduler_enabled</td>
		<td>false</td>
		<td>{}</td>
		<td>1610156289</td>
		<td>1610156289</td>
		<td><i>NULL</i></td>
		<td><i>NULL</i></td>
	</tr>
	<tr>
		<td>controller</td>
		<td>cron.interval_scheduler_enabled</td>
		<td>false</td>
		<td>{}</td>
		<td>1610156248</td>
		<td>1610156248</td>
		<td><i>NULL</i></td>
		<td><i>NULL</i></td>
	</tr>
	<tr>
		<td>controller</td>
		<td>primary.cron.sched_job_downloader_enabled</td>
		<td>false</td>
		<td>{}</td>
		<td>1600366373</td>
		<td>1610156188</td>
		<td><i>NULL</i></td>
		<td><i>NULL</i></td>
	</tr>
</table>



 
