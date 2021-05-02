# Automate Studio Application
**APPROXIMATE READING TIME: 2 MINUTES**

?>Veritone Automate Studio is a low-code workflow designer that empowers technical and business teams to tap into a full-stack AI architecture to design and deploy AI-powered business processes at scale in days, not months. Leverage an intuitive drag-and-drop UI to easily create advanced business logic on a digital canvas, without the need for in-depth coding skills or AI expertise. Automate Studio enables intelligent process automation (IPA) and workflow enrichment across both new and existing systems and applications.


### Prerequisites for Using Automate Studio

There's nothing to install. Automate Studio runs as a web app. To use Automate Studio, you simply need:

1.  An active Automate Studio account. (Sign up [here](https://www.veritone.com/onboarding/#/signUp?type=automate) to create an account and gain immediate access to the application.)
2.  Access to the internet &mdash; Automate Studio is a Software-as-a-Service (SaaS)  application that runs in Veritone's Commercial or GovCloud environments. 

In this section we will cover the basic concepts of the **Automate Studio App** or **Flow Editor**

### Overview

- [Canvas](#canvas)
- [Node Palette](#node-palette)
- [Debug/Info](#debug-info)
- [Variables](#variables)
    - [Message (msg)](#message-msg)
    - [Context, Flow, and Global](#context-flow-and-global)

### Canvas

Canvas is the gridded workspace in the center of the Automate Studio App, in which we can design and optionally run flows within Automate Studio. It is organized by tabs located at the top, one for each individual flow. No setup is required, but some basic settings are available at *File* -> *Settings*.

### Node Palette

Available node types are shown vertically in a Node Palette on the left side of the workspace. Nodes are organized into sections that can be expanded or rolled up accordion-style.

Use the *File* -> *Manage Palette* menu command to enable/disable, add, remove, or update nodes. 

A search bar is available on the top of the palette to simplify the nodes filtering and searching. 


### Debug / Info

Information about the currently selected node is shown in a resizable Sidebar on the right. Note that the Sidebar can display an Info panel, or a Debug panel. (Choose the view by clicking the i or bug icon buttons at the top right.)

### Variables

Variables are used to pass information between nodes on different levels. Usually, each node in the flow will process the data it receives from the previous node one way or another. But in some cases we would like to store the information on a higher level, to make it available across the entire flow or even multiple flows.

<hr/>

#### Message (msg)

Every flow in Automate Studio relies on a **msg** object to pass information from node to node. You do not need to do anything special to make the **msg** object come into existence. It is created automatically by Automate Studio.

The **msg** object is an all-purpose object that you can modify (or not modify) as you see fit. It has global scope and visibility, meaning that it is visible (accessible; usable) to all nodes, and all sub-flows, of a given flow.

The **msg** object is a JavaScript object (sometimes called a JSON object). It contains a **payload** property (or "field") by default. The value of that field may change as various nodes process your data. You can inspect the **payload** field's value at design time by wiring a Debug node to any node in your flow, and checking the Debug panel after running the flow.

>Tip: If you wire separate Debug nodes to some or all of your flow's existing nodes, and set each Debug node to output "complete msg object," then run the flow, you will see messages from all Debug nodes in the debug panel in the sidebar. In this way, you can see how the msg object changes from node to node.

You can create new properties of your own on the **msg** object. For example, if you were to want to keep a running *total* of some kind during a flow, you could create the *total* field in a *Change node*, by editing the node's properties so that it Sets the *msg.total* field to some initial value. (This would create the total property, and initialize it, all in one go.) You could then update *msg.total* in subsequent *Function nodes*.

Generally speaking, you will retrieve data, at the end of a flow, from the **msg.payload** field. However, you're not required to do this! If you've created additional custom fields, you can use those, if the occasion warrants. You can create, and use, as many custom fields on the msg object as you want.

> Lear more about the msg object [here](https://nodered.org/docs/user-guide/messages)

<hr/>

#### Context, Flow, and Global

Aside from the **msg** object, the Function (node) can also store data in the context store.

In the Function node there are three predefined variables that can be used to access context:

- **context** - the node’s local context
- **flow** - the flow (or subflow) scope context (available only for to the flow or subflow it was defined in)
- **global** - the global scope context (available to all flows and subflows in the app)

The following examples use **flow** context, but apply equally well to **context** and **global**.

Basically, there are two simple actions: *get data* and *set data*.

For example, in a *Function node* if we were to define a variable to be available across the entire flow we would do the following:
```javascript
    flow.set("myVar","hello world")

```

If we want to retrieve this variable anywhere in the flow, we should use th function node again:

```javascript
    var myVar = flow.get("myVar")

```

We can reasign this variable at any time. The new value doesn't have to be the same data type. Any valid javascript datatype is acceptable:

```javascript
    var myVar = flow.get("myVar")

    if( myVar === "hello world" ) {

        myVar = 0

    } else {

        myVar = ["a","b","c"]
    }

    flow.set("myVar", myVar)

```


