<!-- add estimiated reading, should be an easy step by step. 
Target: Deploy on a Mac. 
Optional: Target environment, Ubuntu, Virtual Box or AWS. Add guides on setting up those machines. --> 

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>
*Estimated install time: 60 minutes*
# Overview
The aiWARE platform lets you build and use end-to-end, AI-powered solutions — from data ingestion to intelligent data analysis — accessible in the application of your choice. aiWARE consists of several components include [Edge](/aiware/aiWARE-in-depth/?id=architectural-overview), [Core](/apis/), and various applications & engines.

To get started with aiWARE, you can either [signup online](https://www.veritone.com/devsignup/) and start using the Veritone-managed SaaS offering, or you can install aiWARE on your hardware.

aiWARE can run on a Linux box or on a Mac. This guide will help you set up aiWARE on your Mac. 

## The Veritone Technology Stack

Our stack includes:

* Web technologies (HTTP, JSON, AJAX, etc.)

* Security standards around tokens ([OAuth](https://oauth.net/), [JWT](https://jwt.io/))

* Cloud tech (AWS, ECS, Azure)

* [Webhooks](https://www.google.com/search?q=webhook)

* [GraphQL](https://www.google.com/search?q=graphql)

    * [Sandbox IDE](https://api.veritone.com/v3/graphiql)

* GraphQL Schema Definition Language (SDL) applies to GraphQL schemas

    * Includes notions of Interface, Union, @Directives

* JSON-Schema applies to JSON

    * EXAMPLE: vtn-standard: <https://github.com/veritone/edge-output-writer/blob/master/vtn-standard.schema.json>

?> TL;DR -- We use GraphQL SDL to define our object model. GraphQL object types define what you can access (for CRUD). We use JSON Schema primarily for *data-output* definitions (e.g., vtn-standard).

* Veritone data model (ERD) -- Familiarize yourself with the relationships in the diagram at <https://docs.veritone.com/#/apis/data-model?id=the-veritone-data-model>

* Inter-process messaging via [NSQ](https://nsq.io/overview/design.html)

    * We are phasing out Kafka and RabbitMQ

        * We now use NSQ (brokerless message queue written in Go), which scales better than Kafka

* Workflow concepts (vis-a-vis Automate and [Node-RED](https://nodered.org/))

* It helps (but is not essential) to have some prior exposure to BPM

    * Know what a Directed Acyclic Graph is

    * Know what a "node" is

    * Know what [Node-RED](https://nodered.org/) is

* [Docker](https://www.docker.com/) -- central to understanding Veritone's Engine technology

    * What is Docker? Answer: Containerization technology for easy packaging and deployment of runtimes

        * It's currently a Linux-centric technology. Partial support for Docker exists on Windows, but not to a degree that's useful for building Veritone-friendly engines. 

        * Understand what a Docker *container* is, versus a Docker *image*, versus a Dockerfile

        * Understand which one a *build* is!

        * Understand how Docker differs from VMWare

        * Be familiar with [Docker Compose](https://docs.docker.com/compose/) for launching and coordinating multiple Docker processes in a single host

        * Be familiar with [multistage builds](https://medium.com/capital-one-tech/multi-stage-builds-and-dockerfile-b5866d9e2f84)

    * PRO: Excellent process isolation, scalability, security, and programming-language independence

    * CON: Deeply tied to Linux; somewhat arcane command-line interface; we do not support Docker for Windows

## Prerequisites 
- MacOS 10.14 or greater
- Docker Desktop Community 2.4.0.0 or greater ([Installation Guide](https://docs.docker.com/docker-for-mac/install/))
- Minimum Requirement: Docker with 2 CPUs and 16GB of RAM (Expectation 1 engine running at a time)
- Recommendeded Requirement: Docker with 4 CPUs and 16GB of RAM (Expectation 1-2 engine running at a time)

Refer to [Prerequisites](/aiware/install/prereq) for details on setting up a deployment environment for aiWARE. 

## Install on MacOS
The installation consists of the installation of aiWARE Edge and aiWARE Core. Edge is the processing component. Adding Core provides you with a full stack of aiWARE. This pairs the processing capabilities with applications, search and other data/object operations for aiWARE.
### Step 1: Open Terminal Widnow
Open spotlight (command + space), type Terminal to open a new terminal window
### Step 2: Install aiWARE
```
curl -sfL https://get.aiware.com | sudo -E sh -
```
### Step 3: Validate the installation
Run `curl localhost:9000/edge/v1/version`, for aiWARE Edge version information. This will return information such as:
```
{ "version": "Build number: , Build time: 2021-04-27_19:30:26, Build commit hash: b6e1b627c20489463f7dca463200649af1000222" }
```
This validates that the controller server is up and running. 
### Step 4: Install Core
```
ai --controller-token $AIWARE_INIT_TOKEN hub install core --channel prod
```
### Step 5: Run a sample job
```
ai job create --help
```

## Environment variables for installation
| Variable | Default | Description |
|----------|---------|-------------|
| AIWARE_MODE | nil | This is the mode for the host.  This can be comma separated list of modes.|
| AIWARE_CACHE | /cache | This is the directory used for cache |
| AIWARE_ROOT | /opt/aiware | This is the default directory for aiWARE. The current user needs write permission to this directory. |
| AIWARE_INIT_TOKEN | none | If set, the controller on startup will create this token |
