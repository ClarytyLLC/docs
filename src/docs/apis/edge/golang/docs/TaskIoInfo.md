# TaskIoInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorrelationId** | **string** | On create, this field will be used to look up task routes for binding. | [optional] 
**CreatedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the task was created | [optional] 
**Id** | **string** | This is the IO Id.  On create, this is not set. | [optional] 
**Mode** | [**TaskIoModeEnum**](TaskIOModeEnum.md) |  | [optional] 
**ModifiedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the task was last modified. | [optional] 
**OptionsJSON** | **string** | Any options for this input or output folder for the task to use on processing | [optional] 
**Type** | [**TaskIoTypeEnum**](TaskIOTypeEnum.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


