# HostDetail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agentCommitID** | [**String**](string.md) | The agent ID | [optional] [default to null]
**agentLabel** | [**String**](string.md) | The build label for the agent | [optional] [default to null]
**agentVersionNumber** | [**String**](string.md) | the agent version | [optional] [default to null]
**cloudProviderInstanceID** | [**String**](string.md) | The instance id for the cloud provider | [optional] [default to null]
**controllerPort** | [**Long**](long.md) | Controller Port | [optional] [default to null]
**createdDateTime** | [**Date**](DateTime.md) |  | [optional] [default to null]
**dbPort** | [**Long**](long.md) | DB Port | [optional] [default to null]
**dockerHostID** | [**String**](string.md) | This is the docker host ID | [optional] [default to null]
**dockerInfo** | [**String**](string.md) | The output from &#x60;docker info&#x60; | [optional] [default to null]
**drain** | [**Boolean**](boolean.md) | It should indicate whether the server is draining or not | [optional] [default to null]
**drainDetail** | [**String**](string.md) | More information if available on the drain action | [optional] [default to null]
**drainReason** | [**HostDrainReasonEnum**](HostDrainReasonEnum.md) |  | [optional] [default to null]
**expirationDateTime** | [**Date**](DateTime.md) |  | [optional] [default to null]
**gpuAvailable** | [**Long**](long.md) | This is the number of GPU available on the host | [optional] [default to null]
**gpu\_type** | [**String**](string.md) | This is the type of GPU such as Tesla K80 | [optional] [default to null]
**hostID** | [**String**](string.md) | This is the host id | [optional] [default to null]
**ips** | [**List**](string.md) | An array of IPs either IPv4 or IPv6 that are valid for this host | [optional] [default to null]
**isAPI** | [**Boolean**](boolean.md) | Is this host core api | [optional] [default to null]
**isActive** | [**Boolean**](boolean.md) | Is this host active | [optional] [default to null]
**isApps** | [**Boolean**](boolean.md) | Is this host core apps | [optional] [default to null]
**isAssigned** | [**Boolean**](boolean.md) | Is this host assigned | [optional] [default to null]
**isAutomate** | [**Boolean**](boolean.md) | Is this host automate | [optional] [default to null]
**isController** | [**Boolean**](boolean.md) | Is this host a controller | [optional] [default to null]
**isDB** | [**Boolean**](boolean.md) | Is this host a db server | [optional] [default to null]
**isES** | [**Boolean**](boolean.md) | Is this host elasticsearch | [optional] [default to null]
**isEngine** | [**Boolean**](boolean.md) | Is this host an engine | [optional] [default to null]
**isEventing** | [**Boolean**](boolean.md) | Is this host eventing | [optional] [default to null]
**isLB** | [**Boolean**](boolean.md) | Is this host load balancer | [optional] [default to null]
**isNFS** | [**Boolean**](boolean.md) | Is this host an nfs server | [optional] [default to null]
**isNSQ** | [**Boolean**](boolean.md) | Is this host nsq | [optional] [default to null]
**isPrometheus** | [**Boolean**](boolean.md) | Is this host prometheus | [optional] [default to null]
**isRedis** | [**Boolean**](boolean.md) | Is this host redis | [optional] [default to null]
**isRegistry** | [**Boolean**](boolean.md) | Is this host a docker registry | [optional] [default to null]
**lastUpdateDateTime** | [**Date**](DateTime.md) |  | [optional] [default to null]
**memory** | [**Long**](long.md) | This is the memory in bytes | [optional] [default to null]
**modifiedDateTime** | [**Date**](DateTime.md) |  | [optional] [default to null]
**nfsPartition** | [**Long**](long.md) | NFS Partition number | [optional] [default to null]
**nfsPort** | [**Long**](long.md) | NFS Port | [optional] [default to null]
**numCPU** | [**Long**](long.md) | This is the number of CPUs on the host | [optional] [default to null]
**numEngines** | [**Long**](long.md) | This is the number of engines on the host | [optional] [default to null]
**numGPU** | [**Long**](long.md) | This is the number of GPUs on the host | [optional] [default to null]
**registryPort** | [**Long**](long.md) | Registry Port | [optional] [default to null]
**runModes** | [**String**](string.md) | This is the mode of server type to run | [optional] [default to null]
**serverTypeID** | [**UUID**](UUID.md) | This is the server type | [optional] [default to null]
**serverTypeName** | [**String**](string.md) | This is the name of server type | [optional] [default to null]
**shouldExpire** | [**Boolean**](boolean.md) | Should this host expire.  Default to false. | [optional] [default to null]
**suggestedRuntimeTTL** | [**Integer**](integer.md) | The length of time this host suggest it should be up | [optional] [default to null]
**terminationDateTime** | [**Date**](DateTime.md) |  | [optional] [default to null]
**terminationDetail** | [**String**](string.md) | More information if available on the termination | [optional] [default to null]
**terminationReason** | [**HostTerminationReasonEnum**](HostTerminationReasonEnum.md) |  | [optional] [default to null]
**vcpuAvailable** | [**Long**](long.md) | This is the number of vcpu availables on the host | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

