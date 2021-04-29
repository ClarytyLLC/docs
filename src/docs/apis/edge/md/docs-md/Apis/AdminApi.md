# AdminApi

All URIs are relative to *https://api.aiware.com/edge/v1*

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
[**createService**](AdminApi.md#createService) | **POST** /admin/service/create | This API creates a new service definition.
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
[**getAdminApplicationDetail**](AdminApi.md#getAdminApplicationDetail) | **GET** /admin/application/{ApplicationID}/detail | This provides information on the given application.
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
[**getAdminServiceInstancesByServiceID**](AdminApi.md#getAdminServiceInstancesByServiceID) | **GET** /admin/service/{ServiceID}/instances | This lists the service instances available by service ID
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
[**getMappingsForResource**](AdminApi.md#getMappingsForResource) | **GET** /admin/resource/{ResourceID}/mappings | Get list of mappings for resource
[**getResource**](AdminApi.md#getResource) | **GET** /admin/resource/{ResourceID} | Get a resource definition
[**getResources**](AdminApi.md#getResources) | **GET** /admin/resources | Get the list of resources
[**getResourcesForEngine**](AdminApi.md#getResourcesForEngine) | **GET** /admin/engine/{EngineID}/resources | Get list of resources for engine
[**getResourcesForHost**](AdminApi.md#getResourcesForHost) | **GET** /admin/host/{HostID}/resources | Get list of resources for host
[**getResourcesForService**](AdminApi.md#getResourcesForService) | **GET** /admin/service/{ServiceID}/resources | Get list of resources for service
[**getServerType**](AdminApi.md#getServerType) | **GET** /admin/server_type/{ServerTypeID}/detail | This provides detail on the server type
[**getServerTypeEngineRunning**](AdminApi.md#getServerTypeEngineRunning) | **GET** /admin/server_types/running_engines | This lists the running engine with server types
[**getServerTypeEngineRunningDetail**](AdminApi.md#getServerTypeEngineRunningDetail) | **GET** /admin/server_type/{ServerTypeID}/engine/{EngineID}/detail | This gets the detail of server type - running engine
[**getServerTypes**](AdminApi.md#getServerTypes) | **GET** /admin/server_types | This lists the server types available on the system
[**getService**](AdminApi.md#getService) | **GET** /admin/service/{ServiceID}/detail | This gets the service detail
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
[**updateResourceMappingState**](AdminApi.md#updateResourceMappingState) | **POST** /admin/resource/{ResourceID}/mapping/{ResourceMappingID}/updatestate | This API updates the state of the specified resource mapping state
[**updateResourceState**](AdminApi.md#updateResourceState) | **POST** /admin/resource/{ResourceID}/updatestate | This API updates the state of the specified resource
[**updateRole**](AdminApi.md#updateRole) | **POST** /admin/users/role/{RoleID}/update | This updates a role
[**updateServerType**](AdminApi.md#updateServerType) | **POST** /admin/server_type/{ServerTypeID}/update | This API updates the specified server type
[**updateServerTypeEngineRunning**](AdminApi.md#updateServerTypeEngineRunning) | **POST** /admin/server_type/{ServerTypeID}/engine/{EngineID}/update | This API updates the specified server type-running engine
[**updateService**](AdminApi.md#updateService) | **POST** /admin/service/{ServiceID}/update | This API updates a service.
[**updateToken**](AdminApi.md#updateToken) | **POST** /admin/token/{TokenID}/update | This updates a token
[**updateUser**](AdminApi.md#updateUser) | **POST** /admin/user/{UserID}/update | This updates a user
[**userPasswordForgot**](AdminApi.md#userPasswordForgot) | **POST** /admin/users/password/forgot | This api will help users to reset their password when they forgot
[**userPasswordReset**](AdminApi.md#userPasswordReset) | **POST** /admin/users/password/reset | Helps users to reset their password
[**userPasswordUpdate**](AdminApi.md#userPasswordUpdate) | **POST** /admin/users/password/update | This api will help users to update their password


<a name="addEngineToResource"></a>
# **addEngineToResource**
> AddEngineForResourceResponse addEngineToResource(ResourceID, X-Correlation-Id, AddEngineForResourceRequest)

This API adds the engine to the resource

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ResourceID** | [**UUID**](../Models/.md)| ID of Resource | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **AddEngineForResourceRequest** | [**AddEngineForResourceRequest**](../Models/AddEngineForResourceRequest.md)| Add Engine Mapping for Resource | [optional]

### Return type

[**AddEngineForResourceResponse**](../Models/AddEngineForResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="addServiceToResource"></a>
# **addServiceToResource**
> AddServiceForResourceResponse addServiceToResource(ResourceID, X-Correlation-Id, AddServiceForResourceRequest)

This API adds the service to the resource

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ResourceID** | [**UUID**](../Models/.md)| ID of Resource | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **AddServiceForResourceRequest** | [**AddServiceForResourceRequest**](../Models/AddServiceForResourceRequest.md)| Add Service Mapping for Resource | [optional]

### Return type

[**AddServiceForResourceResponse**](../Models/AddServiceForResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="addserversServerType"></a>
# **addserversServerType**
> AdminOperationResponse addserversServerType(ServerTypeID, X-Correlation-Id, AddServersToServerTypeRequest)

This API add servers to the specified server type

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServerTypeID** | [**UUID**](../Models/.md)| ID of Server Type | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **AddServersToServerTypeRequest** | [**AddServersToServerTypeRequest**](../Models/AddServersToServerTypeRequest.md)| Add Servers Server Type | [optional]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="adminTerminateCluster"></a>
# **adminTerminateCluster**
> adminTerminateCluster(X-Correlation-Id, AdminOperationRequest)

This terminates the cluster

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **AdminOperationRequest** | [**AdminOperationRequest**](../Models/AdminOperationRequest.md)| ClusterID | [optional]

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="applyLicense"></a>
# **applyLicense**
> LicenseDetail applyLicense(X-Correlation-Id, CreateLicenseDetail)

This applies a license to aiWARE

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **CreateLicenseDetail** | [**CreateLicenseDetail**](../Models/CreateLicenseDetail.md)|  | [optional]

### Return type

[**LicenseDetail**](../Models/LicenseDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="checkAuth"></a>
# **checkAuth**
> AdminAuthResponse checkAuth(AdminAuthRequest, X-Correlation-Id)

This check auth for a token

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AdminAuthRequest** | [**AdminAuthRequest**](../Models/AdminAuthRequest.md)| The input for check auth |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminAuthResponse**](../Models/AdminAuthResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="clearBacklog"></a>
# **clearBacklog**
> AdminCoreCreateResponse clearBacklog(X-Correlation-Id, status, engineID, modifiedBefore, modifiedAfter, CreatedBefore, CreatedAfter)

This clears some or all of the currently queued tasks

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **status** | [**EngineStatusEnum**](../Models/.md)| Field to match the current status | [optional] [default to null] [enum: active, terminated]
 **engineID** | **String**| Filter by engine id | [optional] [default to null]
 **modifiedBefore** | **Long**| Filter by items modified before expressed as timestamp | [optional] [default to null]
 **modifiedAfter** | **Long**| Filter by items modified after expressed as timestamp | [optional] [default to null]
 **CreatedBefore** | **Long**| Filter items where created date is before this date | [optional] [default to null]
 **CreatedAfter** | **Long**| Filter items where created date is after this date | [optional] [default to null]

### Return type

[**AdminCoreCreateResponse**](../Models/AdminCoreCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createAdminApplication"></a>
# **createAdminApplication**
> AdminApplicationCreateResponse createAdminApplication(AdminApplicationCreateRequest, X-Correlation-Id)

This creates a new application

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AdminApplicationCreateRequest** | [**AdminApplicationCreateRequest**](../Models/AdminApplicationCreateRequest.md)| The input for createApplication |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminApplicationCreateResponse**](../Models/AdminApplicationCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createAdminCore"></a>
# **createAdminCore**
> AdminCoreCreateResponse createAdminCore(AdminCoreCreateRequest, X-Correlation-Id)

This creates a new core

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AdminCoreCreateRequest** | [**AdminCoreCreateRequest**](../Models/AdminCoreCreateRequest.md)| The input for createCor |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminCoreCreateResponse**](../Models/AdminCoreCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createAdminOrganization"></a>
# **createAdminOrganization**
> AdminOrganizationCreateResponse createAdminOrganization(AdminOrganizationCreateRequest, X-Correlation-Id)

This updates the config for the cluster for a given key

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AdminOrganizationCreateRequest** | [**AdminOrganizationCreateRequest**](../Models/AdminOrganizationCreateRequest.md)| The input for createOrganization |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOrganizationCreateResponse**](../Models/AdminOrganizationCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createPermission"></a>
# **createPermission**
> AdminPermissionCreateResponse createPermission(AdminPermissionCreateRequest, X-Correlation-Id)

This creates a new permission

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AdminPermissionCreateRequest** | [**AdminPermissionCreateRequest**](../Models/AdminPermissionCreateRequest.md)| The input for createPermission |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminPermissionCreateResponse**](../Models/AdminPermissionCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createResource"></a>
# **createResource**
> CreateResourceResponse createResource(CreateResourceRequest, X-Correlation-Id, useDefaults)

This API creates a new resource definition such as a database, nsq or redis DB.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateResourceRequest** | [**CreateResourceRequest**](../Models/CreateResourceRequest.md)| The fields for a resource definition |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **useDefaults** | **Boolean**| Indicates if default values should be applied | [optional] [default to null]

### Return type

[**CreateResourceResponse**](../Models/CreateResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createRole"></a>
# **createRole**
> AdminRoleCreateResponse createRole(AdminRoleCreateRequest, X-Correlation-Id)

This creates a new role

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AdminRoleCreateRequest** | [**AdminRoleCreateRequest**](../Models/AdminRoleCreateRequest.md)| The input for createRole |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminRoleCreateResponse**](../Models/AdminRoleCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createServerType"></a>
# **createServerType**
> CreateServerTypeResponse createServerType(CreateServerTypeRequest, X-Correlation-Id)

This creates a new server type

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateServerTypeRequest** | [**CreateServerTypeRequest**](../Models/CreateServerTypeRequest.md)| The input for createServerType |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**CreateServerTypeResponse**](../Models/CreateServerTypeResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createServerTypeEngineRunning"></a>
# **createServerTypeEngineRunning**
> CreateServerTypeEngineRunningResponse createServerTypeEngineRunning(CreateServerTypeEngineRunningRequest, X-Correlation-Id)

This creates a new server_type_engine_running

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateServerTypeEngineRunningRequest** | [**CreateServerTypeEngineRunningRequest**](../Models/CreateServerTypeEngineRunningRequest.md)| The input for createServerTypeEngineRunning |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**CreateServerTypeEngineRunningResponse**](../Models/CreateServerTypeEngineRunningResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createService"></a>
# **createService**
> CreateServiceResponse createService(CreateServiceRequest, X-Correlation-Id)

This API creates a new service definition.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateServiceRequest** | [**CreateServiceRequest**](../Models/CreateServiceRequest.md)| The fields for a service definition |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**CreateServiceResponse**](../Models/CreateServiceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createToken"></a>
# **createToken**
> AdminTokenCreateResponse createToken(AdminTokenCreateRequest, X-Correlation-Id)

This creates a new token

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AdminTokenCreateRequest** | [**AdminTokenCreateRequest**](../Models/AdminTokenCreateRequest.md)| The input for createToken |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminTokenCreateResponse**](../Models/AdminTokenCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createUser"></a>
# **createUser**
> AdminUserCreateResponse createUser(AdminUserCreateRequest, X-Correlation-Id)

This creates a new user

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AdminUserCreateRequest** | [**AdminUserCreateRequest**](../Models/AdminUserCreateRequest.md)| The input for createUser |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUserCreateResponse**](../Models/AdminUserCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteApplication"></a>
# **deleteApplication**
> AdminApplicationDeleteResponse deleteApplication(ApplicationID, X-Correlation-Id)

This deletes an application

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ApplicationID** | [**UUID**](../Models/.md)| ID of Application | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminApplicationDeleteResponse**](../Models/AdminApplicationDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteLicense"></a>
# **deleteLicense**
> AdminOperationResponse deleteLicense(LicenseID, X-Correlation-Id)

This deletes a license from aiWARE

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **LicenseID** | **String**| License ID | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteResource"></a>
# **deleteResource**
> AdminOperationResponse deleteResource(ResourceID, X-Correlation-Id)

This deletes the specified resource

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ResourceID** | [**UUID**](../Models/.md)| ID of Resource | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteRole"></a>
# **deleteRole**
> AdminRoleDeleteResponse deleteRole(RoleID, X-Correlation-Id)

This deletes a role

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RoleID** | [**UUID**](../Models/.md)| ID of Role | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminRoleDeleteResponse**](../Models/AdminRoleDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteServerType"></a>
# **deleteServerType**
> AdminOperationResponse deleteServerType(ServerTypeID, X-Correlation-Id)

This API deletes the specified server type

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServerTypeID** | [**UUID**](../Models/.md)| ID of Server Type | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteServerTypePost"></a>
# **deleteServerTypePost**
> AdminOperationResponse deleteServerTypePost(ServerTypeID, X-Correlation-Id, DeleteServerTypeRequest)

This API deletes the specified server type

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServerTypeID** | [**UUID**](../Models/.md)| ID of Server Type | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **DeleteServerTypeRequest** | [**DeleteServerTypeRequest**](../Models/DeleteServerTypeRequest.md)| Engine Instance Info | [optional]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteServerTypeRunningEngine"></a>
# **deleteServerTypeRunningEngine**
> AdminOperationResponse deleteServerTypeRunningEngine(ServerTypeID, EngineID, X-Correlation-Id)

This API deletes the running engine for a server type

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServerTypeID** | [**UUID**](../Models/.md)| ID of Server Type | [default to null]
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteToken"></a>
# **deleteToken**
> AdminTokenDeleteResponse deleteToken(TokenID, X-Correlation-Id)

This deletes a token

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TokenID** | [**UUID**](../Models/.md)| ID of Token | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminTokenDeleteResponse**](../Models/AdminTokenDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteUser"></a>
# **deleteUser**
> AdminUserDeleteResponse deleteUser(UserID, X-Correlation-Id)

This deletes a user

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UserID** | [**UUID**](../Models/.md)| ID of User | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUserDeleteResponse**](../Models/AdminUserDeleteResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="desiredserversServerType"></a>
# **desiredserversServerType**
> AdminOperationResponse desiredserversServerType(ServerTypeID, X-Correlation-Id, DesiredServersToServerTypeRequest)

This API add servers to the specified server type

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServerTypeID** | [**UUID**](../Models/.md)| ID of Server Type | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **DesiredServersToServerTypeRequest** | [**DesiredServersToServerTypeRequest**](../Models/DesiredServersToServerTypeRequest.md)| Set Servers for Server Type | [optional]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getAdminApplicationDetail"></a>
# **getAdminApplicationDetail**
> AdminApplicationGetDetailResponse getAdminApplicationDetail(ApplicationID, X-Correlation-Id)

This provides information on the given application.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ApplicationID** | [**UUID**](../Models/.md)| ID of Application | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminApplicationGetDetailResponse**](../Models/AdminApplicationGetDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminCoreDetail"></a>
# **getAdminCoreDetail**
> AdminCoreGetDetailResponse getAdminCoreDetail(CoreID, X-Correlation-Id)

This provides information on the given core.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CoreID** | [**UUID**](../Models/.md)| ID of Core | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminCoreGetDetailResponse**](../Models/AdminCoreGetDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminCores"></a>
# **getAdminCores**
> GetCoresResponse getAdminCores(X-Correlation-Id)

This provides a list of core systems

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetCoresResponse**](../Models/GetCoresResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminEngineConfigSectionKey"></a>
# **getAdminEngineConfigSectionKey**
> AdminEngineConfigSectionKeyResponse getAdminEngineConfigSectionKey(EngineID, ConfigSection, ConfigKey, X-Correlation-Id)

This provides a config section key for the engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | **String**| EngineID of node-red container request | [default to null]
 **ConfigSection** | **String**| Config Section Entry | [default to null]
 **ConfigKey** | **String**| Config Key | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminEngineConfigSectionKeyResponse**](../Models/AdminEngineConfigSectionKeyResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv, text/html, text/plain

<a name="getAdminOrganizationDetail"></a>
# **getAdminOrganizationDetail**
> AdminOrganizationGetDetailResponse getAdminOrganizationDetail(OrganizationID, X-Correlation-Id)

This gets organization detail by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **OrganizationID** | [**UUID**](../Models/.md)| ID of Organization | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOrganizationGetDetailResponse**](../Models/AdminOrganizationGetDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminOrganizationTokens"></a>
# **getAdminOrganizationTokens**
> AdminOrganizationGetTokensResponse getAdminOrganizationTokens(OrganizationID, X-Correlation-Id)

This provides information on the given organization tokens.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **OrganizationID** | [**UUID**](../Models/.md)| ID of Organization | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOrganizationGetTokensResponse**](../Models/AdminOrganizationGetTokensResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminOrganizations"></a>
# **getAdminOrganizations**
> AdminOrganizationsGetResponse getAdminOrganizations(X-Correlation-Id, offset, limit, organizationID, organizationName, orderBy, direction, startTime, endTime)

This provides a list of organizations

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **organizationID** | [**UUID**](../Models/.md)| Filter by organizationID | [optional] [default to null]
 **organizationName** | **String**| Filter by organizationName | [optional] [default to null]
 **orderBy** | **String**| The value should be in [organizationName, organizationID, createdTime, basePriority, failed, complete] | [optional] [default to null]
 **direction** | **String**| DESC/ ASC | [optional] [default to null]
 **startTime** | **String**| Filter by jobStatusCount with startTime | [optional] [default to null]
 **endTime** | **String**| Filter by jobStatusCount with endTime | [optional] [default to null]

### Return type

[**AdminOrganizationsGetResponse**](../Models/AdminOrganizationsGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminPermissionDetail"></a>
# **getAdminPermissionDetail**
> AdminPermissionDetailResponse getAdminPermissionDetail(PermissionID, X-Correlation-Id)

This gets permission detail by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **PermissionID** | [**UUID**](../Models/.md)| ID of Permission | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminPermissionDetailResponse**](../Models/AdminPermissionDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminRoleDetail"></a>
# **getAdminRoleDetail**
> AdminRoleDetailResponse getAdminRoleDetail(RoleID, X-Correlation-Id)

This gets role detail by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RoleID** | [**UUID**](../Models/.md)| ID of Role | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminRoleDetailResponse**](../Models/AdminRoleDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminServiceConfig"></a>
# **getAdminServiceConfig**
> AdminServiceConfigResponse getAdminServiceConfig(ServiceID, X-Correlation-Id, configKey)

This provides all the config for the service

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServiceID** | [**UUID**](../Models/.md)| ID of the service | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **configKey** | **String**| Config Key | [optional] [default to null]

### Return type

[**AdminServiceConfigResponse**](../Models/AdminServiceConfigResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminServiceConfigSection"></a>
# **getAdminServiceConfigSection**
> AdminServiceConfigSectionResponse getAdminServiceConfigSection(ServiceID, ConfigSection, X-Correlation-Id)

This provides all the config for the service

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServiceID** | [**UUID**](../Models/.md)| ID of the service | [default to null]
 **ConfigSection** | **String**| Config Section Entry | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminServiceConfigSectionResponse**](../Models/AdminServiceConfigSectionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminServiceConfigSectionKey"></a>
# **getAdminServiceConfigSectionKey**
> AdminServiceConfigSectionKeyResponse getAdminServiceConfigSectionKey(ServiceID, ConfigSection, ConfigKey, X-Correlation-Id)

This provides a config section key for the service

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServiceID** | [**UUID**](../Models/.md)| ID of the service | [default to null]
 **ConfigSection** | **String**| Config Section Entry | [default to null]
 **ConfigKey** | **String**| Config Key | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminServiceConfigSectionKeyResponse**](../Models/AdminServiceConfigSectionKeyResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv, text/html, text/plain

<a name="getAdminServiceInstances"></a>
# **getAdminServiceInstances**
> GetAdminServiceInstancesResponse getAdminServiceInstances(X-Correlation-Id, serviceID, serviceName, offset, limit, isActive)

This lists the service instances available for a system

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **serviceID** | **String**| service ID | [optional] [default to null]
 **serviceName** | **String**| service name | [optional] [default to null]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **isActive** | **String**| Filter by instance status | [optional] [default to null]

### Return type

[**GetAdminServiceInstancesResponse**](../Models/GetAdminServiceInstancesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminServiceInstancesByServiceID"></a>
# **getAdminServiceInstancesByServiceID**
> GetAdminServiceInstancesByServiceResponse getAdminServiceInstancesByServiceID(ServiceID, X-Correlation-Id, offset, limit, isActive)

This lists the service instances available by service ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServiceID** | [**UUID**](../Models/.md)| ID of the service | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **isActive** | **String**| Filter by instance status | [optional] [default to null]

### Return type

[**GetAdminServiceInstancesByServiceResponse**](../Models/GetAdminServiceInstancesByServiceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminStatus"></a>
# **getAdminStatus**
> EngineInstanceInfo getAdminStatus(format, X-Correlation-Id)

This provides information on the status of the aiWARE edge

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | [**StatusFormatEnum**](../Models/.md)| If specified, this limits the jobs or tasks to follow status | [optional] [default to null] [enum: json, html, txt, csv]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**EngineInstanceInfo**](../Models/EngineInstanceInfo.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv, text/html, text/plain

<a name="getAdminTokenDetail"></a>
# **getAdminTokenDetail**
> TokenDetail getAdminTokenDetail(TokenID, X-Correlation-Id)

Get the token info by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TokenID** | [**UUID**](../Models/.md)| ID of Token | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**TokenDetail**](../Models/TokenDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminTokenPermissions"></a>
# **getAdminTokenPermissions**
> AdminTokenPermissionsGetResponse getAdminTokenPermissions(TokenID, X-Correlation-Id)

This provides a list of all token permissions for a token by TokenID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TokenID** | [**UUID**](../Models/.md)| ID of Token | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminTokenPermissionsGetResponse**](../Models/AdminTokenPermissionsGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminTokens"></a>
# **getAdminTokens**
> AdminGetTokensResponse getAdminTokens(X-Correlation-Id, offset, limit, direction, startCreatedTime, endCreatedTime, startExpireTime, endExpireTime, tokenID, organizationIDs, hostID, userID, engineInstanceID, type, orderBy, roleIDs, accessAllOrganization)

This provides information about all tokens.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **direction** | **String**| the sort order.  ASC or DESC. | [optional] [default to DESC]
 **startCreatedTime** | **Long**| The unix timestamp | [optional] [default to null]
 **endCreatedTime** | **Long**| The unix timestamp | [optional] [default to null]
 **startExpireTime** | **Long**| The unix timestamp | [optional] [default to null]
 **endExpireTime** | **Long**| The unix timestamp | [optional] [default to null]
 **tokenID** | [**UUID**](../Models/.md)| Filter by token IDs | [optional] [default to null]
 **organizationIDs** | [**UUID**](../Models/.md)| Filter by organization IDs | [optional] [default to null]
 **hostID** | [**UUID**](../Models/.md)| Filter by host IDs | [optional] [default to null]
 **userID** | [**UUID**](../Models/.md)| Filter by user IDs | [optional] [default to null]
 **engineInstanceID** | [**UUID**](../Models/.md)| Filter by engine instance IDs | [optional] [default to null]
 **type** | [**TokenTypeEnum**](../Models/.md)| Filter by token type | [optional] [default to null] [enum: engine_instance, host, api, user]
 **orderBy** | **String**| It should be in [createdTime, expirationTime, tokenType] | [optional] [default to null]
 **roleIDs** | [**UUID**](../Models/.md)| Filters by role | [optional] [default to null]
 **accessAllOrganization** | **Boolean**|  | [optional] [default to null]

### Return type

[**AdminGetTokensResponse**](../Models/AdminGetTokensResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminUserDetail"></a>
# **getAdminUserDetail**
> AdminUserGetDetailResponse getAdminUserDetail(UserID, X-Correlation-Id)

This provides information on the given user.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UserID** | [**UUID**](../Models/.md)| ID of User | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUserGetDetailResponse**](../Models/AdminUserGetDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminUserPermissions"></a>
# **getAdminUserPermissions**
> AdminUserPermissionsGetResponse getAdminUserPermissions(UserID, X-Correlation-Id)

This provides a list of all user permissions for an user by UserID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UserID** | [**UUID**](../Models/.md)| ID of User | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUserPermissionsGetResponse**](../Models/AdminUserPermissionsGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminUserTokens"></a>
# **getAdminUserTokens**
> AdminUserGetTokensResponse getAdminUserTokens(UserID, X-Correlation-Id)

This provides information on the given user.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UserID** | [**UUID**](../Models/.md)| ID of User | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUserGetTokensResponse**](../Models/AdminUserGetTokensResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminUsers"></a>
# **getAdminUsers**
> AdminUsersGetResponse getAdminUsers(X-Correlation-Id, offset, limit, orderBy, direction, status, name, userName, email, roleIDs, organizationIDs, accessAllOrganization, isSuperAdmin)

This provides a list of users in the system

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **offset** | **Integer**| the number of users to skip before getting the result set | [optional] [default to null]
 **limit** | **Integer**| the number of users to return. | [optional] [default to 100]
 **orderBy** | **String**| the field to sort | [optional] [default to created_date_time]
 **direction** | **String**| the sort order | [optional] [default to DESC]
 **status** | **String**| the value should be in [active, trial, inactive, deleted] | [optional] [default to null]
 **name** | **String**| Name of user | [optional] [default to null]
 **userName** | **String**| userName of user | [optional] [default to null]
 **email** | **String**| email of user | [optional] [default to null]
 **roleIDs** | [**UUID**](../Models/.md)| Filters by role | [optional] [default to null]
 **organizationIDs** | [**UUID**](../Models/.md)| Filters by internal organization ID | [optional] [default to null]
 **accessAllOrganization** | **Boolean**| A user can access to all organization or not. | [optional] [default to null]
 **isSuperAdmin** | **Boolean**|  | [optional] [default to null]

### Return type

[**AdminUsersGetResponse**](../Models/AdminUsersGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminUsersPermission"></a>
# **getAdminUsersPermission**
> AdminUsersPermissionsGetResponse getAdminUsersPermission(X-Correlation-Id)

This provides a list of all user permissions in the system

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUsersPermissionsGetResponse**](../Models/AdminUsersPermissionsGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAdminUsersRoles"></a>
# **getAdminUsersRoles**
> AdminUsersRolesGetResponse getAdminUsersRoles(X-Correlation-Id, offset, limit, roleID, roleName, orderBy)

This provides a list of user role in the system

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **roleID** | [**UUID**](../Models/.md)| Filter by role ID | [optional] [default to null]
 **roleName** | **String**| Filter by roleName | [optional] [default to null]
 **orderBy** | **String**| The value should be in [roleName, createdTime] | [optional] [default to null]

### Return type

[**AdminUsersRolesGetResponse**](../Models/AdminUsersRolesGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getApplications"></a>
# **getApplications**
> GetApplicationsResponse getApplications(X-Correlation-Id, ApplicationStatus\_Query\_Optional, ApplicationType\_Query\_Optional, offset, limit, internalApplicationID, applicationID, orderBy)

Get the list of applications deployed and available on aiWARE

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **ApplicationStatus\_Query\_Optional** | [**ApplicationStatusEnum**](../Models/.md)| status | [optional] [default to null] [enum: active, approved, deleted, disabled, draft, pending, rejected]
 **ApplicationType\_Query\_Optional** | [**ApplicationTypeEnum**](../Models/.md)| type | [optional] [default to null] [enum: queue_service, http_service]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **internalApplicationID** | [**UUID**](../Models/.md)| Internal ID of Application | [optional] [default to null]
 **applicationID** | [**UUID**](../Models/.md)| ID of Application | [optional] [default to null]
 **orderBy** | **String**| The value should be in [applicationName, createdTime] | [optional] [default to null]

### Return type

[**GetApplicationsResponse**](../Models/GetApplicationsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getBacklogSummary"></a>
# **getBacklogSummary**
> GetBacklogSummaryResponse getBacklogSummary(X-Correlation-Id)

This provides summary information on the current backlog

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetBacklogSummaryResponse**](../Models/GetBacklogSummaryResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getConfig"></a>
# **getConfig**
> AdminConfigResponse getConfig(X-Correlation-Id, configSection, configKey, deprecated, secure, isOverridden)

This provides all the config for the cluster

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **configSection** | [**ConfigSectionEnum**](../Models/.md)| Config Section Entry | [optional] [default to null] [enum: admin, controller, core, db, engine, registry, nfs, prometheus, api, app, eventing, ceph]
 **configKey** | **String**| Config Key | [optional] [default to null]
 **deprecated** | **Boolean**|  | [optional] [default to null]
 **secure** | **Boolean**|  | [optional] [default to null]
 **isOverridden** | **Boolean**|  | [optional] [default to null]

### Return type

[**AdminConfigResponse**](../Models/AdminConfigResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getConfigSection"></a>
# **getConfigSection**
> AdminConfigSectionResponse getConfigSection(ConfigSection, X-Correlation-Id)

This provides all the config for the cluster

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ConfigSection** | **String**| Config Section Entry | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminConfigSectionResponse**](../Models/AdminConfigSectionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getConfigSectionKey"></a>
# **getConfigSectionKey**
> AdminConfigSectionKeyResponse getConfigSectionKey(ConfigSection, ConfigKey, X-Correlation-Id)

This provides a config section key for the cluster

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ConfigSection** | **String**| Config Section Entry | [default to null]
 **ConfigKey** | **String**| Config Key | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminConfigSectionKeyResponse**](../Models/AdminConfigSectionKeyResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv, text/html, text/plain

<a name="getEnginesForResource"></a>
# **getEnginesForResource**
> GetEnginesForResourceResponse getEnginesForResource(ResourceID, X-Correlation-Id)

Get list of engines for resource

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ResourceID** | [**UUID**](../Models/.md)| ID of Resource | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetEnginesForResourceResponse**](../Models/GetEnginesForResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLicenseDetail"></a>
# **getLicenseDetail**
> LicenseDetail getLicenseDetail(LicenseID, X-Correlation-Id)

This gets detail on a license key

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **LicenseID** | **String**| License ID | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**LicenseDetail**](../Models/LicenseDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLicenses"></a>
# **getLicenses**
> GetLicensesResponse getLicenses(X-Correlation-Id)

This provides a licenses on the system

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetLicensesResponse**](../Models/GetLicensesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMappingsForResource"></a>
# **getMappingsForResource**
> GetMappingsForResourceResponse getMappingsForResource(ResourceID, X-Correlation-Id)

Get list of mappings for resource

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ResourceID** | [**UUID**](../Models/.md)| ID of Resource | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetMappingsForResourceResponse**](../Models/GetMappingsForResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getResource"></a>
# **getResource**
> GetResourceResponse getResource(ResourceID, X-Correlation-Id)

Get a resource definition

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ResourceID** | [**UUID**](../Models/.md)| ID of Resource | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetResourceResponse**](../Models/GetResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getResources"></a>
# **getResources**
> GetResourcesResponse getResources(X-Correlation-Id, engineIDs, resourceType, offset, limit, direction, orderBy)

Get the list of resources

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **engineIDs** | **String**| Field to provide the input to get engines by Engine ID list. Separated by commas | [optional] [default to null]
 **resourceType** | **String**| Filter by resourceType | [optional] [default to null]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **direction** | **String**| the sort order.  ASC or DESC. | [optional] [default to DESC]
 **orderBy** | **String**| The sort column to use | [optional] [default to null]

### Return type

[**GetResourcesResponse**](../Models/GetResourcesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getResourcesForEngine"></a>
# **getResourcesForEngine**
> GetResourcesForEngineResponse getResourcesForEngine(EngineID, X-Correlation-Id)

Get list of resources for engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetResourcesForEngineResponse**](../Models/GetResourcesForEngineResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getResourcesForHost"></a>
# **getResourcesForHost**
> GetResourcesForHostResponse getResourcesForHost(HostID, X-Correlation-Id)

Get list of resources for host

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostID** | [**UUID**](../Models/.md)| ID of Host | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetResourcesForHostResponse**](../Models/GetResourcesForHostResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getResourcesForService"></a>
# **getResourcesForService**
> GetResourcesForServiceResponse getResourcesForService(ServiceID, X-Correlation-Id)

Get list of resources for service

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServiceID** | [**UUID**](../Models/.md)| ID of the service | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetResourcesForServiceResponse**](../Models/GetResourcesForServiceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getServerType"></a>
# **getServerType**
> GetServerTypeResponse getServerType(ServerTypeID, X-Correlation-Id)

This provides detail on the server type

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServerTypeID** | [**UUID**](../Models/.md)| ID of Server Type | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetServerTypeResponse**](../Models/GetServerTypeResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getServerTypeEngineRunning"></a>
# **getServerTypeEngineRunning**
> GetServerTypeRunningEnginesResponse getServerTypeEngineRunning(X-Correlation-Id, serverTypeID, engineID, offset, limit)

This lists the running engine with server types

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **serverTypeID** | **String**| Filter by serverTypeID | [optional] [default to null]
 **engineID** | **String**| Filter by engine id | [optional] [default to null]
 **offset** | **Long**| the number of records to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of records to return. | [optional] [default to 100]

### Return type

[**GetServerTypeRunningEnginesResponse**](../Models/GetServerTypeRunningEnginesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getServerTypeEngineRunningDetail"></a>
# **getServerTypeEngineRunningDetail**
> GetServerTypeRunningEngineDetailResponse getServerTypeEngineRunningDetail(ServerTypeID, EngineID, X-Correlation-Id)

This gets the detail of server type - running engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServerTypeID** | [**UUID**](../Models/.md)| ID of Server Type | [default to null]
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetServerTypeRunningEngineDetailResponse**](../Models/GetServerTypeRunningEngineDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getServerTypes"></a>
# **getServerTypes**
> GetServerTypesResponse getServerTypes(RunMode, X-Correlation-Id)

This lists the server types available on the system

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RunMode** | **String**| Filer by run mode | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetServerTypesResponse**](../Models/GetServerTypesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getService"></a>
# **getService**
> GetAdminServiceResponse getService(ServiceID, X-Correlation-Id)

This gets the service detail

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServiceID** | [**UUID**](../Models/.md)| ID of the service | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetAdminServiceResponse**](../Models/GetAdminServiceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getServices"></a>
# **getServices**
> GetAdminServicesResponse getServices(X-Correlation-Id, serviceID, internalApplicationID, offset, limit, tags)

This lists the services available on the system

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **serviceID** | **String**| service ID | [optional] [default to null]
 **internalApplicationID** | [**UUID**](../Models/.md)| Internal ID of Application | [optional] [default to null]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **tags** | **String**| Filter by tags | [optional] [default to null]

### Return type

[**GetAdminServicesResponse**](../Models/GetAdminServicesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="loginUser"></a>
# **loginUser**
> AdminUserLoginResponse loginUser(X-Correlation-Id, AdminUserLoginRequest)

This logs a user in if successful

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **AdminUserLoginRequest** | [**AdminUserLoginRequest**](../Models/AdminUserLoginRequest.md)| This logs in the user | [optional]

### Return type

[**AdminUserLoginResponse**](../Models/AdminUserLoginResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="oauthLoginUser"></a>
# **oauthLoginUser**
> AdminUserLoginResponse oauthLoginUser(X-Correlation-Id, AdminUserOAuth2LoginRequest)

This logs a user in if successful with OAuth2

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **AdminUserOAuth2LoginRequest** | [**AdminUserOAuth2LoginRequest**](../Models/AdminUserOAuth2LoginRequest.md)| This logs in the user with the OAuth2 response | [optional]

### Return type

[**AdminUserLoginResponse**](../Models/AdminUserLoginResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="registerUser"></a>
# **registerUser**
> AdminUserRegisterResponse registerUser(AdminUserRegisterRequest, X-Correlation-Id)

This registers a new user

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AdminUserRegisterRequest** | [**AdminUserRegisterRequest**](../Models/AdminUserRegisterRequest.md)| The input for registerUser |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUserRegisterResponse**](../Models/AdminUserRegisterResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="removeEngineForResource"></a>
# **removeEngineForResource**
> RemoveEngineForResourceResponse removeEngineForResource(ResourceID, EngineID, X-Correlation-Id, RemoveEngineForResourceRequest)

This API removes the engine to the resource

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ResourceID** | [**UUID**](../Models/.md)| ID of Resource | [default to null]
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **RemoveEngineForResourceRequest** | [**RemoveEngineForResourceRequest**](../Models/RemoveEngineForResourceRequest.md)| Remove Engine Mapping for Resource | [optional]

### Return type

[**RemoveEngineForResourceResponse**](../Models/RemoveEngineForResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="removeserversServerType"></a>
# **removeserversServerType**
> AdminOperationResponse removeserversServerType(ServerTypeID, X-Correlation-Id, RemoveServersToServerTypeRequest)

This API removes servers from the specified server type

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServerTypeID** | [**UUID**](../Models/.md)| ID of Server Type | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **RemoveServersToServerTypeRequest** | [**RemoveServersToServerTypeRequest**](../Models/RemoveServersToServerTypeRequest.md)| Update Server Type | [optional]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="resetAllocTable"></a>
# **resetAllocTable**
> AdminOperationResponse resetAllocTable(X-Correlation-Id)

This resets the alloc table

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateApplication"></a>
# **updateApplication**
> AdminApplicationUpdateResponse updateApplication(ApplicationID, AdminApplicationUpdateRequest, X-Correlation-Id)

This updates an application

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ApplicationID** | [**UUID**](../Models/.md)| ID of Application | [default to null]
 **AdminApplicationUpdateRequest** | [**AdminApplicationUpdateRequest**](../Models/AdminApplicationUpdateRequest.md)| The input for updateApplication |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminApplicationUpdateResponse**](../Models/AdminApplicationUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateConfigAll"></a>
# **updateConfigAll**
> AdminConfigUpdateResponse updateConfigAll(AdminConfigUpdateRequest, X-Correlation-Id, configSection, configKey, deprecated, secure, isOverridden)

This gets the config for the cluster

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AdminConfigUpdateRequest** | [**AdminConfigUpdateRequest**](../Models/AdminConfigUpdateRequest.md)| Config Update for core |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **configSection** | [**ConfigSectionEnum**](../Models/.md)| Config Section Entry | [optional] [default to null] [enum: admin, controller, core, db, engine, registry, nfs, prometheus, api, app, eventing, ceph]
 **configKey** | **String**| Config Key | [optional] [default to null]
 **deprecated** | **Boolean**|  | [optional] [default to null]
 **secure** | **Boolean**|  | [optional] [default to null]
 **isOverridden** | **Boolean**|  | [optional] [default to null]

### Return type

[**AdminConfigUpdateResponse**](../Models/AdminConfigUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateConfigSection"></a>
# **updateConfigSection**
> AdminConfigUpdateSectionResponse updateConfigSection(ConfigSection, AdminConfigUpdateSectionRequest, X-Correlation-Id)

This gets the config for the cluster

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ConfigSection** | **String**| Config Section Entry | [default to null]
 **AdminConfigUpdateSectionRequest** | [**AdminConfigUpdateSectionRequest**](../Models/AdminConfigUpdateSectionRequest.md)| The input for createConfigSection |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminConfigUpdateSectionResponse**](../Models/AdminConfigUpdateSectionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/csv, text/html, text/plain

<a name="updateConfigSectionKey"></a>
# **updateConfigSectionKey**
> AdminConfigUpdateSectionKeyResponse updateConfigSectionKey(ConfigSection, ConfigKey, AdminConfigUpdateSectionKeyRequest, X-Correlation-Id)

This updates the config for the cluster for a given key

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ConfigSection** | **String**| Config Section Entry | [default to null]
 **ConfigKey** | **String**| Config Key | [default to null]
 **AdminConfigUpdateSectionKeyRequest** | [**AdminConfigUpdateSectionKeyRequest**](../Models/AdminConfigUpdateSectionKeyRequest.md)| The input for createSectionKey |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminConfigUpdateSectionKeyResponse**](../Models/AdminConfigUpdateSectionKeyResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/csv, text/html, text/plain

<a name="updateEnginesForResource"></a>
# **updateEnginesForResource**
> UpdateEnginesForResourceResponse updateEnginesForResource(ResourceID, X-Correlation-Id, UpdateEnginesForResourceRequest)

This API updates the specified server type-running engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ResourceID** | [**UUID**](../Models/.md)| ID of Resource | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **UpdateEnginesForResourceRequest** | [**UpdateEnginesForResourceRequest**](../Models/UpdateEnginesForResourceRequest.md)| Update Engine Mapping for Resource | [optional]

### Return type

[**UpdateEnginesForResourceResponse**](../Models/UpdateEnginesForResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateOrganization"></a>
# **updateOrganization**
> AdminOrganizationUpdateResponse updateOrganization(OrganizationID, AdminOrganizationUpdateRequest, X-Correlation-Id)

This updates a organization

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **OrganizationID** | [**UUID**](../Models/.md)| ID of Organization | [default to null]
 **AdminOrganizationUpdateRequest** | [**AdminOrganizationUpdateRequest**](../Models/AdminOrganizationUpdateRequest.md)| The input for updateOrganization |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOrganizationUpdateResponse**](../Models/AdminOrganizationUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updatePermission"></a>
# **updatePermission**
> AdminPermissionUpdateResponse updatePermission(PermissionID, AdminPermissionUpdateRequest, X-Correlation-Id)

This updates a permission

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **PermissionID** | [**UUID**](../Models/.md)| ID of Permission | [default to null]
 **AdminPermissionUpdateRequest** | [**AdminPermissionUpdateRequest**](../Models/AdminPermissionUpdateRequest.md)| The input for updatePermission |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminPermissionUpdateResponse**](../Models/AdminPermissionUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateResource"></a>
# **updateResource**
> UpdateResourceResponse updateResource(ResourceID, UpdateResourceRequest, X-Correlation-Id)

This API updates the specified resource

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ResourceID** | [**UUID**](../Models/.md)| ID of Resource | [default to null]
 **UpdateResourceRequest** | [**UpdateResourceRequest**](../Models/UpdateResourceRequest.md)| Update Resource |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**UpdateResourceResponse**](../Models/UpdateResourceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateResourceMappingState"></a>
# **updateResourceMappingState**
> updateResourceMappingState(ResourceID, ResourceMappingID, UpdateResourceMappingStateRequest, X-Correlation-Id)

This API updates the state of the specified resource mapping state

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ResourceID** | [**UUID**](../Models/.md)| ID of Resource | [default to null]
 **ResourceMappingID** | [**UUID**](../Models/.md)| ID of Resource Mapping | [default to null]
 **UpdateResourceMappingStateRequest** | [**UpdateResourceMappingStateRequest**](../Models/UpdateResourceMappingStateRequest.md)| Update Resource Mapping State |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateResourceState"></a>
# **updateResourceState**
> updateResourceState(ResourceID, UpdateResourceStateRequest, X-Correlation-Id)

This API updates the state of the specified resource

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ResourceID** | [**UUID**](../Models/.md)| ID of Resource | [default to null]
 **UpdateResourceStateRequest** | [**UpdateResourceStateRequest**](../Models/UpdateResourceStateRequest.md)| Update Resource State |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateRole"></a>
# **updateRole**
> AdminRoleUpdateResponse updateRole(RoleID, AdminRoleUpdateRequest, X-Correlation-Id)

This updates a role

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RoleID** | [**UUID**](../Models/.md)| ID of Role | [default to null]
 **AdminRoleUpdateRequest** | [**AdminRoleUpdateRequest**](../Models/AdminRoleUpdateRequest.md)| The input for updateRole |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminRoleUpdateResponse**](../Models/AdminRoleUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateServerType"></a>
# **updateServerType**
> UpdateServerTypeResponse updateServerType(ServerTypeID, X-Correlation-Id, ServerTypeDetail)

This API updates the specified server type

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServerTypeID** | [**UUID**](../Models/.md)| ID of Server Type | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **ServerTypeDetail** | [**ServerTypeDetail**](../Models/ServerTypeDetail.md)| Update Server Type | [optional]

### Return type

[**UpdateServerTypeResponse**](../Models/UpdateServerTypeResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateServerTypeEngineRunning"></a>
# **updateServerTypeEngineRunning**
> UpdateServerTypeEngineRunningResponse updateServerTypeEngineRunning(ServerTypeID, EngineID, X-Correlation-Id, UpdateServerTypeEngineRunningRequest)

This API updates the specified server type-running engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServerTypeID** | [**UUID**](../Models/.md)| ID of Server Type | [default to null]
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **UpdateServerTypeEngineRunningRequest** | [**UpdateServerTypeEngineRunningRequest**](../Models/UpdateServerTypeEngineRunningRequest.md)| Update Server Type - Running Engine | [optional]

### Return type

[**UpdateServerTypeEngineRunningResponse**](../Models/UpdateServerTypeEngineRunningResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateService"></a>
# **updateService**
> UpdateServiceResponse updateService(ServiceID, UpdateServiceRequest, X-Correlation-Id)

This API updates a service.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServiceID** | [**UUID**](../Models/.md)| ID of the service | [default to null]
 **UpdateServiceRequest** | [**UpdateServiceRequest**](../Models/UpdateServiceRequest.md)| The fields for a service |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**UpdateServiceResponse**](../Models/UpdateServiceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateToken"></a>
# **updateToken**
> AdminTokenUpdateResponse updateToken(TokenID, AdminTokenUpdateRequest, X-Correlation-Id)

This updates a token

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TokenID** | [**UUID**](../Models/.md)| ID of Token | [default to null]
 **AdminTokenUpdateRequest** | [**AdminTokenUpdateRequest**](../Models/AdminTokenUpdateRequest.md)| The input for updateToken |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminTokenUpdateResponse**](../Models/AdminTokenUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> AdminUserUpdateResponse updateUser(UserID, AdminUserUpdateRequest, X-Correlation-Id)

This updates a user

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UserID** | [**UUID**](../Models/.md)| ID of User | [default to null]
 **AdminUserUpdateRequest** | [**AdminUserUpdateRequest**](../Models/AdminUserUpdateRequest.md)| The input for updateUser |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminUserUpdateResponse**](../Models/AdminUserUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="userPasswordForgot"></a>
# **userPasswordForgot**
> AdminUserPasswordForgotResponse userPasswordForgot(X-Correlation-Id, AdminUserPasswordForgotRequest)

This api will help users to reset their password when they forgot

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **AdminUserPasswordForgotRequest** | [**AdminUserPasswordForgotRequest**](../Models/AdminUserPasswordForgotRequest.md)| Needs to provide the info to reset user&#39;s password when they forgot | [optional]

### Return type

[**AdminUserPasswordForgotResponse**](../Models/AdminUserPasswordForgotResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="userPasswordReset"></a>
# **userPasswordReset**
> AdminUserPasswordResetResponse userPasswordReset(X-Correlation-Id, AdminUserPasswordResetRequest)

Helps users to reset their password

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **AdminUserPasswordResetRequest** | [**AdminUserPasswordResetRequest**](../Models/AdminUserPasswordResetRequest.md)| Needs to provide the info to reset password | [optional]

### Return type

[**AdminUserPasswordResetResponse**](../Models/AdminUserPasswordResetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="userPasswordUpdate"></a>
# **userPasswordUpdate**
> AdminUserPasswordUpdateResponse userPasswordUpdate(X-Correlation-Id, AdminUserPasswordUpdateRequest)

This api will help users to update their password

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **AdminUserPasswordUpdateRequest** | [**AdminUserPasswordUpdateRequest**](../Models/AdminUserPasswordUpdateRequest.md)| Users provide the password info to change | [optional]

### Return type

[**AdminUserPasswordUpdateResponse**](../Models/AdminUserPasswordUpdateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

