# Working With Flows

**APPROXIMATE READING TIME: 15 MINUTES**

> Before getting started, we recommend that you review the [quickstart](..\getting-started\README.md) and [understand basic concepts](..\application\README.md) of Automate Studio.



## Overview <!-- {docsify-ignore} -->

In this page, we will learn how to create, edit and run flows in a few simple steps.

In Automate Studio, a *flow* is a group of logically connected nodes that can run a certain process in **aiWARE**. We can created a flow by simply dragging-and-dropping nodes from the [Node palette](/automate-studio/application/README?id=node-palette) to the [Canvas](/automate-studio/application/README?id=canvas) and wiring them up together. Usually, the flow will contain at least one *Input Node*, one *Functional Node* and one *Output Node*. 

- [Creating and Viewing Flows](#creating-and-viewing-flows) 
  - [Create New Flow](#create-new-flow)
  - [Create New Flow From Template](#create-new-flow-from-template)
  - [View Flow Details](#view-flow-details)
- [Editing Flows](#editing-flows)
  - [Flow Revisions](#flow-revisions)
  - [Export and Import](#export-and-import)
- [Debugging a Flow](#debugging-a-flow)
- [Deploying Flows](#deploying-flows)
- [Running Flows](#running-flows)
    - [Run Flow via HTTP](#run-via-http)
- [Using Graphql API for Flows](#graphql-api-for-flows)
  <!-- - [Run as a Job](#run-as-a-job) -->


## Creating and Viewing Flows <!-- {docsify-ignore} -->

We can create flows in multiple ways. In this section, we will learn how we can create a basic flow and how we can create a flow from a template.

### Create a Flow <!-- {docsify-ignore} -->

We can create flows from scratch in multiple ways. The easiest way to create one is from the [Automate Studio Home Page](https://automate.veritone.com/). To create a flow, click on the *New Flow* button in the upper left corner, and select *New*. We will be redirected to the **Flow Editor** instantly. If we are in the **Flow Editor** and want to create a new flow, then we can click *File -> New*. The new flow appears as a tab above the [Canvas](/automate-studio/application/README?id=canvas). You can rename the flow by clicking on the flow name (Flow 1 or so for new flows). 

![new flow](newflow.png)



All flows are created in your organization workspace. In Automate Studio, we must have at least one flow at any time.

<hr/>

### Create a Flow From Template <!-- {docsify-ignore} -->

Automate Studio provides a variety of flows with a variety of utilities. These flows are developed by the **Veritone** team to provide a ready-to-use AI solution out-of-the-box. These flows include the all the nuts and bolts required for the solution. We can use one of these templates to create a flow, and then edit the flow easily. This lets you easily create advanced business logic that fits your exact needs, without the need for in-depth coding skills or AI expertise.  

To view the existing templates, click on the *Templates* button in the upper left corner of the [Automate Studio Home Page](https://automate.veritone.com/). We can scroll through the list of templates manually, or apply filtering by checking the *Tags* or using the *Search Bar* in the *Header Bar* above.

![Flow Templates](templates.png)



We can view the template's description by clicking the template and viewing its details in the **Template info** sidebar. The sidebar also displays a screenshot of the flow for better understanding. 

After selecting a template, we can click on the Create New From Template button to create a flow based on the template.

<hr/>

## View Flow Details<!-- {docsify-ignore} -->

We can view all available flows in our organization by clicking on the Org Flows button. The Org Flows page also displays a list of popular templates.



We can scroll through the list of available flows, and also filter using the *Search Bar* in the *Header Bar* above. We can click on any flow name to open it in the **Flow Editor**. 

**To view the details of a flow:**

1. In [Automate Studio Home Page](https://automate.veritone.com/), click on the *Org Flows* button.

2. Hover with the mouse on a flow, and click on the vertical menu button that appears on the right side of the flow.

3. Click *View Detail* to open the **Flow details** sidebar for that particular flow.

   > If you are in the **Flow Editor** page, click on the *` i `* icon in the upper right corner to open the **Current Flow Details** 

![Flow details](flowdetails.png)

The **Flow Details** pane shows these details about the flow:

- **Overview Tab** shows information such as Flow Description, Developer Name, Category, and so on. 
- **Version History Tab** shows the list of all Flow Revisions and Builds. We can use the *Switch* button to switch between the lists.
- **Activity Tab** shows the list of all *Deployed* builds and *Executions* and their respective status.

[Back to Top](#overview)

## Editing Flows <!-- {docsify-ignore} -->

As we learned [here](#view-flow-details), we can open a flow at any time and edit it if we are in the same organization and have the appropriate permissions. Whenever we update the flow in the Flow Editor the flow changes are saved as *Revisions*.

> The changes to the flow are saved automatically and no special action is required. Every time a flow is saved a *flow* revision is created.

<hr/>

### Flow Revisions <!-- {docsify-ignore} -->

Every time a flow is saved it creates a **Flow Revision**, and represents the *Flow State* (in terms of development) at that time. This ensures that there is no work loss and we achieve continuous development and integration.

![flow revisions](flow-revisions.png)

We can view the **Flow Revision** in the [Flow Details](#flow-details) > Version History Tab. We can then do one of the following actions. To select the action from the menu, hover over the reviewing and click on the vertical menu button:

- **Restore this Version** - Restore the current flow to the selected version.
- **Edit Description** - Edit the basic revision info.
- **Open as New Flow** - Opens the selected flow revision in a new flow.
- **Export** - Copy the selected flow revision JSON to the system clipboard.
- **Copy Link** - Copy the selected flow revision link and paste the link in your browser to open the flow revision in the Flow Editor.

  

<hr/>

### Export and Import <!-- {docsify-ignore} -->

We can export and import flows from the Flow Editor in JSON format. This lets us share our flow with others, while also using other shared flows.

To export a flow, simply select *File -> Export* from the flow editor.

![Export flow](flow-export.png)



In the Export dialog we can:

- Copy the JSON from the editor to clipboard.
- Download the JSON to local machine.
- Export the flow to library.



We can export either the selected nodes, the current flow, or the complete flow configuration. We can also select if we want to export compact or formatted JSON. The compact option generates a single line of JSON with no whitespace. The formatted JSON option is formatted over multiple lines with full indentation - which can be easier to read.

To import a flow, select *File -> Import * from the flow editor.

![flow import](flow-import.png)



We can import a flow by:

- Pasting the flow JSON directly in the import dialog box.
- Importing a file that has the flow JSON.
- Importing the flow from a JSON.
- Importing the flow from an example.



In all cases, the dialog offers the option to import the nodes into the current flow, or to create a new flow for them.

[Back to Top](#overview)

## Debugging a Flow <!-- {docsify-ignore} -->

**Automate Studio** includes these tools that help us debug our flow:

- **Debug Sidebar**: The *Debug/Info Sidebar* is located on the right side of the Automate Studio Flow Editor. We can use the *Bug* Icon to switch to the *Debug* pane. In the Debug pane, we can filter which nodes output to preview using the *Filter* icon. We can clear the pane by clicking on the *Recycle Bin* Icon. 

- **Debug Node**: We can use the *Debug node* that is available in the core nodes provided by Automate Studio. The *Debug node* receives output from the previous node output and logs it to the *Debug Sidebar* (console). To use the node, we must Drag and Drop it to the canvas and wire another node output to the *Debug Node* port. We can configure the output settings, by double clicking on the *Debug Node* and setting the node properties. 

- **Catch (Error) Node**: The *Catch Node* is used for runtime error catching, and does not have an input port. The node catches errors automatically at the global flow-level. The error is then provided as the output. We can see the error by wiring *Catch Node* to the *Debug Node* to send the error log to the *Debug Sidebar*   (console).   

[Back to Top](#overview)

## Deploying Flows <!-- {docsify-ignore} -->

All flows can have either of the two states - **Active** and **Not Active**. A flow is considered Active only if it has a deployed revision, which means it has a deployed build too. We can publish only one Revision at a given time, which may or may not be the latest.

We can deploy a flow deployed by opening the desired *Flow Revision* in the Automate Studio Flow Editor (as described at the [Flow Revision](#flow-revisions)) and clicking the *Deploy* button. We can also click *File -> Deploy* to deploy the flow.

![Deploy flows](flow-deploy.png)



After we deploy a flow, the deployed revision become **Active** and is marked as *Deployed* in the Revision List in the Flow Details window. An **Active** (Published) Flow Revision is now available to everyone via **HTTP** or as a **Job**. 



!> The Flow **must** start with the **aiWARE in** node as the first node in the flow to be triggerable.

## Running Flows <!-- {docsify-ignore} -->

We can run both active and non-active flows in the Automate Studio Flow Editor. To run a flow, we just click on the button-like square on the left side of the **aiWARE in** node.

Alternatively, we can run the flow via HTTP. We will simply do a POST call on a custom URL to run the flow. 

### Run via HTTP <!-- {docsify-ignore} -->

This means that anyone with the right link (even outside of aiWARE) can run the flow. Before we run the flow, we must ensure that the flow is active and that we have the [authentication token](#authentication). For more information, see [deploying flows](#deploying-flows).

**To run a flow via HTTP:**

1. We will first get the Flow ID, that is required for the API, from the **[Flow Details](#flow-details)** dialog. Alternatively, we can get that from the flow URL. The selected part of the URL in the image below is the Flow ID.
   ![flow id url](flow-id-url.png)

   

2. We will next construct the API URL required to run the flow via HTTP. We will use the following URL to construct the URL for our flow:

    `https://controller-edge1.veritone.com/flow/<flow-id>/process`

3. In the above URL, replace the ```<flow-id>``` with our actual Flow ID to get something like this:

```string
    https://controller-edge1.veritone.com/flow/0210e03a-5e4e-4e90-8d08-d8f7b7878a8c/process
```



The **DEPLOYED** revision, not the latest, is used in the  URL. If the Flow is not deployed, then the API will return an **Error Message**. Remember, we can deploy only one revision at a time. 

We can explicitly call a specific revision for testing purposes using the following URL format: 
```string
    https://controller-edge1.veritone.com/flow/<flow-id>/<rev id OR rev number OR 'latest'>/process. 
```
We must do a HTTP POST to this endpoint to trigger the flow. The **payload** in the request body is passed to the **aiware-in** node in the Flow. The **payload** must be in a valid **json** format. For example, to provide a **media url** to the [AI Cognition Flow](/automate-studio/tutorials/basic/transcription) the request body would look something like:

```json
    {
        "url": "https://s3.amazonaws.com/static.veritone.com/assets/Obama_15s.mp4"
    }
```

?>Regardless of how we initiate the **POST**, we must set the header to **“content-type”: “application/json”**

If the Flow is started successfully, then we will receive a response in the following format:
```json
{
	"FlowId": "string",
    "FlowRevisionId": "string",
    "FlowExecutionId": "string"
}
```


### Authentication  <!-- {docsify-ignore} -->

We need an authentication token to make a POST call and run the flow. We can easily get a token using our [Graphql API playground](https://api.veritone.com/v3/graphql) and running the query:

```graphql
mutation {
  userLogin(
    input: {
      userName: "email@veritone.com"
      password: "xxx"
    }
  ) {
    token
    organization {
      id
      name
    }
  }
}
```

Once we have the **token**, we can use it in a post request by setting the Authentication header in the request such as:

```bash
curl --location --request POST 'https://automate-controller-v3f.aws-prod-rt.veritone.com/edge/v1/flow/7ec7fdef-bcd8-42b1-8d67-82b6286fce60/afce5bc7-74af-41f3-94f1-d91ebb621f4b/process' \
--header 'Authorization: Bearer <user token>'
```
For example, if the user token received from the mentioned graphql query is `abcd1234`, then the request would look as the following:

```bash
curl --location --request POST 'https://automate-controller-v3f.aws-prod-rt.veritone.com/edge/v1/flow/7ec7fdef-bcd8-42b1-8d67-82b6286fce60/afce5bc7-74af-41f3-94f1-d91ebb621f4b/process' \
--header 'Authorization: Bearer abcd1234'
```



 ## Graphql API for Flows <!-- {docsify-ignore} -->

We can manage flows, revisions and executions using **Graphql API**. For more information about using **Veritone's Graphql API**, see [the tutorial](/apis/using-graphql). In this section, we will see some basic [queries](#queries) and [mutations](#mutations) that can be used to manage flows, revisions and executions.



### QUERIES <!-- {docsify-ignore} -->

Below are some of the commonly used queries for flows:

| Query                                                        | Argumnets                                                    | Sample query                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **flow**<br />This query is used to get a flow record.       | `id:` The unique identifier of the flow.                     | `flow(id: ID!): Flow`                                        |
| **getFlowRevisions**<br />This query gets all revisions for a flow record | `id:` The unique identifier of the flow.                     | `getFlowRevisions(id: ID!): [Revision]`                      |
| **getFlowExecutions**<br />This query returns executions details, including status, result (from aiWARE out node) and logs. | `flowID:` The unique identifier of the flow. <br />`revisionID` (optional): revision ID in the same flow <br />`executionID` (optional): execution ID in the same flow | `getFlowExecutions(flowId: ID!, revisionId: ID, executionId: ID): [Execution]` |



### MUTATIONS <!-- {docsify-ignore} -->

Below are some of the commonly used mutations for flows:

<hr/>

#### **createFlow**

This creates a new flow with only the default fields.

```graphql
    mutation{
        createFlow(): Flow
    }
```


<hr/>

#### **copyFlow**

This creates a copy of an existing flow.

**Arguments**

- `flowID:` The unique identifier of the flow.
- `revisionID` (optional): revision ID in the same flow

```graphql
    mutation{
        copyFlow(flowId: ID!, revisionId: ID): Flow
    }
```
<hr/>

#### **updateFlow**

This updates an existing flow.

**Arguments**

`flowID:` The unique identifier of the flow.

```graphql
    mutation{
        updateFlow(flowId: ID!): Flow
    }
```

<hr/>

#### **deleteFlow**

This deletes the flow record.

**Arguments**

`flowID:` The unique identifier of the flow.

```graphql
    mutation{
        deleteFlow(flowId: ID!): Flow
    }
```
<hr/>

#### **pauseFlow**

This updates the flows status to Not Active. The flow remains inactive until the unpauseFlow mutation is called.

**Arguments**

`flowID:` The unique identifier of the flow.

```graphql
    mutation{
        pauseFlow(flowId: ID!): Flow
    }
```
<hr/>

#### **unpauseFlow**

This activates a paused (Not Active) flow. 

**Arguments**

`flowID:` The unique identifier of the flow.

```graphql
    mutation{
        unpauseFlow(flowId: ID!): Flow
    }
```
<hr/>

#### **createFlowRevision**

This creates a revision of a flow. 

**Arguments**

- `flowID:` The unique identifier of the flow.
- `revision:` Flow Revision Type

```graphql
    mutation{
        createFlowRevision(flowId: ID!,revision: Revision!): Revision
    }
```
<hr/>

#### **deleteFlowRevision**

This marks a revision of a flow for delete.

**Arguments**

`flowID:` The unique identifier of the flow.
`revisionID:` The ID of the revision

```graphql
    mutation{
        unpauseFlow(flowId: ID!, revisionID: ID!): Revision
    }
```
<hr/>

#### **deployFlowRevision**

This mutation does the following:

- Creates a new build from the revision specified or the latest (HEAD) revision (if no revision is specified). 
- Changes the build status to deployed.
- Changes the deployed flag to true on the IS_DEPLOYED revision record.

**Arguments**

`flowID:` The unique identifier of the flow.
`revisionID` (optional):  The ID of the revision

```graphql
    mutation{
        deployFlowRevision(flowId: ID!, revisionID: ID): Revision
    }
```
<hr/>

[Back to Top](#overview)



> Now that we have learned how to manage flows, we should be learning about how to [manage nodes](working-with-nodes).
