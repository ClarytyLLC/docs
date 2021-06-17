# ServerErrorCountInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **int64** | This is the total of error for current service. | [optional] 
**EndDateTime** | [**time.Time**](time.Time.md) | End of a time range | [optional] 
**ErrorCode** | **string** |  | [optional] 
**Service** | **string** |  | [optional] 
**StartDateTime** | [**time.Time**](time.Time.md) | Start of a time range | [optional] 
**Values** | [**[][]int64**](array.md) | This is an array of data count by time for current errorCode. Item format [timestamp, count] | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


