# EngineInstanceWorkItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EngineID** | **string** |  | [optional] 
**EngineType** | [**EngineTypeEnum**](EngineTypeEnum.md) |  | [optional] 
**InternalJobID** | **string** | Internal Job ID | [optional] 
**InternalOrganizationID** | **string** |  | [optional] 
**InternalTaskID** | **string** | Internal Task ID | [optional] 
**IsRetry** | **bool** | If true, a prior version of this task has failed.  The outputs and inputs have to be reset based on the work that has been processed by the downstream tasks | [optional] 
**JobID** | **string** | Core Job ID | [optional] 
**MaxProcessingSecondsPerWorkItem** | **int64** | The number of seconds a work item can take to process the chunks.  This will not interrupt a chunk processing time. | [optional] 
**MaxWaitSecondsForChunk** | **int64** | The max time to wait for a chunk. Default is 0. | [optional] 
**NumChunksPerWorkItem** | **int64** | The number of units to process. Applicable to chunk engines, number of chunks to work on this task | [optional] 
**OrganizationID** | **int32** | This is the organization id in core (int), not the internal organization id | [optional] 
**SendOutputToUris** | **[]string** | A list of URIs to send processed chunks when the engine completes them. | [optional] 
**TaskID** | **string** | Core Task ID | [optional] 
**TaskIOs** | [**[]TaskIo**](TaskIO.md) |  | [optional] 
**TaskParentStatus** | [**TaskStatusEnum**](TaskStatusEnum.md) |  | [optional] 
**TaskPayload** | **map[string]interface{}** |  | [optional] 
**TaskRouteID** | **string** | the task route associated with this work item | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


