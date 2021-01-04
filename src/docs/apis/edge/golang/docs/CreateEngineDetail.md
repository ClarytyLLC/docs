# CreateEngineDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationIDsJSON** | **string** | JSON Data for application_id | [optional] 
**ChildPriorityAdjustmentOnComplete** | **int32** | When this task completes, adjust the priority of child tasks by this value | [optional] 
**DependencyJSON** | **string** | JSON Data for dependency | [optional] 
**DontrunComplete** | **bool** | If true, do not run this engine.  Complete as soon as possible and do not assign work. | [optional] 
**EdgeVersion** | **int32** | edge version of the engine | [optional] 
**EngineCategoryID** | **string** | The UUID of the Engine Category | [optional] 
**EngineID** | **string** |  | [optional] 
**EngineName** | **string** | Name of the Engine | [optional] 
**EngineOutputType** | [**EngineTypeEnum**](EngineTypeEnum.md) |  | [optional] 
**EngineState** | [**EngineStateEnum**](EngineStateEnum.md) |  | [optional] 
**EngineType** | [**EngineTypeEnum**](EngineTypeEnum.md) |  | [optional] 
**FieldsJSON** | **string** | JSON Data for fields | [optional] 
**InternalOrganizationID** | **string** |  | [optional] 
**JwtRightsJSON** | **string** | JSON Data for jwt_rights | [optional] 
**MinAvailable** | **int64** |  | [optional] 
**MinRunning** | **int64** |  | [optional] 
**ParallelProcessing** | **bool** | If true, the engine can handle multiple instances working against the same chunk task. | [optional] 
**ParentCompleteBeforeStart** | **bool** | If true, the engine waits for the parent(s) to be complete before starting | [optional] 
**Preload** | **bool** | If it is &#x60;true&#x60;, that means the engine need to pull docker image to local | [optional] 
**PriorityAdjustment** | **int32** | On new tasks with this engine, add this value to the priority of that task | [optional] 
**ReplacementEngineID** | **string** |  | [optional] 
**ValidationJSON** | **string** | JSON Data for validation | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


