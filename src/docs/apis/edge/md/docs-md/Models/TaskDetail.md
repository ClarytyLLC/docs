# TaskDetail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abortedDateTime** | [**Date**](DateTime.md) | This is the datetime the task was aborted | [optional] [default to null]
**buildID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**childTaskIDs** | [**List**](UUID.md) | Array of Internal Child Task Id | [optional] [default to null]
**chunkCountInfo** | [**ChunkCountInfo**](ChunkCountInfo.md) |  | [optional] [default to null]
**completedDateTime** | [**Date**](DateTime.md) | This is the datetime the task was completed | [optional] [default to null]
**coreJobID** | [**String**](string.md) | This is the core job id associated with this job | [optional] [default to null]
**coreRecordingID** | [**Long**](long.md) | This is the recording id in the core of the content for this job | [optional] [default to null]
**coreTaskID** | [**String**](string.md) | This is the core task id associated with this job | [optional] [default to null]
**createdDateTime** | [**Date**](DateTime.md) | This is the datetime the core was created | [optional] [default to null]
**currentRetries** | [**Integer**](integer.md) | This is the current retries for the task | [optional] [default to 0]
**dueDateTime** | [**Date**](DateTime.md) | This is the time the task is due to be complete.  This is used by edge to set the priorities. | [optional] [default to null]
**engineCategoryID** | [**UUID**](UUID.md) | Category Id | [optional] [default to null]
**engineCategoryName** | [**String**](string.md) | Category name | [optional] [default to null]
**engineID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**engineName** | [**String**](string.md) | Engine name | [optional] [default to null]
**errorCount** | [**Integer**](integer.md) | This is the error count for the task | [optional] [default to null]
**failureDetail** | [**String**](string.md) | If there is an error, the detail will be set here. | [optional] [default to null]
**failureReason** | [**FailureReasonEnum**](FailureReasonEnum.md) |  | [optional] [default to null]
**internalJobID** | [**UUID**](UUID.md) | Internal Job ID | [optional] [default to null]
**internalOrganizationID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**internalTaskID** | [**UUID**](UUID.md) | Internal Task ID | [optional] [default to null]
**ioFolders** | [**List**](TaskIOInfo.md) |  | [optional] [default to null]
**isTemplate** | [**Boolean**](boolean.md) | If true, this job is a template | [optional] [default to null]
**maxEngines** | [**Integer**](integer.md) | The maximum number of engine instances to run against this task.  Defaults to 1 if parallelProcessing is false, or 2 otherwise. | [optional] [default to null]
**maxRetries** | [**Integer**](integer.md) | This is the max retries for the task | [optional] [default to null]
**modifiedDateTime** | [**Date**](DateTime.md) | This is the datetime the core was last modified. | [optional] [default to null]
**parallelProcessing** | [**Boolean**](boolean.md) | If true, multiple engine instances can process this task in parallel.  If false, maxEngines will be 1. | [optional] [default to null]
**parentMustBeCompleteBeforeStarting** | [**Boolean**](boolean.md) | If true, this task won&#39;t start until the parent is complete | [optional] [default to null]
**parentTaskID** | [**UUID**](UUID.md) | Internal Parent Task Id | [optional] [default to null]
**payloadJSON** | [**String**](string.md) | This is the payload encoded as a JSON string | [optional] [default to null]
**scheduledDateTime** | [**Date**](DateTime.md) | If from scheduled job, this is the date when the task should be launched. There is sometimes a difference between scheduled and start to allow for the edge to start processing at the right time if warmup is needed. If not, blank | [optional] [default to null]
**sendOutputToUris** | [**List**](string.md) | A list of URIs to send processed chunks when the engine completes them. | [optional] [default to null]
**startDateTime** | [**Date**](DateTime.md) | If from scheduled job, this is the date when the task should be started. This is a planning time not the actual which is startedDateTime.  If not, blank | [optional] [default to null]
**startedDateTime** | [**Date**](DateTime.md) | This is the datetime the task was started (actual) | [optional] [default to null]
**stopDateTime** | [**Date**](DateTime.md) | If from scheduled job, this is the date when the task should be stopped. Start and Stop are used for recording from a stream.  If not, blank | [optional] [default to null]
**taskOutputSON** | [**String**](string.md) | This is the taskOutput as a JSON string | [optional] [default to null]
**taskPayloadJSON** | [**String**](string.md) | This is the taskPayload as a JSON string | [optional] [default to null]
**taskStatus** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] [default to null]
**taskTemplateID** | [**UUID**](UUID.md) | If set, this task was created from this task template. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

