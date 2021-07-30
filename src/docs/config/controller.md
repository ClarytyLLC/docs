| Name | Type | Default Value | Environment Var | Description |
 | :--- | :--- | :--- | :--- | :--- |
 | *access_control_allow_origin* | string | * |  | This value for Access-Control-Allow-Origin in the response header of OPTIONS requests |
| *admin_ui.enabled* | bool | true |  | If enabled, this flag enables the Admin UI |
| *auth.check_enable_sec* | int64 | 300 |  | How often controller checks the authorization is enabled or not (sec) |
| *auth.enabled* | bool | false |  | If enabled, this flag enables controller authentication/authorization functionality |
| *auth.redis_watcher.enabled* | bool | true |  | If enabled, casbin enforcer will use redis watcher to synchronize casbin policy across multiple controllers |
| *auth.redis_watcher.mode* | string | resource |  | Redis watcher mode (host or resource) |
| *auth.refresh_sec* | int64 | 300 |  | How often controller updates the authorization policy (sec) |
| *auth.token_types_tocheck_permission_on_orgs* | string | user |  | List of token types that needs to check permission on organizations, it should be separated by commas, looks like: engine_instance, host, api, user |
| *automate.automate_response_timeout* | int64 | 45 |  | The max wait response time in seconds of node-red request |
| *automate.host_cpu_limit* | int64 | 80 |  | Automate max host's CPUUtilization allow for create node-red container |
| *automate.node_red_engine_image* | int64 | registry.central.aiware.com/node-red-runner-v3:prod |  | The age of automate request for cleaning |
| *automate.node_red_studio_image* | int64 | registry.central.aiware.com/node-red-v3:prod |  | The age of automate request for cleaning |
| *automate.request_clean_time* | int64 | 604800 |  | The age of automate request for cleaning |
| *automate.request_pull_limit* | int64 | 5 |  | Number automate request for each time automate agent processing |
| *autoscale.enabled* | bool | false |  | Whether autoscale is enabled |
| *autoscale.fast_fudge_factor_down* | int64 | 25 |  | Fast auto-scale fudge factor to multiple result by when scaling down |
| *autoscale.fast_fudge_factor_up* | int64 | 100 |  | Fast auto-scale fudge factor to multiple result by when scaling up |
| *autoscale.fast_lower_threshold* | int64 | 60 |  | Fast auto-scale lower threshold is required to have cpu load below this value to scale down |
| *autoscale.fast_threshold* | int64 | 80 |  | *Deprecated* Fast auto-scale threshold is the desired cpu load for the cluster |
| *autoscale.fast_upper_threshold* | int64 | 80 |  | Fast auto-scale upper threshold is required to have cpu load above this value to scale up |
| *autoscale.scale_down_cpu* | int64 | 30 |  | *Deprecated* legacy - CPU usage that triggers scaling down |
| *autoscale.scale_up_cpu* | int64 | 90 |  | *Deprecated* legacy - CPU usage that triggers scaling up |
| *autoscale.type* | string | fast |  | *Deprecated* Type of auto-scale algorithm (fast) |
| *config.refresh_sec* | int64 | 300 |  | The interval to refresh the controller config (sec) |
| *cron.interval_scheduler_enabled* | bool | false |  | cron interval scheduler enabled. |
| *cron.interval_scheduler_fast_workers* | int64 | 10 |  | cron interval service number of workers on fast channel |
| *cron.interval_scheduler_loop_min* | int64 | 5 |  | cron interval service loop sleep minutes |
| *cron.interval_scheduler_slow_workers* | int64 | 20 |  | cron interval service number of workers on slow channel |
| *cron.interval_scheduler_ultra_workers* | int64 | 10 |  | cron interval service number of workers on ultra fast channel |
| *cron.interval_scheduler_whitelist_minutes* | int64 | 60 |  | cron interval service whitelist minutes |
| *db_host* | string | localhost | _AIWARE_DB_HOST_ | The URLs to use for controllers for the agents to connect with the aiWARE System |
| *db_max_idle* | int64 | 5 | _AIWARE_DB_MAX_IDLE_ | Max idle connections for controller |
| *db_max_open* | int64 | 10 | _AIWARE_DB_MAX_OPEN_ | Max connections for controller |
| *db_migrate* | bool | false | _AIWARE_DB_MIGRATE_ | If enabled, this flag enables db migration as the first check after connection |
| *db_port* | int64 | 5432 | _AIWARE_DB_PORT_ | The port to use for the database |
| *default.max_engines.chunk* | int64 | 100 |  | This is the default value for max_engines on task_route for chunk engines |
| *engine.default_wait_seconds_for_chunk* | int64 | 1800 |  | The max seconds an engine instance will wait for a chink |
| *engine.max_chunks_per_work_item* | int64 | 10000 |  | The max chunks a work item can process |
| *engine.max_processing_seconds_per_work_item* | int64 | 1800 |  | The max processing time a work item can process.  Chunks are not interrupted |
| *engine.max_wait_seconds_for_chunk* | int64 | 1800 |  | The max seconds an engine instance will wait for a chink |
| *engine.ttl_padding_in_seconds* | int64 | 300 |  | The minimum time in seconds the engine requires to have before an engine instance expires |
| *engine_instance.acquire_work.use_txn* | bool | true |  | use a transaction in engine instance acquire work |
| *engine_instance.default_expiration_secs* | int64 | 21600 |  | Default expiration in seconds for engine instances |
| *engine_instance.expiration_grace_seconds* | int64 | 900 |  | Grace period after expiration in seconds an engine_instance should be up before being told to be killed |
| *engine_instance.expiration_seconds* | int64 | 3600 |  | Maximum time in seconds an engine_instance should be up |
| *engine_instance.units_to_process* | int64 | 1 |  | Units of work to get on each call |
| *handlers.drain.grace_interval_seconds* | int64 | 3600 |  | How many seconds before expiration should the host go into drain mode |
| *handlers.max_limit* | int64 | 1000 |  | The max limit or page size handlers can return |
| *host.expiration_seconds* | int64 | 43200 |  | Expiration of the hosts in seconds |
| *image* | string | aiware-controller:latest | _AIWARE_CONTROLLER_IMAGE_ | The image to use for the controller |
| *job.creation.due_duration_minute* | int64 | 15 |  | Job creation due duration in minutes |
| *job.launch.run_on_all* | bool | true |  | Run Job launch on all controllers. |
| *job.launch_interval_sec* | int64 | 20 |  | Job launch check interval in seconds. |
| *log_host* | string | localhost | _AIWARE_LOG_HOST_ | The URLs to use for sending logs to from the aiWARE System |
| *log_port* | int64 | 9200 | _AIWARE_LOG_PORT_ | The port to use for Elasticsearch |
| *max_gofuncs* | int64 | 2000 |  | Max gofuncs for controller before panic |
| *port* | int64 | 9000 | _AIWARE_CONTROLLER_PORT_ | The port to use for the controller |
| *primary.alloc_task.interval* | int64 | 10 |  | The interval to refill the alloc tasks |
| *primary.alloc_task.size* | int64 | 1500 |  | The size for the alloc tasks |
| *primary.autoscale.interval* | int64 | 300 |  | The interval for autoscale |
| *primary.autoscale.scan_period* | int64 | 900 |  | The period autoscale will use to analyze |
| *primary.checkservices.interval* | int64 | 20 |  | Scan interval in seconds for checking services if in pending whether or not all resources are available for them. 0 means disabled.   |
| *primary.cleansystem.default_grace_secs* | int64 | 432000 |  | How long to keep jobs and tasks |
| *primary.cleansystem.enabled* | bool | true |  | This enables or disables the processing of cleaning up the system |
| *primary.cleansystem.engine_instance_grace_secs* | int64 | 86400 |  | How long to keep  engine_instance |
| *primary.cleansystem.engine_instance_set_termination_grace_secs* | int64 | 180 |  | How long since the last the last update to set status to termination. |
| *primary.cleansystem.etk_timestamps_enabled* | bool | true |  | Whether to clean up the edge.etk_timestamps table, default true |
| *primary.cleansystem.etk_timestamps_grace_secs* | int64 | 259200 |  | How long to keep  records of edge.etk_timestamps table, default 3 days in seconds |
| *primary.cleansystem.etk_timestamps_limit* | int64 | 10000 |  | How many rows to delete from edge.etk_timestamps table per iteration of loop, default 10000 |
| *primary.cleansystem.host_status_grace_secs* | int64 | 86400 |  | How long to keep  host_status |
| *primary.cleansystem.interval* | int64 | 300 |  | The time to clean the system in seconds. This value should >= 120 seconds |
| *primary.cleansystem.task_status_grace_secs* | int64 | 82800 |  | How long to keep task_status |
| *primary.cleansystem.task_status_limit* | int64 | 10000 |  | How many task status to clean |
| *primary.cleansystem.task_status_loop_val* | int64 | 5 |  | How many task status loops to try |
| *primary.cleansystem.token_grace_secs* | int64 | 86400 |  | How long to keep  token |
| *primary.cleansystem.work_requests_grace_secs* | int64 | 82800 |  | How long to keep work requests |
| *primary.cleansystem.work_requests_limit* | int64 | 5000 |  | How many work requests to clean per iteration of loop |
| *primary.cleansystem.work_requests_loop_limit* | int64 | 10 |  | How many loops to clean work requests |
| *primary.cleansystem.work_requests_loop_val* | int64 | 5 |  | How many work requests loops to try |
| *primary.cleantasks.adapter_tasks_after_stop_grace_secs* | int64 | 1800 |  | This controls the the interval after the task stop that considers tasks to be failed |
| *primary.cleantasks.enabled* | int64 | true |  | This enables or disables the processing of cleaning up tasks on the primary controller |
| *primary.cleantasks.interval* | int64 | 1800 |  | The duration between runs of the cleaning running tasks |
| *primary.cleantoken.enabled* | bool | true |  | This enables or disables the processing of cleaning up expired/old tokens |
| *primary.core_health_check_frequency_sec* | int64 | 300 |  | The interval for core health check in sec |
| *primary.cron.adhoc_chan_size* | int64 | 5000 |  | The size of channel for adhoc parallel processing |
| *primary.cron.adhoc_enabled* | bool | true |  | On primary, cron adhoc job processing enabled. |
| *primary.cron.adhoc_interval* | int64 | 20 |  | On primary, the interval for cron to query core for new adhoc jobs.  This can be between 0 and 604800 |
| *primary.cron.adhoc_job_limit* | int64 | 25 |  | The number of jobs to get a time (via graphql). |
| *primary.cron.adhoc_num_workers* | int64 | 20 |  | The number of workers for adhoc parallel processing |
| *primary.cron.adhoc_polling_window* | string | 2h |  | The polling window time to get pending jobs base on createdDateTime via graphql. The value must be a duration string (e.g. 2h, 3h, ...) |
| *primary.cron.adhoc_task_limit* | int64 | 100 |  | The number of tasks to get in a job (via graphql). |
| *primary.cron.enabled* | bool | true |  | On primary, is cron services enabled. |
| *primary.cron.job_creation_channel_size* | int64 | 25000 |  | On primary, is cron job creation services channel size. |
| *primary.cron.job_creation_enabled* | bool | true |  | On primary, is cron job creation services enabled. |
| *primary.cron.job_creation_fast_plan_ahead_min* | int64 | 30 |  | On primary, is cron job creation services fast plan ahead minutes. |
| *primary.cron.job_creation_fast_workers* | int64 | 2 |  | On primary, is cron job creation services number of fast workers. |
| *primary.cron.job_creation_loop_sleep_min* | int64 | 5 |  | On primary, is cron job creation services sleep minutes. |
| *primary.cron.job_creation_query_ids* | bool | true |  | On primary, cron job creation get only IDs of scheduled jobs. |
| *primary.cron.job_creation_shuffle_ids* | bool | true |  | On primary, cron job creation shuffle scheduled job IDs to provide non-deterministic ordering of processing. |
| *primary.cron.job_creation_slow_plan_ahead_min* | int64 | 180 |  | On primary, is cron job creation services number of slow workers. |
| *primary.cron.job_creation_slow_skip_iter* | int64 | 3 |  | On primary, is cron job creation services slow loop skip iteration. |
| *primary.cron.job_creation_slow_workers* | int64 | 4 |  | On primary, is cron job creation services number of slow workers. |
| *primary.cron.job_creation_validate_minutes* | int64 | 5 |  | On primary, cron job creation validate the asOf timestamp within these minutes. |
| *primary.cron.run_job_launch* | bool | true |  | Run Primary CRON Job launch service. |
| *primary.cron.sched_job_download_max_inactive_percent* | int64 | 50 |  | On primary, cron sched job downloading maximum percent of jobs that can be marked inactive on a given loop. |
| *primary.cron.sched_job_download_page_size* | int64 | 200 |  | On primary, cron sched job downloading service download from core page size |
| *primary.cron.sched_job_downloader_do_update* | bool | true |  | On primary, cron sched job downloading update the scheduled job table. |
| *primary.cron.sched_job_downloader_enabled* | bool | true |  | On primary, cron sched job downloading enabled. |
| *primary.cron.sched_job_downloader_loop_min* | int64 | 5 |  | On primary, cron sched job downloading service loop sleep minutes |
| *primary.cron.sched_job_downloader_mark_inactive* | bool | true |  | On primary, cron sched job downloading mark the jobs inactive for realz. |
| *primary.cron.sched_job_downloader_window_min* | int64 | 10080 |  | On primary, cron sched job downloading service download window from core in minutes |
| *primary.cron.scheduler.plan_ahead_min* | int64 | 120 |  | On primary, this controls how far the scheduler will create jobs |
| *primary.cron.scheduler_enabled* | bool | false |  | On primary, cron scheduled job processing enabled. |
| *primary.cron.transform_interval* | bool | true |  | Transform interval schedules to day of week. |
| *primary.cron.use_parallel_adhoc* | bool | true |  | On primary, cron adhoc job processing use parallel version. |
| *primary.cron.use_v3_job_storage* | bool | true |  | If true, store job in v3 format |
| *primary.db_max_idle* | int64 | 2 |  | Primary - Max idle connections for controller |
| *primary.db_max_open* | int64 | 10 |  | Primary - Max connections for controller |
| *primary.engine_instance.drain_percentage* | int64 | 10 |  | The percentage of engine instances to drain |
| *primary.engine_launch.enabled* | bool | true |  | If enabled, this flag enables engine instance checker |
| *primary.engine_launch.interval_seconds* | int64 | 300 |  | Time interval for the engine instance checker (sec) |
| *primary.enginebuilds.all_engines* | bool | true |  | If true, download all engines and builds available |
| *primary.enginebuilds.interval_seconds* | int64 | 900 |  | The interval to update the engine builds (sec). This value should >= 5 minutes |
| *primary.enginebuilds.page_size* | int64 | 20 |  | The number of engine builds in a call to graphql to get engine builds |
| *primary.enginebuilds.validate_interval_seconds* | int64 | 1800 |  | The interval to validate the engine builds (sec) |
| *primary.enginebuilds.validation_enabled* | bool | false |  | If true, validate engines before marking it deployed |
| *primary.job_statuscheck.interval* | int64 | 30 |  | The interval to update jobs' status |
| *primary.job_statuscheck.limit* | int64 | 500 |  | The limit of jobs to check per iteration |
| *primary.slow_queries_interval_list* | string | 1,5,30,120,300 |  | Comma separated list of slow queries interval check |
| *primary.slow_queries_loop_frequency_sec* | int64 | 30 |  | How often controller checks/terminate slow queries (sec) |
| *primary.tasks_report.frequency_sec* | int64 | 14400000 |  | The frequency of the tasks report (sec). Usually equals TASKS_REPORT_MAX_INTERVAL_SEC param |
| *primary.tasks_report.max_interval_sec* | int64 | 14400 |  | Maximum time interval (sec) for the tasks report |
| *primary.top_engines.enabled* | bool | true |  | Feature Flag - Is Top N Enabled |
| *primary.top_engines.launch_interval* | int64 | 45 |  | How many seconds to delay before relaunching an engine instance for this task_route |
| *primary.update_scaling_info_for_modes* | string |  |  | Comma separated list of running modes to update scaling info from AWS |
| *primary.update_stats.enabled* | bool | true |  | If enabled, this will run loop to update job task status and emit metrics |
| *primary.update_tasks.interval* | int64 | 60 |  | The interval for scanning for tasks to sync  |
| *primary.update_tasks.limit* | int64 | 50 |  | The number of tasks to get at a time for update |
| *primary.update_tasks.lock_ttl* | int64 | 300 |  | The lock ttl in seconds to lock the tasks for |
| *primary.updatetasks.num_funcs* | int64 | 5 |  | How many go functions to run for update tasks |
| *rate_limiter.burst_limit* | int64 | 1000 |  | The burst limit for rate limiting |
| *rate_limiter.enabled* | bool | false |  | If enabled, this flag enables rate limiting |
| *rate_limiter.exclude_cidr_list* | string |  |  | The list of sub nets (separated by a comma) that are excluded from rate limiting |
| *rate_limiter.max_requests_per_second* | int64 | 1000 |  | The max requests per second allowed by rate limiting |
| *rate_limiter.remote_addr_limit_enabled* | bool | false |  | If enabled, this flag enables rate limiting fallback on Remote Address |
| *report.enabled* | bool | false |  | If enabled, this flag enables task failure report |
| *report.frequency_sec* | int64 | 21600 |  | How often task report runs (sec) |
| *report.from_email* | string |  |  | The email to send the task report from |
| *report.interval_sec* | int64 | 43200 |  | Time interval for the task report (sec) |
| *report.to_email* | string |  |  | The email to send the task report to |
| *resource.planner.enabled* | bool | true |  | Whether resource planner is enabled |
| *resource.planner.frequency_sec* | int64 | 30 |  | The interval for resource planner in sec |
| *sentry.dsn* | string |  |  | The Sentry DSN url for Sentry error reporting |
| *sentry.enabled* | bool | false |  | If enabled, this flag enables Sentry error reporting |
| *servertype.reconcile_arns.enabled* | bool | true |  | Reconcile AWS ARNs between columns and json |
| *task.reprocessing.delay_in_seconds* | int64 | 300 |  | The amount of seconds to delay task reprocessing |
| *task.reprocessing.max_retries* | int64 | 3 |  | The maximum number of retries to reprocess tasks |
| *task_status.enable* | bool | true |  | If enabled, store task_statuses in the db |
| *user.from_email* | string | noreply@veritone.com |  | The email to send the confirmation email |
