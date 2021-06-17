# UpdateEngineDetail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationIDsJSON** | [**String**](string.md) | JSON Data for application_id | [optional] [default to null]
**child\_priority\_adjustment\_on\_complete** | [**Integer**](integer.md) | When this task completes, adjust the priority of child tasks by this value | [optional] [default to null]
**cpuShares** | [**Integer**](integer.md) |  | [optional] [default to null]
**dependencyJSON** | [**String**](string.md) | JSON Data for dependency | [optional] [default to null]
**dontrunComplete** | [**Boolean**](boolean.md) | If true, do not run this engine.  Complete as soon as possible and do not assign work. | [optional] [default to null]
**edge\_version** | [**Integer**](integer.md) | edge version of the engine | [optional] [default to null]
**engineCategoryID** | [**UUID**](UUID.md) | The UUID of the Engine Category | [optional] [default to null]
**engineID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**engineName** | [**String**](string.md) | Name of the Engine | [optional] [default to null]
**engineOutputType** | [**EngineTypeEnum**](EngineTypeEnum.md) |  | [optional] [default to null]
**engineState** | [**EngineStateEnum**](EngineStateEnum.md) |  | [optional] [default to null]
**engineType** | [**EngineTypeEnum**](EngineTypeEnum.md) |  | [optional] [default to null]
**fieldsJSON** | [**String**](string.md) | JSON Data for fields | [optional] [default to null]
**getWorkInterval** | [**Long**](long.md) |  | [optional] [default to null]
**idleTimeout** | [**Integer**](integer.md) |  | [optional] [default to null]
**internalOrganizationID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**jwtRightsJSON** | [**String**](string.md) | JSON Data for jwt_rights | [optional] [default to null]
**maxProcessingSecondsPerWorkItem** | [**Integer**](integer.md) |  | [optional] [default to null]
**maxRunning** | [**Long**](long.md) |  | [optional] [default to null]
**maxWaitSecondsForChunk** | [**Integer**](integer.md) |  | [optional] [default to null]
**minAvailable** | [**Long**](long.md) |  | [optional] [default to null]
**minRunning** | [**Long**](long.md) |  | [optional] [default to null]
**numChunksPerWorkItem** | [**Integer**](integer.md) |  | [optional] [default to null]
**parallelProcessing** | [**Boolean**](boolean.md) | If true, the engine can handle multiple instances working against the same chunk task. | [optional] [default to null]
**parentCompleteBeforeStart** | [**Boolean**](boolean.md) | If true, the engine waits for the parent(s) to be complete before starting | [optional] [default to null]
**preload** | [**Boolean**](boolean.md) | If it is &#x60;true&#x60;, that means the engine need to pull docker image to local | [optional] [default to null]
**priority\_adjustment** | [**Integer**](integer.md) | On new tasks with this engine, add this value to the priority of that task | [optional] [default to null]
**replacementEngineID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**ttlPaddingInSeconds** | [**Long**](long.md) |  | [optional] [default to null]
**updateStatusInterval** | [**Integer**](integer.md) |  | [optional] [default to null]
**validationJSON** | [**String**](string.md) | JSON Data for validation | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

