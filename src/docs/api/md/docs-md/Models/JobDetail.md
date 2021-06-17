# JobDetail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abortedDateTime** | [**Date**](DateTime.md) | This is the datetime the task was aborted | [optional] [default to null]
**completedDateTime** | [**Date**](DateTime.md) | This is the datetime the job was completed | [optional] [default to null]
**coreID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**coreJobID** | [**String**](string.md) | Core Job ID | [optional] [default to null]
**coreRecordingId** | [**Long**](long.md) | This is the recording id in the core of the content for this job | [optional] [default to null]
**coreScheduledJobId** | [**Integer**](integer.md) | This is the core scheduled job id. | [optional] [default to null]
**coreSourceId** | [**Long**](long.md) | This is the Core Source Id | [optional] [default to 0]
**createdDateTime** | [**Date**](DateTime.md) | This is the datetime the job was created | [optional] [default to null]
**currentRetries** | [**Integer**](integer.md) | This is the current retries for the job | [optional] [default to 0]
**dueDateTime** | [**Date**](DateTime.md) | This is the time the job is due to be complete.  This is used by edge to set the priorities. | [optional] [default to null]
**internalJobID** | [**UUID**](UUID.md) | Internal Job ID | [optional] [default to null]
**internalOrganizationID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**internalScheduledJobId** | [**String**](string.md) | The internal scheduled job id. | [optional] [default to null]
**isTemplate** | [**Boolean**](boolean.md) | If true, this job is a template | [optional] [default to null]
**jobConfigJSON** | [**String**](string.md) | This is the job config expressed as JSON | [optional] [default to null]
**jobStatus** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] [default to null]
**jobTemplateId** | [**String**](string.md) | If set, this job was created from this job template | [optional] [default to null]
**maxRetries** | [**Integer**](integer.md) | This is the max retries for the job | [optional] [default to 0]
**modifiedDateTime** | [**Date**](DateTime.md) | This is the datetime the job was last modified. | [optional] [default to null]
**priority** | [**Integer**](integer.md) | The priority for the job.  Default is 0. | [optional] [default to 0]
**scheduledDateTime** | [**Date**](DateTime.md) | If from scheduled job, this is the date when the job should be launched. There is sometimes a difference between scheduled and start to allow for the edge to start processing at the right time if warmup is needed. If not, blank | [optional] [default to null]
**sendOutputToUris** | [**List**](string.md) | A list of URIs to send processed chunks when the engine completes them. | [optional] [default to null]
**startDateTime** | [**Date**](DateTime.md) | If from scheduled job, this is the date when the job should be started. This is a planning time not the actual whcih is startedDateTime.  If not, blank | [optional] [default to null]
**startedDateTime** | [**Date**](DateTime.md) | This is the datetime the job was started (actual) | [optional] [default to null]
**stopDateTime** | [**Date**](DateTime.md) | If from scheduled job, this is the date when the job should be stopped. Start and Stop are used for recording from a stream.  If not, blank | [optional] [default to null]
**taskRoutes** | [**List**](TaskRouteDetail.md) |  | [optional] [default to null]
**tasks** | [**List**](TaskDetail.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

