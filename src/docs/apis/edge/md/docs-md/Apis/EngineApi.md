# EngineApi

All URIs are relative to *https://api.aiware.com/edge/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBuild**](EngineApi.md#createBuild) | **POST** /admin/build/create | This API creates a new engine build
[**createEngine**](EngineApi.md#createEngine) | **POST** /admin/engine/create | This API creates a new engine
[**createEngineCategory**](EngineApi.md#createEngineCategory) | **POST** /admin/engine/category/create | This API creates a new engine category
[**createJobForEngine**](EngineApi.md#createJobForEngine) | **POST** /engine/{EngineID}/createjob | This API create a job for the engine
[**deleteBuildPost**](EngineApi.md#deleteBuildPost) | **POST** /engine/{EngineID}/build/{BuildID}/delete | This API provides the engine detail result
[**deleteEnginePost**](EngineApi.md#deleteEnginePost) | **POST** /admin/engine/{EngineID}/delete | This API delets an engine
[**deleteEngineTemplate**](EngineApi.md#deleteEngineTemplate) | **DELETE** /engine/{EngineID}/template/{EngineTemplateName} | Delete the template of the engine given its ID and template name
[**getEngineBuild**](EngineApi.md#getEngineBuild) | **GET** /admin/build/{BuildID}/detail | This gets a particular build
[**getEngineBuilds**](EngineApi.md#getEngineBuilds) | **GET** /admin/engine/{EngineID}/builds | Get the list of builds deployed and available on aiWARE for a particular engine
[**getEngineBuildsByState**](EngineApi.md#getEngineBuildsByState) | **GET** /engine/builds | The api returns engine build records by build state
[**getEngineBuildsToDownload**](EngineApi.md#getEngineBuildsToDownload) | **GET** /engine/builds/downloads | The api returns latest downloadable engine build records for each engine
[**getEngineCategories**](EngineApi.md#getEngineCategories) | **GET** /admin/engine/categories | This provides a list of engine categories
[**getEngineCategoryDetail**](EngineApi.md#getEngineCategoryDetail) | **GET** /admin/engine/category/{EngineCategoryID}/detail | This provides detail for an engine category
[**getEngineContainerCount**](EngineApi.md#getEngineContainerCount) | **GET** /engine/container_count | Get engine container count
[**getEngineDetail**](EngineApi.md#getEngineDetail) | **GET** /admin/engine/{EngineID}/detail | This API provides the engine detail result
[**getEngineInstanceDetail**](EngineApi.md#getEngineInstanceDetail) | **GET** /engine/instance/{EngineInstanceID}/detail | Get information about an engine Instance
[**getEngineInstanceList**](EngineApi.md#getEngineInstanceList) | **GET** /engine/instances | Get engines instances with filtering
[**getEngineInstanceLogs**](EngineApi.md#getEngineInstanceLogs) | **GET** /engine/instance/{EngineInstanceID}/logs | Get engine instance logs as a zip file
[**getEngineInstanceStatus**](EngineApi.md#getEngineInstanceStatus) | **GET** /engine/instance/{EngineInstanceID}/status | Get the latest status of the engine instance
[**getEngineInstanceWork**](EngineApi.md#getEngineInstanceWork) | **POST** /engine/instance/{EngineInstanceID}/getwork | Get a work request
[**getEngineInstanceWorkDetail**](EngineApi.md#getEngineInstanceWorkDetail) | **GET** /engine/instance/{EngineInstanceID}/workdetail | Get detail of the work being done by the engine instance
[**getEngineInstances**](EngineApi.md#getEngineInstances) | **GET** /engine/{EngineID}/instances | Get information about the instances of an engine
[**getEngineLaunchDetail**](EngineApi.md#getEngineLaunchDetail) | **GET** /engine/{EngineID}/launch/{LaunchID}/detail | This API returns the list of launches for this engine
[**getEngineLaunches**](EngineApi.md#getEngineLaunches) | **GET** /engine/{EngineID}/launches | This API returns the list of launches for this engine
[**getEngineTemplate**](EngineApi.md#getEngineTemplate) | **GET** /engine/{EngineID}/template/{EngineTemplateName} | Get the template of the engine given its ID and template name -- if EngineTeamplateName&#x3D;&#x3D;&#x60;all&#x60;, all the templates for the engines will be returned
[**getEngines**](EngineApi.md#getEngines) | **GET** /admin/engines | Get the list of engines deployed and available on aiWARE
[**getJobsBacklogCountByEngine**](EngineApi.md#getJobsBacklogCountByEngine) | **POST** /proc/jobs/backlog_count_by_engine | Get backlog count by engine
[**getResourcesForEngineInstance**](EngineApi.md#getResourcesForEngineInstance) | **GET** /engine/instance/{EngineInstanceID}/resources | Get resources for engine instance
[**pauseBuild**](EngineApi.md#pauseBuild) | **POST** /admin/build/{BuildID}/pause | This API pauses a build so that tasks based on this engine build will not run.
[**pauseEngine**](EngineApi.md#pauseEngine) | **POST** /admin/engine/{EngineID}/pause | This API pauses an engine so that tasks based on this engine will not run.
[**registerEngineInstanceNoAuth**](EngineApi.md#registerEngineInstanceNoAuth) | **POST** /engine/instance/register | Register a new engine instance without authorization
[**replaceEngine**](EngineApi.md#replaceEngine) | **POST** /admin/engine/{EngineID}/replace | This API replaced an engine so that tasks based on this engine will not run.
[**resumeBuild**](EngineApi.md#resumeBuild) | **POST** /admin/build/{BuildID}/resume | This API resumes a build so that tasks based on this engine build will start running.
[**resumeEngine**](EngineApi.md#resumeEngine) | **POST** /admin/engine/{EngineID}/resume | This API resumes a build so that tasks based on this engine build will start running.
[**terminateEngineInstance**](EngineApi.md#terminateEngineInstance) | **POST** /engine/instance/{EngineInstanceID}/terminate | Delete the engine instance record
[**updateEngine**](EngineApi.md#updateEngine) | **POST** /admin/engine/{EngineID}/update | This API updates the specified engine
[**updateEngineBuild**](EngineApi.md#updateEngineBuild) | **POST** /admin/build/{BuildID}/update | This API updates the specified engine
[**updateEngineBuildState**](EngineApi.md#updateEngineBuildState) | **POST** /engine/build/{BuildID}/state | Update the Engine Build State
[**updateEngineCategory**](EngineApi.md#updateEngineCategory) | **POST** /admin/engine/category/{EngineCategoryID}/update | This updates the specified engine category
[**updateEngineInstanceStatus**](EngineApi.md#updateEngineInstanceStatus) | **POST** /engine/instance/{EngineInstanceID}/updatestatus | Update the Engine Instance Status.  Heartbeat to communicate back to controller both aggregated work and delta work from last heartbeat
[**upsertEngineTemplate**](EngineApi.md#upsertEngineTemplate) | **POST** /engine/{EngineID}/template/{EngineTemplateName} | Create or Update the template of the engine given its ID and template name


<a name="createBuild"></a>
# **createBuild**
> CreateBuildResponse createBuild(CreateBuildRequest, X-Correlation-Id)

This API creates a new engine build

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateBuildRequest** | [**CreateBuildRequest**](../Models/CreateBuildRequest.md)| The fields for an engine build |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**CreateBuildResponse**](../Models/CreateBuildResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createEngine"></a>
# **createEngine**
> CreateEngineResponse createEngine(CreateEngineRequest, X-Correlation-Id)

This API creates a new engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateEngineRequest** | [**CreateEngineRequest**](../Models/CreateEngineRequest.md)| The fields for an engine |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**CreateEngineResponse**](../Models/CreateEngineResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createEngineCategory"></a>
# **createEngineCategory**
> CreateEngineCategoryResponse createEngineCategory(CreateEngineCategoryDetail, X-Correlation-Id)

This API creates a new engine category

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateEngineCategoryDetail** | [**CreateEngineCategoryDetail**](../Models/CreateEngineCategoryDetail.md)| The fields for an engine category |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**CreateEngineCategoryResponse**](../Models/CreateEngineCategoryResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createJobForEngine"></a>
# **createJobForEngine**
> CreateJobForEngineResponse createJobForEngine(EngineID, X-Correlation-Id, contentType, fileName, inputFileName, parameterJSON, templateName)

This API create a job for the engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | **String**| EngineID of node-red container request | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **contentType** | **String**| mimetype of the input file | [optional] [default to null]
 **fileName** | **File**| the input file contents | [optional] [default to null]
 **inputFileName** | **String**| the original filename of the input file | [optional] [default to null]
 **parameterJSON** | **String**| JSON stringified of map of field names and values if specified in job template | [optional] [default to null]
 **templateName** | **String**| the engine job template to process the input file | [optional] [default to null]

### Return type

[**CreateJobForEngineResponse**](../Models/CreateJobForEngineResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

<a name="deleteBuildPost"></a>
# **deleteBuildPost**
> AdminOperationResponse deleteBuildPost(EngineID, BuildID, X-Correlation-Id)

This API provides the engine detail result

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **BuildID** | [**UUID**](../Models/.md)| ID of Build | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteEnginePost"></a>
# **deleteEnginePost**
> AdminOperationResponse deleteEnginePost(EngineID, X-Correlation-Id)

This API delets an engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteEngineTemplate"></a>
# **deleteEngineTemplate**
> EngineTemplate deleteEngineTemplate(EngineID, EngineTemplateName, X-Correlation-Id)

Delete the template of the engine given its ID and template name

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | **String**| EngineID of node-red container request | [default to null]
 **EngineTemplateName** | **String**| name of the engine template | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**EngineTemplate**](../Models/EngineTemplate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineBuild"></a>
# **getEngineBuild**
> GetEngineBuildResponse getEngineBuild(BuildID, X-Correlation-Id)

This gets a particular build

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **BuildID** | [**UUID**](../Models/.md)| ID of Build | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetEngineBuildResponse**](../Models/GetEngineBuildResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineBuilds"></a>
# **getEngineBuilds**
> GetEngineBuildsResponse getEngineBuilds(EngineID, X-Correlation-Id, BuildState)

Get the list of builds deployed and available on aiWARE for a particular engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **BuildState** | **String**| Filter builds by the build state | [optional] [default to null]

### Return type

[**GetEngineBuildsResponse**](../Models/GetEngineBuildsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineBuildsByState"></a>
# **getEngineBuildsByState**
> GetEngineBuildsResponse getEngineBuildsByState(X-Correlation-Id, offset, limit, state)

The api returns engine build records by build state

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **state** | **String**| Filter data by build state | [optional] [default to null]

### Return type

[**GetEngineBuildsResponse**](../Models/GetEngineBuildsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineBuildsToDownload"></a>
# **getEngineBuildsToDownload**
> GetEngineBuildsResponse getEngineBuildsToDownload(X-Correlation-Id, offset, limit, includeRuntime)

The api returns latest downloadable engine build records for each engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **includeRuntime** | **Boolean**| Filter data by runtime | [optional] [default to null]

### Return type

[**GetEngineBuildsResponse**](../Models/GetEngineBuildsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineCategories"></a>
# **getEngineCategories**
> GetEngineCategoriesResponse getEngineCategories(X-Correlation-Id)

This provides a list of engine categories

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetEngineCategoriesResponse**](../Models/GetEngineCategoriesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineCategoryDetail"></a>
# **getEngineCategoryDetail**
> GetEngineCategoryDetailResponse getEngineCategoryDetail(EngineCategoryID, X-Correlation-Id)

This provides detail for an engine category

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineCategoryID** | [**UUID**](../Models/.md)| ID of Engine Category | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetEngineCategoryDetailResponse**](../Models/GetEngineCategoryDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineContainerCount"></a>
# **getEngineContainerCount**
> GetEngineContainerCountResponse getEngineContainerCount(interval, startTime, endTime, groupBy, engineID, hostID)

Get engine container count

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **interval** | **Long**| Interval in seconds for output time ranges. | [optional] [default to null]
 **startTime** | **Long**| The unix timestamp, describing the start time for the stats | [optional] [default to null]
 **endTime** | **Long**| The unix timestamp, describing the end time for the stats | [optional] [default to null]
 **groupBy** | [**EngineContainerGroupByEnum**](../Models/.md)| Group data by engineID or instance | [optional] [default to null] [enum: engineID, engineInstanceID]
 **engineID** | [**UUID**](../Models/.md)| Filter data by engineID | [optional] [default to null]
 **hostID** | [**UUID**](../Models/.md)| Filter data by hostID | [optional] [default to null]

### Return type

[**GetEngineContainerCountResponse**](../Models/GetEngineContainerCountResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineDetail"></a>
# **getEngineDetail**
> GetEngineDetailResponse getEngineDetail(EngineID)

This API provides the engine detail result

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]

### Return type

[**GetEngineDetailResponse**](../Models/GetEngineDetailResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineInstanceDetail"></a>
# **getEngineInstanceDetail**
> EngineInstanceInfo getEngineInstanceDetail(EngineInstanceID, X-Correlation-Id)

Get information about an engine Instance

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineInstanceID** | [**UUID**](../Models/.md)| ID of Engine Instance | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**EngineInstanceInfo**](../Models/EngineInstanceInfo.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineInstanceList"></a>
# **getEngineInstanceList**
> GetEngineInstanceListResponse getEngineInstanceList(X-Correlation-Id, engineInstanceIDs, engineIDs, hostIDs, workRequestIDs, status, drain, launchStartTime, launchEndTime, modifiedBefore, modifiedAfter, CreatedBefore, CreatedAfter, offset, limit, direction, orderBy)

Get engines instances with filtering

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **engineInstanceIDs** | **String**| Field to provide the input to get engine instances by ID list. Separated by commas | [optional] [default to null]
 **engineIDs** | **String**| Field to provide the input to get engines by Engine ID list. Separated by commas | [optional] [default to null]
 **hostIDs** | [**UUID**](../Models/.md)| Filtering engine instances by host IDs. Separated by commas | [optional] [default to null]
 **workRequestIDs** | [**UUID**](../Models/.md)| Filters engine instances by workrequest IDs. Separated by commas | [optional] [default to null]
 **status** | [**EngineStatusEnum**](../Models/.md)| Field to match the current status | [optional] [default to null] [enum: active, terminated]
 **drain** | **Boolean**| Filter by drain | [optional] [default to null]
 **launchStartTime** | **Long**| The unix timestamp, describing a lower limit for the time an engine instance was launched. | [optional] [default to null]
 **launchEndTime** | **Long**| The unix timestamp, describing an upper limit for the time an engine instance was launched. | [optional] [default to null]
 **modifiedBefore** | **Long**| Filter by items modified before expressed as timestamp | [optional] [default to null]
 **modifiedAfter** | **Long**| Filter by items modified after expressed as timestamp | [optional] [default to null]
 **CreatedBefore** | **Long**| Filter items where created date is before this date | [optional] [default to null]
 **CreatedAfter** | **Long**| Filter items where created date is after this date | [optional] [default to null]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **direction** | **String**| the sort order.  ASC or DESC. | [optional] [default to DESC]
 **orderBy** | **String**| It should be in [engineID, hostID, status, createdTime, modifiedTime, lastUpdateTime, launchTime] | [optional] [default to null]

### Return type

[**GetEngineInstanceListResponse**](../Models/GetEngineInstanceListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineInstanceLogs"></a>
# **getEngineInstanceLogs**
> File getEngineInstanceLogs(EngineInstanceID, X-Correlation-Id)

Get engine instance logs as a zip file

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineInstanceID** | [**UUID**](../Models/.md)| ID of Engine Instance | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**File**](../Models/file.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

<a name="getEngineInstanceStatus"></a>
# **getEngineInstanceStatus**
> EngineInstanceStatus getEngineInstanceStatus(EngineInstanceID, X-Correlation-Id)

Get the latest status of the engine instance

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineInstanceID** | [**UUID**](../Models/.md)| ID of Engine Instance | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**EngineInstanceStatus**](../Models/EngineInstanceStatus.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineInstanceWork"></a>
# **getEngineInstanceWork**
> EngineInstanceWorkRequestResponse getEngineInstanceWork(EngineInstanceID, EngineInstanceWorkRequest, X-Correlation-Id)

Get a work request

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineInstanceID** | [**UUID**](../Models/.md)| ID of Engine Instance | [default to null]
 **EngineInstanceWorkRequest** | [**EngineInstanceWorkRequest**](../Models/EngineInstanceWorkRequest.md)| Engine Instance Info |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**EngineInstanceWorkRequestResponse**](../Models/EngineInstanceWorkRequestResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getEngineInstanceWorkDetail"></a>
# **getEngineInstanceWorkDetail**
> EngineInstanceWorkDetailsResponse getEngineInstanceWorkDetail(EngineInstanceID, X-Correlation-Id)

Get detail of the work being done by the engine instance

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineInstanceID** | [**UUID**](../Models/.md)| ID of Engine Instance | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**EngineInstanceWorkDetailsResponse**](../Models/EngineInstanceWorkDetailsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineInstances"></a>
# **getEngineInstances**
> GetEngineInstancesResponse getEngineInstances(EngineID, X-Correlation-Id, launchStartTime, launchEndTime, modifiedBefore, modifiedAfter, CreatedBefore, CreatedAfter)

Get information about the instances of an engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | **String**| EngineID of node-red container request | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **launchStartTime** | **Long**| The unix timestamp, describing a lower limit for the time an engine instance was launched. | [optional] [default to null]
 **launchEndTime** | **Long**| The unix timestamp, describing an upper limit for the time an engine instance was launched. | [optional] [default to null]
 **modifiedBefore** | **Long**| Filter by items modified before expressed as timestamp | [optional] [default to null]
 **modifiedAfter** | **Long**| Filter by items modified after expressed as timestamp | [optional] [default to null]
 **CreatedBefore** | **Long**| Filter items where created date is before this date | [optional] [default to null]
 **CreatedAfter** | **Long**| Filter items where created date is after this date | [optional] [default to null]

### Return type

[**GetEngineInstancesResponse**](../Models/GetEngineInstancesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineLaunchDetail"></a>
# **getEngineLaunchDetail**
> GetEngineLaunchResponse getEngineLaunchDetail(EngineID, LaunchID, CreatedBefore, CreatedAfter, offset, limit, orderBy, direction)

This API returns the list of launches for this engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **LaunchID** | [**UUID**](../Models/.md)| ID of Launch | [default to null]
 **CreatedBefore** | **Long**| Filter items where created date is before this date | [optional] [default to null]
 **CreatedAfter** | **Long**| Filter items where created date is after this date | [optional] [default to null]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **orderBy** | **String**| the field to sort | [optional] [default to createdDateTime]
 **direction** | **String**| the sort order.  ASC or DESC. | [optional] [default to DESC]

### Return type

[**GetEngineLaunchResponse**](../Models/GetEngineLaunchResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineLaunches"></a>
# **getEngineLaunches**
> GetEngineLaunchResponse getEngineLaunches(EngineID, LaunchStatus, LaunchAction, CreatedBefore, CreatedAfter, offset, limit, orderBy, direction)

This API returns the list of launches for this engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **LaunchStatus** | [**LaunchStatusEnum**](../Models/.md)| Field to match the current launch status | [optional] [default to null] [enum: pending, running, complete, pending_terminate]
 **LaunchAction** | [**LaunchActionEnum**](../Models/.md)| Field to match the current launch action | [optional] [default to null] [enum: launch, terminate]
 **CreatedBefore** | **Long**| Filter items where created date is before this date | [optional] [default to null]
 **CreatedAfter** | **Long**| Filter items where created date is after this date | [optional] [default to null]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **orderBy** | **String**| the field to sort | [optional] [default to createdDateTime]
 **direction** | **String**| the sort order.  ASC or DESC. | [optional] [default to DESC]

### Return type

[**GetEngineLaunchResponse**](../Models/GetEngineLaunchResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngineTemplate"></a>
# **getEngineTemplate**
> EngineTemplates getEngineTemplate(EngineID, EngineTemplateName, X-Correlation-Id)

Get the template of the engine given its ID and template name -- if EngineTeamplateName&#x3D;&#x3D;&#x60;all&#x60;, all the templates for the engines will be returned

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | **String**| EngineID of node-red container request | [default to null]
 **EngineTemplateName** | **String**| name of the engine template | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**EngineTemplates**](../Models/EngineTemplates.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEngines"></a>
# **getEngines**
> GetEnginesResponse getEngines(X-Correlation-Id, internalApplicationID, internalOrganizationID, engineName, engineState, engineType, engineOutputType, engineCategoryID, engineIDs, offset, limit, direction, startTime, endTime, preload, orderBy)

Get the list of engines deployed and available on aiWARE

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **internalApplicationID** | [**UUID**](../Models/.md)| Internal ID of Application | [optional] [default to null]
 **internalOrganizationID** | [**UUID**](../Models/.md)| ID of Organization.  UUID.  This ID is unique to this aiWARE installation. | [optional] [default to null]
 **engineName** | **String**| Field to string match against the engine names | [optional] [default to null]
 **engineState** | [**EngineStateEnum**](../Models/.md)| Field to match the current state | [optional] [default to null] [enum: active, paused, replace]
 **engineType** | [**EngineTypeEnum**](../Models/.md)| Field to match the current type | [optional] [default to null] [enum: chunk, stream, batch, any]
 **engineOutputType** | [**EngineTypeEnum**](../Models/.md)| Field to match the current type | [optional] [default to null] [enum: chunk, stream, batch, any]
 **engineCategoryID** | **String**| Filter to the particular engine category ID | [optional] [default to null]
 **engineIDs** | **String**| Field to provide the input to get engines by Engine ID list. Separated by commas | [optional] [default to null]
 **offset** | **Long**| the number of data to skip before getting the result set | [optional] [default to null]
 **limit** | **Long**| the number of items to return. | [optional] [default to 10]
 **direction** | **String**| the sort order.  ASC or DESC. | [optional] [default to DESC]
 **startTime** | **Long**| The unix timestamp, describing the start time for the stats | [optional] [default to null]
 **endTime** | **Long**| The unix timestamp, describing the end time for the stats | [optional] [default to null]
 **preload** | **Boolean**| Filter engines by preload | [optional] [default to null]
 **orderBy** | **String**| The value should be in [name, state, type, organizationID, createdTime] | [optional] [default to null]

### Return type

[**GetEnginesResponse**](../Models/GetEnginesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getJobsBacklogCountByEngine"></a>
# **getJobsBacklogCountByEngine**
> GetJobsBacklogCountResponse getJobsBacklogCountByEngine(interval, startTime, endTime, organizationIDs)

Get backlog count by engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **interval** | **Long**| Interval in seconds for output time ranges. | [optional] [default to null]
 **startTime** | **Long**| The unix timestamp, describing the start time for the stats | [optional] [default to null]
 **endTime** | **Long**| The unix timestamp, describing the end time for the stats | [optional] [default to null]
 **organizationIDs** | **String**|  | [optional] [default to null]

### Return type

[**GetJobsBacklogCountResponse**](../Models/GetJobsBacklogCountResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getResourcesForEngineInstance"></a>
# **getResourcesForEngineInstance**
> GetResourcesForEngineInstanceResponse getResourcesForEngineInstance(EngineInstanceID, X-Correlation-Id)

Get resources for engine instance

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineInstanceID** | [**UUID**](../Models/.md)| ID of Engine Instance | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**GetResourcesForEngineInstanceResponse**](../Models/GetResourcesForEngineInstanceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="pauseBuild"></a>
# **pauseBuild**
> AdminOperationResponse pauseBuild(BuildID, X-Correlation-Id, BuildState)

This API pauses a build so that tasks based on this engine build will not run.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **BuildID** | [**UUID**](../Models/.md)| ID of Build | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **BuildState** | **String**| Filter builds by the build state | [optional] [default to null]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="pauseEngine"></a>
# **pauseEngine**
> AdminOperationResponse pauseEngine(EngineID, X-Correlation-Id, PauseEngineRequest)

This API pauses an engine so that tasks based on this engine will not run.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **PauseEngineRequest** | [**PauseEngineRequest**](../Models/PauseEngineRequest.md)| Engine Instance Info | [optional]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="registerEngineInstanceNoAuth"></a>
# **registerEngineInstanceNoAuth**
> EngineInstanceRegistrationInfo registerEngineInstanceNoAuth(EngineInstanceInfo, X-Correlation-Id)

Register a new engine instance without authorization

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineInstanceInfo** | [**EngineInstanceInfo**](../Models/EngineInstanceInfo.md)| Engine Instance Info |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**EngineInstanceRegistrationInfo**](../Models/EngineInstanceRegistrationInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="replaceEngine"></a>
# **replaceEngine**
> AdminOperationResponse replaceEngine(EngineID, ReplaceEngineRequest)

This API replaced an engine so that tasks based on this engine will not run.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **ReplaceEngineRequest** | [**ReplaceEngineRequest**](../Models/ReplaceEngineRequest.md)| Engine Instance Info | [optional]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="resumeBuild"></a>
# **resumeBuild**
> AdminOperationResponse resumeBuild(BuildID, X-Correlation-Id)

This API resumes a build so that tasks based on this engine build will start running.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **BuildID** | [**UUID**](../Models/.md)| ID of Build | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="resumeEngine"></a>
# **resumeEngine**
> AdminOperationResponse resumeEngine(EngineID, X-Correlation-Id, ResumeEngineRequest)

This API resumes a build so that tasks based on this engine build will start running.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]
 **ResumeEngineRequest** | [**ResumeEngineRequest**](../Models/ResumeEngineRequest.md)| Engine Instance Info | [optional]

### Return type

[**AdminOperationResponse**](../Models/AdminOperationResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="terminateEngineInstance"></a>
# **terminateEngineInstance**
> terminateEngineInstance(EngineInstanceID, X-Correlation-Id)

Delete the engine instance record

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineInstanceID** | [**UUID**](../Models/.md)| ID of Engine Instance | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateEngine"></a>
# **updateEngine**
> UpdateEngineResponse updateEngine(EngineID, UpdateEngineRequest, X-Correlation-Id)

This API updates the specified engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **UpdateEngineRequest** | [**UpdateEngineRequest**](../Models/UpdateEngineRequest.md)| Update Engine |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**UpdateEngineResponse**](../Models/UpdateEngineResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateEngineBuild"></a>
# **updateEngineBuild**
> UpdateBuildResponse updateEngineBuild(EngineID, BuildID, BuildDetail, X-Correlation-Id)

This API updates the specified engine

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | [**UUID**](../Models/.md)| ID of Engine | [default to null]
 **BuildID** | [**UUID**](../Models/.md)| ID of Build | [default to null]
 **BuildDetail** | [**BuildDetail**](../Models/BuildDetail.md)| Update Engine BUild |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**UpdateBuildResponse**](../Models/UpdateBuildResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateEngineBuildState"></a>
# **updateEngineBuildState**
> updateEngineBuildState(BuildID, UpdateEngineBuildStateRequest, X-Correlation-Id)

Update the Engine Build State

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **BuildID** | **String**| BuildID of node-red container request | [default to null]
 **UpdateEngineBuildStateRequest** | [**UpdateEngineBuildStateRequest**](../Models/UpdateEngineBuildStateRequest.md)| Engine Build State |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateEngineCategory"></a>
# **updateEngineCategory**
> UpdateEngineCategoryResponse updateEngineCategory(EngineCategoryID, X-Correlation-Id)

This updates the specified engine category

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineCategoryID** | [**UUID**](../Models/.md)| ID of Engine Category | [default to null]
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**UpdateEngineCategoryResponse**](../Models/UpdateEngineCategoryResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateEngineInstanceStatus"></a>
# **updateEngineInstanceStatus**
> updateEngineInstanceStatus(EngineInstanceID, EngineInstanceStatus, X-Correlation-Id)

Update the Engine Instance Status.  Heartbeat to communicate back to controller both aggregated work and delta work from last heartbeat

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineInstanceID** | [**UUID**](../Models/.md)| ID of Engine Instance | [default to null]
 **EngineInstanceStatus** | [**EngineInstanceStatus**](../Models/EngineInstanceStatus.md)| Engine Instance Status |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="upsertEngineTemplate"></a>
# **upsertEngineTemplate**
> EngineTemplate upsertEngineTemplate(EngineID, EngineTemplateName, EngineTemplate, X-Correlation-Id)

Create or Update the template of the engine given its ID and template name

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EngineID** | **String**| EngineID of node-red container request | [default to null]
 **EngineTemplateName** | **String**| name of the engine template | [default to null]
 **EngineTemplate** | [**EngineTemplate**](../Models/EngineTemplate.md)| Engine Template |
 **X-Correlation-Id** | **String**| Correlation Id that can be passed, traced in the server and will be returned in the response if present in the request | [optional] [default to null]

### Return type

[**EngineTemplate**](../Models/EngineTemplate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

