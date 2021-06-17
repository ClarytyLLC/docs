# HostDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AgentCommitID** | **string** | The agent ID | [optional] 
**AgentLabel** | **string** | The build label for the agent | [optional] 
**AgentVersionNumber** | **string** | the agent version | [optional] 
**CloudProviderInstanceID** | **string** | The instance id for the cloud provider | [optional] 
**ControllerPort** | **int64** | Controller Port | [optional] 
**CreatedDateTime** | [**time.Time**](time.Time.md) |  | [optional] 
**DbPort** | **int64** | DB Port | [optional] 
**DockerHostID** | **string** | This is the docker host ID | [optional] 
**DockerInfo** | **string** | The output from &#x60;docker info&#x60; | [optional] 
**Drain** | **bool** | It should indicate whether the server is draining or not | [optional] 
**DrainDetail** | **string** | More information if available on the drain action | [optional] 
**DrainReason** | [**HostDrainReasonEnum**](HostDrainReasonEnum.md) |  | [optional] 
**ExpirationDateTime** | [**time.Time**](time.Time.md) |  | [optional] 
**GpuAvailable** | **int64** | This is the number of GPU available on the host | [optional] 
**GpuType** | **string** | This is the type of GPU such as Tesla K80 | [optional] 
**HostID** | **string** | This is the host id | [optional] 
**Ips** | **[]string** | An array of IPs either IPv4 or IPv6 that are valid for this host | [optional] 
**IsAPI** | **bool** | Is this host core api | [optional] 
**IsActive** | **bool** | Is this host active | [optional] 
**IsApps** | **bool** | Is this host core apps | [optional] 
**IsAssigned** | **bool** | Is this host assigned | [optional] 
**IsAutomate** | **bool** | Is this host automate | [optional] 
**IsController** | **bool** | Is this host a controller | [optional] 
**IsDB** | **bool** | Is this host a db server | [optional] 
**IsES** | **bool** | Is this host elasticsearch | [optional] 
**IsEngine** | **bool** | Is this host an engine | [optional] 
**IsEventing** | **bool** | Is this host eventing | [optional] 
**IsLB** | **bool** | Is this host load balancer | [optional] 
**IsNFS** | **bool** | Is this host an nfs server | [optional] 
**IsNSQ** | **bool** | Is this host nsq | [optional] 
**IsPrometheus** | **bool** | Is this host prometheus | [optional] 
**IsRedis** | **bool** | Is this host redis | [optional] 
**IsRegistry** | **bool** | Is this host a docker registry | [optional] 
**LastUpdateDateTime** | [**time.Time**](time.Time.md) |  | [optional] 
**Memory** | **int64** | This is the memory in bytes | [optional] 
**ModifiedDateTime** | [**time.Time**](time.Time.md) |  | [optional] 
**NfsPartition** | **int64** | NFS Partition number | [optional] 
**NfsPort** | **int64** | NFS Port | [optional] 
**NumCPU** | **int64** | This is the number of CPUs on the host | [optional] 
**NumEngines** | **int64** | This is the number of engines on the host | [optional] 
**NumGPU** | **int64** | This is the number of GPUs on the host | [optional] 
**RegistryPort** | **int64** | Registry Port | [optional] 
**RunModes** | **string** | This is the mode of server type to run | [optional] 
**ServerTypeID** | **string** | This is the server type | [optional] 
**ServerTypeName** | **string** | This is the name of server type | [optional] 
**ShouldExpire** | **bool** | Should this host expire.  Default to false. | [optional] 
**SuggestedRuntimeTTL** | **int32** | The length of time this host suggest it should be up | [optional] 
**TerminationDateTime** | [**time.Time**](time.Time.md) |  | [optional] 
**TerminationDetail** | **string** | More information if available on the termination | [optional] 
**TerminationReason** | [**HostTerminationReasonEnum**](HostTerminationReasonEnum.md) |  | [optional] 
**VcpuAvailable** | **int64** | This is the number of vcpu availables on the host | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


