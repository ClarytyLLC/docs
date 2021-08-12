# Getting Started with Core

**APPROXIMATE READING TIME: 5 MINUTES**

Now that you have a working installation of aiWARE, what next? This guide helps you get familiar with aiWARE as you start exploring the stack. 

## aiWARE GraphQL

Test aiWARE GraphQL. aiWARE's GraphQL allows to work with structured data, train datasets and run cognition jobs. [Find out more about GraphQL](/apis/).

### Run `me` Query

The `me` query returns information about your user. 

You can run the query in GraphQL Playground. To use GraphQL Playground, open a browser window. Enter the URL of your aiWARE Admin node from your installation. 

In the query window, enter the following:

```
query {
  me {
    id
  }
}
```

![screenshot 1](https://user-images.githubusercontent.com/53197964/123048097-e126fc00-d3b2-11eb-9b5f-bb35ced32f30.png)

Click on the play button after entering the above. 

You can also run the query in a terminal window using `curl`:

```bash
curl --request POST --url http://localhost:8080/v3/graphql --header 'Authorization: Bearer root:2035f315-3bf9-44ea-9c33-71fc3d82ac04-17aa22ff-dbdd-40f5-ada1-a694c20c1719' --header 'Content-Type: application/json' --data '{"query":"query {
        me {
                id
        }
    }"}'
```

The above request should return the following:

```bash
{
    "data": {
        "me": {
            "id": "7682"
        }
    }
}
```

## aiWARE Edge

aiWARE lets you define Jobs that in turn consist of Tasks. A job is the smallest building block that can be processed by the engine. All engines in aiWARE break up a workflow into multiple jobs. You must understand that a typical workflow might use multiple engines. [Find out more about aiWARE Edge](/aiware/aiWARE-in-depth/?id=architectural-overview).

```bash
ai job create --help, to see how you can run a job.
ai job get --help, to see how you can get job info.
```
