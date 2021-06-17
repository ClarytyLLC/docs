# GetTaskErrorsResponse

This is the response for get Task error list Request
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total records for the query | [optional] 
**end_date_time** | **datetime** | This is the datetime of the end of the stats period | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**limit** | **int** | the number of records to return. | [optional] 
**offset** | **int** | the number of records to skip before getting the result set | [optional] 
**result** | [**list[TaskErrorInfo]**](TaskErrorInfo.md) |  | [optional] 
**start_date_time** | **datetime** | This is the datetime of the beginning of the stats period | [optional] 
**success** | **bool** | If true, the operation was successful. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


