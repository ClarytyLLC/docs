# CreateServerTypeDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AgentStartupScript** | **string** |  | [optional] 
**AwsAmi** | **string** |  | [optional] 
**AwsInstanceProfile** | **string** |  | [optional] 
**AwsInstanceType** | **string** |  | [optional] 
**AwsKeyName** | **string** |  | [optional] 
**AwsSecurityGroups** | **[]string** | aws subnets | [optional] 
**AwsSpot** | **bool** |  | [optional] 
**AwsSpotMaxPrice** | **float32** |  | [optional] 
**AwsSpotPersistent** | **bool** |  | [optional] 
**AwsSubnets** | **[]string** | aws subnets | [optional] 
**AwsTagsJSON** | **string** |  | [optional] 
**AwsUserData** | **string** |  | [optional] 
**DisableLaunchingBacklogEngines** | **bool** |  | [optional] 
**GpuType** | [**GpuEnum**](GPUEnum.md) |  | [optional] 
**HasGPU** | **bool** |  | [optional] 
**IsAutoScaleActive** | **bool** |  | [optional] 
**MaxServers** | **int64** |  | [optional] 
**MemoryBytes** | **int64** |  | [optional] 
**MinServers** | **int64** |  | [optional] 
**NumGPU** | **int64** |  | [optional] 
**OnlyOrganizationId** | **string** |  | [optional] 
**RunModes** | [**[]RunModeEnum**](RunModeEnum.md) | run modes | [optional] 
**ServerConfigJSON** | **string** |  | [optional] 
**ServerProvider** | [**ServerProviderEnum**](ServerProviderEnum.md) |  | [optional] 
**ServerTypeID** | **string** |  | [optional] 
**Vcpus** | **int64** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


