| Name | Type | Default Value | Environment Var | Description |
 | :--- | :--- | :--- | :--- | :--- |
 | *db_dbname* | bool | postgres | _AIWARE_DB_DBNAME_ | This specifies the database name to use for aiWARE Edge |
| *db_image* | string | postgres:12 | _AIWARE_DB_IMAGE_ | This specifies docker image to use for the database service.  This must be a postgres variant. |
| *db_password* | string | postgres | _AIWARE_DB_USERNAME_ | *Secure* The DB Username to use for access to the database |
| *db_port* | int64 | 5432 | _AIWARE_DB_PORT_ | The port to use for the database |
| *db_root* | string | /opt/aiware/postgres | _AIWARE_DB_ROOT_ | This specifies the filesystem root to use for the database |
| *db_username* | string | postgres | _AIWARE_DB_USERNAME_ | The DB Username to use for access to the database |
| *es_clustername* | string | aiware-elasticsearch | _AIWARE_ES_CLUSTERNAME_ | This default cluster name to use for Elasticsearch |
| *es_data* | string | /opt/aiware/elasticsearch | _AIWARE_ES_DATA_ | This specifies the filesystem root to use for Elasticsearch |
| *es_discoverytype* | string | single-mode | _AIWARE_ES_DISCOVERYTYPE_ | The default mode to use for ElasticSearch (single vs cluster) |
| *es_heapsize* | string | 1g | _AIWARE_ES_HEAPSIZE_ | The heap size to use for ElasticSearch |
| *es_image* | string | registry.central.aiware.com/elasticsearch-core:7.1.1 | _AIWARE_ES_IMAGE_ | This specifies docker image to use for Elasticsearch |
| *es_master* | bool | true | _AIWARE_ES_MASTER_ | The default node type of new Elasticsearch nodes |
| *es_memlock* | bool | true | _AIWARE_ES_MEMORYLOCK_ | Allow Elasticsearch JVM to lock the heap in memory through mlockall |
| *es_port* | int64 | 9200 | _AIWARE_ES_PORT_ | The port to use for Elasticsearch |
| *es_version* | string | 7.7.1 | _AIWARE_ES_VERSION_ | This specifies docker image version to use for Elasticsearch |
| *install.extensions* | string | pg_stat_statements,pg_trgm,uuid-ossp,hstore,pg_buffercache |  | This will install these extensions on every database created by resources |
| *name.mode* | bool | true |  | If true, use the name as specified in the config.  This can be a security issue and may cause create databases to fail if that name is already taken. |
