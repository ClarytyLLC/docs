# TaskIOInfo

This is the task IO Object that provides paramenters for the input and output
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlation_id** | **str** | On create, this field will be used to look up task routes for binding. | [optional] 
**created_date_time** | **datetime** | This is the datetime the task was created | [optional] 
**id** | **str** | This is the IO Id.  On create, this is not set. | [optional] 
**mode** | [**TaskIOModeEnum**](TaskIOModeEnum.md) |  | [optional] 
**modified_date_time** | **datetime** | This is the datetime the task was last modified. | [optional] 
**options_json** | **str** | Any options for this input or output folder for the task to use on processing | [optional] 
**type** | [**TaskIOTypeEnum**](TaskIOTypeEnum.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


