# CreateJobDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CoreID** | **string** |  | [optional] 
**CoreJobID** | **string** | This is the core job id associated with this job | [optional] 
**CoreRecordingID** | **int64** | This is the recording id in the core of the content for this job | [optional] 
**CoreSourceID** | **int64** | This is the Core Source Id | [optional] [default to 0]
**CurrentRetries** | **int32** | This is the current retries for the job | [optional] [default to 0]
**DueDateTime** | [**time.Time**](time.Time.md) | This is the time the job is due to be complete.  This is used by edge to set the priorities. | [optional] 
**InternalOrganizationID** | **string** |  | 
**JobConfigJSON** | **string** | This is the job config expressed as JSON | [optional] 
**JobStatus** | [**JobStatusEnum**](JobStatusEnum.md) |  | [optional] 
**SendOutputToUris** | **[]string** | A list of URIs to send processed chunks when the engine completes them. | [optional] 
**TaskRoutes** | [**[]TaskRouteDetail**](TaskRouteDetail.md) |  | [optional] 
**Tasks** | [**[]CreateTaskDetail**](CreateTaskDetail.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


