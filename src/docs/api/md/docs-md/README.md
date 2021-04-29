# Documentation for aiWARE Edge API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.aiware.com/edge/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AdminApi* | [**addEngineToResource**](Apis/AdminApi.md#addenginetoresource) | **POST** /admin/resource/{ResourceID}/engine | This API adds the engine to the resource
*AdminApi* | [**addServiceToResource**](Apis/AdminApi.md#addservicetoresource) | **POST** /admin/resource/{ResourceID}/service | This API adds the service to the resource
*AdminApi* | [**addserversServerType**](Apis/AdminApi.md#addserversservertype) | **POST** /admin/server_type/{ServerTypeID}/add | This API add servers to the specified server type
*AdminApi* | [**adminTerminateCluster**](Apis/AdminApi.md#adminterminatecluster) | **POST** /admin/terminate | This terminates the cluster
*AdminApi* | [**applyLicense**](Apis/AdminApi.md#applylicense) | **POST** /admin/licenses/apply | This applies a license to aiWARE
*AdminApi* | [**checkAuth**](Apis/AdminApi.md#checkauth) | **POST** /admin/auth | This check auth for a token
*AdminApi* | [**clearBacklog**](Apis/AdminApi.md#clearbacklog) | **POST** /admin/backlog/clear | This clears some or all of the currently queued tasks
*AdminApi* | [**createAdminApplication**](Apis/AdminApi.md#createadminapplication) | **POST** /admin/applications/create | This creates a new application
*AdminApi* | [**createAdminCore**](Apis/AdminApi.md#createadmincore) | **POST** /admin/cores/create | This creates a new core
*AdminApi* | [**createAdminOrganization**](Apis/AdminApi.md#createadminorganization) | **POST** /admin/organizations/create | This updates the config for the cluster for a given key
*AdminApi* | [**createPermission**](Apis/AdminApi.md#createpermission) | **POST** /admin/users/permission/create | This creates a new permission
*AdminApi* | [**createResource**](Apis/AdminApi.md#createresource) | **POST** /admin/resource/create | This API creates a new resource definition such as a database, nsq or redis DB.
*AdminApi* | [**createRole**](Apis/AdminApi.md#createrole) | **POST** /admin/users/role/create | This creates a new role
*AdminApi* | [**createServerType**](Apis/AdminApi.md#createservertype) | **POST** /admin/server_types/create | This creates a new server type
*AdminApi* | [**createServerTypeEngineRunning**](Apis/AdminApi.md#createservertypeenginerunning) | **POST** /admin/server_types/running_engine/create | This creates a new server_type_engine_running
*AdminApi* | [**createService**](Apis/AdminApi.md#createservice) | **POST** /admin/service/create | This API creates a new service definition.
*AdminApi* | [**createToken**](Apis/AdminApi.md#createtoken) | **POST** /admin/tokens/create | This creates a new token
*AdminApi* | [**createUser**](Apis/AdminApi.md#createuser) | **POST** /admin/users/create | This creates a new user
*AdminApi* | [**deleteApplication**](Apis/AdminApi.md#deleteapplication) | **POST** /admin/applications/{ApplicationID}/delete | This deletes an application
*AdminApi* | [**deleteLicense**](Apis/AdminApi.md#deletelicense) | **DELETE** /admin/licenses/{LicenseID}/delete | This deletes a license from aiWARE
*AdminApi* | [**deleteResource**](Apis/AdminApi.md#deleteresource) | **POST** /admin/resource/{ResourceID}/delete | This deletes the specified resource
*AdminApi* | [**deleteRole**](Apis/AdminApi.md#deleterole) | **POST** /admin/users/role/{RoleID}/delete | This deletes a role
*AdminApi* | [**deleteServerType**](Apis/AdminApi.md#deleteservertype) | **DELETE** /admin/server_type/{ServerTypeID}/delete | This API deletes the specified server type
*AdminApi* | [**deleteServerTypePost**](Apis/AdminApi.md#deleteservertypepost) | **POST** /admin/server_type/{ServerTypeID}/delete | This API deletes the specified server type
*AdminApi* | [**deleteServerTypeRunningEngine**](Apis/AdminApi.md#deleteservertyperunningengine) | **DELETE** /admin/server_type/{ServerTypeID}/engine/{EngineID}/delete | This API deletes the running engine for a server type
*AdminApi* | [**deleteToken**](Apis/AdminApi.md#deletetoken) | **POST** /admin/token/{TokenID}/delete | This deletes a token
*AdminApi* | [**deleteUser**](Apis/AdminApi.md#deleteuser) | **POST** /admin/user/{UserID}/delete | This deletes a user
*AdminApi* | [**desiredserversServerType**](Apis/AdminApi.md#desiredserversservertype) | **POST** /admin/server_type/{ServerTypeID}/desired | This API add servers to the specified server type
*AdminApi* | [**getAdminApplicationDetail**](Apis/AdminApi.md#getadminapplicationdetail) | **GET** /admin/application/{ApplicationID}/detail | This provides information on the given application.
*AdminApi* | [**getAdminCoreDetail**](Apis/AdminApi.md#getadmincoredetail) | **GET** /admin/core/{CoreID}/detail | This provides information on the given core.
*AdminApi* | [**getAdminCores**](Apis/AdminApi.md#getadmincores) | **GET** /admin/cores | This provides a list of core systems
*AdminApi* | [**getAdminEngineConfigSectionKey**](Apis/AdminApi.md#getadminengineconfigsectionkey) | **GET** /admin/engine/{EngineID}/config/{ConfigSection}/{ConfigKey} | This provides a config section key for the engine
*AdminApi* | [**getAdminOrganizationDetail**](Apis/AdminApi.md#getadminorganizationdetail) | **GET** /admin/organization/{OrganizationID}/detail | This gets organization detail by ID
*AdminApi* | [**getAdminOrganizationTokens**](Apis/AdminApi.md#getadminorganizationtokens) | **GET** /admin/organization/{OrganizationID}/tokens | This provides information on the given organization tokens.
*AdminApi* | [**getAdminOrganizations**](Apis/AdminApi.md#getadminorganizations) | **GET** /admin/organizations | This provides a list of organizations
*AdminApi* | [**getAdminPermissionDetail**](Apis/AdminApi.md#getadminpermissiondetail) | **GET** /admin/users/permission/{PermissionID}/detail | This gets permission detail by ID
*AdminApi* | [**getAdminRoleDetail**](Apis/AdminApi.md#getadminroledetail) | **GET** /admin/users/role/{RoleID}/detail | This gets role detail by ID
*AdminApi* | [**getAdminServiceConfig**](Apis/AdminApi.md#getadminserviceconfig) | **GET** /admin/service/{ServiceID}/config | This provides all the config for the service
*AdminApi* | [**getAdminServiceConfigSection**](Apis/AdminApi.md#getadminserviceconfigsection) | **GET** /admin/service/{ServiceID}/config/{ConfigSection} | This provides all the config for the service
*AdminApi* | [**getAdminServiceConfigSectionKey**](Apis/AdminApi.md#getadminserviceconfigsectionkey) | **GET** /admin/service/{ServiceID}/config/{ConfigSection}/{ConfigKey} | This provides a config section key for the service
*AdminApi* | [**getAdminServiceInstances**](Apis/AdminApi.md#getadminserviceinstances) | **GET** /admin/service/instances | This lists the service instances available for a system
*AdminApi* | [**getAdminServiceInstancesByServiceID**](Apis/AdminApi.md#getadminserviceinstancesbyserviceid) | **GET** /admin/service/{ServiceID}/instances | This lists the service instances available by service ID
*AdminApi* | [**getAdminStatus**](Apis/AdminApi.md#getadminstatus) | **GET** /admin/status | This provides information on the status of the aiWARE edge
*AdminApi* | [**getAdminTokenDetail**](Apis/AdminApi.md#getadmintokendetail) | **GET** /admin/token/{TokenID}/detail | Get the token info by ID
*AdminApi* | [**getAdminTokenPermissions**](Apis/AdminApi.md#getadmintokenpermissions) | **GET** /admin/token/{TokenID}/permissions | This provides a list of all token permissions for a token by TokenID
*AdminApi* | [**getAdminTokens**](Apis/AdminApi.md#getadmintokens) | **GET** /admin/tokens | This provides information about all tokens.
*AdminApi* | [**getAdminUserDetail**](Apis/AdminApi.md#getadminuserdetail) | **GET** /admin/user/{UserID}/detail | This provides information on the given user.
*AdminApi* | [**getAdminUserPermissions**](Apis/AdminApi.md#getadminuserpermissions) | **GET** /admin/user/{UserID}/permissions | This provides a list of all user permissions for an user by UserID
*AdminApi* | [**getAdminUserTokens**](Apis/AdminApi.md#getadminusertokens) | **GET** /admin/user/{UserID}/tokens | This provides information on the given user.
*AdminApi* | [**getAdminUsers**](Apis/AdminApi.md#getadminusers) | **GET** /admin/users | This provides a list of users in the system
*AdminApi* | [**getAdminUsersPermission**](Apis/AdminApi.md#getadminuserspermission) | **GET** /admin/users/permissions | This provides a list of all user permissions in the system
*AdminApi* | [**getAdminUsersRoles**](Apis/AdminApi.md#getadminusersroles) | **GET** /admin/users/roles | This provides a list of user role in the system
*AdminApi* | [**getApplications**](Apis/AdminApi.md#getapplications) | **GET** /admin/applications | Get the list of applications deployed and available on aiWARE
*AdminApi* | [**getBacklogSummary**](Apis/AdminApi.md#getbacklogsummary) | **GET** /admin/backlog/summary | This provides summary information on the current backlog
*AdminApi* | [**getConfig**](Apis/AdminApi.md#getconfig) | **GET** /admin/config | This provides all the config for the cluster
*AdminApi* | [**getConfigSection**](Apis/AdminApi.md#getconfigsection) | **GET** /admin/config/{ConfigSection} | This provides all the config for the cluster
*AdminApi* | [**getConfigSectionKey**](Apis/AdminApi.md#getconfigsectionkey) | **GET** /admin/config/{ConfigSection}/{ConfigKey} | This provides a config section key for the cluster
*AdminApi* | [**getEnginesForResource**](Apis/AdminApi.md#getenginesforresource) | **GET** /admin/resource/{ResourceID}/engines | Get list of engines for resource
*AdminApi* | [**getLicenseDetail**](Apis/AdminApi.md#getlicensedetail) | **GET** /admin/licenses/{LicenseID}/detail | This gets detail on a license key
*AdminApi* | [**getLicenses**](Apis/AdminApi.md#getlicenses) | **GET** /admin/licenses | This provides a licenses on the system
*AdminApi* | [**getMappingsForResource**](Apis/AdminApi.md#getmappingsforresource) | **GET** /admin/resource/{ResourceID}/mappings | Get list of mappings for resource
*AdminApi* | [**getResource**](Apis/AdminApi.md#getresource) | **GET** /admin/resource/{ResourceID} | Get a resource definition
*AdminApi* | [**getResources**](Apis/AdminApi.md#getresources) | **GET** /admin/resources | Get the list of resources
*AdminApi* | [**getResourcesForEngine**](Apis/AdminApi.md#getresourcesforengine) | **GET** /admin/engine/{EngineID}/resources | Get list of resources for engine
*AdminApi* | [**getResourcesForHost**](Apis/AdminApi.md#getresourcesforhost) | **GET** /admin/host/{HostID}/resources | Get list of resources for host
*AdminApi* | [**getResourcesForService**](Apis/AdminApi.md#getresourcesforservice) | **GET** /admin/service/{ServiceID}/resources | Get list of resources for service
*AdminApi* | [**getServerType**](Apis/AdminApi.md#getservertype) | **GET** /admin/server_type/{ServerTypeID}/detail | This provides detail on the server type
*AdminApi* | [**getServerTypeEngineRunning**](Apis/AdminApi.md#getservertypeenginerunning) | **GET** /admin/server_types/running_engines | This lists the running engine with server types
*AdminApi* | [**getServerTypeEngineRunningDetail**](Apis/AdminApi.md#getservertypeenginerunningdetail) | **GET** /admin/server_type/{ServerTypeID}/engine/{EngineID}/detail | This gets the detail of server type - running engine
*AdminApi* | [**getServerTypes**](Apis/AdminApi.md#getservertypes) | **GET** /admin/server_types | This lists the server types available on the system
*AdminApi* | [**getService**](Apis/AdminApi.md#getservice) | **GET** /admin/service/{ServiceID}/detail | This gets the service detail
*AdminApi* | [**getServices**](Apis/AdminApi.md#getservices) | **GET** /admin/services | This lists the services available on the system
*AdminApi* | [**loginUser**](Apis/AdminApi.md#loginuser) | **POST** /admin/users/login | This logs a user in if successful
*AdminApi* | [**oauthLoginUser**](Apis/AdminApi.md#oauthloginuser) | **POST** /admin/users/oauth2_login | This logs a user in if successful with OAuth2
*AdminApi* | [**registerUser**](Apis/AdminApi.md#registeruser) | **POST** /admin/users/register | This registers a new user
*AdminApi* | [**removeEngineForResource**](Apis/AdminApi.md#removeengineforresource) | **POST** /admin/resource/{ResourceID}/engine/{EngineID}/delete | This API removes the engine to the resource
*AdminApi* | [**removeserversServerType**](Apis/AdminApi.md#removeserversservertype) | **POST** /admin/server_type/{ServerTypeID}/remove | This API removes servers from the specified server type
*AdminApi* | [**resetAllocTable**](Apis/AdminApi.md#resetalloctable) | **POST** /admin/backlog/reset-alloc | This resets the alloc table
*AdminApi* | [**updateApplication**](Apis/AdminApi.md#updateapplication) | **POST** /admin/applications/{ApplicationID}/update | This updates an application
*AdminApi* | [**updateConfigAll**](Apis/AdminApi.md#updateconfigall) | **POST** /admin/config | This gets the config for the cluster
*AdminApi* | [**updateConfigSection**](Apis/AdminApi.md#updateconfigsection) | **POST** /admin/config/{ConfigSection} | This gets the config for the cluster
*AdminApi* | [**updateConfigSectionKey**](Apis/AdminApi.md#updateconfigsectionkey) | **POST** /admin/config/{ConfigSection}/{ConfigKey} | This updates the config for the cluster for a given key
*AdminApi* | [**updateEnginesForResource**](Apis/AdminApi.md#updateenginesforresource) | **POST** /admin/resource/{ResourceID}/engine/update | This API updates the specified server type-running engine
*AdminApi* | [**updateOrganization**](Apis/AdminApi.md#updateorganization) | **POST** /admin/organization/{OrganizationID}/update | This updates a organization
*AdminApi* | [**updatePermission**](Apis/AdminApi.md#updatepermission) | **POST** /admin/users/permission/{PermissionID}/update | This updates a permission
*AdminApi* | [**updateResource**](Apis/AdminApi.md#updateresource) | **POST** /admin/resource/{ResourceID}/update | This API updates the specified resource
*AdminApi* | [**updateResourceMappingState**](Apis/AdminApi.md#updateresourcemappingstate) | **POST** /admin/resource/{ResourceID}/mapping/{ResourceMappingID}/updatestate | This API updates the state of the specified resource mapping state
*AdminApi* | [**updateResourceState**](Apis/AdminApi.md#updateresourcestate) | **POST** /admin/resource/{ResourceID}/updatestate | This API updates the state of the specified resource
*AdminApi* | [**updateRole**](Apis/AdminApi.md#updaterole) | **POST** /admin/users/role/{RoleID}/update | This updates a role
*AdminApi* | [**updateServerType**](Apis/AdminApi.md#updateservertype) | **POST** /admin/server_type/{ServerTypeID}/update | This API updates the specified server type
*AdminApi* | [**updateServerTypeEngineRunning**](Apis/AdminApi.md#updateservertypeenginerunning) | **POST** /admin/server_type/{ServerTypeID}/engine/{EngineID}/update | This API updates the specified server type-running engine
*AdminApi* | [**updateService**](Apis/AdminApi.md#updateservice) | **POST** /admin/service/{ServiceID}/update | This API updates a service.
*AdminApi* | [**updateToken**](Apis/AdminApi.md#updatetoken) | **POST** /admin/token/{TokenID}/update | This updates a token
*AdminApi* | [**updateUser**](Apis/AdminApi.md#updateuser) | **POST** /admin/user/{UserID}/update | This updates a user
*AdminApi* | [**userPasswordForgot**](Apis/AdminApi.md#userpasswordforgot) | **POST** /admin/users/password/forgot | This api will help users to reset their password when they forgot
*AdminApi* | [**userPasswordReset**](Apis/AdminApi.md#userpasswordreset) | **POST** /admin/users/password/reset | Helps users to reset their password
*AdminApi* | [**userPasswordUpdate**](Apis/AdminApi.md#userpasswordupdate) | **POST** /admin/users/password/update | This api will help users to update their password
*EngineApi* | [**createBuild**](Apis/EngineApi.md#createbuild) | **POST** /admin/build/create | This API creates a new engine build
*EngineApi* | [**createEngine**](Apis/EngineApi.md#createengine) | **POST** /admin/engine/create | This API creates a new engine
*EngineApi* | [**createEngineCategory**](Apis/EngineApi.md#createenginecategory) | **POST** /admin/engine/category/create | This API creates a new engine category
*EngineApi* | [**createJobForEngine**](Apis/EngineApi.md#createjobforengine) | **POST** /engine/{EngineID}/createjob | This API create a job for the engine
*EngineApi* | [**deleteBuildPost**](Apis/EngineApi.md#deletebuildpost) | **POST** /engine/{EngineID}/build/{BuildID}/delete | This API provides the engine detail result
*EngineApi* | [**deleteEnginePost**](Apis/EngineApi.md#deleteenginepost) | **POST** /admin/engine/{EngineID}/delete | This API delets an engine
*EngineApi* | [**deleteEngineTemplate**](Apis/EngineApi.md#deleteenginetemplate) | **DELETE** /engine/{EngineID}/template/{EngineTemplateName} | Delete the template of the engine given its ID and template name
*EngineApi* | [**getEngineBuild**](Apis/EngineApi.md#getenginebuild) | **GET** /admin/build/{BuildID}/detail | This gets a particular build
*EngineApi* | [**getEngineBuilds**](Apis/EngineApi.md#getenginebuilds) | **GET** /admin/engine/{EngineID}/builds | Get the list of builds deployed and available on aiWARE for a particular engine
*EngineApi* | [**getEngineBuildsByState**](Apis/EngineApi.md#getenginebuildsbystate) | **GET** /engine/builds | The api returns engine build records by build state
*EngineApi* | [**getEngineBuildsToDownload**](Apis/EngineApi.md#getenginebuildstodownload) | **GET** /engine/builds/downloads | The api returns latest downloadable engine build records for each engine
*EngineApi* | [**getEngineCategories**](Apis/EngineApi.md#getenginecategories) | **GET** /admin/engine/categories | This provides a list of engine categories
*EngineApi* | [**getEngineCategoryDetail**](Apis/EngineApi.md#getenginecategorydetail) | **GET** /admin/engine/category/{EngineCategoryID}/detail | This provides detail for an engine category
*EngineApi* | [**getEngineContainerCount**](Apis/EngineApi.md#getenginecontainercount) | **GET** /engine/container_count | Get engine container count
*EngineApi* | [**getEngineDetail**](Apis/EngineApi.md#getenginedetail) | **GET** /admin/engine/{EngineID}/detail | This API provides the engine detail result
*EngineApi* | [**getEngineInstanceDetail**](Apis/EngineApi.md#getengineinstancedetail) | **GET** /engine/instance/{EngineInstanceID}/detail | Get information about an engine Instance
*EngineApi* | [**getEngineInstanceList**](Apis/EngineApi.md#getengineinstancelist) | **GET** /engine/instances | Get engines instances with filtering
*EngineApi* | [**getEngineInstanceLogs**](Apis/EngineApi.md#getengineinstancelogs) | **GET** /engine/instance/{EngineInstanceID}/logs | Get engine instance logs as a zip file
*EngineApi* | [**getEngineInstanceStatus**](Apis/EngineApi.md#getengineinstancestatus) | **GET** /engine/instance/{EngineInstanceID}/status | Get the latest status of the engine instance
*EngineApi* | [**getEngineInstanceWork**](Apis/EngineApi.md#getengineinstancework) | **POST** /engine/instance/{EngineInstanceID}/getwork | Get a work request
*EngineApi* | [**getEngineInstanceWorkDetail**](Apis/EngineApi.md#getengineinstanceworkdetail) | **GET** /engine/instance/{EngineInstanceID}/workdetail | Get detail of the work being done by the engine instance
*EngineApi* | [**getEngineInstances**](Apis/EngineApi.md#getengineinstances) | **GET** /engine/{EngineID}/instances | Get information about the instances of an engine
*EngineApi* | [**getEngineLaunchDetail**](Apis/EngineApi.md#getenginelaunchdetail) | **GET** /engine/{EngineID}/launch/{LaunchID}/detail | This API returns the list of launches for this engine
*EngineApi* | [**getEngineLaunches**](Apis/EngineApi.md#getenginelaunches) | **GET** /engine/{EngineID}/launches | This API returns the list of launches for this engine
*EngineApi* | [**getEngineTemplate**](Apis/EngineApi.md#getenginetemplate) | **GET** /engine/{EngineID}/template/{EngineTemplateName} | Get the template of the engine given its ID and template name -- if EngineTeamplateName==`all`, all the templates for the engines will be returned
*EngineApi* | [**getEngines**](Apis/EngineApi.md#getengines) | **GET** /admin/engines | Get the list of engines deployed and available on aiWARE
*EngineApi* | [**getJobsBacklogCountByEngine**](Apis/EngineApi.md#getjobsbacklogcountbyengine) | **POST** /proc/jobs/backlog_count_by_engine | Get backlog count by engine
*EngineApi* | [**getResourcesForEngineInstance**](Apis/EngineApi.md#getresourcesforengineinstance) | **GET** /engine/instance/{EngineInstanceID}/resources | Get resources for engine instance
*EngineApi* | [**pauseBuild**](Apis/EngineApi.md#pausebuild) | **POST** /admin/build/{BuildID}/pause | This API pauses a build so that tasks based on this engine build will not run.
*EngineApi* | [**pauseEngine**](Apis/EngineApi.md#pauseengine) | **POST** /admin/engine/{EngineID}/pause | This API pauses an engine so that tasks based on this engine will not run.
*EngineApi* | [**registerEngineInstanceNoAuth**](Apis/EngineApi.md#registerengineinstancenoauth) | **POST** /engine/instance/register | Register a new engine instance without authorization
*EngineApi* | [**replaceEngine**](Apis/EngineApi.md#replaceengine) | **POST** /admin/engine/{EngineID}/replace | This API replaced an engine so that tasks based on this engine will not run.
*EngineApi* | [**resumeBuild**](Apis/EngineApi.md#resumebuild) | **POST** /admin/build/{BuildID}/resume | This API resumes a build so that tasks based on this engine build will start running.
*EngineApi* | [**resumeEngine**](Apis/EngineApi.md#resumeengine) | **POST** /admin/engine/{EngineID}/resume | This API resumes a build so that tasks based on this engine build will start running.
*EngineApi* | [**terminateEngineInstance**](Apis/EngineApi.md#terminateengineinstance) | **POST** /engine/instance/{EngineInstanceID}/terminate | Delete the engine instance record
*EngineApi* | [**updateEngine**](Apis/EngineApi.md#updateengine) | **POST** /admin/engine/{EngineID}/update | This API updates the specified engine
*EngineApi* | [**updateEngineBuild**](Apis/EngineApi.md#updateenginebuild) | **POST** /admin/build/{BuildID}/update | This API updates the specified engine
*EngineApi* | [**updateEngineBuildState**](Apis/EngineApi.md#updateenginebuildstate) | **POST** /engine/build/{BuildID}/state | Update the Engine Build State
*EngineApi* | [**updateEngineCategory**](Apis/EngineApi.md#updateenginecategory) | **POST** /admin/engine/category/{EngineCategoryID}/update | This updates the specified engine category
*EngineApi* | [**updateEngineInstanceStatus**](Apis/EngineApi.md#updateengineinstancestatus) | **POST** /engine/instance/{EngineInstanceID}/updatestatus | Update the Engine Instance Status.  Heartbeat to communicate back to controller both aggregated work and delta work from last heartbeat
*EngineApi* | [**upsertEngineTemplate**](Apis/EngineApi.md#upsertenginetemplate) | **POST** /engine/{EngineID}/template/{EngineTemplateName} | Create or Update the template of the engine given its ID and template name
*FlowApi* | [**cleanAutomateRequests**](Apis/FlowApi.md#cleanautomaterequests) | **GET** /flowaction/requests/clean | Clean old automate requests.
*FlowApi* | [**createNodeRedContainerInfo**](Apis/FlowApi.md#createnoderedcontainerinfo) | **POST** /flow/nrcontainer/create | Create node-red container infomation
*FlowApi* | [**deleteAutomateContainer**](Apis/FlowApi.md#deleteautomatecontainer) | **POST** /flow/delete/{ContainerID} | Delete automate container.
*FlowApi* | [**updateAutomateRequestStatus**](Apis/FlowApi.md#updateautomaterequeststatus) | **POST** /flow/request/update | Put this automate request into update status mode. This automate request will be updated to new status.
*FlowApi* | [**updateAutomateStatus**](Apis/FlowApi.md#updateautomatestatus) | **POST** /flow/{HostID}/updatestatus | Get updated information to launch node-red container, terminate node-red container.
*HostApi* | [**drainHost**](Apis/HostApi.md#drainhost) | **POST** /host/{HostID}/drain | Put this host into drain mode.  A host in drain mode will not have work assigned to engines on the host.
*HostApi* | [**getHostCpuUsage**](Apis/HostApi.md#gethostcpuusage) | **GET** /hosts/cpu_usage | Get host cpu usage
*HostApi* | [**getHostDetail**](Apis/HostApi.md#gethostdetail) | **GET** /host/{HostID}/detail | Get the latest info of the host
*HostApi* | [**getHostMemoryUsage**](Apis/HostApi.md#gethostmemoryusage) | **GET** /engine/memory_usage | Get host memory usage
*HostApi* | [**getHostStatus**](Apis/HostApi.md#gethoststatus) | **GET** /host/{HostID}/status | Get the latest status of the host
*HostApi* | [**getHosts**](Apis/HostApi.md#gethosts) | **GET** /hosts | This provides a list of hosts in the system
*HostApi* | [**getHostsCounts**](Apis/HostApi.md#gethostscounts) | **GET** /hosts/counts | Get the server counts in a time-range
*HostApi* | [**getHostsCountsByType**](Apis/HostApi.md#gethostscountsbytype) | **GET** /hosts/counts_by_type | Get the server counts in a time-range
*HostApi* | [**getHostsLaunch**](Apis/HostApi.md#gethostslaunch) | **GET** /host/{HostID}/launch | This provides a list of host launches in the system
*HostApi* | [**hostAlert**](Apis/HostApi.md#hostalert) | **POST** /host/alert | Notifies the controller about a system alert.
*HostApi* | [**launchHost**](Apis/HostApi.md#launchhost) | **POST** /host/launch | Launch a new host with a particular server type
*HostApi* | [**pauseHost**](Apis/HostApi.md#pausehost) | **POST** /host/{HostID}/pause | Pause all engines on this host.
*HostApi* | [**registerEngineInstance**](Apis/HostApi.md#registerengineinstance) | **POST** /host/{HostID}/engine/register | Register a new engine instance
*HostApi* | [**registerHost**](Apis/HostApi.md#registerhost) | **POST** /host/register | Update the Host Status
*HostApi* | [**resumeHost**](Apis/HostApi.md#resumehost) | **POST** /host/{HostID}/resume | Resume all engines on this host.
*HostApi* | [**terminateHost**](Apis/HostApi.md#terminatehost) | **POST** /host/{HostID}/terminate | Delete the host/agent record.  Any work still running on this host will be restarted on other hosts.
*HostApi* | [**updateHostStatus**](Apis/HostApi.md#updatehoststatus) | **POST** /host/{HostID}/updatestatus | Update the Host Status
*ProcessApi* | [**addTask**](Apis/ProcessApi.md#addtask) | **POST** /proc/job/{JobID}/addtask | Adds a Task to a current job
*ProcessApi* | [**addTaskRoute**](Apis/ProcessApi.md#addtaskroute) | **POST** /proc/job/{JobID}/addtaskroute | Adds a Task Route to a current job
*ProcessApi* | [**createJob**](Apis/ProcessApi.md#createjob) | **POST** /proc/job/create | This creates a new Job
*ProcessApi* | [**deleteJob**](Apis/ProcessApi.md#deletejob) | **POST** /proc/job/{JobID}/delete | This API deletes the specified job
*ProcessApi* | [**deleteTask**](Apis/ProcessApi.md#deletetask) | **POST** /proc/task/{TaskID}/delete | This API deletes the specified task
*ProcessApi* | [**getEngineErrorTimeRanges**](Apis/ProcessApi.md#getengineerrortimeranges) | **GET** /proc/tasks/error/engine_error_time_ranges | This gets engine error count by error tasks grouped by time ranges and sorted by a range start time
*ProcessApi* | [**getJobDetail**](Apis/ProcessApi.md#getjobdetail) | **GET** /proc/job/{JobID}/detail | Gets Job Detail
*ProcessApi* | [**getJobDownload**](Apis/ProcessApi.md#getjobdownload) | **GET** /proc/job/{JobID}/download/{JobOutputName} | Returns the contents of the job's output
*ProcessApi* | [**getJobOutput**](Apis/ProcessApi.md#getjoboutput) | **GET** /proc/job/{JobID}/output/{JobOutputName} | Returns the contents of the job's output
*ProcessApi* | [**getJobOutputs**](Apis/ProcessApi.md#getjoboutputs) | **GET** /proc/job/{JobID}/outputs | Returns a list of output information about this job
*ProcessApi* | [**getJobPerformance**](Apis/ProcessApi.md#getjobperformance) | **GET** /proc/job/{JobID}/performance | This gets cpu/gpu, memory state of the hosts grouped by time ranges and sorted by a range start time
*ProcessApi* | [**getJobStatus**](Apis/ProcessApi.md#getjobstatus) | **GET** /proc/job/{JobID}/status | Gets Job Status
*ProcessApi* | [**getJobWorkRequests**](Apis/ProcessApi.md#getjobworkrequests) | **GET** /proc/job/{JobID}/workrequests | This provides a list of workrequests of a job
*ProcessApi* | [**getJobs**](Apis/ProcessApi.md#getjobs) | **GET** /proc/jobs | This gets a list of jobs
*ProcessApi* | [**getJobsOrganizationStats**](Apis/ProcessApi.md#getjobsorganizationstats) | **GET** /proc/jobs/stats/organization | This gets processing stats of the jobs by organization
*ProcessApi* | [**getJobsPerformance**](Apis/ProcessApi.md#getjobsperformance) | **GET** /proc/jobs/performance | This gets cpu/gpu, memory state of the hosts grouped by time ranges and sorted by a range start time
*ProcessApi* | [**getJobsStats**](Apis/ProcessApi.md#getjobsstats) | **GET** /proc/jobs/stats | This gets processing stats of the jobs
*ProcessApi* | [**getJobsTimeRangesStats**](Apis/ProcessApi.md#getjobstimerangesstats) | **GET** /proc/jobs/stats/time_ranges | This gets processing stats of the jobs grouped by time ranges and sorted by a range start time
*ProcessApi* | [**getRatePendingScheduledJobs**](Apis/ProcessApi.md#getratependingscheduledjobs) | **GET** /proc/scheduled_jobs/rate_pending_time_ranges | This gets the rate of pending scheduled jobs by time ranges
*ProcessApi* | [**getScheduledJobDetail**](Apis/ProcessApi.md#getscheduledjobdetail) | **GET** /proc/scheduled_job/{ScheduledJobID}/detail | This gets scheduled job detail
*ProcessApi* | [**getScheduledJobs**](Apis/ProcessApi.md#getscheduledjobs) | **GET** /proc/scheduled_jobs | This gets a list of scheduled jobs
*ProcessApi* | [**getServerErrorCounts**](Apis/ProcessApi.md#getservererrorcounts) | **GET** /proc/tasks/error/server_error_counts | Get server error counts in a time-range
*ProcessApi* | [**getTaskDetail**](Apis/ProcessApi.md#gettaskdetail) | **GET** /proc/task/{TaskID}/detail | Gets Task Detail
*ProcessApi* | [**getTaskDownload**](Apis/ProcessApi.md#gettaskdownload) | **GET** /proc/task/{TaskID}/download/{TaskOutputName} | Returns the contents of the task's output
*ProcessApi* | [**getTaskLogs**](Apis/ProcessApi.md#gettasklogs) | **GET** /proc/task/{TaskID}/logs | Gets logs associated with a task
*ProcessApi* | [**getTaskOutput**](Apis/ProcessApi.md#gettaskoutput) | **GET** /proc/task/{TaskID}/output/{TaskOutputName} | Returns the contents of the task's output
*ProcessApi* | [**getTaskOutputs**](Apis/ProcessApi.md#gettaskoutputs) | **GET** /proc/task/{TaskID}/outputs | Gets Task Output
*ProcessApi* | [**getTaskSyncBacklog**](Apis/ProcessApi.md#gettasksyncbacklog) | **GET** /proc/tasks/sync_backlog | Gets task sync backlog in a time-range
*ProcessApi* | [**getTasks**](Apis/ProcessApi.md#gettasks) | **GET** /proc/tasks | This gets a list of tasks based on the provided criteria
*ProcessApi* | [**getTasksErrorTypeCountByEngine**](Apis/ProcessApi.md#gettaskserrortypecountbyengine) | **GET** /proc/tasks/error/count_type_by_engine | This gets error type count by engines
*ProcessApi* | [**getTasksErrors**](Apis/ProcessApi.md#gettaskserrors) | **GET** /proc/tasks/errors | This provides a error list in a time range
*ProcessApi* | [**getTasksInstances**](Apis/ProcessApi.md#gettasksinstances) | **GET** /proc/tasks/instances/by_category_host | This gets processing stats of the tasks
*ProcessApi* | [**getTasksStats**](Apis/ProcessApi.md#gettasksstats) | **GET** /proc/tasks/stats | This gets processing stats of the tasks
*ProcessApi* | [**getTasksStatsCategories**](Apis/ProcessApi.md#gettasksstatscategories) | **GET** /proc/tasks/stats/categories | This gets processing stats of the tasks grouped by engine categories
*ProcessApi* | [**getTasksStatsEngines**](Apis/ProcessApi.md#gettasksstatsengines) | **GET** /proc/tasks/stats/engines | This gets processing stats of the tasks grouped by engine
*ProcessApi* | [**getTasksStatsOrganizations**](Apis/ProcessApi.md#gettasksstatsorganizations) | **GET** /proc/tasks/stats/organizations | This gets processing stats of the tasks grouped by engine, filter by organizations
*ProcessApi* | [**getTasksStatsTimeRanges**](Apis/ProcessApi.md#gettasksstatstimeranges) | **GET** /proc/tasks/stats/time_ranges | This gets processing stats of the tasks grouped by time ranges and sorted by a range start time
*ProcessApi* | [**getTotalPendingScheduledJobs**](Apis/ProcessApi.md#gettotalpendingscheduledjobs) | **GET** /proc/scheduled_jobs/total_pending_time_ranges | This gets the total pending scheduled jobs by time ranges
*ProcessApi* | [**getWorkRequest**](Apis/ProcessApi.md#getworkrequest) | **GET** /proc/workrequest/{WorkRequestID}/detail | This provides detail of workrequest
*ProcessApi* | [**launchJobTemplate**](Apis/ProcessApi.md#launchjobtemplate) | **POST** /proc/template/{TemplateID}/launch | This launch a job based on the given job template
*ProcessApi* | [**pushContentToEndpoint**](Apis/ProcessApi.md#pushcontenttoendpoint) | **POST** /proc/endpoint/{Endpoint} | Whatever is posted to this endpoint will be added to the child input folder(s) for the task_routes that have this endpoint.  If more than one task_routes have this endpoint, it will be added to all child input folders.
*ProcessApi* | [**recheckJobStatus**](Apis/ProcessApi.md#recheckjobstatus) | **GET** /proc/job/{JobID}/recheck_status | Recheck Job Status
*ProcessApi* | [**tasksStatusExport**](Apis/ProcessApi.md#tasksstatusexport) | **GET** /proc/tasks/stats/export | Export a task status report as a excel file
*ProcessApi* | [**updateTaskStatus**](Apis/ProcessApi.md#updatetaskstatus) | **POST** /proc/tasks/update_status | This updates the status for a bulk of tasks by taskID
*ProxyApi* | [**proxyGetWorkForEngineInstances**](Apis/ProxyApi.md#proxygetworkforengineinstances) | **POST** /proxy/{HostID}/getwork | Get work for engine instances running on the host
*ProxyApi* | [**proxyRegisterEngineInstances**](Apis/ProxyApi.md#proxyregisterengineinstances) | **POST** /proxy/{HostID}/register | Register engine instances running on the host
*ProxyApi* | [**proxyTerminateEngineInstances**](Apis/ProxyApi.md#proxyterminateengineinstances) | **POST** /proxy/{HostID}/terminate | Terminate engine instances running on this host.
*ProxyApi* | [**proxyUpdateEngineInstanceStatuses**](Apis/ProxyApi.md#proxyupdateengineinstancestatuses) | **POST** /proxy/{HostID}/update | Update statuses of engine instances running on the host
*ServiceApi* | [**createServiceInstance**](Apis/ServiceApi.md#createserviceinstance) | **POST** /service/instance/create | This creates a new service instance
*ServiceApi* | [**deleteServiceInstance**](Apis/ServiceApi.md#deleteserviceinstance) | **POST** /service/instance/{ServiceInstanceID}/delete | This deletes a service instance
*ServiceApi* | [**getResourcesForServiceInstance**](Apis/ServiceApi.md#getresourcesforserviceinstance) | **GET** /service/instance/{ServiceInstanceID}/resources | Get resources for service instance


<a name="documentation-for-models"></a>
## Documentation for Models

 - [AddEngineForResourceRequest](./Models/AddEngineForResourceRequest.md)
 - [AddEngineForResourceResponse](./Models/AddEngineForResourceResponse.md)
 - [AddEngineForResourceResponseResult](./Models/AddEngineForResourceResponseResult.md)
 - [AddServersToServerTypeRequest](./Models/AddServersToServerTypeRequest.md)
 - [AddServiceForResourceRequest](./Models/AddServiceForResourceRequest.md)
 - [AddServiceForResourceResponse](./Models/AddServiceForResourceResponse.md)
 - [AddServiceForResourceResponseResult](./Models/AddServiceForResourceResponseResult.md)
 - [AddTaskRequest](./Models/AddTaskRequest.md)
 - [AddTaskResponse](./Models/AddTaskResponse.md)
 - [AddTaskRouteDetail](./Models/AddTaskRouteDetail.md)
 - [AddTaskRouteRequest](./Models/AddTaskRouteRequest.md)
 - [AddTaskRouteResponse](./Models/AddTaskRouteResponse.md)
 - [AdminApplicationCreateRequest](./Models/AdminApplicationCreateRequest.md)
 - [AdminApplicationCreateResponse](./Models/AdminApplicationCreateResponse.md)
 - [AdminApplicationDeleteResponse](./Models/AdminApplicationDeleteResponse.md)
 - [AdminApplicationGetDetailResponse](./Models/AdminApplicationGetDetailResponse.md)
 - [AdminApplicationUpdateRequest](./Models/AdminApplicationUpdateRequest.md)
 - [AdminApplicationUpdateResponse](./Models/AdminApplicationUpdateResponse.md)
 - [AdminApplicationsGetResponse](./Models/AdminApplicationsGetResponse.md)
 - [AdminAuthRequest](./Models/AdminAuthRequest.md)
 - [AdminAuthRequestAuth](./Models/AdminAuthRequestAuth.md)
 - [AdminAuthResponse](./Models/AdminAuthResponse.md)
 - [AdminAuthResponseResult](./Models/AdminAuthResponseResult.md)
 - [AdminConfigResponse](./Models/AdminConfigResponse.md)
 - [AdminConfigSectionKeyResponse](./Models/AdminConfigSectionKeyResponse.md)
 - [AdminConfigSectionResponse](./Models/AdminConfigSectionResponse.md)
 - [AdminConfigUpdateRequest](./Models/AdminConfigUpdateRequest.md)
 - [AdminConfigUpdateResponse](./Models/AdminConfigUpdateResponse.md)
 - [AdminConfigUpdateSectionKeyRequest](./Models/AdminConfigUpdateSectionKeyRequest.md)
 - [AdminConfigUpdateSectionKeyResponse](./Models/AdminConfigUpdateSectionKeyResponse.md)
 - [AdminConfigUpdateSectionRequest](./Models/AdminConfigUpdateSectionRequest.md)
 - [AdminConfigUpdateSectionResponse](./Models/AdminConfigUpdateSectionResponse.md)
 - [AdminCoreCreateRequest](./Models/AdminCoreCreateRequest.md)
 - [AdminCoreCreateResponse](./Models/AdminCoreCreateResponse.md)
 - [AdminCoreGetDetailResponse](./Models/AdminCoreGetDetailResponse.md)
 - [AdminEngineConfigSectionKeyResponse](./Models/AdminEngineConfigSectionKeyResponse.md)
 - [AdminGetTokensResponse](./Models/AdminGetTokensResponse.md)
 - [AdminHostsGetResponse](./Models/AdminHostsGetResponse.md)
 - [AdminOperationRequest](./Models/AdminOperationRequest.md)
 - [AdminOperationResponse](./Models/AdminOperationResponse.md)
 - [AdminOrganizationCreateRequest](./Models/AdminOrganizationCreateRequest.md)
 - [AdminOrganizationCreateResponse](./Models/AdminOrganizationCreateResponse.md)
 - [AdminOrganizationGetDetailResponse](./Models/AdminOrganizationGetDetailResponse.md)
 - [AdminOrganizationGetTokensResponse](./Models/AdminOrganizationGetTokensResponse.md)
 - [AdminOrganizationUpdateRequest](./Models/AdminOrganizationUpdateRequest.md)
 - [AdminOrganizationUpdateResponse](./Models/AdminOrganizationUpdateResponse.md)
 - [AdminOrganizationsGetResponse](./Models/AdminOrganizationsGetResponse.md)
 - [AdminPermissionCreateRequest](./Models/AdminPermissionCreateRequest.md)
 - [AdminPermissionCreateResponse](./Models/AdminPermissionCreateResponse.md)
 - [AdminPermissionDetailResponse](./Models/AdminPermissionDetailResponse.md)
 - [AdminPermissionUpdateRequest](./Models/AdminPermissionUpdateRequest.md)
 - [AdminPermissionUpdateResponse](./Models/AdminPermissionUpdateResponse.md)
 - [AdminRoleCreateRequest](./Models/AdminRoleCreateRequest.md)
 - [AdminRoleCreateResponse](./Models/AdminRoleCreateResponse.md)
 - [AdminRoleDeleteResponse](./Models/AdminRoleDeleteResponse.md)
 - [AdminRoleDetailResponse](./Models/AdminRoleDetailResponse.md)
 - [AdminRoleUpdateRequest](./Models/AdminRoleUpdateRequest.md)
 - [AdminRoleUpdateResponse](./Models/AdminRoleUpdateResponse.md)
 - [AdminServiceConfigResponse](./Models/AdminServiceConfigResponse.md)
 - [AdminServiceConfigSectionKeyResponse](./Models/AdminServiceConfigSectionKeyResponse.md)
 - [AdminServiceConfigSectionResponse](./Models/AdminServiceConfigSectionResponse.md)
 - [AdminStatusDetail](./Models/AdminStatusDetail.md)
 - [AdminTokenCreateRequest](./Models/AdminTokenCreateRequest.md)
 - [AdminTokenCreateResponse](./Models/AdminTokenCreateResponse.md)
 - [AdminTokenDeleteResponse](./Models/AdminTokenDeleteResponse.md)
 - [AdminTokenPermissionsGetResponse](./Models/AdminTokenPermissionsGetResponse.md)
 - [AdminTokenUpdateRequest](./Models/AdminTokenUpdateRequest.md)
 - [AdminTokenUpdateResponse](./Models/AdminTokenUpdateResponse.md)
 - [AdminUserCreateRequest](./Models/AdminUserCreateRequest.md)
 - [AdminUserCreateResponse](./Models/AdminUserCreateResponse.md)
 - [AdminUserDeleteResponse](./Models/AdminUserDeleteResponse.md)
 - [AdminUserGetDetailResponse](./Models/AdminUserGetDetailResponse.md)
 - [AdminUserGetTokensResponse](./Models/AdminUserGetTokensResponse.md)
 - [AdminUserLoginRequest](./Models/AdminUserLoginRequest.md)
 - [AdminUserLoginResponse](./Models/AdminUserLoginResponse.md)
 - [AdminUserOAuth2LoginRequest](./Models/AdminUserOAuth2LoginRequest.md)
 - [AdminUserPasswordForgotRequest](./Models/AdminUserPasswordForgotRequest.md)
 - [AdminUserPasswordForgotResponse](./Models/AdminUserPasswordForgotResponse.md)
 - [AdminUserPasswordResetRequest](./Models/AdminUserPasswordResetRequest.md)
 - [AdminUserPasswordResetResponse](./Models/AdminUserPasswordResetResponse.md)
 - [AdminUserPasswordUpdateRequest](./Models/AdminUserPasswordUpdateRequest.md)
 - [AdminUserPasswordUpdateResponse](./Models/AdminUserPasswordUpdateResponse.md)
 - [AdminUserPermissionsGetResponse](./Models/AdminUserPermissionsGetResponse.md)
 - [AdminUserRegisterRequest](./Models/AdminUserRegisterRequest.md)
 - [AdminUserRegisterResponse](./Models/AdminUserRegisterResponse.md)
 - [AdminUserUpdateRequest](./Models/AdminUserUpdateRequest.md)
 - [AdminUserUpdateResponse](./Models/AdminUserUpdateResponse.md)
 - [AdminUsersGetResponse](./Models/AdminUsersGetResponse.md)
 - [AdminUsersPermissionsGetResponse](./Models/AdminUsersPermissionsGetResponse.md)
 - [AdminUsersRolesGetResponse](./Models/AdminUsersRolesGetResponse.md)
 - [ApplicationDetail](./Models/ApplicationDetail.md)
 - [ApplicationStatusEnum](./Models/ApplicationStatusEnum.md)
 - [ApplicationTypeEnum](./Models/ApplicationTypeEnum.md)
 - [AuthActionEnum](./Models/AuthActionEnum.md)
 - [BacklogSummaryDetail](./Models/BacklogSummaryDetail.md)
 - [BuildDetail](./Models/BuildDetail.md)
 - [ChartTypeEnum](./Models/ChartTypeEnum.md)
 - [ChunkCountInfo](./Models/ChunkCountInfo.md)
 - [ConfigSection](./Models/ConfigSection.md)
 - [ConfigSectionEnum](./Models/ConfigSectionEnum.md)
 - [ConfigSectionKey](./Models/ConfigSectionKey.md)
 - [ContainerStatus](./Models/ContainerStatus.md)
 - [ContainerTypeEnum](./Models/ContainerTypeEnum.md)
 - [CoreDetail](./Models/CoreDetail.md)
 - [CreateApplicationDetail](./Models/CreateApplicationDetail.md)
 - [CreateBuildDetail](./Models/CreateBuildDetail.md)
 - [CreateBuildRequest](./Models/CreateBuildRequest.md)
 - [CreateBuildResponse](./Models/CreateBuildResponse.md)
 - [CreateCoreDetail](./Models/CreateCoreDetail.md)
 - [CreateEngineCategoryDetail](./Models/CreateEngineCategoryDetail.md)
 - [CreateEngineCategoryResponse](./Models/CreateEngineCategoryResponse.md)
 - [CreateEngineDetail](./Models/CreateEngineDetail.md)
 - [CreateEngineRequest](./Models/CreateEngineRequest.md)
 - [CreateEngineResponse](./Models/CreateEngineResponse.md)
 - [CreateJobDetail](./Models/CreateJobDetail.md)
 - [CreateJobForEngineRequest](./Models/CreateJobForEngineRequest.md)
 - [CreateJobForEngineResponse](./Models/CreateJobForEngineResponse.md)
 - [CreateJobRequest](./Models/CreateJobRequest.md)
 - [CreateJobResponse](./Models/CreateJobResponse.md)
 - [CreateJobsAction](./Models/CreateJobsAction.md)
 - [CreateLicenseDetail](./Models/CreateLicenseDetail.md)
 - [CreateNodRedContainerDetail](./Models/CreateNodRedContainerDetail.md)
 - [CreateOrganizationDetail](./Models/CreateOrganizationDetail.md)
 - [CreatePermissionDetail](./Models/CreatePermissionDetail.md)
 - [CreateResourceDetail](./Models/CreateResourceDetail.md)
 - [CreateResourceRequest](./Models/CreateResourceRequest.md)
 - [CreateResourceResponse](./Models/CreateResourceResponse.md)
 - [CreateRoleDetail](./Models/CreateRoleDetail.md)
 - [CreateServerTypeDetail](./Models/CreateServerTypeDetail.md)
 - [CreateServerTypeEngineRunningDetail](./Models/CreateServerTypeEngineRunningDetail.md)
 - [CreateServerTypeEngineRunningRequest](./Models/CreateServerTypeEngineRunningRequest.md)
 - [CreateServerTypeEngineRunningResponse](./Models/CreateServerTypeEngineRunningResponse.md)
 - [CreateServerTypeRequest](./Models/CreateServerTypeRequest.md)
 - [CreateServerTypeResponse](./Models/CreateServerTypeResponse.md)
 - [CreateServiceDetail](./Models/CreateServiceDetail.md)
 - [CreateServiceInstanceDetail](./Models/CreateServiceInstanceDetail.md)
 - [CreateServiceRequest](./Models/CreateServiceRequest.md)
 - [CreateServiceResponse](./Models/CreateServiceResponse.md)
 - [CreateTDODetail](./Models/CreateTDODetail.md)
 - [CreateTaskDetail](./Models/CreateTaskDetail.md)
 - [CreateTaskIOInfo](./Models/CreateTaskIOInfo.md)
 - [CreateTokenDetail](./Models/CreateTokenDetail.md)
 - [CreateUserDetail](./Models/CreateUserDetail.md)
 - [DeleteJobRequest](./Models/DeleteJobRequest.md)
 - [DeleteServerTypeRequest](./Models/DeleteServerTypeRequest.md)
 - [DesiredServersToServerTypeRequest](./Models/DesiredServersToServerTypeRequest.md)
 - [DockerRegistry](./Models/DockerRegistry.md)
 - [DrainHostRequest](./Models/DrainHostRequest.md)
 - [EngineBuildStateEnum](./Models/EngineBuildStateEnum.md)
 - [EngineCategoryDetail](./Models/EngineCategoryDetail.md)
 - [EngineContainerCount](./Models/EngineContainerCount.md)
 - [EngineContainerGroupByEnum](./Models/EngineContainerGroupByEnum.md)
 - [EngineDetail](./Models/EngineDetail.md)
 - [EngineErrorChartTypeEnum](./Models/EngineErrorChartTypeEnum.md)
 - [EngineErrorTimeRangesCountsInfo](./Models/EngineErrorTimeRangesCountsInfo.md)
 - [EngineInstanceActionEnum](./Models/EngineInstanceActionEnum.md)
 - [EngineInstanceInfo](./Models/EngineInstanceInfo.md)
 - [EngineInstanceRegistrationInfo](./Models/EngineInstanceRegistrationInfo.md)
 - [EngineInstanceStatus](./Models/EngineInstanceStatus.md)
 - [EngineInstanceStatusModeEnum](./Models/EngineInstanceStatusModeEnum.md)
 - [EngineInstanceWorkDetailsResponse](./Models/EngineInstanceWorkDetailsResponse.md)
 - [EngineInstanceWorkDetailsResponseResult](./Models/EngineInstanceWorkDetailsResponseResult.md)
 - [EngineInstanceWorkItem](./Models/EngineInstanceWorkItem.md)
 - [EngineInstanceWorkRequest](./Models/EngineInstanceWorkRequest.md)
 - [EngineInstanceWorkRequestResponse](./Models/EngineInstanceWorkRequestResponse.md)
 - [EngineInstanceWorkRequestResponseResult](./Models/EngineInstanceWorkRequestResponseResult.md)
 - [EngineLaunchDetail](./Models/EngineLaunchDetail.md)
 - [EngineOperationStatusResponse](./Models/EngineOperationStatusResponse.md)
 - [EngineRegistrationActionEnum](./Models/EngineRegistrationActionEnum.md)
 - [EngineStateEnum](./Models/EngineStateEnum.md)
 - [EngineStatusEnum](./Models/EngineStatusEnum.md)
 - [EngineTemplate](./Models/EngineTemplate.md)
 - [EngineTemplates](./Models/EngineTemplates.md)
 - [EngineToolkitTimestamps](./Models/EngineToolkitTimestamps.md)
 - [EngineTypeEnum](./Models/EngineTypeEnum.md)
 - [EnvKeyValue](./Models/EnvKeyValue.md)
 - [Error](./Models/Error.md)
 - [FailureReasonEnum](./Models/FailureReasonEnum.md)
 - [GPUEnum](./Models/GPUEnum.md)
 - [GetAdminServiceInstancesByServiceResponse](./Models/GetAdminServiceInstancesByServiceResponse.md)
 - [GetAdminServiceInstancesResponse](./Models/GetAdminServiceInstancesResponse.md)
 - [GetAdminServiceResponse](./Models/GetAdminServiceResponse.md)
 - [GetAdminServicesResponse](./Models/GetAdminServicesResponse.md)
 - [GetAdminServicesResponseResult](./Models/GetAdminServicesResponseResult.md)
 - [GetApplicationsResponse](./Models/GetApplicationsResponse.md)
 - [GetBacklogSummaryResponse](./Models/GetBacklogSummaryResponse.md)
 - [GetCoresResponse](./Models/GetCoresResponse.md)
 - [GetEngineBuildResponse](./Models/GetEngineBuildResponse.md)
 - [GetEngineBuildsResponse](./Models/GetEngineBuildsResponse.md)
 - [GetEngineCategoriesResponse](./Models/GetEngineCategoriesResponse.md)
 - [GetEngineCategoryDetailResponse](./Models/GetEngineCategoryDetailResponse.md)
 - [GetEngineContainerCountResponse](./Models/GetEngineContainerCountResponse.md)
 - [GetEngineDetailResponse](./Models/GetEngineDetailResponse.md)
 - [GetEngineErrorTimeRangesResponse](./Models/GetEngineErrorTimeRangesResponse.md)
 - [GetEngineInstanceListResponse](./Models/GetEngineInstanceListResponse.md)
 - [GetEngineInstancesResponse](./Models/GetEngineInstancesResponse.md)
 - [GetEngineLaunchResponse](./Models/GetEngineLaunchResponse.md)
 - [GetEngineLaunchesResponse](./Models/GetEngineLaunchesResponse.md)
 - [GetEnginesForResourceResponse](./Models/GetEnginesForResourceResponse.md)
 - [GetEnginesResponse](./Models/GetEnginesResponse.md)
 - [GetHostCPUUsageResponse](./Models/GetHostCPUUsageResponse.md)
 - [GetHostLaunchResponse](./Models/GetHostLaunchResponse.md)
 - [GetHostMemoryUsageResponse](./Models/GetHostMemoryUsageResponse.md)
 - [GetJobDetailResponse](./Models/GetJobDetailResponse.md)
 - [GetJobListResponse](./Models/GetJobListResponse.md)
 - [GetJobOutputResponse](./Models/GetJobOutputResponse.md)
 - [GetJobOutputsResponse](./Models/GetJobOutputsResponse.md)
 - [GetJobPerformanceResponse](./Models/GetJobPerformanceResponse.md)
 - [GetJobStatusResponse](./Models/GetJobStatusResponse.md)
 - [GetJobWorkRequestResponse](./Models/GetJobWorkRequestResponse.md)
 - [GetJobsBacklogCountResponse](./Models/GetJobsBacklogCountResponse.md)
 - [GetJobsOrganizationStatsResponse](./Models/GetJobsOrganizationStatsResponse.md)
 - [GetJobsPerformanceResponse](./Models/GetJobsPerformanceResponse.md)
 - [GetJobsStatsResponse](./Models/GetJobsStatsResponse.md)
 - [GetJobsTimeRangesStatsResponse](./Models/GetJobsTimeRangesStatsResponse.md)
 - [GetLicensesResponse](./Models/GetLicensesResponse.md)
 - [GetMappingsForResourceResponse](./Models/GetMappingsForResourceResponse.md)
 - [GetRatePendingScheduledJobsResponse](./Models/GetRatePendingScheduledJobsResponse.md)
 - [GetResourceResponse](./Models/GetResourceResponse.md)
 - [GetResourcesForEngineInstanceResponse](./Models/GetResourcesForEngineInstanceResponse.md)
 - [GetResourcesForEngineInstanceResponseResult](./Models/GetResourcesForEngineInstanceResponseResult.md)
 - [GetResourcesForEngineResponse](./Models/GetResourcesForEngineResponse.md)
 - [GetResourcesForHostResponse](./Models/GetResourcesForHostResponse.md)
 - [GetResourcesForServiceInstanceResponse](./Models/GetResourcesForServiceInstanceResponse.md)
 - [GetResourcesForServiceResponse](./Models/GetResourcesForServiceResponse.md)
 - [GetResourcesResponse](./Models/GetResourcesResponse.md)
 - [GetScheduledJobDetailResponse](./Models/GetScheduledJobDetailResponse.md)
 - [GetScheduledJobsResponse](./Models/GetScheduledJobsResponse.md)
 - [GetServerErrorCountsResponse](./Models/GetServerErrorCountsResponse.md)
 - [GetServerTypeResponse](./Models/GetServerTypeResponse.md)
 - [GetServerTypeRunningEngineDetailResponse](./Models/GetServerTypeRunningEngineDetailResponse.md)
 - [GetServerTypeRunningEnginesResponse](./Models/GetServerTypeRunningEnginesResponse.md)
 - [GetServerTypesResponse](./Models/GetServerTypesResponse.md)
 - [GetServiceInstancesResponse](./Models/GetServiceInstancesResponse.md)
 - [GetTaskDetailResponse](./Models/GetTaskDetailResponse.md)
 - [GetTaskErrorsResponse](./Models/GetTaskErrorsResponse.md)
 - [GetTaskOutputResponse](./Models/GetTaskOutputResponse.md)
 - [GetTaskOutputsResponse](./Models/GetTaskOutputsResponse.md)
 - [GetTaskSyncBacklogResponse](./Models/GetTaskSyncBacklogResponse.md)
 - [GetTaskWorkRequestResponse](./Models/GetTaskWorkRequestResponse.md)
 - [GetTasksCategoriesStatsResponse](./Models/GetTasksCategoriesStatsResponse.md)
 - [GetTasksEnginesStatsResponse](./Models/GetTasksEnginesStatsResponse.md)
 - [GetTasksErrorTypeCountByEngineResponse](./Models/GetTasksErrorTypeCountByEngineResponse.md)
 - [GetTasksInstancesResponse](./Models/GetTasksInstancesResponse.md)
 - [GetTasksResponse](./Models/GetTasksResponse.md)
 - [GetTasksStatsOrganizationsResponse](./Models/GetTasksStatsOrganizationsResponse.md)
 - [GetTasksStatsResponse](./Models/GetTasksStatsResponse.md)
 - [GetTasksTimeRangesStatsResponse](./Models/GetTasksTimeRangesStatsResponse.md)
 - [GetTotalPendingScheduledJobsResponse](./Models/GetTotalPendingScheduledJobsResponse.md)
 - [HostAction](./Models/HostAction.md)
 - [HostActionEnum](./Models/HostActionEnum.md)
 - [HostActionLaunch](./Models/HostActionLaunch.md)
 - [HostActionLaunchContainerConfig](./Models/HostActionLaunchContainerConfig.md)
 - [HostActionModeEnum](./Models/HostActionModeEnum.md)
 - [HostActionNodeRedLaunch](./Models/HostActionNodeRedLaunch.md)
 - [HostActionNodeRedTerminate](./Models/HostActionNodeRedTerminate.md)
 - [HostActionTerminate](./Models/HostActionTerminate.md)
 - [HostAlertRequest](./Models/HostAlertRequest.md)
 - [HostCPUUsageInfo](./Models/HostCPUUsageInfo.md)
 - [HostDetail](./Models/HostDetail.md)
 - [HostDrainReasonEnum](./Models/HostDrainReasonEnum.md)
 - [HostLaunchConfig](./Models/HostLaunchConfig.md)
 - [HostLaunchControllerConfig](./Models/HostLaunchControllerConfig.md)
 - [HostLaunchDetail](./Models/HostLaunchDetail.md)
 - [HostLaunchNFSConfig](./Models/HostLaunchNFSConfig.md)
 - [HostLaunchPostgresConfig](./Models/HostLaunchPostgresConfig.md)
 - [HostLaunchRegistryConfig](./Models/HostLaunchRegistryConfig.md)
 - [HostMemoryUsageInfo](./Models/HostMemoryUsageInfo.md)
 - [HostMountInfo](./Models/HostMountInfo.md)
 - [HostMountTypeEnum](./Models/HostMountTypeEnum.md)
 - [HostPreloadEngine](./Models/HostPreloadEngine.md)
 - [HostRegisterRequest](./Models/HostRegisterRequest.md)
 - [HostRegisterResponse](./Models/HostRegisterResponse.md)
 - [HostRegisterResponseConfigProperties](./Models/HostRegisterResponseConfigProperties.md)
 - [HostStatus](./Models/HostStatus.md)
 - [HostStatusContainer](./Models/HostStatusContainer.md)
 - [HostTerminationReasonEnum](./Models/HostTerminationReasonEnum.md)
 - [HostsCountByType](./Models/HostsCountByType.md)
 - [HostsCounts](./Models/HostsCounts.md)
 - [HostsCountsByTypeResponse](./Models/HostsCountsByTypeResponse.md)
 - [HostsCountsResponse](./Models/HostsCountsResponse.md)
 - [JobBacklogCount](./Models/JobBacklogCount.md)
 - [JobDetail](./Models/JobDetail.md)
 - [JobOutput](./Models/JobOutput.md)
 - [JobOutputs](./Models/JobOutputs.md)
 - [JobPerformanceInfo](./Models/JobPerformanceInfo.md)
 - [JobStatus](./Models/JobStatus.md)
 - [JobStatusEnum](./Models/JobStatusEnum.md)
 - [JobTaskStatusChartTypeEnum](./Models/JobTaskStatusChartTypeEnum.md)
 - [JobWorkRequest](./Models/JobWorkRequest.md)
 - [JobsCountsInfo](./Models/JobsCountsInfo.md)
 - [JobsEnginesCountsInfo](./Models/JobsEnginesCountsInfo.md)
 - [JobsHostsCountsInfo](./Models/JobsHostsCountsInfo.md)
 - [JobsOrganizationCountsInfo](./Models/JobsOrganizationCountsInfo.md)
 - [JobsTimeRangesCountsInfo](./Models/JobsTimeRangesCountsInfo.md)
 - [LaunchActionEnum](./Models/LaunchActionEnum.md)
 - [LaunchHostRequest](./Models/LaunchHostRequest.md)
 - [LaunchJobTemplateRequest](./Models/LaunchJobTemplateRequest.md)
 - [LaunchJobTemplateResponse](./Models/LaunchJobTemplateResponse.md)
 - [LaunchStatusEnum](./Models/LaunchStatusEnum.md)
 - [LicenseDetail](./Models/LicenseDetail.md)
 - [LoadBalancerDetail](./Models/LoadBalancerDetail.md)
 - [OrganizationDetail](./Models/OrganizationDetail.md)
 - [PauseEngineRequest](./Models/PauseEngineRequest.md)
 - [PermissionDetail](./Models/PermissionDetail.md)
 - [PermissionTypeEnum](./Models/PermissionTypeEnum.md)
 - [RatePendingScheduledJobInfo](./Models/RatePendingScheduledJobInfo.md)
 - [RecheckJobStatusResponse](./Models/RecheckJobStatusResponse.md)
 - [RegisterUserDetail](./Models/RegisterUserDetail.md)
 - [RemoveEngineForResourceRequest](./Models/RemoveEngineForResourceRequest.md)
 - [RemoveEngineForResourceResponse](./Models/RemoveEngineForResourceResponse.md)
 - [RemoveServersToServerTypeRequest](./Models/RemoveServersToServerTypeRequest.md)
 - [ReplaceEngineRequest](./Models/ReplaceEngineRequest.md)
 - [ResourceBindingTypeEnum](./Models/ResourceBindingTypeEnum.md)
 - [ResourceDetail](./Models/ResourceDetail.md)
 - [ResourceMappingDetail](./Models/ResourceMappingDetail.md)
 - [ResourceMappingStateEnum](./Models/ResourceMappingStateEnum.md)
 - [ResourceRecoveryStrategyEnum](./Models/ResourceRecoveryStrategyEnum.md)
 - [ResourceStateEnum](./Models/ResourceStateEnum.md)
 - [ResourceTypeEnum](./Models/ResourceTypeEnum.md)
 - [ResumeEngineRequest](./Models/ResumeEngineRequest.md)
 - [RoleDetail](./Models/RoleDetail.md)
 - [RunModeEnum](./Models/RunModeEnum.md)
 - [SchedulePartDetail](./Models/SchedulePartDetail.md)
 - [SchedulePartsDayEnum](./Models/SchedulePartsDayEnum.md)
 - [SchedulePartsTypeEnum](./Models/SchedulePartsTypeEnum.md)
 - [ScheduleRepeatIntervalEnum](./Models/ScheduleRepeatIntervalEnum.md)
 - [ScheduleRunModeEnum](./Models/ScheduleRunModeEnum.md)
 - [ScheduledJobDetail](./Models/ScheduledJobDetail.md)
 - [ScheduledProcessDetail](./Models/ScheduledProcessDetail.md)
 - [ScheduledProcessTypeEnum](./Models/ScheduledProcessTypeEnum.md)
 - [ServerErrorChartTypeEnum](./Models/ServerErrorChartTypeEnum.md)
 - [ServerErrorCountInfo](./Models/ServerErrorCountInfo.md)
 - [ServerProviderEnum](./Models/ServerProviderEnum.md)
 - [ServerTypeDetail](./Models/ServerTypeDetail.md)
 - [ServerTypeEngineRunningDetail](./Models/ServerTypeEngineRunningDetail.md)
 - [ServiceDetail](./Models/ServiceDetail.md)
 - [ServiceInstanceCreateRequest](./Models/ServiceInstanceCreateRequest.md)
 - [ServiceInstanceCreateResponse](./Models/ServiceInstanceCreateResponse.md)
 - [ServiceInstanceDeleteResponse](./Models/ServiceInstanceDeleteResponse.md)
 - [ServiceInstanceDetail](./Models/ServiceInstanceDetail.md)
 - [ServiceStatusEnum](./Models/ServiceStatusEnum.md)
 - [ServiceTypeEnum](./Models/ServiceTypeEnum.md)
 - [SortOrderEnum](./Models/SortOrderEnum.md)
 - [StatusFormatEnum](./Models/StatusFormatEnum.md)
 - [TaskActionEnum](./Models/TaskActionEnum.md)
 - [TaskDetail](./Models/TaskDetail.md)
 - [TaskErrorInfo](./Models/TaskErrorInfo.md)
 - [TaskIO](./Models/TaskIO.md)
 - [TaskIOFolder](./Models/TaskIOFolder.md)
 - [TaskIOInfo](./Models/TaskIOInfo.md)
 - [TaskIOModeEnum](./Models/TaskIOModeEnum.md)
 - [TaskIOStatus](./Models/TaskIOStatus.md)
 - [TaskIOTypeEnum](./Models/TaskIOTypeEnum.md)
 - [TaskOutput](./Models/TaskOutput.md)
 - [TaskOutputs](./Models/TaskOutputs.md)
 - [TaskProcessedStats](./Models/TaskProcessedStats.md)
 - [TaskRouteDetail](./Models/TaskRouteDetail.md)
 - [TaskStatusDetail](./Models/TaskStatusDetail.md)
 - [TaskStatusEnum](./Models/TaskStatusEnum.md)
 - [TaskSyncBacklogInfo](./Models/TaskSyncBacklogInfo.md)
 - [TaskWorkRequest](./Models/TaskWorkRequest.md)
 - [TasksCategoriesCountsInfo](./Models/TasksCategoriesCountsInfo.md)
 - [TasksCountsInfo](./Models/TasksCountsInfo.md)
 - [TasksEnginesCountsInfo](./Models/TasksEnginesCountsInfo.md)
 - [TasksErrorTypeCountByEngineInfo](./Models/TasksErrorTypeCountByEngineInfo.md)
 - [TasksInstanceCountInfo](./Models/TasksInstanceCountInfo.md)
 - [TasksOrganizationsStatsCount](./Models/TasksOrganizationsStatsCount.md)
 - [TasksStatusUpdateRequest](./Models/TasksStatusUpdateRequest.md)
 - [TasksStatusUpdateResponse](./Models/TasksStatusUpdateResponse.md)
 - [TasksTimeRangesCountsInfo](./Models/TasksTimeRangesCountsInfo.md)
 - [TerminateHostRequest](./Models/TerminateHostRequest.md)
 - [TokenDetail](./Models/TokenDetail.md)
 - [TokenTypeEnum](./Models/TokenTypeEnum.md)
 - [TotalPendingScheduledJobInfo](./Models/TotalPendingScheduledJobInfo.md)
 - [UpdateApplicationDetail](./Models/UpdateApplicationDetail.md)
 - [UpdateBuildResponse](./Models/UpdateBuildResponse.md)
 - [UpdateEngineBuildStateRequest](./Models/UpdateEngineBuildStateRequest.md)
 - [UpdateEngineCategoryResponse](./Models/UpdateEngineCategoryResponse.md)
 - [UpdateEngineDetail](./Models/UpdateEngineDetail.md)
 - [UpdateEngineRequest](./Models/UpdateEngineRequest.md)
 - [UpdateEngineResponse](./Models/UpdateEngineResponse.md)
 - [UpdateEnginesForResourceRequest](./Models/UpdateEnginesForResourceRequest.md)
 - [UpdateEnginesForResourceResponse](./Models/UpdateEnginesForResourceResponse.md)
 - [UpdateNodeRedRequestDetail](./Models/UpdateNodeRedRequestDetail.md)
 - [UpdateOrganizationDetail](./Models/UpdateOrganizationDetail.md)
 - [UpdatePermissionDetail](./Models/UpdatePermissionDetail.md)
 - [UpdateResourceDetail](./Models/UpdateResourceDetail.md)
 - [UpdateResourceMappingStateRequest](./Models/UpdateResourceMappingStateRequest.md)
 - [UpdateResourceMappingStateResponse](./Models/UpdateResourceMappingStateResponse.md)
 - [UpdateResourceRequest](./Models/UpdateResourceRequest.md)
 - [UpdateResourceResponse](./Models/UpdateResourceResponse.md)
 - [UpdateResourceStateRequest](./Models/UpdateResourceStateRequest.md)
 - [UpdateResourceStateResponse](./Models/UpdateResourceStateResponse.md)
 - [UpdateRoleDetail](./Models/UpdateRoleDetail.md)
 - [UpdateServerTypeEngineRunningRequest](./Models/UpdateServerTypeEngineRunningRequest.md)
 - [UpdateServerTypeEngineRunningResponse](./Models/UpdateServerTypeEngineRunningResponse.md)
 - [UpdateServerTypeResponse](./Models/UpdateServerTypeResponse.md)
 - [UpdateServiceDetail](./Models/UpdateServiceDetail.md)
 - [UpdateServiceRequest](./Models/UpdateServiceRequest.md)
 - [UpdateServiceResponse](./Models/UpdateServiceResponse.md)
 - [UpdateTokenDetail](./Models/UpdateTokenDetail.md)
 - [UpdateUserDetail](./Models/UpdateUserDetail.md)
 - [UserDetail](./Models/UserDetail.md)
 - [UserStatusEnum](./Models/UserStatusEnum.md)
 - [WorkRequestStatusEnum](./Models/WorkRequestStatusEnum.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="api_key"></a>
### api_key

- **Type**: API key
- **API key parameter name**: api_key
- **Location**: HTTP header

