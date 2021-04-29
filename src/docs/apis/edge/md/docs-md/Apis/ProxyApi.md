# ProxyApi

All URIs are relative to *https://api.aiware.com/edge/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**proxyGetWorkForEngineInstances**](ProxyApi.md#proxyGetWorkForEngineInstances) | **POST** /proxy/{HostID}/getwork | Get work for engine instances running on the host
[**proxyRegisterEngineInstances**](ProxyApi.md#proxyRegisterEngineInstances) | **POST** /proxy/{HostID}/register | Register engine instances running on the host
[**proxyTerminateEngineInstances**](ProxyApi.md#proxyTerminateEngineInstances) | **POST** /proxy/{HostID}/terminate | Terminate engine instances running on this host.
[**proxyUpdateEngineInstanceStatuses**](ProxyApi.md#proxyUpdateEngineInstanceStatuses) | **POST** /proxy/{HostID}/update | Update statuses of engine instances running on the host


<a name="proxyGetWorkForEngineInstances"></a>
# **proxyGetWorkForEngineInstances**
> List proxyGetWorkForEngineInstances(HostID, EngineInstanceWorkRequest, X-Correlation-Id)

Get work for engine instances running on the host

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostID** | [**UUID**](../Models/.md)| ID of Host | [default to null]
 **EngineInstanceWorkRequest** | [**List**](../Models/EngineInstanceWorkRequest.md)| Engine Instances |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**List**](../Models/EngineInstanceWorkRequestResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="proxyRegisterEngineInstances"></a>
# **proxyRegisterEngineInstances**
> List proxyRegisterEngineInstances(HostID, EngineInstanceInfo, X-Correlation-Id)

Register engine instances running on the host

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostID** | [**UUID**](../Models/.md)| ID of Host | [default to null]
 **EngineInstanceInfo** | [**List**](../Models/EngineInstanceInfo.md)| Engine Instances |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**List**](../Models/EngineInstanceRegistrationInfo.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="proxyTerminateEngineInstances"></a>
# **proxyTerminateEngineInstances**
> List proxyTerminateEngineInstances(HostID, UUID, X-Correlation-Id)

Terminate engine instances running on this host.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostID** | [**UUID**](../Models/.md)| ID of Host | [default to null]
 **UUID** | [**List**](../Models/UUID.md)| array of engine instance IDs |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**List**](../Models/EngineOperationStatusResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="proxyUpdateEngineInstanceStatuses"></a>
# **proxyUpdateEngineInstanceStatuses**
> List proxyUpdateEngineInstanceStatuses(HostID, EngineInstanceStatus, X-Correlation-Id)

Update statuses of engine instances running on the host

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostID** | [**UUID**](../Models/.md)| ID of Host | [default to null]
 **EngineInstanceStatus** | [**List**](../Models/EngineInstanceStatus.md)| Statuses of Engine Instances |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**List**](../Models/EngineOperationStatusResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

