# EngineErrorTimeRangesCountsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **int64** | Total amount of engine error with a particular status and a time range | [optional] 
**EndDateTime** | [**time.Time**](time.Time.md) | Start of a time range | [optional] 
**EngineID** | **string** |  | [optional] 
**EngineName** | **string** | Engine name | [optional] 
**StartDateTime** | [**time.Time**](time.Time.md) | Start of a time range | [optional] 
**Values** | [**[][]int64**](array.md) | This is an array of failed task count by engine_id in a time range. Item format [timestamp, count] | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


