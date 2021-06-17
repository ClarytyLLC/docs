# TaskRouteDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | This is endpoint to be used for this route.  This does not have to be unique. | [optional] 
**first_write_date_time** | **datetime** | This is the datetime the the first byte or chunk was written | [optional] 
**last_write_date_time** | **datetime** | This is the datetime the the last byte or chunk was  written | [optional] 
**task_child_id** | **str** | This is the task child id.  On create, this is the taskCorrelationId | [optional] 
**task_child_input_count** | **int** | This is the count of bytes or chunks available to the child. | [optional] 
**task_child_input_id** | **str** | This is the task child input id.  On create, this is the correlationId for the input IO Folder | [optional] 
**task_child_input_remaining_count** | **int** | This is the count of bytes or chunks remaining to the child. | [optional] 
**task_child_num_engines** | **int** | This is the number of engine instances running against this task. | [optional] 
**task_parent_id** | **str** | This is the task parent id.  On create, this is the taskCorrelationId | [optional] 
**task_parent_output_count** | **int** | This is the count of bytes or chunks produced by the parent. | [optional] 
**task_parent_output_id** | **str** | This is the task parent output id.  On create, this is the correlationId for the output IO Folder | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


