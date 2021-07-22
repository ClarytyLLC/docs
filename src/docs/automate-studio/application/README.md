# Automate Studio Application
**APPROXIMATE READING TIME: 5 MINUTES**

?>Veritone Automate Studio is a low-code workflow designer that empowers your technical and business teams to tap into a full-stack AI architecture. You can now design and deploy AI-powered business processes at scale in days, not months. Leverage an intuitive drag-and-drop UI to easily create advanced business logic on a digital canvas, without the need for in-depth coding skills or AI expertise. Automate Studio enables intelligent process automation (IPA) and workflow enrichment across both new and existing systems and applications.


## Prerequisites for Using Automate Studio

To use Automate Studio, you simply need:

1.  An active Automate Studio account. (Sign up [here](https://www.veritone.com/onboarding/#/signUp?type=automate) to create an account and access the application in seconds.)
2.  Access to the internet &mdash; Automate Studio is a Software-as-a-Service (SaaS)  application that runs in Veritone's Commercial or GovCloud environments. 

In this section, you will understand some basic concepts of the **Automate Studio App** or **Flow Editor**.

## Overview

Below are some concepts you must familiarize yourself with before you start on Automate Studio:

- [Canvas](#canvas)
- [Node Palette](#node-palette)
- [Debug/Info](#debug-info)
- [Variables](#variables)
    - [Message (msg)](#message-msg)
    - [Context, Flow, and Global](#context-flow-and-global)

## Canvas

Canvas is the gridded workspace in the center of the Automate Studio App, where you design and run flows. It is organized by tabs located at the top - one for each individual flow. You do not need to do any setup, and can configure it using some basic settings available at *File* -> *Settings*.

## Node Palette

The Node palette lists available node types on the left side of the workspace. The nodes are organized into sections that can be expanded or rolled up accordion-style. You can use the *File* -> *Manage Palette* menu command to enable/disable, add, remove or update nodes. You can use the search bar on the top of the palette to simplify the nodes filtering and searching. 


## Debug / Info

You can view information about the currently selected node in a resizable sidebar on the right. You can see the Info panel or a Debug panel in the Side bar by clicking the **i** or *bug icon* buttons at the top right.

## Variables

Usually, each node in the flow will process the data it receives from the previous node. However in some cases, you may want to store the information on a higher level to make it available across the entire flow or even multiple flows. You can use variables to pass information between nodes on different levels. 

### Message (msg)

All flows in Automate Studio rely on a **msg** object to pass information from node to node. The **msg** object is created automatically by Automate Studio. It is an all-purpose object that you can modify or just use as needed. **msg** has global scope and visibility, which means that it is visible (accessible and usable) to all nodes and all sub-flows of a flow.

The **msg** object is a JavaScript object (also called JSON object) and contains a **payload** property (or "field") by default. The value of the **payload** property  changes as various nodes of the flow process our data. You can attach a Debug node to any node and check the Debug panel after running the flow to review the **payload** field's value.

>**Tip:** To see how the msg object changed from node to node, you can wire Debug nodes to some or all of our flow's nodes. You must then set each Debug node to output "complete msg object" then run the flow to see messages from all Debug nodes in the debug panel in the sidebar.

You can create new properties of our own on the **msg** object. For example, let us assume you want to keep totaling a variable during the flow. You will create the *total* field in a *Change node*, by editing the node's properties so that it sets the *msg.total* field to some initial value. This would create the total property, and initialize it. You can then update *msg.total* in subsequent *Function nodes* in our flow.

You will retrieve data at the end of a flow from the **msg.payload** field. However, you can skip this if you don't want to and use custom fields too. You can create and use any number of custom fields on the msg object.

> Lear more about the msg object [here](https://nodered.org/docs/user-guide/messages).

### Context, Flow, and Global

You can also use the context store to store node data besides the **msg** object. In the Function node there are three predefined variables that can be used to access context:

- **context** - can be accessed within the node
- **flow** - can be accessed within the flow or sub-flow
- **global** - can be accessed by all flows in the application

The following examples show how to use **flow** context to *get data* and *set data*. You can use the **context** and **global** context similarly.

For example, in a *Function node* if you were to define a variable to be available across the entire flow you would do the following:

```javascript
    flow.set("myVar","hello world")

```

If you want to retrieve this variable anywhere in the flow, you should use the function node again:

```javascript
    var myVar = flow.get("myVar")

```

You can reassign this variable at any time. The new value doesn't have to be the same data type and can be any valid javascript datatype.

```javascript
    var myVar = flow.get("myVar")

    if( myVar === "hello world" ) {

        myVar = 0

    } else {

        myVar = ["a","b","c"]
    }

    flow.set("myVar", myVar)

```

