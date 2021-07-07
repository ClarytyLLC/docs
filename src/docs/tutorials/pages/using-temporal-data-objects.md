# Using Temporal Data Objects (TDOs)

**APPROXIMATE READING TIME: 8 MINUTES**

>**Tip** Before getting started, we recommend to read about [training an engine](#training-an-engine) and [working with jobs](#working-with-jobs).

## Subject Description <!-- {docsify-ignore} -->

In this tutorial we will learn together how to use TDOs. In aiWARE, jobs and job-related artifacts (such as media files) need to be associated with a container called a [Temporal Data Object (TDO)](https://api.veritone.com/v3/graphqldocs/temporaldataobject.doc.html). The [Temporal Data Object](https://api.veritone.com/v3/graphqldocs/temporaldataobject.doc.html) is an all-purpose container object, that stores information about jobs, assets, and temporal data (among other things).

You must note the following about a TDO before you start working on it:

- We manage the lifecycle of a TDO ourselves. Though some engines may create a TDO on their own, we will mostly submit a TDO that we created while starting a job using `createJob()`.
- We must [delete a TDO](#step4-delete-a-tdo-and-all-assets) or [purge its contents](#step-3-remove-tdo-content) when we do not need the TDO; else, it lives permanently.
- The TDOs we create are visible and can be used only by members of our organization.
- We will often [create an empty TDO](#step-1-create-an-empty-tdo), and then run an ingestion task on it to populate it with a media asset.
- When processing a media file referenced in our TDO, a engine will produce its own output (such as transcription output) in the form of a `vtn-standard` asset. The output is attached to our TDO *by reference*.
- A TDO can contain multiple assets of multiple types. (See [Asset Types](https://docs.veritone.com/#/apis/tutorials/asset-types?id=asset-types) for more information.)



#### INPUT OBJECTS

A TDO can be used in the following input objects in GraphQL schema:

- [CreateAssetInTDO](https://api.veritone.com/v3/graphqldocs/createassetintdo.doc.html)
- [CreateExportRequestForTDO](https://api.veritone.com/v3/graphqldocs/createexportrequestfortdo.doc.html)
- [CreateTDO](https://api.veritone.com/v3/graphqldocs/createtdo.doc.html)
- [CreateTDOContentTemplateWithTDO](https://api.veritone.com/v3/graphqldocs/createtdocontenttemplatewithtdo.doc.html)
- [CreateTDOForJob](https://api.veritone.com/v3/graphqldocs/createtdoforjob.doc.html)
- [CreateTDOInJob](https://api.veritone.com/v3/graphqldocs/createtdoinjob.doc.html)
- [CreateTDOWithAsset](https://api.veritone.com/v3/graphqldocs/createtdowithasset.doc.html)
- [SetTDOSourceData](https://api.veritone.com/v3/graphqldocs/settdosourcedata.doc.html)
- [UpdateTDO](https://api.veritone.com/v3/graphqldocs/updatetdo.doc.html)

## Expected Result <!-- {docsify-ignore} -->

By the end of this tutorial, we would have learnt how to create, manage, and then delete a TDO.


## Steps To Follow<!-- {docsify-ignore} -->

### Step 1: Create a TDO

GraphQL lets you [create a blank TDO](#step-1-create-a-blank-tdo) or [create a TDO and upload and asset](#create_a_tdo_and_upload_asset) to it.



#### Create a blank TDO

The first step in the job workflow is to create a TDO. We can create a TDO by simply the following mutation in GraphQL.

```graphql
mutation createTDO {
  createTDO(
    input: {
      startDateTime: "2019-04-24T21:49:04.412Z",
      stopDateTime: "2019-04-24T21:50:04.412Z"
    }
  )
  {
    id
  }
}
```



The `startDateTime` and `stopDateTime` values are required. We can provide any values but the stopdatetime must be after startdatetime.  The stopdatetime should not be more than an year of the the startdatetime. You can supply an integer here (milliseconds), or any ISO-8601-legal string, such as  `"20190424T174428Z"` and `"2019-04-24T21:49:04.412Z"`.

> Note:
> To disable automatic indexing of TDO assets for searching, you must set the TDO's `addToIndex` field to `false`.

Below is a sample response:

```json
{
  "data": {
    "createTDO": {
      "id": "460907869"
    }
  }
}
```

We must take a note of the TDO `id`, as we will use it to create a job.

#### Create a TDO and Upload Asset

Next, let us create a TDO and upload an asset. This is probably the easiest way to upload a file. If we provide a public file URL, then the query will create a container TDO and upload the file as the primary media asset for that TDO.

> "uri" must be a public URL

We can create a TDO and upload the asset by running the following mutation:

```graphql
mutation createTDOWithAsset {
  createTDOWithAsset(
    input: {
      startDateTime: 1533761172,
      stopDateTime: 1533761227,
      contentType: "video/mp4",
      assetType: "media",
      addToIndex: true,
      uri: "https://s3.amazonaws.com/hold4fisher/s3Test.mp4"
    }
  )
  {
    id
    status
    assets {
      records {
        id
        assetType
        contentType
        signedUri
      }
    }
  }
}
```

We must take a note of the TDO `id`, as we will use it to create a job.

### Step 2: View TDO Details

Next, let us view TDO details. There are various queries you can use to get a TDO's details. We must have the TDO `id` to view a TDO details. We can view the following details for a TDO:

- [TDO Details](#get-tdo-details)
- [TDO Assets](#get-assets-for-tdo)
- [TDO Jobs](#get-jobs-for-a-tdo)
- [TDO Folders](#get-folder-info)
- [TDO Task Output](#get-task-output)

### Get TDO Details 

This query shows the details of the TDO. 

```graphql
query getTDODetails {
  temporalDataObject(id: "102014611") {
    details
  }
}
```

### Get Assets for TDO

This query shows the details of the assets for the TDO.

```graphql
query getAssets {
  temporalDataObject(id: "280670774") {
    assets {
      records {
        sourceData {
          engine {
            id
            name
          }
        }
        id
        createdDateTime
        assetType
        signedUri
      }
    }
  }
}
```

### Get Jobs for a TDO

This query gets the jobs for a TDO.

```graphql
query getJobs {
  jobs(targetId: "102014611") {
    records {
      id
      createdDateTime
      status
      tasks {
        records {
          id
          status
          engine {
            id
            name
            category {
              name
            }
          }
        }
      }
    }
  }
}
```



### Get Folder Info

This query gets information about the folders associated with a TDO.

```graphql
query getFolderInfoByTDO {
  temporalDataObject(id: "112971783") {
    folders {
      id
      name
      childTDOs {
        records {
          id
        }
      }
    }
  }
}
```

### Get Task Output

This query displays the debug or log information reported by the engine at the completion of the task

```graphql
query getEngineOutputByTDO {
  temporalDataObject(id: "102014611") {
    tasks {
      records {
        id
        engine {
          id
          name
          category {
            name
          }
        }
        status
        output
      }
    }
  }
}
```

### Step 3: Remove TDO Content

Once we are done working with the TDO, we can remove only the content associated with a TDO. This does not remove the TDO and asset metadata. We must run the `cleanupTDO` mutation with the TDO `id`. In the next step, we will learn [how to delete the TDO along with its assets](#step-4-delete-a-tdo-and-all-assets).

We can also specify the types of data we want to delete in the `options` parameter:

- `storage`: Deletes the TDO's assets from storage, including the engine results. The asset metadata will remain until the TDO or container is deleted.
- `searchIndex`: Deletes all search index data. The TDO and its assets will no longer be accessible through search.
- `engineResults`: Deletes engine results stored on related task objects. The engine results that are stored as assets will remain unless `storage` is passed as a value in the request.

Here is a Below is a sample request to remove TDO Content :

```graphql
mutation {
  cleanupTDO(id: "44512341", options: [storage, engineResults]) {
      id
      message
  }
}
```

> If you do not use the `options` parameter, then the request will remove the TDO's content from `storage` and the `search index`.

Below is a sample response:

```json
{
 "data": {
   "cleanupTDO": {
     "id": "44512341",
     "message": "Data deleted from 44512341:  storage,engineResults"
   }
 }
}
```




### Step 4: Delete a TDO and All Assets

We can remove a TDO and all its asset metadata, by requesting to `deleteTDO` mutation with the TDO `id`. The operation is processed immediately after the request and permanently deletes the TDO *as well as its assets* from the organization's account. Any subsequent requests against the TDO or assets will return an error.

Below is a sample request to delete a TDO with `id 44512341`:

```graphql
mutation{
  deleteTDO(id: "44512341")
     {
      id
      message
      }
    }
```

Below is a sample response:

```json
{
  "data": {
    "deleteTDO": {
      "id": "44512341",
      "message": "TemporalDataObject 44512341 was deleted."
    }
  }
}
```



>Next, learn how to [work with Structure Data Objects](using-structured-data-objects).