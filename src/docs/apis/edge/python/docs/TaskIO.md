# TaskIO

An input or output folder.  For type output, all fields required. For type input, only id is required.
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The io id | [optional] 
**input_folders** | [**list[TaskIOFolder]**](TaskIOFolder.md) | For each output, link into the input(s) folders. | [optional] 
**io_mode** | [**TaskIOModeEnum**](TaskIOModeEnum.md) |  | [optional] 
**io_type** | [**TaskIOTypeEnum**](TaskIOTypeEnum.md) |  | [optional] 
**options** | **object** | Options for generating the output, e.g. frame rates, output media format etc. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


