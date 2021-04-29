# EngineToolkitTimestamps
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunkID** | [**String**](string.md) | optional chunkID associated with the chunk-related timestamps | [optional] [default to null]
**chunkReadStart** | [**Long**](long.md) | timestamp of when File System reads the first chunk for the work request | [optional] [default to null]
**chunkReadStop** | [**Long**](long.md) | timestamp of when File System finishes reading the first chunk | [optional] [default to null]
**chunkWriteStart** | [**Long**](long.md) | timestamp of when Engine Toolkit makes the request to File System to write the first output chunk | [optional] [default to null]
**chunkWriteStop** | [**Long**](long.md) | timestamp of when File System finishes writing the output chunk | [optional] [default to null]
**createdDateTime** | [**Long**](long.md) | timestamp of when the timestamps were first created | [optional] [default to null]
**engineInstanceID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**findChunkStart** | [**Long**](long.md) | timestamp of when Engine Toolkit makes the request to File System to get the first chunk for the work request | [optional] [default to null]
**findChunkStop** | [**Long**](long.md) | timestamp of when Engine Toolkit receives the chunk from File System | [optional] [default to null]
**getWorkStart** | [**Long**](long.md) | timestamp of the very beginning of GetWork request that would result in the assignment of the work request | [optional] [default to null]
**getWorkStop** | [**Long**](long.md) | timestamp of when Engine Toolkit actually gets the work request | [optional] [default to null]
**internalTaskID** | [**UUID**](UUID.md) | Internal Task ID | [optional] [default to null]
**modifiedDateTime** | [**Long**](long.md) | timestamp of when the timestamps were last modified | [optional] [default to null]
**processComplete** | [**Long**](long.md) | timestamp of when Engine Toolkit receives results or completes status from the engine | [optional] [default to null]
**processStart** | [**Long**](long.md) | timestamp of when Engine Toolkit calls the engine to process the chunk | [optional] [default to null]
**workRequestID** | [**UUID**](UUID.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

