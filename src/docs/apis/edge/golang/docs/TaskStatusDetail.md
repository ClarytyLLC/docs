# TaskStatusDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreateJobsAction** | [**[]CreateJobsAction**](CreateJobsAction.md) |  | [optional] 
**EngineID** | **string** |  | [optional] 
**ErrorCount** | **int32** | How many errors since last error update | [optional] 
**ErrorDetails** | **string** | JSON string containing an array of JSON Object to describe indvidiual errors e.g. [{\&quot;id\&quot;:\&quot;xxx\&quot;, \&quot;msg\&quot;:\&quot;xxx\&quot;},..] | [optional] 
**FailureReason** | [**FailureReasonEnum**](FailureReasonEnum.md) |  | [optional] 
**Inputs** | [**[]TaskIoStatus**](TaskIOStatus.md) |  | [optional] 
**InternalJobID** | **string** | Internal Job ID | [optional] 
**InternalTaskID** | **string** | Internal Task ID | [optional] 
**Outputs** | [**[]TaskIoStatus**](TaskIOStatus.md) |  | [optional] 
**PriorTimestamp** | **int64** | UTC Timestamp of last status update or start of new task | [optional] 
**ProcessedStats** | [**TaskProcessedStats**](TaskProcessedStats.md) |  | [optional] 
**RetryCount** | **int32** | How many retries since last status update | [optional] 
**TaskAction** | [**TaskActionEnum**](TaskActionEnum.md) |  | [optional] 
**TaskOutput** | **map[string]interface{}** | available at the end of a batch, when getting the next batch to work, or last heartbeat before exiting. May not present in heartbeat update | [optional] 
**TaskRouteID** | **string** | the task route associated with this work item | [optional] 
**TaskStatus** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] 
**Timestamp** | **int64** | UTC Timestamp of NOW() | [optional] 
**WorkRequestID** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


