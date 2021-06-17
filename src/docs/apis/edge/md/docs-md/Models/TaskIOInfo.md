# TaskIOInfo
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlationId** | [**String**](string.md) | On create, this field will be used to look up task routes for binding. | [optional] [default to null]
**createdDateTime** | [**Date**](DateTime.md) | This is the datetime the task was created | [optional] [default to null]
**id** | [**UUID**](UUID.md) | This is the IO Id.  On create, this is not set. | [optional] [default to null]
**mode** | [**TaskIOModeEnum**](TaskIOModeEnum.md) |  | [optional] [default to null]
**modifiedDateTime** | [**Date**](DateTime.md) | This is the datetime the task was last modified. | [optional] [default to null]
**optionsJSON** | [**String**](string.md) | Any options for this input or output folder for the task to use on processing | [optional] [default to null]
**type** | [**TaskIOTypeEnum**](TaskIOTypeEnum.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

