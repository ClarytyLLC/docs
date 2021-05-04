# HostApi

All URIs are relative to *https://api.aiware.com/edge/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**drainHost**](HostApi.md#drainHost) | **POST** /host/{HostID}/drain | Put this host into drain mode.  A host in drain mode will not have work assigned to engines on the host.
[**getHostCpuUsage**](HostApi.md#getHostCpuUsage) | **GET** /hosts/cpu_usage | Get host cpu usage
[**getHostDetail**](HostApi.md#getHostDetail) | **GET** /host/{HostID}/detail | Get the latest info of the host
[**getHostMemoryUsage**](HostApi.md#getHostMemoryUsage) | **GET** /engine/memory_usage | Get host memory usage
[**getHostStatus**](HostApi.md#getHostStatus) | **GET** /host/{HostID}/status | Get the latest status of the host
[**getHosts**](HostApi.md#getHosts) | **GET** /hosts | This provides a list of hosts in the system
[**getHostsCounts**](HostApi.md#getHostsCounts) | **GET** /hosts/counts | Get the server counts in a time-range
[**getHostsCountsByType**](HostApi.md#getHostsCountsByType) | **GET** /hosts/counts_by_type | Get the server counts in a time-range
[**getHostsLaunch**](HostApi.md#getHostsLaunch) | **GET** /host/{HostID}/launch | This provides a list of host launches in the system
[**hostAlert**](HostApi.md#hostAlert) | **POST** /host/alert | Notifies the controller about a system alert.
[**launchHost**](HostApi.md#launchHost) | **POST** /host/launch | Launch a new host with a particular server type
[**pauseHost**](HostApi.md#pauseHost) | **POST** /host/{HostID}/pause | Pause all engines on this host.
[**registerEngineInstance**](HostApi.md#registerEngineInstance) | **POST** /host/{HostID}/engine/register | Register a new engine instance
[**registerHost**](HostApi.md#registerHost) | **POST** /host/register | Update the Host Status
[**resumeHost**](HostApi.md#resumeHost) | **POST** /host/{HostID}/resume | Resume all engines on this host.
[**terminateHost**](HostApi.md#terminateHost) | **POST** /host/{HostID}/terminate | Delete the host/agent record.  Any work still running on this host will be restarted on other hosts.
[**updateHostStatus**](HostApi.md#updateHostStatus) | **POST** /host/{HostID}/updatestatus | Update the Host Status


<a name="drainHost"></a>
# **drainHost**
> AdminOperationResponse drainHost(HostID, DrainHostRequest, X-Correlation-Id)

Put this host into drain mode.  A host in drain mode will not have work assigned to engines on the host.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostID** | [**UUID**](../Models/.md)| ID of Host | [default to null]
 **DrainHostRequest** | [**DrainHostRequest**](../Models/DrainHostRequest.md)| The Request to Drain a Host |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getHostCpuUsage"></a>
# **getHostCpuUsage**
> GetHostCPUUsageResponse getHostCpuUsage(interval, startTime, endTime, type, hostID)

Get host cpu usage

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **interval** | **Long**| Interval in seconds for output time ranges. | [optional] [default to null]
 **startTime** | **Long**| The unix timestamp, describing the start time for the stats | [optional] [default to null]
 **endTime** | **Long**| The unix timestamp, describing the end time for the stats | [optional] [default to null]
 **type** | [**RunModeEnum**](../Models/.md)| Filter for hosts by type | [optional] [default to null] [enum: engine, nfs, registry, controller, db, standby, all, single, prometheus, api, apps, eventing, automatestudio, lb, nsq, es, redis, ceph-fs, minio]
 **hostID** | [**UUID**](../Models/.md)| Filter data by hostID | [optional] [default to null]

### Return type

[**GetHostCPUUsageResponse**](../Models/GetHostCPUUsageResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getHostDetail"></a>
# **getHostDetail**
> HostDetail getHostDetail(HostID, X-Correlation-Id)

Get the latest info of the host

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostID** | [**UUID**](../Models/.md)| ID of Host | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**HostDetail**](../Models/HostDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getHostMemoryUsage"></a>
# **getHostMemoryUsage**
> GetHostMemoryUsageResponse getHostMemoryUsage(interval, startTime, endTime, type, hostID)

Get host memory usage

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **interval** | **Long**| Interval in seconds for output time ranges. | [optional] [default to null]
 **startTime** | **Long**| The unix timestamp, describing the start time for the stats | [optional] [default to null]
 **endTime** | **Long**| The unix timestamp, describing the end time for the stats | [optional] [default to null]
 **type** | [**RunModeEnum**](../Models/.md)| Filter for hosts by type | [optional] [default to null] [enum: engine, nfs, registry, controller, db, standby, all, single, prometheus, api, apps, eventing, automatestudio, lb, nsq, es, redis, ceph-fs, minio]
 **hostID** | [**UUID**](../Models/.md)| Filter data by hostID | [optional] [default to null]

### Return type

[**GetHostMemoryUsageResponse**](../Models/GetHostMemoryUsageResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getHostStatus"></a>
# **getHostStatus**
> HostStatus getHostStatus(HostID, X-Correlation-Id)

Get the latest status of the host

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostID** | [**UUID**](../Models/.md)| ID of Host | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**HostStatus**](../Models/HostStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getHosts"></a>
# **getHosts**
> AdminHostsGetResponse getHosts(X-Correlation-Id, offset, limit, direction, isactive, type, serverType, startCreatedTime, endCreatedTime, startLastUpdateTime, endLastUpdateTime, startTerminatedTime, endTerminatedTime, startExpireTime, endExpireTime, orderBy, drain, serverTypeID, ip)

This provides a list of hosts in the system

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **direction** | **String**| the sort order.  ASC or DESC. | [optional] [default to DESC]
 **isactive** | **Boolean**| Filter for active or inactive hosts | [optional] [default to null]
 **type** | [**RunModeEnum**](../Models/.md)| Filter for hosts by type | [optional] [default to null] [enum: engine, nfs, registry, controller, db, standby, all, single, prometheus, api, apps, eventing, automatestudio, lb, nsq, es, redis, ceph-fs, minio]
 **serverType** | **String**| Filter for server type. Currently it should be in [physical, virtual]. It can expand in the future | [optional] [default to null]
 **startCreatedTime** | **Long**| The unix timestamp | [optional] [default to null]
 **endCreatedTime** | **Long**| The unix timestamp | [optional] [default to null]
 **startLastUpdateTime** | **Long**| The unix timestamp | [optional] [default to null]
 **endLastUpdateTime** | **Long**| The unix timestamp | [optional] [default to null]
 **startTerminatedTime** | **Long**| The unix timestamp | [optional] [default to null]
 **endTerminatedTime** | **Long**| The unix timestamp | [optional] [default to null]
 **startExpireTime** | **Long**| The unix timestamp | [optional] [default to null]
 **endExpireTime** | **Long**| The unix timestamp | [optional] [default to null]
 **orderBy** | **String**| It should be in [createdTime, terminatedTime, expireTime] | [optional] [default to null]
 **drain** | **Boolean**| Filter by drain | [optional] [default to null]
 **serverTypeID** | [**UUID**](../Models/.md)| Filter by serverTypeID | [optional] [default to null]
 **ip** | **String**| Filter by IP | [optional] [default to null]

### Return type

[**AdminHostsGetResponse**](../Models/AdminHostsGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getHostsCounts"></a>
# **getHostsCounts**
> HostsCountsResponse getHostsCounts(X-Correlation-Id, startLastUpdateTime, endLastUpdateTime)

Get the server counts in a time-range

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **startLastUpdateTime** | **Long**| The unix timestamp | [optional] [default to null]
 **endLastUpdateTime** | **Long**| The unix timestamp | [optional] [default to null]

### Return type

[**HostsCountsResponse**](../Models/HostsCountsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getHostsCountsByType"></a>
# **getHostsCountsByType**
> HostsCountsByTypeResponse getHostsCountsByType(X-Correlation-Id, startLastUpdateTime, endLastUpdateTime, chartType, type)

Get the server counts in a time-range

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **startLastUpdateTime** | **Long**| The unix timestamp | [optional] [default to null]
 **endLastUpdateTime** | **Long**| The unix timestamp | [optional] [default to null]
 **chartType** | [**ChartTypeEnum**](../Models/.md)| It will help API to kmow the response should return | [optional] [default to null] [enum: pie, time_range]
 **type** | [**RunModeEnum**](../Models/.md)| Filter for hosts by type | [optional] [default to null] [enum: engine, nfs, registry, controller, db, standby, all, single, prometheus, api, apps, eventing, automatestudio, lb, nsq, es, redis, ceph-fs, minio]

### Return type

[**HostsCountsByTypeResponse**](../Models/HostsCountsByTypeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getHostsLaunch"></a>
# **getHostsLaunch**
> GetHostLaunchResponse getHostsLaunch(HostID, X-Correlation-Id)

This provides a list of host launches in the system

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostID** | [**UUID**](../Models/.md)| ID of Host | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetHostLaunchResponse**](../Models/GetHostLaunchResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="hostAlert"></a>
# **hostAlert**
> AdminOperationResponse hostAlert(HostAlertRequest, X-Correlation-Id)

Notifies the controller about a system alert.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostAlertRequest** | [**HostAlertRequest**](../Models/HostAlertRequest.md)|  |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="launchHost"></a>
# **launchHost**
> AdminOperationResponse launchHost(LaunchHostRequest)

Launch a new host with a particular server type

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **LaunchHostRequest** | [**LaunchHostRequest**](../Models/LaunchHostRequest.md)| The Request to Launch a Host |

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="pauseHost"></a>
# **pauseHost**
> AdminOperationResponse pauseHost(HostID, X-Correlation-Id)

Pause all engines on this host.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostID** | [**UUID**](../Models/.md)| ID of Host | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="registerEngineInstance"></a>
# **registerEngineInstance**
> EngineInstanceRegistrationInfo registerEngineInstance(HostID, EngineInstanceInfo, X-Correlation-Id)

Register a new engine instance

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostID** | [**UUID**](../Models/.md)| ID of Host | [default to null]
 **EngineInstanceInfo** | [**EngineInstanceInfo**](../Models/EngineInstanceInfo.md)| Engine Instance Info |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**EngineInstanceRegistrationInfo**](../Models/EngineInstanceRegistrationInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="registerHost"></a>
# **registerHost**
> HostRegisterResponse registerHost(HostRegisterRequest, X-Correlation-Id)

Update the Host Status

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostRegisterRequest** | [**HostRegisterRequest**](../Models/HostRegisterRequest.md)| Engine Instance Info |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**HostRegisterResponse**](../Models/HostRegisterResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="resumeHost"></a>
# **resumeHost**
> AdminOperationResponse resumeHost(HostID, X-Correlation-Id)

Resume all engines on this host.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostID** | [**UUID**](../Models/.md)| ID of Host | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="terminateHost"></a>
# **terminateHost**
> AdminOperationResponse terminateHost(HostID, TerminateHostRequest, X-Correlation-Id)

Delete the host/agent record.  Any work still running on this host will be restarted on other hosts.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostID** | [**UUID**](../Models/.md)| ID of Host | [default to null]
 **TerminateHostRequest** | [**TerminateHostRequest**](../Models/TerminateHostRequest.md)| The request to terminate the host |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateHostStatus"></a>
# **updateHostStatus**
> HostAction updateHostStatus(HostID, HostStatus, X-Correlation-Id)

Update the Host Status

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostID** | [**UUID**](../Models/.md)| ID of Host | [default to null]
 **HostStatus** | [**HostStatus**](../Models/HostStatus.md)| Host Status |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**HostAction**](../Models/HostAction.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

