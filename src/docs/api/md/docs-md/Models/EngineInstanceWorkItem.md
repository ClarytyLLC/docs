# EngineInstanceWorkItem
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**engineID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**engineType** | [**EngineTypeEnum**](EngineTypeEnum.md) |  | [optional] [default to null]
**internalJobID** | [**UUID**](UUID.md) | Internal Job ID | [optional] [default to null]
**internalOrganizationID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**internalTaskID** | [**UUID**](UUID.md) | Internal Task ID | [optional] [default to null]
**isRetry** | [**Boolean**](boolean.md) | If true, a prior version of this task has failed.  The outputs and inputs have to be reset based on the work that has been processed by the downstream tasks | [optional] [default to null]
**jobID** | [**String**](string.md) | Core Job ID | [optional] [default to null]
**maxProcessingSecondsPerWorkItem** | [**Long**](long.md) | The number of seconds a work item can take to process the chunks.  This will not interrupt a chunk processing time. | [optional] [default to null]
**maxWaitSecondsForChunk** | [**Long**](long.md) | The max time to wait for a chunk. Default is 0. | [optional] [default to null]
**numChunksPerWorkItem** | [**Long**](long.md) | The number of units to process. Applicable to chunk engines, number of chunks to work on this task | [optional] [default to null]
**organizationID** | [**Integer**](integer.md) | This is the organization id in core (int), not the internal organization id | [optional] [default to null]
**sendOutputToUris** | [**List**](string.md) | A list of URIs to send processed chunks when the engine completes them. | [optional] [default to null]
**taskID** | [**String**](string.md) | Core Task ID | [optional] [default to null]
**taskIOs** | [**List**](TaskIO.md) |  | [optional] [default to null]
**taskParentStatus** | [**TaskStatusEnum**](TaskStatusEnum.md) |  | [optional] [default to null]
**taskPayload** | [**Object**](.md) |  | [optional] [default to null]
**taskRouteID** | [**String**](string.md) | the task route associated with this work item | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

