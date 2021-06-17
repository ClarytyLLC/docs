# BuildDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BuildDefaultTTL** | **int32** | The seconds on average a build should live if utilized | [optional] 
**BuildID** | **string** |  | [optional] 
**BuildState** | [**EngineBuildStateEnum**](EngineBuildStateEnum.md) |  | [optional] 
**CreatedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the core was created | [optional] 
**DiskFreeBytes** | **int64** | The number of free bytes required to launch engine | [optional] 
**DockerImage** | **string** | docker image | [optional] 
**EngineID** | **string** |  | [optional] 
**LicenseExpirationTimestamp** | **int64** | The unix timestamp on when the license for the engine expires.  If 0, then it does not expire | [optional] 
**ManifestClusterSize** | **string** | Engine Size from the Manifest | [optional] 
**ManifestCustomProfile** | **string** | Engine Custom Profile from the Manifest | [optional] 
**ManifestEngineMode** | **string** | Engine Mode from the Manifest | [optional] 
**ManifestEngineName** | **string** | Name of the Engine from the Manifest | [optional] 
**ManifestGPUSupported** | [**GpuEnum**](GPUEnum.md) |  | [optional] 
**ManifestRequireEC2** | **bool** | Does the engine require EC2 | [optional] 
**ModifiedDateTime** | [**time.Time**](time.Time.md) | This is the datetime the core was last modified. | [optional] 
**Runtime** | **string** | JSON Data for runtime | [optional] 
**SoftGPULimit** | **int32** | The number of GPU required to launch engine | [optional] 
**SoftMemoryBytesLimit** | **int64** | The number of bytes required to launch this engine | [optional] 
**SoftVCPULimit** | **int32** | The number of VCPU based on 1024 required to launch engine | [optional] 
**Version** | **int32** | version of the engine | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


