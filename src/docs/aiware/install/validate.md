# Validate

## Docker containers
Run `docker ps -a` .

Depending on the mode, this will show various containers.

- controller
    - `aiware-controller`
- database
    - `aiware-postgres`
- registry
    - `aiware-registry`
- prometheus
    - `aiware-prometheus`


## Database
You can connect to the database at localhost:5342, or whichever port that you have specified for AIWARE_DB_PORT, with postgres/postgres as the username/password.

`telnet localhost 5432`

## Controller

Run:
```bash
docker logs -tf aiware-controller
```

This will show the output of controller logs
Go to http://<HOST>:9000/edge/v1/version, or curl localhost:9000/edge/v1/version, for aiWARE Edge version information.  This will return information such as :

```bash
{ "version": "Build number: , Build time: 2021-04-27_19:30:26, Build commit hash: b6e1b627c20489463f7dca463200649af1000222" }
```

# Working with Jobs

In aiWARE, the main unit of work is the _Job_. A Job, in turn, wraps Tasks; and the work for each Task is done by an _engine_.

> Jobs are typically long-running, since there may be multiple Tasks within a Job, each one operating on a potentially large media file. Thus, Jobs operate asynchronously and you should plan on polling the Job to discover its [status](#job-status).

This page gives a quick overview of how Jobs work in aiWARE. We will show examples of how to run a job using the GraphQL API (the "cloud API") as well as the Edge REST API (which is tyically used in on-premise/hosted aiWARE).

The process involves these steps:

* [Step One](#step-one-authorization-getting-a-token): Authorization and Authentication (Get a Token)
* [Step Two](#step-two-choose-an-engine): Choose an Engine
* [Step Three](#step-three-create-the-job): Create the Job
* [Step Four](#step-four-poll-for-status): Poll for Status
* [Step Five](#step-five-obtain-the-results): Obtain the Results

# aiWARE Anywhere 

## Step One: Authorization (Getting a Token)

Regardless of which API you use, an API token must be included in the request's Authorization Header, with the value formatted as: `Bearer <yourtokenhere>`. (See examples below.)

There are several ways to obtain the required token.

1\. If you have Admin rights for your Organization, log into the Veritone Platform and select Admin from the App Picker drop-down. Then click the API Keys widget, and click **New API Key**.

2\. Use GraphQL to run the `userLogin` mutation. (This mutation is the only one that can be run without a token.) Example:

```graphql
mutation userLogin {
  userLogin(input: {userName: "jdoe@mycompany.com" password: "Password123"}) {
    token
  }
}
```
Run a test Job:
ai job create --help, to see how you can run a job.
ai job get --help, to see how you can get job info.