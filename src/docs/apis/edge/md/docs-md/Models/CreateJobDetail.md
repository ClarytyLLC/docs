# CreateJobDetail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coreID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**coreJobID** | [**String**](string.md) | This is the core job id associated with this job | [optional] [default to null]
**coreRecordingID** | [**Long**](long.md) | This is the recording id in the core of the content for this job | [optional] [default to null]
**coreSourceID** | [**Long**](long.md) | This is the Core Source Id | [optional] [default to 0]
**currentRetries** | [**Integer**](integer.md) | This is the current retries for the job | [optional] [default to 0]
**dueDateTime** | [**Date**](DateTime.md) | This is the time the job is due to be complete.  This is used by edge to set the priorities. | [optional] [default to null]
**internalOrganizationID** | [**UUID**](UUID.md) |  | [default to null]
**jobConfigJSON** | [**String**](string.md) | This is the job config expressed as JSON | [optional] [default to null]
**jobStatus** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] [default to null]
**sendOutputToUris** | [**List**](string.md) | A list of URIs to send processed chunks when the engine completes them. | [optional] [default to null]
**taskRoutes** | [**List**](TaskRouteDetail.md) |  | [optional] [default to null]
**tasks** | [**List**](CreateTaskDetail.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

