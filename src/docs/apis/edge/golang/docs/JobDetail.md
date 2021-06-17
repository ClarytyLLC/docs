# JobDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AbortedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the task was aborted | [optional] 
**CompletedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the job was completed | [optional] 
**CoreID** | **string** |  | [optional] 
**CoreJobID** | **string** | Core Job ID | [optional] 
**CoreRecordingId** | **int64** | This is the recording id in the core of the content for this job | [optional] 
**CoreScheduledJobId** | **int32** | This is the core scheduled job id. | [optional] 
**CoreSourceId** | **int64** | This is the Core Source Id | [optional] [default to 0]
**CreatedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the job was created | [optional] 
**CurrentRetries** | **int32** | This is the current retries for the job | [optional] [default to 0]
**DueDateTime** | [**time.Time**](time.Time.md) | This is the time the job is due to be complete.  This is used by edge to set the priorities. | [optional] 
**InternalJobID** | **string** | Internal Job ID | [optional] 
**InternalOrganizationID** | **string** |  | [optional] 
**InternalScheduledJobId** | **string** | The internal scheduled job id. | [optional] 
**IsTemplate** | **bool** | If true, this job is a template | [optional] 
**JobConfigJSON** | **string** | This is the job config expressed as JSON | [optional] 
**JobStatus** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] 
**JobTemplateId** | **string** | If set, this job was created from this job template | [optional] 
**MaxRetries** | **int32** | This is the max retries for the job | [optional] [default to 0]
**ModifiedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the job was last modified. | [optional] 
**Priority** | **int32** | The priority for the job.  Default is 0. | [optional] [default to 0]
**ScheduledDateTime** | [**time.Time**](time.Time.md) | If from scheduled job, this is the date when the job should be launched. There is sometimes a difference between scheduled and start to allow for the edge to start processing at the right time if warmup is needed. If not, blank | [optional] 
**SendOutputToUris** | **[]string** | A list of URIs to send processed chunks when the engine completes them. | [optional] 
**StartDateTime** | [**time.Time**](time.Time.md) | If from scheduled job, this is the date when the job should be started. This is a planning time not the actual whcih is startedDateTime.  If not, blank | [optional] 
**StartedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the job was started (actual) | [optional] 
**StopDateTime** | [**time.Time**](time.Time.md) | If from scheduled job, this is the date when the job should be stopped. Start and Stop are used for recording from a stream.  If not, blank | [optional] 
**TaskRoutes** | [**[]TaskRouteDetail**](TaskRouteDetail.md) |  | [optional] 
**Tasks** | [**[]TaskDetail**](TaskDetail.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


