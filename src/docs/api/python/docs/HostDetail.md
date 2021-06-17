# HostDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_commit_id** | **str** | The agent ID | [optional] 
**agent_label** | **str** | The build label for the agent | [optional] 
**agent_version_number** | **str** | the agent version | [optional] 
**cloud_provider_instance_id** | **str** | The instance id for the cloud provider | [optional] 
**controller_port** | **int** | Controller Port | [optional] 
**created_date_time** | **datetime** |  | [optional] 
**db_port** | **int** | DB Port | [optional] 
**docker_host_id** | **str** | This is the docker host ID | [optional] 
**docker_info** | **str** | The output from &#x60;docker info&#x60; | [optional] 
**drain** | **bool** | It should indicate whether the server is draining or not | [optional] 
**drain_detail** | **str** | More information if available on the drain action | [optional] 
**drain_reason** | [**HostDrainReasonEnum**](HostDrainReasonEnum.md) |  | [optional] 
**expiration_date_time** | **datetime** |  | [optional] 
**gpu_available** | **int** | This is the number of GPU available on the host | [optional] 
**gpu_type** | **str** | This is the type of GPU such as Tesla K80 | [optional] 
**host_id** | **str** | This is the host id | [optional] 
**ips** | **list[str]** | An array of IPs either IPv4 or IPv6 that are valid for this host | [optional] 
**is_api** | **bool** | Is this host core api | [optional] 
**is_active** | **bool** | Is this host active | [optional] 
**is_apps** | **bool** | Is this host core apps | [optional] 
**is_assigned** | **bool** | Is this host assigned | [optional] 
**is_automate** | **bool** | Is this host automate | [optional] 
**is_controller** | **bool** | Is this host a controller | [optional] 
**is_db** | **bool** | Is this host a db server | [optional] 
**is_es** | **bool** | Is this host elasticsearch | [optional] 
**is_engine** | **bool** | Is this host an engine | [optional] 
**is_eventing** | **bool** | Is this host eventing | [optional] 
**is_lb** | **bool** | Is this host load balancer | [optional] 
**is_nfs** | **bool** | Is this host an nfs server | [optional] 
**is_nsq** | **bool** | Is this host nsq | [optional] 
**is_prometheus** | **bool** | Is this host prometheus | [optional] 
**is_redis** | **bool** | Is this host redis | [optional] 
**is_registry** | **bool** | Is this host a docker registry | [optional] 
**last_update_date_time** | **datetime** |  | [optional] 
**memory** | **int** | This is the memory in bytes | [optional] 
**modified_date_time** | **datetime** |  | [optional] 
**nfs_partition** | **int** | NFS Partition number | [optional] 
**nfs_port** | **int** | NFS Port | [optional] 
**num_cpu** | **int** | This is the number of CPUs on the host | [optional] 
**num_engines** | **int** | This is the number of engines on the host | [optional] 
**num_gpu** | **int** | This is the number of GPUs on the host | [optional] 
**registry_port** | **int** | Registry Port | [optional] 
**run_modes** | **str** | This is the mode of server type to run | [optional] 
**server_type_id** | **str** | This is the server type | [optional] 
**server_type_name** | **str** | This is the name of server type | [optional] 
**should_expire** | **bool** | Should this host expire.  Default to false. | [optional] 
**suggested_runtime_ttl** | **int** | The length of time this host suggest it should be up | [optional] 
**termination_date_time** | **datetime** |  | [optional] 
**termination_detail** | **str** | More information if available on the termination | [optional] 
**termination_reason** | [**HostTerminationReasonEnum**](HostTerminationReasonEnum.md) |  | [optional] 
**vcpu_available** | **int** | This is the number of vcpu availables on the host | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


