# Working With Flows

?>Flow is a group of logically connected nodes that can run a certain process in **aiWARE**. Flow can be developed in **Automate Studio** by dragging-and-dropping nodes from the [Node palette](/automate-studio/application/README?id=node-palette) to the [Canvas](/automate-studio/application/README?id=canvas) and wiring them up together. Usually, the flow will contain at least one *Input Node*, one *Functional Node* and one *Output Node*, but also, can be way more complex.

In this section, we will explain how to create, edit and run flows in a few simple steps

### Overview

- [Flow Basics](#flow-basics) 
  - [Create New Flow](#create-new-flow)
  - [Create New Flow From Template](#create-new-flow-from-template)
  - [Open An Existing Flow](#open-an-existing-flow)
  - [Flow Details](#flow-details)
- [Editing Flows](#editing-flows)
  - [Save Flow Settings](#save-flow-settings)
  - [Flow Revisions](#flow-revisions)
  - [Debugging a Flow](#debugging-a-flow)
- [Deploying & Running Flows](#deploying-&running-a-flow)
  - [Run in the studio](#run-in-the-studio)
  - [Run via HTTP](#run-via-http)
  - [Run as a Job](#run-as-a-job)


### Flow Basics


#### Create New Flow

There are multiple ways to create a new flow from scratch. The easiest one is from the [Automate Studio Home Page](https://automate.veritone.com/).
Just click on the *Add New* button in the upper left corner, and select *New*. You will be redirected to the **Flow Editor** instantly.

The same can be done by selecting the *New* command from the *hamburger* menu in the upper left corner on the same page.

If you already are in the **Flow Editor** and wish to create a new flow, you can do it by selecting *File -> New*. 

In each of the above-mentioned options, a brand new flow instance will be created. It will appear as a tab above the [Canvas](/automate-studio/application/README?id=canvas). To create a new flow tab in the same workspace, just double-click on the space next to the existing flow tab. 
At least one flow tab must exist at a given time and cannot be deleted.

<hr/>

#### Create New Flow From Template


Automate Studio provides a variety of flows in different levels of complexity. These flows are developed by the **Veritone** team to provide a ready-to-use AI solution out of the box. As any flow can be edited easily, the flow templates represent a great fundamental to easily create advanced business logic that fits your exact needs, without the need for in-depth coding skills or AI expertise.  

To create a flow from a template, click on the *Templates* button ( or *Add New -> New From Template* ) in the upper left corner of the [Automate Studio Home Page](https://automate.veritone.com/). You can scroll through the list of templates manually, or apply filtering by checking the *Tags* or using the *Search Bar* in the *Header Bar* above.

Once the desired **Flow Template** is found, open the **Template info** sidebar by clicking on the Template name. The **Template Info** provides a quick overview of the flow capabilities and functionalities, as well as a screenshot of the flow itself. 

Click on the *Create New From Template* button to create a new instance of the flow.

<hr/>

#### Open An Existing Flow


All flows are available in your organization. If you want to use, test, or update an existing flow, click on the *Org Flows* button in the upper left corner of the [Automate Studio Home Page](https://automate.veritone.com/). Scroll through the list of available flows or apply filtering using the *Search Bar* in the *Header Bar* above. Once the desired flow is found, click on the flow name to open it in the **Flow Editor**

<hr/>

#### Flow Details


If you are on the [Automate Studio Home Page](https://automate.veritone.com/), click on the *Org Flows* button.
Hover with the mouse on the desired flow, and click on the vertical menu button that appears on the right side of the flow.
Choose the *View Detail* option. This will open the **Flow details** sidebar for that particular flow.

**Flow Details** gives you the overall information about the flow: Flow Name, Flow State, Versions, Running or Complete Jobs, etc. 

The **Overview Tab** contains a quick flow overview such as Flow Description, Developer Name, Category, and more.

The **Version History Tab** contains the list of all Flow Revisions and Builds. Use the *Switch* button to switch between the lists.

The **Activity Tab** contains the list of all *Deployed* builds and *Executions* and their respective status


<hr/>

### Editing Flows

As we learned [here](#open-an-existing-flow), flow can be reopened at any time and also edited by any developer in the same organization with appropriate permissions. 
Once the Flow is open in the Flow Editor, the flow can be edited (redesigned, renamed). The flow changes will be saved as *Revisions*

<hr/>

#### Save Flow Settings

The **Save** action is performed automatically. No special action is required. On each automatic save a new *Flow Revision* will be created. 

<hr/>

#### Flow Revisions

Each periodical *Save* action creates a **Flow Revision**. It represents the *Flow State* (in terms of development) in the given time. 
By such behavior, we prevent work loss and achieve continuous development and integration.

**Flow Revision** can be found in the [Flow Details](#flow-details) Version History Tab. From there, any of the following actions can be chosen from the menu (hover with the mouse on the desired revision and click on the vertical menu button):
- **Restore this Version** - Opens the current flow with the selected version
- **Edit Description** - Edit the basic revision info
- **Open as New Flow** - Opens the selected flow revision in a new flow
- **Export** - Copies the selected flow revision JSON to the system clipboard
- **Share** - Share the selected flow revision with other users
- **Copy Link** - Copies the selected flow revision link to the system clipboard. Paste the link in your browser to open the flow revision in the Flow Editor.
- **Delete** - Delete the selected flow revision (not available for deployed revision)

<hr/>

#### Debugging a Flow

There are a few useful tools available in **Automate Studio** which can help us debug our Flow:

- **Debug Sidebar**

    The *Debug/Info Sidebar* is located on the right side of the Automate Studio Flow Editor. 

    Click on the *Bug* Icon to switch to the *Debug* window.

    Click on the *Filter* Icon to choose which nodes output to preview. 

    Clear The *Debug* window by clicking on the *Recycle Bin* Icon. 

- **Debug Node**

    The *Debug Node* can be found in the *Node Palette* as part of the core nodes provided by Automate Studio. Drag and Drop it to the canvas and wire another node output to the *Debug Node* port. For output settings, double click on the *Debug Node* to open the node properties. The node will receive the previous node output and log it to the *Debug Sidebar* (console).

- **Catch (Error) Node**

    The *Catch Node* is used for error catching on runtime. It has no input port. The error catching happens automatically, globally on flow level.
    The caught error is then provided to the output. To see the error, wire the *Catch Node* to the *Debug Node* to see the error log in the *Debug Sidebar*   (console).   

We will learn how to combine them in practice to properly debug and fix eventual issues in the **Training** section

### Deploying & Running Flows

Flows have a binary state: **Active** or **Not Active**. A flow is considered Active only if it has a deployed revision, which means it has a deployed build too. Only one Revision can be published at a given time, and it does not have to be the latest (HEAD) Revision.

Flow can be deployed by opening the desired *Flow Revision* in the Automate Studio Flow Editor (as described at the [Flow Revision](#flow-revision)) and clicking the *Rocket Icon* in the flow taskbar.

Another way is clicking the *File -> Deploy* command.

Once *Deployed* The Revision becomes **Active**. It will be marked as *Deployed* in the Revision List in the Flow Details window.

An **Active** (Published) Flow Revision is now available to the outside world via **HTTP** or as a **Job** 

!> The Flow **must** start with the **aiWARE in** node as the first node in the flow in order to be triggerable.

#### Run in the studio


Each Flow, whether **Active** or **Non Active**, can run in the Automate Studio Flow Editor.

Just Click on the button-like square on the left side of the **aiWARE in** node, and the flow will start running.



#### Run via HTTP

#### Run as a Job