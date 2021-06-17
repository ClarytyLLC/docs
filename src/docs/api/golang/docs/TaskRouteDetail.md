# TaskRouteDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Endpoint** | **string** | This is endpoint to be used for this route.  This does not have to be unique. | [optional] 
**FirstWriteDateTime** | [**time.Time**](time.Time.md) | This is the datetime the the first byte or chunk was written | [optional] 
**LastWriteDateTime** | [**time.Time**](time.Time.md) | This is the datetime the the last byte or chunk was  written | [optional] 
**TaskChildId** | **string** | This is the task child id.  On create, this is the taskCorrelationId | [optional] 
**TaskChildInputCount** | **int32** | This is the count of bytes or chunks available to the child. | [optional] 
**TaskChildInputId** | **string** | This is the task child input id.  On create, this is the correlationId for the input IO Folder | [optional] 
**TaskChildInputRemainingCount** | **int32** | This is the count of bytes or chunks remaining to the child. | [optional] 
**TaskChildNumEngines** | **int32** | This is the number of engine instances running against this task. | [optional] 
**TaskParentId** | **string** | This is the task parent id.  On create, this is the taskCorrelationId | [optional] 
**TaskParentOutputCount** | **int32** | This is the count of bytes or chunks produced by the parent. | [optional] 
**TaskParentOutputId** | **string** | This is the task parent output id.  On create, this is the correlationId for the output IO Folder | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


