# TaskStatusDetail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createJobsAction** | [**List**](CreateJobsAction.md) |  | [optional] [default to null]
**engineID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**errorCount** | [**Integer**](integer.md) | How many errors since last error update | [optional] [default to null]
**errorDetails** | [**String**](string.md) | JSON string containing an array of JSON Object to describe indvidiual errors e.g. [{\&quot;id\&quot;:\&quot;xxx\&quot;, \&quot;msg\&quot;:\&quot;xxx\&quot;},..] | [optional] [default to null]
**failureReason** | [**FailureReasonEnum**](FailureReasonEnum.md) |  | [optional] [default to null]
**inputs** | [**List**](TaskIOStatus.md) |  | [optional] [default to null]
**internalJobID** | [**UUID**](UUID.md) | Internal Job ID | [optional] [default to null]
**internalTaskID** | [**UUID**](UUID.md) | Internal Task ID | [optional] [default to null]
**outputs** | [**List**](TaskIOStatus.md) |  | [optional] [default to null]
**priorTimestamp** | [**Long**](long.md) | UTC Timestamp of last status update or start of new task | [optional] [default to null]
**processedStats** | [**TaskProcessedStats**](TaskProcessedStats.md) |  | [optional] [default to null]
**retryCount** | [**Integer**](integer.md) | How many retries since last status update | [optional] [default to null]
**taskAction** | [**TaskActionEnum**](TaskActionEnum.md) |  | [optional] [default to null]
**taskOutput** | [**Object**](.md) | available at the end of a batch, when getting the next batch to work, or last heartbeat before exiting. May not present in heartbeat update | [optional] [default to null]
**taskRouteID** | [**String**](string.md) | the task route associated with this work item | [optional] [default to null]
**taskStatus** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] [default to null]
**timestamp** | [**Long**](long.md) | UTC Timestamp of NOW() | [optional] [default to null]
**workRequestID** | [**UUID**](UUID.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

