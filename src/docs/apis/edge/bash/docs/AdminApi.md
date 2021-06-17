<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

# AdminApi

All URIs are relative to */edge/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEngineToResource**](AdminApi.md#addEngineToResource) | **POST** /admin/resource/{ResourceID}/engine | This API adds the engine to the resource
[**addServiceToResource**](AdminApi.md#addServiceToResource) | **POST** /admin/resource/{ResourceID}/service | This API adds the service to the resource
[**addserversServerType**](AdminApi.md#addserversServerType) | **POST** /admin/server_type/{ServerTypeID}/add | This API add servers to the specified server type
[**adminTerminateCluster**](AdminApi.md#adminTerminateCluster) | **POST** /admin/terminate | This terminates the cluster
[**applyLicense**](AdminApi.md#applyLicense) | **POST** /admin/licenses/apply | This applies a license to aiWARE
[**checkAuth**](AdminApi.md#checkAuth) | **POST** /admin/auth | This check auth for a token
[**clearBacklog**](AdminApi.md#clearBacklog) | **POST** /admin/backlog/clear | This clears some or all of the currently queued tasks
[**createAdminApplication**](AdminApi.md#createAdminApplication) | **POST** /admin/applications/create | This creates a new application
[**createAdminCore**](AdminApi.md#createAdminCore) | **POST** /admin/cores/create | This creates a new core
[**createAdminOrganization**](AdminApi.md#createAdminOrganization) | **POST** /admin/organizations/create | This updates the config for the cluster for a given key
[**createPermission**](AdminApi.md#createPermission) | **POST** /admin/users/permission/create | This creates a new permission
[**createResource**](AdminApi.md#createResource) | **POST** /admin/resource/create | This API creates a new resource definition such as a database, nsq or redis DB.
[**createRole**](AdminApi.md#createRole) | **POST** /admin/users/role/create | This creates a new role
[**createServerType**](AdminApi.md#createServerType) | **POST** /admin/server_types/create | This creates a new server type
[**createServerTypeEngineRunning**](AdminApi.md#createServerTypeEngineRunning) | **POST** /admin/server_types/running_engine/create | This creates a new server_type_engine_running
[**createToken**](AdminApi.md#createToken) | **POST** /admin/tokens/create | This creates a new token
[**createUser**](AdminApi.md#createUser) | **POST** /admin/users/create | This creates a new user
[**deleteApplication**](AdminApi.md#deleteApplication) | **POST** /admin/applications/{ApplicationID}/delete | This deletes an application
[**deleteLicense**](AdminApi.md#deleteLicense) | **DELETE** /admin/licenses/{LicenseID}/delete | This deletes a license from aiWARE
[**deleteResource**](AdminApi.md#deleteResource) | **POST** /admin/resource/{ResourceID}/delete | This deletes the specified resource
[**deleteRole**](AdminApi.md#deleteRole) | **POST** /admin/users/role/{RoleID}/delete | This deletes a role
[**deleteServerType**](AdminApi.md#deleteServerType) | **DELETE** /admin/server_type/{ServerTypeID}/delete | This API deletes the specified server type
[**deleteServerTypePost**](AdminApi.md#deleteServerTypePost) | **POST** /admin/server_type/{ServerTypeID}/delete | This API deletes the specified server type
[**deleteServerTypeRunningEngine**](AdminApi.md#deleteServerTypeRunningEngine) | **DELETE** /admin/server_type/{ServerTypeID}/engine/{EngineID}/delete | This API deletes the running engine for a server type
[**deleteToken**](AdminApi.md#deleteToken) | **POST** /admin/token/{TokenID}/delete | This deletes a token
[**deleteUser**](AdminApi.md#deleteUser) | **POST** /admin/user/{UserID}/delete | This deletes a user
[**desiredserversServerType**](AdminApi.md#desiredserversServerType) | **POST** /admin/server_type/{ServerTypeID}/desired | This API add servers to the specified server type
[**getAdminApplicationDetail**](AdminApi.md#getAdminApplicationDetail) | **GET** /admin/applications/{ApplicationID}/detail | This provides information on the given application.
[**getAdminCoreDetail**](AdminApi.md#getAdminCoreDetail) | **GET** /admin/core/{CoreID}/detail | This provides information on the given core.
[**getAdminCores**](AdminApi.md#getAdminCores) | **GET** /admin/cores | This provides a list of core systems
[**getAdminEngineConfigSectionKey**](AdminApi.md#getAdminEngineConfigSectionKey) | **GET** /admin/engine/{EngineID}/config/{ConfigSection}/{ConfigKey} | This provides a config section key for the engine
[**getAdminOrganizationDetail**](AdminApi.md#getAdminOrganizationDetail) | **GET** /admin/organization/{OrganizationID}/detail | This gets organization detail by ID
[**getAdminOrganizationTokens**](AdminApi.md#getAdminOrganizationTokens) | **GET** /admin/organization/{OrganizationID}/tokens | This provides information on the given organization tokens.
[**getAdminOrganizations**](AdminApi.md#getAdminOrganizations) | **GET** /admin/organizations | This provides a list of organizations
[**getAdminPermissionDetail**](AdminApi.md#getAdminPermissionDetail) | **GET** /admin/users/permission/{PermissionID}/detail | This gets permission detail by ID
[**getAdminRoleDetail**](AdminApi.md#getAdminRoleDetail) | **GET** /admin/users/role/{RoleID}/detail | This gets role detail by ID
[**getAdminServiceConfig**](AdminApi.md#getAdminServiceConfig) | **GET** /admin/service/{ServiceID}/config | This provides all the config for the service
[**getAdminServiceConfigSection**](AdminApi.md#getAdminServiceConfigSection) | **GET** /admin/service/{ServiceID}/config/{ConfigSection} | This provides all the config for the service
[**getAdminServiceConfigSectionKey**](AdminApi.md#getAdminServiceConfigSectionKey) | **GET** /admin/service/{ServiceID}/config/{ConfigSection}/{ConfigKey} | This provides a config section key for the service
[**getAdminServiceInstances**](AdminApi.md#getAdminServiceInstances) | **GET** /admin/service/instances | This lists the service instances available for a system
[**getAdminStatus**](AdminApi.md#getAdminStatus) | **GET** /admin/status | This provides information on the status of the aiWARE edge
[**getAdminTokenDetail**](AdminApi.md#getAdminTokenDetail) | **GET** /admin/token/{TokenID}/detail | Get the token info by ID
[**getAdminTokenPermissions**](AdminApi.md#getAdminTokenPermissions) | **GET** /admin/token/{TokenID}/permissions | This provides a list of all token permissions for a token by TokenID
[**getAdminTokens**](AdminApi.md#getAdminTokens) | **GET** /admin/tokens | This provides information about all tokens.
[**getAdminUserDetail**](AdminApi.md#getAdminUserDetail) | **GET** /admin/user/{UserID}/detail | This provides information on the given user.
[**getAdminUserPermissions**](AdminApi.md#getAdminUserPermissions) | **GET** /admin/user/{UserID}/permissions | This provides a list of all user permissions for an user by UserID
[**getAdminUserTokens**](AdminApi.md#getAdminUserTokens) | **GET** /admin/user/{UserID}/tokens | This provides information on the given user.
[**getAdminUsers**](AdminApi.md#getAdminUsers) | **GET** /admin/users | This provides a list of users in the system
[**getAdminUsersPermission**](AdminApi.md#getAdminUsersPermission) | **GET** /admin/users/permissions | This provides a list of all user permissions in the system
[**getAdminUsersRoles**](AdminApi.md#getAdminUsersRoles) | **GET** /admin/users/roles | This provides a list of user role in the system
[**getApplications**](AdminApi.md#getApplications) | **GET** /admin/applications | Get the list of applications deployed and available on aiWARE
[**getBacklogSummary**](AdminApi.md#getBacklogSummary) | **GET** /admin/backlog/summary | This provides summary information on the current backlog
[**getConfig**](AdminApi.md#getConfig) | **GET** /admin/config | This provides all the config for the cluster
[**getConfigSection**](AdminApi.md#getConfigSection) | **GET** /admin/config/{ConfigSection} | This provides all the config for the cluster
[**getConfigSectionKey**](AdminApi.md#getConfigSectionKey) | **GET** /admin/config/{ConfigSection}/{ConfigKey} | This provides a config section key for the cluster
[**getEnginesForResource**](AdminApi.md#getEnginesForResource) | **GET** /admin/resource/{ResourceID}/engines | Get list of engines for resource
[**getLicenseDetail**](AdminApi.md#getLicenseDetail) | **GET** /admin/licenses/{LicenseID}/detail | This gets detail on a license key
[**getLicenses**](AdminApi.md#getLicenses) | **GET** /admin/licenses | This provides a licenses on the system
[**getResource**](AdminApi.md#getResource) | **GET** /admin/resource/{ResourceID} | Get a resource definition
[**getResources**](AdminApi.md#getResources) | **GET** /admin/resources | Get the list of resources
[**getResourcesForEngine**](AdminApi.md#getResourcesForEngine) | **GET** /admin/engine/{EngineID}/resources | Get list of resources for engine
[**getResourcesForHost**](AdminApi.md#getResourcesForHost) | **GET** /admin/host/{HostID}/resources | Get list of resources for host
[**getResourcesForService**](AdminApi.md#getResourcesForService) | **GET** /admin/service/{ServiceID}/resources | Get list of resources for service
[**getServerType**](AdminApi.md#getServerType) | **GET** /admin/server_type/{ServerTypeID}/detail | This provides detail on the server type
[**getServerTypeEngineRunning**](AdminApi.md#getServerTypeEngineRunning) | **GET** /admin/server_types/running_engines | This lists the running engine with server types
[**getServerTypeEngineRunningDetail**](AdminApi.md#getServerTypeEngineRunningDetail) | **GET** /admin/server_type/{ServerTypeID}/engine/{EngineID}/detail | This gets the detail of server type - running engine
[**getServerTypes**](AdminApi.md#getServerTypes) | **GET** /admin/server_types | This lists the server types available on the system
[**getServices**](AdminApi.md#getServices) | **GET** /admin/services | This lists the services available on the system
[**loginUser**](AdminApi.md#loginUser) | **POST** /admin/users/login | This logs a user in if successful
[**oauthLoginUser**](AdminApi.md#oauthLoginUser) | **POST** /admin/users/oauth2_login | This logs a user in if successful with OAuth2
[**registerUser**](AdminApi.md#registerUser) | **POST** /admin/users/register | This registers a new user
[**removeEngineForResource**](AdminApi.md#removeEngineForResource) | **POST** /admin/resource/{ResourceID}/engine/{EngineID}/delete | This API removes the engine to the resource
[**removeserversServerType**](AdminApi.md#removeserversServerType) | **POST** /admin/server_type/{ServerTypeID}/remove | This API removes servers from the specified server type
[**resetAllocTable**](AdminApi.md#resetAllocTable) | **POST** /admin/backlog/reset-alloc | This resets the alloc table
[**updateApplication**](AdminApi.md#updateApplication) | **POST** /admin/applications/{ApplicationID}/update | This updates an application
[**updateConfigAll**](AdminApi.md#updateConfigAll) | **POST** /admin/config | This gets the config for the cluster
[**updateConfigSection**](AdminApi.md#updateConfigSection) | **POST** /admin/config/{ConfigSection} | This gets the config for the cluster
[**updateConfigSectionKey**](AdminApi.md#updateConfigSectionKey) | **POST** /admin/config/{ConfigSection}/{ConfigKey} | This updates the config for the cluster for a given key
[**updateEnginesForResource**](AdminApi.md#updateEnginesForResource) | **POST** /admin/resource/{ResourceID}/engine/update | This API updates the specified server type-running engine
[**updateOrganization**](AdminApi.md#updateOrganization) | **POST** /admin/organization/{OrganizationID}/update | This updates a organization
[**updatePermission**](AdminApi.md#updatePermission) | **POST** /admin/users/permission/{PermissionID}/update | This updates a permission
[**updateResource**](AdminApi.md#updateResource) | **POST** /admin/resource/{ResourceID}/update | This API updates the specified resource
[**updateResourceState**](AdminApi.md#updateResourceState) | **POST** /admin/resource/{ResourceID}/updatestate | This API updates the state of the specified resource
[**updateRole**](AdminApi.md#updateRole) | **POST** /admin/users/role/{RoleID}/update | This updates a role
[**updateServerType**](AdminApi.md#updateServerType) | **POST** /admin/server_type/{ServerTypeID}/update | This API updates the specified server type
[**updateServerTypeEngineRunning**](AdminApi.md#updateServerTypeEngineRunning) | **POST** /admin/server_type/{ServerTypeID}/engine/{EngineID}/update | This API updates the specified server type-running engine
[**updateToken**](AdminApi.md#updateToken) | **POST** /admin/token/{TokenID}/update | This updates a token
[**updateUser**](AdminApi.md#updateUser) | **POST** /admin/user/{UserID}/update | This updates a user
[**userPasswordForgot**](AdminApi.md#userPasswordForgot) | **POST** /admin/users/password/forgot | This api will help users to reset their password when they forgot
[**userPasswordReset**](AdminApi.md#userPasswordReset) | **POST** /admin/users/password/reset | Helps users to reset their password
[**userPasswordUpdate**](AdminApi.md#userPasswordUpdate) | **POST** /admin/users/password/update | This api will help users to update their password



## addEngineToResource

This API adds the engine to the resource

### Example

```bash
aiware addEngineToResource ResourceID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceID** | [**string**](.md) | ID of Resource | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **addEngineForResourceRequest** | [**AddEngineForResourceRequest**](AddEngineForResourceRequest.md) | Add Engine Mapping for Resource | [optional]

### Return type

[**AddEngineForResourceResponse**](AddEngineForResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## addServiceToResource

This API adds the service to the resource

### Example

```bash
aiware addServiceToResource ResourceID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceID** | [**string**](.md) | ID of Resource | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **addServiceForResourceRequest** | [**AddServiceForResourceRequest**](AddServiceForResourceRequest.md) | Add Service Mapping for Resource | [optional]

### Return type

[**AddServiceForResourceResponse**](AddServiceForResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## addserversServerType

This API add servers to the specified server type

### Example

```bash
aiware addserversServerType ServerTypeID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverTypeID** | [**string**](.md) | ID of Server Type | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **addServersToServerTypeRequest** | [**AddServersToServerTypeRequest**](AddServersToServerTypeRequest.md) | Add Servers Server Type | [optional]

### Return type

[**AdminOperationResponse**](AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## adminTerminateCluster

This terminates the cluster

### Example

```bash
aiware adminTerminateCluster X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **adminOperationRequest** | [**AdminOperationRequest**](AdminOperationRequest.md) | ClusterID | [optional]

### Return type

(empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## applyLicense

This applies a license to aiWARE

### Example

```bash
aiware applyLicense X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **createLicenseDetail** | [**CreateLicenseDetail**](CreateLicenseDetail.md) |  | [optional]

### Return type

[**LicenseDetail**](LicenseDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## checkAuth

This check auth for a token

### Example

```bash
aiware checkAuth X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminAuthRequest** | [**AdminAuthRequest**](AdminAuthRequest.md) | The input for check auth |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminAuthResponse**](AdminAuthResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## clearBacklog

This clears some or all of the currently queued tasks

### Example

```bash
aiware clearBacklog X-Correlation-Id:value  status=value  engineID=value  modifiedBefore=value  modifiedAfter=value  CreatedBefore=value  CreatedAfter=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **status** | [**EngineStatusEnum**](.md) | Field to match the current status | [optional] [default to null]
 **engineID** | **string** | Filter by engine id | [optional] [default to null]
 **modifiedBefore** | **integer** | Filter by items modified before expressed as timestamp | [optional] [default to null]
 **modifiedAfter** | **integer** | Filter by items modified after expressed as timestamp | [optional] [default to null]
 **createdBefore** | **integer** | Filter items where created date is before this date | [optional] [default to null]
 **createdAfter** | **integer** | Filter items where created date is after this date | [optional] [default to null]

### Return type

[**AdminCoreCreateResponse**](AdminCoreCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## createAdminApplication

This creates a new application

### Example

```bash
aiware createAdminApplication X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminApplicationCreateRequest** | [**AdminApplicationCreateRequest**](AdminApplicationCreateRequest.md) | The input for createApplication |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminApplicationCreateResponse**](AdminApplicationCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## createAdminCore

This creates a new core

### Example

```bash
aiware createAdminCore X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminCoreCreateRequest** | [**AdminCoreCreateRequest**](AdminCoreCreateRequest.md) | The input for createCor |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminCoreCreateResponse**](AdminCoreCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## createAdminOrganization

This updates the config for the cluster for a given key

### Example

```bash
aiware createAdminOrganization X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminOrganizationCreateRequest** | [**AdminOrganizationCreateRequest**](AdminOrganizationCreateRequest.md) | The input for createOrganization |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOrganizationCreateResponse**](AdminOrganizationCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## createPermission

This creates a new permission

### Example

```bash
aiware createPermission X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminPermissionCreateRequest** | [**AdminPermissionCreateRequest**](AdminPermissionCreateRequest.md) | The input for createPermission |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminPermissionCreateResponse**](AdminPermissionCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## createResource

This API creates a new resource definition such as a database, nsq or redis DB.

### Example

```bash
aiware createResource X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createResourceRequest** | [**CreateResourceRequest**](CreateResourceRequest.md) | The fields for a resource definition |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**CreateResourceResponse**](CreateResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## createRole

This creates a new role

### Example

```bash
aiware createRole X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminRoleCreateRequest** | [**AdminRoleCreateRequest**](AdminRoleCreateRequest.md) | The input for createRole |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminRoleCreateResponse**](AdminRoleCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## createServerType

This creates a new server type

### Example

```bash
aiware createServerType X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createServerTypeRequest** | [**CreateServerTypeRequest**](CreateServerTypeRequest.md) | The input for createServerType |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**CreateServerTypeResponse**](CreateServerTypeResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## createServerTypeEngineRunning

This creates a new server_type_engine_running

### Example

```bash
aiware createServerTypeEngineRunning X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createServerTypeEngineRunningRequest** | [**CreateServerTypeEngineRunningRequest**](CreateServerTypeEngineRunningRequest.md) | The input for createServerTypeEngineRunning |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**CreateServerTypeEngineRunningResponse**](CreateServerTypeEngineRunningResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## createToken

This creates a new token

### Example

```bash
aiware createToken X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminTokenCreateRequest** | [**AdminTokenCreateRequest**](AdminTokenCreateRequest.md) | The input for createToken |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminTokenCreateResponse**](AdminTokenCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## createUser

This creates a new user

### Example

```bash
aiware createUser X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminUserCreateRequest** | [**AdminUserCreateRequest**](AdminUserCreateRequest.md) | The input for createUser |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUserCreateResponse**](AdminUserCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deleteApplication

This deletes an application

### Example

```bash
aiware deleteApplication ApplicationID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationID** | [**string**](.md) | ID of Application | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminApplicationDeleteResponse**](AdminApplicationDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deleteLicense

This deletes a license from aiWARE

### Example

```bash
aiware deleteLicense LicenseID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **licenseID** | **string** | License ID | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deleteResource

This deletes the specified resource

### Example

```bash
aiware deleteResource ResourceID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceID** | [**string**](.md) | ID of Resource | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deleteRole

This deletes a role

### Example

```bash
aiware deleteRole RoleID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleID** | [**string**](.md) | ID of Role | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminRoleDeleteResponse**](AdminRoleDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deleteServerType

This API deletes the specified server type

### Example

```bash
aiware deleteServerType ServerTypeID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverTypeID** | [**string**](.md) | ID of Server Type | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deleteServerTypePost

This API deletes the specified server type

### Example

```bash
aiware deleteServerTypePost ServerTypeID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverTypeID** | [**string**](.md) | ID of Server Type | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **deleteServerTypeRequest** | [**DeleteServerTypeRequest**](DeleteServerTypeRequest.md) | Engine Instance Info | [optional]

### Return type

[**AdminOperationResponse**](AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deleteServerTypeRunningEngine

This API deletes the running engine for a server type

### Example

```bash
aiware deleteServerTypeRunningEngine ServerTypeID=value EngineID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverTypeID** | [**string**](.md) | ID of Server Type | [default to null]
 **engineID** | [**string**](.md) | ID of Engine | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deleteToken

This deletes a token

### Example

```bash
aiware deleteToken TokenID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenID** | [**string**](.md) | ID of Token | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminTokenDeleteResponse**](AdminTokenDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deleteUser

This deletes a user

### Example

```bash
aiware deleteUser UserID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | [**string**](.md) | ID of User | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUserDeleteResponse**](AdminUserDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## desiredserversServerType

This API add servers to the specified server type

### Example

```bash
aiware desiredserversServerType ServerTypeID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverTypeID** | [**string**](.md) | ID of Server Type | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **desiredServersToServerTypeRequest** | [**DesiredServersToServerTypeRequest**](DesiredServersToServerTypeRequest.md) | Set Servers for Server Type | [optional]

### Return type

[**AdminOperationResponse**](AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminApplicationDetail

This provides information on the given application.

### Example

```bash
aiware getAdminApplicationDetail ApplicationID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationID** | [**string**](.md) | ID of Application | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminApplicationGetDetailResponse**](AdminApplicationGetDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminCoreDetail

This provides information on the given core.

### Example

```bash
aiware getAdminCoreDetail CoreID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coreID** | [**string**](.md) | ID of Core | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminCoreGetDetailResponse**](AdminCoreGetDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminCores

This provides a list of core systems

### Example

```bash
aiware getAdminCores X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetCoresResponse**](GetCoresResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminEngineConfigSectionKey

This provides a config section key for the engine

### Example

```bash
aiware getAdminEngineConfigSectionKey EngineID=value ConfigSection=value ConfigKey=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **engineID** | **string** | EngineID of node-red container request | [default to null]
 **configSection** | **string** | Config Section Entry | [default to null]
 **configKey** | **string** | Config Key | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminEngineConfigSectionKeyResponse**](AdminEngineConfigSectionKeyResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json, text/csv, text/html, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminOrganizationDetail

This gets organization detail by ID

### Example

```bash
aiware getAdminOrganizationDetail OrganizationID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationID** | [**string**](.md) | ID of Organization | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOrganizationGetDetailResponse**](AdminOrganizationGetDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminOrganizationTokens

This provides information on the given organization tokens.

### Example

```bash
aiware getAdminOrganizationTokens OrganizationID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationID** | [**string**](.md) | ID of Organization | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOrganizationGetTokensResponse**](AdminOrganizationGetTokensResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminOrganizations

This provides a list of organizations

### Example

```bash
aiware getAdminOrganizations X-Correlation-Id:value  offset=value  limit=value  organizationID=value  organizationName=value  orderBy=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **offset** | **integer** | the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **integer** | the number of items to return. | [optional] [default to 10]
 **organizationID** | [**string**](.md) | Filter by organizationID | [optional] [default to null]
 **organizationName** | **string** | Filter by organizationName | [optional] [default to null]
 **orderBy** | **string** | The value should be in [organizationName, organizationID, createdTime, basePriority] | [optional] [default to null]

### Return type

[**AdminOrganizationsGetResponse**](AdminOrganizationsGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminPermissionDetail

This gets permission detail by ID

### Example

```bash
aiware getAdminPermissionDetail PermissionID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permissionID** | [**string**](.md) | ID of Permission | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminPermissionDetailResponse**](AdminPermissionDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminRoleDetail

This gets role detail by ID

### Example

```bash
aiware getAdminRoleDetail RoleID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleID** | [**string**](.md) | ID of Role | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminRoleDetailResponse**](AdminRoleDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminServiceConfig

This provides all the config for the service

### Example

```bash
aiware getAdminServiceConfig ServiceID=value X-Correlation-Id:value  configKey=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceID** | [**string**](.md) | ID of the service | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **configKey** | **string** | Config Key | [optional] [default to null]

### Return type

[**AdminServiceConfigResponse**](AdminServiceConfigResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminServiceConfigSection

This provides all the config for the service

### Example

```bash
aiware getAdminServiceConfigSection ServiceID=value ConfigSection=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceID** | [**string**](.md) | ID of the service | [default to null]
 **configSection** | **string** | Config Section Entry | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminServiceConfigSectionResponse**](AdminServiceConfigSectionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminServiceConfigSectionKey

This provides a config section key for the service

### Example

```bash
aiware getAdminServiceConfigSectionKey ServiceID=value ConfigSection=value ConfigKey=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceID** | [**string**](.md) | ID of the service | [default to null]
 **configSection** | **string** | Config Section Entry | [default to null]
 **configKey** | **string** | Config Key | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminServiceConfigSectionKeyResponse**](AdminServiceConfigSectionKeyResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json, text/csv, text/html, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminServiceInstances

This lists the service instances available for a system

### Example

```bash
aiware getAdminServiceInstances X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetAdminServiceInstancesResponse**](GetAdminServiceInstancesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminStatus

This provides information on the status of the aiWARE edge

### Example

```bash
aiware getAdminStatus  format=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | [**StatusFormatEnum**](.md) | If specified, this limits the jobs or tasks to follow status | [optional] [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**EngineInstanceInfo**](EngineInstanceInfo.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json, text/csv, text/html, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminTokenDetail

Get the token info by ID

### Example

```bash
aiware getAdminTokenDetail TokenID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenID** | [**string**](.md) | ID of Token | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**TokenDetail**](TokenDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminTokenPermissions

This provides a list of all token permissions for a token by TokenID

### Example

```bash
aiware getAdminTokenPermissions TokenID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenID** | [**string**](.md) | ID of Token | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminTokenPermissionsGetResponse**](AdminTokenPermissionsGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminTokens

This provides information about all tokens.

### Example

```bash
aiware getAdminTokens X-Correlation-Id:value  offset=value  limit=value  direction=value  startCreatedTime=value  endCreatedTime=value  startExpireTime=value  endExpireTime=value  tokenID=value  organizationIDs=value  hostID=value  userID=value  engineInstanceID=value  type=value  orderBy=value  roleIDs=value  accessAllOrganization=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **offset** | **integer** | the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **integer** | the number of items to return. | [optional] [default to 10]
 **direction** | **string** | the sort order.  ASC or DESC. | [optional] [default to DESC]
 **startCreatedTime** | **integer** | The unix timestamp | [optional] [default to null]
 **endCreatedTime** | **integer** | The unix timestamp | [optional] [default to null]
 **startExpireTime** | **integer** | The unix timestamp | [optional] [default to null]
 **endExpireTime** | **integer** | The unix timestamp | [optional] [default to null]
 **tokenID** | [**string**](.md) | Filter by token IDs | [optional] [default to null]
 **organizationIDs** | [**string**](.md) | Filter by organization IDs | [optional] [default to null]
 **hostID** | [**string**](.md) | Filter by host IDs | [optional] [default to null]
 **userID** | [**string**](.md) | Filter by user IDs | [optional] [default to null]
 **engineInstanceID** | [**string**](.md) | Filter by engine instance IDs | [optional] [default to null]
 **type** | [**TokenTypeEnum**](.md) | Filter by token type | [optional] [default to null]
 **orderBy** | **string** | It should be in [createdTime, expirationTime, tokenType] | [optional] [default to null]
 **roleIDs** | [**string**](.md) | Filters by role | [optional] [default to null]
 **accessAllOrganization** | **boolean** |  | [optional] [default to null]

### Return type

[**AdminGetTokensResponse**](AdminGetTokensResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminUserDetail

This provides information on the given user.

### Example

```bash
aiware getAdminUserDetail UserID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | [**string**](.md) | ID of User | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUserGetDetailResponse**](AdminUserGetDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminUserPermissions

This provides a list of all user permissions for an user by UserID

### Example

```bash
aiware getAdminUserPermissions UserID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | [**string**](.md) | ID of User | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUserPermissionsGetResponse**](AdminUserPermissionsGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminUserTokens

This provides information on the given user.

### Example

```bash
aiware getAdminUserTokens UserID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | [**string**](.md) | ID of User | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUserGetTokensResponse**](AdminUserGetTokensResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminUsers

This provides a list of users in the system

### Example

```bash
aiware getAdminUsers X-Correlation-Id:value  offset=value  limit=value  orderBy=value  direction=value  status=value  name=value  userName=value  email=value  roleIDs=value  organizationIDs=value  accessAllOrganization=value  isSuperAdmin=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **offset** | **integer** | the number of users to skip before getting the result set | [optional] [default to null]
 **limit** | **integer** | the number of users to return. | [optional] [default to 100]
 **orderBy** | **string** | the field to sort | [optional] [default to created_date_time]
 **direction** | **string** | the sort order | [optional] [default to DESC]
 **status** | **string** | the value should be in [active, trial, inactive, deleted] | [optional] [default to null]
 **name** | **string** | Name of user | [optional] [default to null]
 **userName** | **string** | userName of user | [optional] [default to null]
 **email** | **string** | email of user | [optional] [default to null]
 **roleIDs** | [**string**](.md) | Filters by role | [optional] [default to null]
 **organizationIDs** | [**string**](.md) | Filters by internal organization ID | [optional] [default to null]
 **accessAllOrganization** | **boolean** | A user can access to all organization or not. | [optional] [default to null]
 **isSuperAdmin** | **boolean** |  | [optional] [default to null]

### Return type

[**AdminUsersGetResponse**](AdminUsersGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminUsersPermission

This provides a list of all user permissions in the system

### Example

```bash
aiware getAdminUsersPermission X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUsersPermissionsGetResponse**](AdminUsersPermissionsGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getAdminUsersRoles

This provides a list of user role in the system

### Example

```bash
aiware getAdminUsersRoles X-Correlation-Id:value  offset=value  limit=value  roleID=value  roleName=value  orderBy=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **offset** | **integer** | the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **integer** | the number of items to return. | [optional] [default to 10]
 **roleID** | [**string**](.md) | Filter by role ID | [optional] [default to null]
 **roleName** | **string** | Filter by roleName | [optional] [default to null]
 **orderBy** | **string** | The value should be in [roleName, createdTime] | [optional] [default to null]

### Return type

[**AdminUsersRolesGetResponse**](AdminUsersRolesGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getApplications

Get the list of applications deployed and available on aiWARE

### Example

```bash
aiware getApplications X-Correlation-Id:value  ApplicationStatus_Query_Optional=value  ApplicationType_Query_Optional=value  offset=value  limit=value  orderBy=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **applicationStatusQueryOptional** | [**ApplicationStatusEnum**](.md) | status | [optional] [default to null]
 **applicationTypeQueryOptional** | [**ApplicationTypeEnum**](.md) | type | [optional] [default to null]
 **offset** | **integer** | the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **integer** | the number of items to return. | [optional] [default to 10]
 **orderBy** | **string** | The value should be in [applicationName, createdTime] | [optional] [default to null]

### Return type

[**GetApplicationsResponse**](GetApplicationsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getBacklogSummary

This provides summary information on the current backlog

### Example

```bash
aiware getBacklogSummary X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetBacklogSummaryResponse**](GetBacklogSummaryResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getConfig

This provides all the config for the cluster

### Example

```bash
aiware getConfig X-Correlation-Id:value  configSection=value  configKey=value  deprecated=value  secure=value  isOverridden=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **configSection** | [**ConfigSectionEnum**](.md) | Config Section Entry | [optional] [default to null]
 **configKey** | **string** | Config Key | [optional] [default to null]
 **deprecated** | **boolean** |  | [optional] [default to null]
 **secure** | **boolean** |  | [optional] [default to null]
 **isOverridden** | **boolean** |  | [optional] [default to null]

### Return type

[**AdminConfigResponse**](AdminConfigResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getConfigSection

This provides all the config for the cluster

### Example

```bash
aiware getConfigSection ConfigSection=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configSection** | **string** | Config Section Entry | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminConfigSectionResponse**](AdminConfigSectionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getConfigSectionKey

This provides a config section key for the cluster

### Example

```bash
aiware getConfigSectionKey ConfigSection=value ConfigKey=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configSection** | **string** | Config Section Entry | [default to null]
 **configKey** | **string** | Config Key | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminConfigSectionKeyResponse**](AdminConfigSectionKeyResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json, text/csv, text/html, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getEnginesForResource

Get list of engines for resource

### Example

```bash
aiware getEnginesForResource ResourceID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceID** | [**string**](.md) | ID of Resource | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetEnginesForResourceResponse**](GetEnginesForResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getLicenseDetail

This gets detail on a license key

### Example

```bash
aiware getLicenseDetail LicenseID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **licenseID** | **string** | License ID | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**LicenseDetail**](LicenseDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getLicenses

This provides a licenses on the system

### Example

```bash
aiware getLicenses X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetLicensesResponse**](GetLicensesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getResource

Get a resource definition

### Example

```bash
aiware getResource ResourceID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceID** | [**string**](.md) | ID of Resource | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetResourceResponse**](GetResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getResources

Get the list of resources

### Example

```bash
aiware getResources X-Correlation-Id:value  engineIDs=value  resourceType=value  offset=value  limit=value  direction=value  orderBy=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **engineIDs** | **string** | Field to provide the input to get engines by Engine ID list. Separated by commas | [optional] [default to null]
 **resourceType** | **string** | Filter by resourceType | [optional] [default to null]
 **offset** | **integer** | the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **integer** | the number of items to return. | [optional] [default to 10]
 **direction** | **string** | the sort order.  ASC or DESC. | [optional] [default to DESC]
 **orderBy** | **string** | The sort column to use | [optional] [default to null]

### Return type

[**GetResourcesResponse**](GetResourcesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getResourcesForEngine

Get list of resources for engine

### Example

```bash
aiware getResourcesForEngine EngineID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **engineID** | [**string**](.md) | ID of Engine | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetResourcesForEngineResponse**](GetResourcesForEngineResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getResourcesForHost

Get list of resources for host

### Example

```bash
aiware getResourcesForHost HostID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hostID** | [**string**](.md) | ID of Host | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetResourcesForHostResponse**](GetResourcesForHostResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getResourcesForService

Get list of resources for service

### Example

```bash
aiware getResourcesForService ServiceID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceID** | [**string**](.md) | ID of the service | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetResourcesForServiceResponse**](GetResourcesForServiceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getServerType

This provides detail on the server type

### Example

```bash
aiware getServerType ServerTypeID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverTypeID** | [**string**](.md) | ID of Server Type | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetServerTypeResponse**](GetServerTypeResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getServerTypeEngineRunning

This lists the running engine with server types

### Example

```bash
aiware getServerTypeEngineRunning X-Correlation-Id:value  serverTypeID=value  engineID=value  offset=value  limit=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **serverTypeID** | **string** | Filter by serverTypeID | [optional] [default to null]
 **engineID** | **string** | Filter by engine id | [optional] [default to null]
 **offset** | **integer** | the number of records to skip before getting the result set | [optional] [default to null]
 **limit** | **integer** | the number of records to return. | [optional] [default to 100]

### Return type

[**GetServerTypeRunningEnginesResponse**](GetServerTypeRunningEnginesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getServerTypeEngineRunningDetail

This gets the detail of server type - running engine

### Example

```bash
aiware getServerTypeEngineRunningDetail ServerTypeID=value EngineID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverTypeID** | [**string**](.md) | ID of Server Type | [default to null]
 **engineID** | [**string**](.md) | ID of Engine | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetServerTypeRunningEngineDetailResponse**](GetServerTypeRunningEngineDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getServerTypes

This lists the server types available on the system

### Example

```bash
aiware getServerTypes RunMode=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runMode** | **string** | Filer by run mode | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetServerTypesResponse**](GetServerTypesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getServices

This lists the services available on the system

### Example

```bash
aiware getServices X-Correlation-Id:value  tags=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **tags** | **string** | Filter by tags | [optional] [default to null]

### Return type

[**GetAdminServicesResponse**](GetAdminServicesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## loginUser

This logs a user in if successful

### Example

```bash
aiware loginUser X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **adminUserLoginRequest** | [**AdminUserLoginRequest**](AdminUserLoginRequest.md) | This logs in the user | [optional]

### Return type

[**AdminUserLoginResponse**](AdminUserLoginResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## oauthLoginUser

This logs a user in if successful with OAuth2

### Example

```bash
aiware oauthLoginUser X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **adminUserOAuth2LoginRequest** | [**AdminUserOAuth2LoginRequest**](AdminUserOAuth2LoginRequest.md) | This logs in the user with the OAuth2 response | [optional]

### Return type

[**AdminUserLoginResponse**](AdminUserLoginResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## registerUser

This registers a new user

### Example

```bash
aiware registerUser X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminUserRegisterRequest** | [**AdminUserRegisterRequest**](AdminUserRegisterRequest.md) | The input for registerUser |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUserRegisterResponse**](AdminUserRegisterResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## removeEngineForResource

This API removes the engine to the resource

### Example

```bash
aiware removeEngineForResource ResourceID=value EngineID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceID** | [**string**](.md) | ID of Resource | [default to null]
 **engineID** | [**string**](.md) | ID of Engine | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **removeEngineForResourceRequest** | [**RemoveEngineForResourceRequest**](RemoveEngineForResourceRequest.md) | Remove Engine Mapping for Resource | [optional]

### Return type

[**RemoveEngineForResourceResponse**](RemoveEngineForResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## removeserversServerType

This API removes servers from the specified server type

### Example

```bash
aiware removeserversServerType ServerTypeID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverTypeID** | [**string**](.md) | ID of Server Type | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **removeServersToServerTypeRequest** | [**RemoveServersToServerTypeRequest**](RemoveServersToServerTypeRequest.md) | Update Server Type | [optional]

### Return type

[**AdminOperationResponse**](AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## resetAllocTable

This resets the alloc table

### Example

```bash
aiware resetAllocTable X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateApplication

This updates an application

### Example

```bash
aiware updateApplication ApplicationID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationID** | [**string**](.md) | ID of Application | [default to null]
 **adminApplicationUpdateRequest** | [**AdminApplicationUpdateRequest**](AdminApplicationUpdateRequest.md) | The input for updateApplication |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminApplicationUpdateResponse**](AdminApplicationUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateConfigAll

This gets the config for the cluster

### Example

```bash
aiware updateConfigAll X-Correlation-Id:value  configSection=value  configKey=value  deprecated=value  secure=value  isOverridden=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminConfigUpdateRequest** | [**AdminConfigUpdateRequest**](AdminConfigUpdateRequest.md) | Config Update for core |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **configSection** | [**ConfigSectionEnum**](.md) | Config Section Entry | [optional] [default to null]
 **configKey** | **string** | Config Key | [optional] [default to null]
 **deprecated** | **boolean** |  | [optional] [default to null]
 **secure** | **boolean** |  | [optional] [default to null]
 **isOverridden** | **boolean** |  | [optional] [default to null]

### Return type

[**AdminConfigUpdateResponse**](AdminConfigUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateConfigSection

This gets the config for the cluster

### Example

```bash
aiware updateConfigSection ConfigSection=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configSection** | **string** | Config Section Entry | [default to null]
 **adminConfigUpdateSectionRequest** | [**AdminConfigUpdateSectionRequest**](AdminConfigUpdateSectionRequest.md) | The input for createConfigSection |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminConfigUpdateSectionResponse**](AdminConfigUpdateSectionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/csv, text/html, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateConfigSectionKey

This updates the config for the cluster for a given key

### Example

```bash
aiware updateConfigSectionKey ConfigSection=value ConfigKey=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configSection** | **string** | Config Section Entry | [default to null]
 **configKey** | **string** | Config Key | [default to null]
 **adminConfigUpdateSectionKeyRequest** | [**AdminConfigUpdateSectionKeyRequest**](AdminConfigUpdateSectionKeyRequest.md) | The input for createSectionKey |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminConfigUpdateSectionKeyResponse**](AdminConfigUpdateSectionKeyResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/csv, text/html, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateEnginesForResource

This API updates the specified server type-running engine

### Example

```bash
aiware updateEnginesForResource ResourceID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceID** | [**string**](.md) | ID of Resource | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **updateEnginesForResourceRequest** | [**UpdateEnginesForResourceRequest**](UpdateEnginesForResourceRequest.md) | Update Engine Mapping for Resource | [optional]

### Return type

[**UpdateEnginesForResourceResponse**](UpdateEnginesForResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateOrganization

This updates a organization

### Example

```bash
aiware updateOrganization OrganizationID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationID** | [**string**](.md) | ID of Organization | [default to null]
 **adminOrganizationUpdateRequest** | [**AdminOrganizationUpdateRequest**](AdminOrganizationUpdateRequest.md) | The input for updateOrganization |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOrganizationUpdateResponse**](AdminOrganizationUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updatePermission

This updates a permission

### Example

```bash
aiware updatePermission PermissionID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permissionID** | [**string**](.md) | ID of Permission | [default to null]
 **adminPermissionUpdateRequest** | [**AdminPermissionUpdateRequest**](AdminPermissionUpdateRequest.md) | The input for updatePermission |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminPermissionUpdateResponse**](AdminPermissionUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateResource

This API updates the specified resource

### Example

```bash
aiware updateResource ResourceID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceID** | [**string**](.md) | ID of Resource | [default to null]
 **updateResourceRequest** | [**UpdateResourceRequest**](UpdateResourceRequest.md) | Update Resource |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**UpdateResourceResponse**](UpdateResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateResourceState

This API updates the state of the specified resource

### Example

```bash
aiware updateResourceState ResourceID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceID** | [**string**](.md) | ID of Resource | [default to null]
 **updateResourceStateRequest** | [**UpdateResourceStateRequest**](UpdateResourceStateRequest.md) | Update Resource State |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

(empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateRole

This updates a role

### Example

```bash
aiware updateRole RoleID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleID** | [**string**](.md) | ID of Role | [default to null]
 **adminRoleUpdateRequest** | [**AdminRoleUpdateRequest**](AdminRoleUpdateRequest.md) | The input for updateRole |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminRoleUpdateResponse**](AdminRoleUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateServerType

This API updates the specified server type

### Example

```bash
aiware updateServerType ServerTypeID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverTypeID** | [**string**](.md) | ID of Server Type | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **serverTypeDetail** | [**ServerTypeDetail**](ServerTypeDetail.md) | Update Server Type | [optional]

### Return type

[**UpdateServerTypeResponse**](UpdateServerTypeResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateServerTypeEngineRunning

This API updates the specified server type-running engine

### Example

```bash
aiware updateServerTypeEngineRunning ServerTypeID=value EngineID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverTypeID** | [**string**](.md) | ID of Server Type | [default to null]
 **engineID** | [**string**](.md) | ID of Engine | [default to null]
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **updateServerTypeEngineRunningRequest** | [**UpdateServerTypeEngineRunningRequest**](UpdateServerTypeEngineRunningRequest.md) | Update Server Type - Running Engine | [optional]

### Return type

[**UpdateServerTypeEngineRunningResponse**](UpdateServerTypeEngineRunningResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateToken

This updates a token

### Example

```bash
aiware updateToken TokenID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenID** | [**string**](.md) | ID of Token | [default to null]
 **adminTokenUpdateRequest** | [**AdminTokenUpdateRequest**](AdminTokenUpdateRequest.md) | The input for updateToken |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminTokenUpdateResponse**](AdminTokenUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## updateUser

This updates a user

### Example

```bash
aiware updateUser UserID=value X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | [**string**](.md) | ID of User | [default to null]
 **adminUserUpdateRequest** | [**AdminUserUpdateRequest**](AdminUserUpdateRequest.md) | The input for updateUser |
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUserUpdateResponse**](AdminUserUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## userPasswordForgot

This api will help users to reset their password when they forgot

### Example

```bash
aiware userPasswordForgot X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **adminUserPasswordForgotRequest** | [**AdminUserPasswordForgotRequest**](AdminUserPasswordForgotRequest.md) | Needs to provide the info to reset user's password when they forgot | [optional]

### Return type

[**AdminUserPasswordForgotResponse**](AdminUserPasswordForgotResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## userPasswordReset

Helps users to reset their password

### Example

```bash
aiware userPasswordReset X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **adminUserPasswordResetRequest** | [**AdminUserPasswordResetRequest**](AdminUserPasswordResetRequest.md) | Needs to provide the info to reset password | [optional]

### Return type

[**AdminUserPasswordResetResponse**](AdminUserPasswordResetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## userPasswordUpdate

This api will help users to update their password

### Example

```bash
aiware userPasswordUpdate X-Correlation-Id:value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationId** | **string** | Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **adminUserPasswordUpdateRequest** | [**AdminUserPasswordUpdateRequest**](AdminUserPasswordUpdateRequest.md) | Users provide the password info to change | [optional]

### Return type

[**AdminUserPasswordUpdateResponse**](AdminUserPasswordUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

