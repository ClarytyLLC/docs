# TaskDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AbortedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the task was aborted | [optional] 
**BuildID** | **string** |  | [optional] 
**ChildTaskIDs** | **[]string** | Array of Internal Child Task Id | [optional] 
**ChunkCountInfo** | [**ChunkCountInfo**](ChunkCountInfo.md) |  | [optional] 
**CompletedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the task was completed | [optional] 
**CoreJobID** | **string** | This is the core job id associated with this job | [optional] 
**CoreRecordingID** | **int64** | This is the recording id in the core of the content for this job | [optional] 
**CoreTaskID** | **string** | This is the core task id associated with this job | [optional] 
**CreatedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the core was created | [optional] 
**CurrentRetries** | **int32** | This is the current retries for the task | [optional] [default to 0]
**DueDateTime** | [**time.Time**](time.Time.md) | This is the time the task is due to be complete.  This is used by edge to set the priorities. | [optional] 
**EngineCategoryID** | **string** | Category Id | [optional] 
**EngineCategoryName** | **string** | Category name | [optional] 
**EngineID** | **string** |  | [optional] 
**EngineName** | **string** | Engine name | [optional] 
**ErrorCount** | **int32** | This is the error count for the task | [optional] 
**FailureDetail** | **string** | If there is an error, the detail will be set here. | [optional] 
**FailureReason** | [**FailureReasonEnum**](FailureReasonEnum.md) |  | [optional] 
**InternalJobID** | **string** | Internal Job ID | [optional] 
**InternalOrganizationID** | **string** |  | [optional] 
**InternalTaskID** | **string** | Internal Task ID | [optional] 
**IoFolders** | [**[]TaskIoInfo**](TaskIOInfo.md) |  | [optional] 
**IsTemplate** | **bool** | If true, this job is a template | [optional] 
**MaxEngines** | **int32** | The maximum number of engine instances to run against this task.  Defaults to 1 if parallelProcessing is false, or 2 otherwise. | [optional] 
**MaxRetries** | **int32** | This is the max retries for the task | [optional] 
**ModifiedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the core was last modified. | [optional] 
**ParallelProcessing** | **bool** | If true, multiple engine instances can process this task in parallel.  If false, maxEngines will be 1. | [optional] 
**ParentMustBeCompleteBeforeStarting** | **bool** | If true, this task won&#39;t start until the parent is complete | [optional] 
**ParentTaskID** | **string** | Internal Parent Task Id | [optional] 
**PayloadJSON** | **string** | This is the payload encoded as a JSON string | [optional] 
**ScheduledDateTime** | [**time.Time**](time.Time.md) | If from scheduled job, this is the date when the task should be launched. There is sometimes a difference between scheduled and start to allow for the edge to start processing at the right time if warmup is needed. If not, blank | [optional] 
**SendOutputToUris** | **[]string** | A list of URIs to send processed chunks when the engine completes them. | [optional] 
**StartDateTime** | [**time.Time**](time.Time.md) | If from scheduled job, this is the date when the task should be started. This is a planning time not the actual which is startedDateTime.  If not, blank | [optional] 
**StartedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the task was started (actual) | [optional] 
**StopDateTime** | [**time.Time**](time.Time.md) | If from scheduled job, this is the date when the task should be stopped. Start and Stop are used for recording from a stream.  If not, blank | [optional] 
**TaskOutputSON** | **string** | This is the taskOutput as a JSON string | [optional] 
**TaskPayloadJSON** | **string** | This is the taskPayload as a JSON string | [optional] 
**TaskStatus** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] 
**TaskTemplateID** | **string** | If set, this task was created from this task template. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


