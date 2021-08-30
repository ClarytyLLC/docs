# Using Authentication and Authorization Tokens

**APPROXIMATE READING TIME: 10 MINUTES**

>**Tip** Before getting started, you recommend you read about [training an engine](training-an-engine.md) and [engine developer's toolkit](deploy-to-veritone).

## Authentication and Authorization Tokens <!-- {docsify-ignore} -->

Veritone uses OAuth 2.0 protocol to authenticate, provide single sign-on, and generate tokens for use with APIs. Veritone lets you authenticate using tokens, authorize your application, and provide specific user account data while keeping usernames, passwords, and other information private.



## Expected Result <!-- {docsify-ignore} -->

By the end of this tutorial, you would have learnt how to generate various types of tokens in Veritone. You will understand what are [user tokens](#user-tokens), [API keys](#api-keys), and [Engine tokens](#engine-keys). You will also learn how to [troubleshoot common issues with tokens](#troubleshooting-tokens).

## Using Tokens in Veritone <!-- {docsify-ignore} -->

All Veritone APIs accept authentication in the standard form of bearer token as a part of the HTTP `Authorization` header - similar to the [authentication API](/apis/authentication):

```bash
curl https://api.veritone.com/v3/graphql -H 'Authorization: Bearer <token goes here> ' -H 'Content-Type: application/json' -d '{"query" : "query { me { id }}"}'
```



This is the _only_ authentication method accepted by the API. All user interfaces that interact with Veritone will have to use tokens to provide authentication for users. A token is a hash string consisting of letters, numbers, and the characters `-` and `:`. It both identifies a client on the Veritone platform and provides the rights and privileges the client has over resources.

There are multiple types of tokens that a client may use depending on the wheather the client is developing an engine, developing an application,
or performing ad-hoc testing:

- [User Tokens](#user-tokens): Session-based tokens that expire when the session ends.
- [API Keys](#api-keys): Persistent tokens that are used for long-running services.
- [Engine Tokens](#engine-tokens): Single-task tokens that come with a built-in set of rights. 



### User Tokens

A user token, also called a session-based token, is generated for an individual user within an organization. They are not persistent and expire when the session expires. You must use user tokens for all end-user applications - web-based, mobile, or otherwise. To generate a user token, the user must have an account on the Veritone platform for the target environment, such as http://https://www.veritone.com/login/#/. All user accounts are created within an organization by organization administrators or by Veritone.

Each user is granted privileges or roles within an organization, and each role includes certain functional rights that are enforced in the API. For example, a user will "Developer Editor" role in the "Developer" platform application has the rights required to list, create, and update the organization's engines. This would mean that the user has access to the methods `engines(...)`, `createEngine(...)`, `updateEngine(...)`, and other related queries and mutation. 

The organization administrator or Veritone support can provision accounts and modify roles. An organization administrator uses the main Veritone administration interface to manage users. Administrators can assign roles to users based on the applications and features that are provisioned for the organization. For example, you organization must have access to Veritone Developer Application (VDA) in order for any of its users to have the "Developer" roles.

Interactive user applications must authenticate users, acquire a session token, and send the token back to the user. The application code will need to use the session token for each API request. In this case, you must use the *[OAuth flow](/apis/authentication)* method to authenticate. OAuth is an industry standard and is both secure and flexible. 

When an application is unable to use OAuth, it must authenticate directly using the Veritone API's `userLogin` mutation as shown below:

```graphql
mutation {
  userLogin(input: {
    userName: "sampleuser@veritone.com"
    password: "sample password"
  }) {
    token
  }
}
```

If successful, a user token is returned that you can use to authenticate for each request:

```json
{
  "data": {
    "userLogin": {
      "token": "c45360ca-5110-3cdb-1252-ae9dda1e29ce"
    }
  }
}
```



> You need to get the token once during the session and use it for all methods. You do not need get token for each request.



### API Keys 

API keys are specially provisioned and persistent tokens. These are used by some developers who build only system integrations or engines and may never need create user accounts or tokens. You can use API keys to test engine code when you intend to use long-running system components that interact with Veritone. For example, consider a service such as a webhook handler that needs to use the Veritone API. The service needs to have persistent token that provide appropriate access to the Veritone platform. In this case, you can acquire an API key with appropriate rights and configure the service to send API keys when authenticating the API.

**To create an API key:**

1. In the Veritone Admin application, navigate to your organization's **Overview** page.
2. Click **API Keys** tile and click **Add Token**.
3. Enter a unique name for the token.
4. Select appropriate rights. Ensure that you select only the rights that are required.
5. Click **Save** to view the token.

You can copy the token and store it safely for future use. For security reasons, the UI does not display actual tokens in the listing. You can always update the rights on this page and generate a new token. 

> Note: API keys are sensitive information. They persist until revoked and provide a broad access to your organization's data. You must store them securely and share them only with trusted users.



In some cases, Veritone support provides an API key as an administrator.  Similar to User Tokens, API Keys give functional rights to your organization's data. For example, an API key with the 'read TDO' right can read _all_ of your organization's TDOs.



### Engine Tokens

Engine tokens are single-task tokens that come with a built-in set of rights. This token allows the engine to perform its intended function on the target data _and nothing else_.  Engine tokens are generated by the platform system components during engine execution and are intended for one-time use for a specific job. 

> **Note:** Engine Tokens are not suitable for testing engine code during development. You must use an API key for that.

You create or ingest content across a variety of engines for your application cognitive processing. Whether processing using the Veritone CMS application or any other method, you select content and the engines required. You then authorize the engines to access that specific content. These engines could be Veritone engines and also third-party engine produced in the Veritone developer ecosystem. As a consumer, you may not know all the engines that run. The engine code must have access to the content such as a TDO and associated assets. The engine should also be able to store its output and associated the output with your content (typically as a new asset on the target TDO). However, engines should not be able to access any other content in your organization. They should not be able to modify your content in ways other than the intended. 



For example, consider a scenario where you have uploaded two media files to CMS `meetingRecording.mp4` and `securityCameraStream-2018-05-08.mp4`. Each of the upload results in a new TDO with a single media asset. You use the CMS interface to run the default transcription engine against the file `meetingRecording.mp4`. This creates a new job with several tasks such as transcoding job, transcription job, and so on. The transcription engine than uses the Veritone API to retrieve and process the content, and then store the results. 

In this process, the engine *should be able to*:

* retrieve metadata about `meetingRecording.mp4`
* download `meetingRecording.mp4`
* update the status of its task
* create and upload an asset containing the transcript
* attach the asset to the TDO for `meetingRecording.mp4`

More importantly, the engine *should not be able to*:

* retrieve metadata about `securityCameraStream-2018-05-08.mp4`
* delete the media asset for `meetingRecording.mp4`
* update the status of the transcoding engine's task _or_ any other task
* retrieve or modify other types of data in your organization, such as user information, libraries, and so on.



To ensure the engine has access to only what is required, the platform generates a single-user token for each task. The token includes a built-in set of rights that lets the engine perform its intended function on the target data and *nothing else*. The token expires after an appropriate time window. 

Here is a sample engine token and its associated rights:

```json
{
  "myRights": {
    "operations": [
      "asset:uri",
      "asset:all",
      "recording:read",
      "recording:update",
      "task:update"
    ],
    "resources": {
      "Job": [
        "1923036a-abac-482a-9e68-d10d43f42849"
      ],
      "Task": [
        "1923036a-abac-482a-9e68-d10d43f42849-eaf8bc0c-a197-4691-9c24-f8d34b791acb"
      ],
      "TemporalDataObject": [
        "400000148"
      ]
    }
  }
}
```



Note that the rights included provide a limited set of rights required for the engine and rights to a specific set of objects. There are some additional rights that are derived from the rights declared in the token. For example, an engine can access an asset it created, as long as it sets source data on that asset with the correct task ID. 

If you try to use the engine token for any other operation or to access any other data, then it results in a `not_allowed` error. For example, in the above sample token rights, the engine cannot invoke `updateTDO` on _any_ TDO (including its target) or call `updateTask` on any task other than the ID specified in `resources.Task`.



## Troubleshooting Tokens

The Veritone GraphQL API authorizes access by functional rights at individual field-level. The Veritone API requires authorization to access resources and operations. For example, when you create a TDO it is available for other other organizations' users only if you make it public.

The error responses follow the general [Error Codes](/apis/error-codes.md) pattern. The HTTP request returns 200, the `errors` section of the payload will contain the message and other information about the error, and the affected field in the `data` element will be `null`.  The error type is listed in the `name` field.  The errors caused by tokens mostly have an error type of `not_allowed`, and in some occasions `not_found`.  A  `not_allowed` error occurs when you try to access a field, query or mutation without authorization. A `not_found` error occurs when the entity you  are trying to access does not exist.

The error messages and payloads that the API returns include as much detail as is possible to share without compromising the confidentiality and integrity of your data.

### *not_allowed* Errors

A `not_allowed` error occur when you try to a field, query, or mutation that you do not have authorization to access. To access such an entity, you must:

* Change tokens. For example, if you are using a user token to test engine code, then you must try changing to an engine token. 
* Remove the affected field, query, or mutation from your request. You can do this in case the entity is not mandatory to access.
* Contact your organization admin and request for additional rights. For example, if you are developing an engine, you should probably have the "developer editor" role. If you are writing a system integration that creates jobs using an API token, that token may need "full job permission" rights.

To handle a `not_allowed` error, you must first examine the entire response payload and then the token. Below is a sample `createEngine` attempt:

```graphql
mutation {
  createEngine(input: {
    name: "foo"
    categoryId: "bar"
    deploymentModel: HumanReview}
  ) {
    id
  }
}
```

The mutation resulted in a not_allowed error because of insufficient rights and returned the below output:

```json
{
  "errors": [
    {
      "message": "The authenticated user or token is not authorized to perform the requested action.",
      "data": {
        "field": "createEngine",
        "type": "Mutation",
        "rights": [
          "asset:uri",
          "job:create",
          "job:read",
          "job:update",
          "job:delete",
          "task:update",
          "recording:create",
          "recording:read",
          "recording:update",
          "recording:delete",
          "report:create",
          "ingestion:read",
          "ingestion:create",
          "ingestion:update",
          "ingestion:delete"
        ]
      },
      "name": "not_allowed",
      "time_thrown": "2018-05-09T21:48:00.680Z"
    }
  ],
  "data": {
    "createEngine": null
  }
}
```

To understand the rights associated with a user or token you can get user information and troubleshoot the token.



#### Getting user information

The Veritone API provides `myrights` query that can be used to understand the client information and rights associated with a given token. For example, the following query returns information about the authenticated user, their organization, and the functional rights available. Note that this is an example and you can add or remove details based on your requirements.

```graphql
query {
  me {
    id
    name
    organization {
      id
      name
    }
  }
  myRights {
    operations
    resources
  }
}
```



The Sandbox is an interactive and browser-based application that requires the user to be logged into the platform, and requires user tokens. You cannot use the Sandbox for testing or troubleshooting the other token types. 

We could use a raw HTTP client such as `curl` to test and troubleshoot:

```bash
curl https://api.veritone.com/v3/graphql \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <token here>' \
  -d '{"query": "query { me { id name organization { id name }} myRights { operations resources }}"}'
```



The details of the response depends on token. For example, below is a response for a user who has the developer editor role:

```json
{
  "data": {
    "me": {
      "id": "e92d0333-4ac2-69a0-4d95-dbc2eb5240c3",
      "name": "sampleuser@veritone.com",
      "organization": {
        "id": "1111111111",
        "name": "Sample Organization"
      }
    },
    "myRights": {
      "operations": [
        "job.create",
        "job.read",
        "job.update",
        "job.delete",
        "task.create",
        "task.read",
        "task.update",
        "task.delete",
        "recording.create",
        "recording.read",
        "recording.update",
        "recording.delete",
        "developer.access",
        "developer.docker.org.push",
        "developer.docker.org.pull",
        "developer.engine.read",
        "developer.engine.update",
        "developer.engine.create",
        "developer.engine.delete",
        "developer.engine.disable",
        "developer.engine.enable",
        "developer.build.read",
        "developer.build.update",
        "developer.build.delete",
        "developer.build.deploy",
        "developer.build.submit",
        "developer.build.pause",
        "developer.build.unpause",
        "developer.build.approve",
        "developer.build.disapprove",
        "developer.task.read"
      ],
      "resources": {}
    }
  }
}
```



The details of the `myRights` payload are used and managed internally and subject to change. However, it provides they will provide an idea of what rights a token has and why certain GraphQL queries or mutations return a `not_allowed` error. For example, `job.create` is required
for `createJob`.

You may also get a `not_allowed` error when you try to edit a resource that you can read. For example, if you attempt to run `updateTDO` on a public TDO owned by another organization, you will receive `not_allowed`. Similarly, you will get `not_allowed` error when you run `updateTDO` on a TDO that is owned by your organization _but_ your user or API key does not have permission to update TDOs.

### "not_found" Errors

You get `not_found` error if you try to access a resource that is private or does not exist. For example, if you do not have read access to a resource, which owned by another organization and is private, the resource is effectively invisible to you through the API. 

For example, the following query returns only TDOs to which the client has at least read access:

```graphql
query {
  temporalDataObjects(includePublic: true) {
    records {
      id
    }
  }
}
```



The resources that are inaccessible resources are not returned and there is no error. However, when you try to access a specific resource by ID, as shown below, you get a `not_found` error.

```graphql
query {
  temporalDataObject(id: 4000051912345) {
    id
  }
}
```



If the resource does not exist _or_ you do not have access to it, then you get a `not_found` error:

```json
{
  "data": {
    "temporalDataObject": null
  },
  "errors": [
    {
      "message": "The requested object was not found",
      "name": "not_found",
      "time_thrown": "2018-05-09T23:05:14.864Z",
      "data": {
        "objectId": "4000051912345",
        "objectType": "TemporalDataObject",
        "errorId": "062884db-f227-4bfe-ad44-370c30b855bf"
      }
    }
  ]
}
```



An `not_found` error indicates that:

* the resource does not exist. 
* the resource is owned by another organization and you do not have access to it. 
* the user token you are using does not have the required privileges.
* the engine token you are using was created for a different job.



To resolve an  `not_found` error you may:

* Request the resource owner to either share the resource with your organization or make it public. 
* Ensure that you are using an API token of the correct organization.
* If using an engine token, then regenerate the engine payload and try again. This payload will include a new token with appropriate rights for the
  resources referenced in the task.
