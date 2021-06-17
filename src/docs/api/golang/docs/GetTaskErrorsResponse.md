# GetTaskErrorsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **int32** | Total records for the query | [optional] 
**EndDateTime** | [**time.Time**](time.Time.md) | This is the datetime of the end of the stats period | [optional] 
**Error** | [**Error**](Error.md) |  | [optional] 
**Limit** | **int32** | the number of records to return. | [optional] 
**Offset** | **int32** | the number of records to skip before getting the result set | [optional] 
**Result** | [**[]TaskErrorInfo**](TaskErrorInfo.md) |  | [optional] 
**StartDateTime** | [**time.Time**](time.Time.md) | This is the datetime of the beginning of the stats period | [optional] 
**Success** | **bool** | If true, the operation was successful. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


