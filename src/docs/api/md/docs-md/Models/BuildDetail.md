# BuildDetail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buildDefaultTTL** | [**Integer**](integer.md) | The seconds on average a build should live if utilized | [optional] [default to null]
**buildID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**buildState** | [**EngineBuildStateEnum**](EngineBuildStateEnum.md) |  | [optional] [default to null]
**createdDateTime** | [**Date**](DateTime.md) | This is the datetime the core was created | [optional] [default to null]
**diskFreeBytes** | [**Long**](long.md) | The number of free bytes required to launch engine | [optional] [default to null]
**dockerImage** | [**String**](string.md) | docker image | [optional] [default to null]
**engineID** | [**UUID**](UUID.md) |  | [optional] [default to null]
**licenseExpirationTimestamp** | [**Long**](long.md) | The unix timestamp on when the license for the engine expires.  If 0, then it does not expire | [optional] [default to null]
**manifestClusterSize** | [**String**](string.md) | Engine Size from the Manifest | [optional] [default to null]
**manifestCustomProfile** | [**String**](string.md) | Engine Custom Profile from the Manifest | [optional] [default to null]
**manifestEngineMode** | [**String**](string.md) | Engine Mode from the Manifest | [optional] [default to null]
**manifestEngineName** | [**String**](string.md) | Name of the Engine from the Manifest | [optional] [default to null]
**manifestGPUSupported** | [**GPUEnum**](GPUEnum.md) |  | [optional] [default to null]
**manifestRequireEC2** | [**Boolean**](boolean.md) | Does the engine require EC2 | [optional] [default to null]
**modifiedDateTime** | [**Date**](DateTime.md) | This is the datetime the core was last modified. | [optional] [default to null]
**runtime** | [**String**](string.md) | JSON Data for runtime | [optional] [default to null]
**softGPULimit** | [**Integer**](integer.md) | The number of GPU required to launch engine | [optional] [default to null]
**softMemoryBytesLimit** | [**Long**](long.md) | The number of bytes required to launch this engine | [optional] [default to null]
**softVCPULimit** | [**Integer**](integer.md) | The number of VCPU based on 1024 required to launch engine | [optional] [default to null]
**version** | [**Integer**](integer.md) | version of the engine | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

