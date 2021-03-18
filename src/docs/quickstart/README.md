<!-- markdownlint-disable -->

<style>
th { text-align:left; }
</style>

# Contents <!-- {docsify-ignore} -->

* [Quickstarts](#quickstarts) 
* [Tutorials](#tutorials)
* [The Veritone Technology Stack](#the-veritone-tech-stack)
* [Working With GraphQL](#working-with-graphql)
* [Working With Unstructured Data](#working-with-unstructured-data)
* [Cognitive Capabilities](#cognitive-capabilities)
* [The VTN Standard](#the-vtn-standard)
* [Understanding Schemas](#understanding-schemas)
* [Working with Apps](#working-with-apps)

# Quickstarts <!-- {docsify-ignore} -->

It's easy to get started with Veritone aiWARE. Create your free [Veritone Developer account](https://www.veritone.com/devsignup/), then dig in!

**What Would You Like to Do?**

I would like to: | Suggested entry point:
-- | ---
Build custom Machine Learning solutions for audiences <br/>with complex data analysis requirements. | See our [ML Integrator](/quickstart/ml-integrator/) quickstart.
Build AI into standalone apps. | See our [ML Explorer](/quickstart/ml-explorer/) quickstart.
Build AI-powered web apps that integrate with Veritone's CMS. | See our [App Developer](/quickstart/app-developer/) quickstart.
Create custom cognitive engines. | See our [Engine Developer](/quickstart/engine-developer/) quickstart.

# Tutorials <!-- {docsify-ignore} -->

We have plenty of sample code and walkthroughs to get you started.

* [GraphQL API Basics](/apis/tutorials/graphql-basics.md) &mdash; Start here if you're new to GraphQL.
* [API Examples](/apis/examples.md) &mdash;  GraphQL-based API tips and tricks, as runnable queries.
* [Build Your Own AI App](/developer/applications/app-tutorial/) &mdash; A step-by-step guide to building an AI-powered web app.
* [Build Your Own Cognitive Engine](/developer/engines/tutorial/) &mdash; Step-by-step instructions for building a cognitive engine.
* [Customizing Engine Output](/developer/engines/tutorial/customizing-engine-output) &mdash; Extend the VTN Standard schema for custom output data.
* [Customizing Engine Input](/developer/engines/tutorial/engine-custom-fields) &mdash; Learn how to pass custom data in to your engine.
* [How to Train a Cognitive Engine](/developer/engines/tutorial/engine-training-tutorial) &mdash; A tutorial that shows how to train an engine to recognize faces.
* [Clean up TDO data](/apis/tutorials/cleanup-tdo.md) &mdash; Learn how to clean up and reuse Temporal Data Objects.
* [Creating Export Requests](/apis/tutorials/create-export-request/) &mdash; Export data out of aiWARE in specific formats.
* [Posting Engine Results](/apis/tutorials/engine-results.md) &mdash; If you're building a `batch` engine, read this.
* [Look Up Available Engines](/apis/tutorials/get-engines.md) &mdash; This mini-tutorial shows how to interrogate aiWARE so as to discover which engines are available.
* [Error Handling in the GraphQL API](/apis/tutorials/graphql-error-handling.md) &mdash; Learn about the different error messages available on query responses.
* [Uploading and Processing Files](/apis/tutorials/upload-and-process.md) &mdash; This tutorial will show you how to process arbitrary file.
* [Uploading Large Files](/apis/tutorials/uploading-large-files.md) &mdash; Learn how to overcome challenges presented by large files.
* [Handling File Upload Errors](/apis/tutorials/file-upload-error-handling.md) &mdash; Learn how to handle File Upload errors.
* [Authentication and Authorization Tokens](/apis/tutorials/tokens.md) &mdash; Read about bearer tokens and how aiWARE uses them.
* [Paging](/apis/tutorials/paging.md) &mdash; GraphQL handles large-result-set paging in a particular way.
* [Asset Types](/apis/tutorials/asset-types.md) &mdash; When you create assets on a temporal data object (TDO), you are required to specify a *type*.
* [Job Quickstart Guide](/apis/job-quickstart/) &mdash; It's easy to run an AI job. Here's how!
* [Search Quickstart Guide](/apis/search-quickstart/) &mdash; Learn how to use the Veritone Search API on processed results.

The Veritone Technology Stack <!-- {docsify-ignore} -->
-----------------------

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

Working With GraphQL <!-- {docsify-ignore} -->
--------------------

* What even is it? *ISON-based query language*
    * We offer REST *and* GraphQL styles of API design
    * GraphQL's primitive types are  easy to learn (same as JavaScript's)
    * It helps if you understand how SDL is used to define GraphQL schemas
        - [Schema stitching](https://www.apollographql.com/docs/graphql-tools/schema-stitching/) 
        - [Interfaces](https://www.apollographql.com/docs/apollo-server/schema/unions-interfaces/)
            * What are the limitations of GraphQL Interfaces? (Hint: No true inheritance.)
* Free IDE: [Sandbox](https://api.veritone.com/v3/graphql)

Working With Unstructured Data <!-- {docsify-ignore} -->
------------------------------

* Onboard JSON schemas
    * Using [VDA](https://developer.veritone.com/)
    * Using the GraphQL API
* Upload and process files
    * Using https://cms.veritone.com/#/
    * Using the API
* Access engine results
    * Using [CMS](https://cms.veritone.com/#/)
    * Using the API

Cognitive capabilities <!-- {docsify-ignore} -->
----------------------

The official list can always be found at <https://docs.veritone.com/#/developer/engines/cognitive/?id=capabilities>.

The capabilities we support are shown below. These exist within a handful of "classes" (which are listed at <https://docs.veritone.com/#/developer/engines/cognitive/?id=classes> but are not really rigorously defined elsewhere). In general, it is safe to rely on the notion of cognitive *capabilities*. Cognitive *classes* are purely notional (*not* safe).

* Anomaly Detection
* Audio Fingerprinting
* Content Classification
* Correlation (not really a cognition type! This is a Veritone construct)
* Entity Extraction
* Face Detection
* Face Recognition
* Geolocation
* Image Classification
* Keyword Extraction
* Language Identification
* License Plate Recognition (ALPR)
* Logo Detection
* Object Detection
* Sentiment Analysis
* Speaker Detection
* Speaker Recognition (Diarization)
* Summarization
* Keyword Extraction
* Text Recognition (OCR)
* Transcription
* Translation
* Visual Redaction

Each of these capabilities is further defined in a VTN Standard subschema.

The VTN Standard <!-- {docsify-ignore} -->
----------------

The VTN Standard is a schema that defines data-output contracts for all the Veritone-supported cognitive capabilities. Read more about it at <https://docs.veritone.com/#/developer/engines/standards/engine-output/>. 

* What does it mean to you as a developer?
    * Interoperability
    * Apples-to-apples benchmarking
    * Tools for *validating* engine output

Understanding Schemas <!-- {docsify-ignore} -->
---------------------

Schemas are an important concept not just in the database world but in the world of JSON data generally.

* Schema Definition Language -- This is a GraphQL technology.
    * We use SDL to define our data model (which is to say, everything that can be queried/mutated by GraphQL).
* JSON Schema -- This is not a GraphQL technology. It is much broader and more general. We use it extensively for things like VTN Standard, as well as our REST APIs.
* Structured Data Object (SDO) -- "Structured data" means arbitrary custom data defined by Veritone or its customers.
    * The data complies with a JSON Schema and becomes *searchable*.
    * An SDO usually lives as part of a Temporal Data Object.
* Custom Schemas -- Can come into play in various places, such as for custom input data, custom extensions of VTN Standard (output data), etc.

Working with Apps <!-- {docsify-ignore} -->
-----------------

* Authentication
    * Can be scoped to a User and Organization
* Tokens: Are generally short-lived (1 day).
    * Can be a 16-byte hash, or can be a much longer (999-byte) [JSON Web Token](https://jwt.io/) (JWT). Both are used the same exact way.
    * Direct programmatic login (via the GraphQL `userLogin` mutation) gives the 16-byte token.
    * OAuth produces the longer JWT. 
* Understanding app deployment/onboarding: See <https://docs.veritone.com/#/developer/applications/app-tutorial/>
    * Most customer "apps" are customer-hosted (not hosted by Veritone) and integrate to Veritone CMS via the Context Menu Extension mechanism.
    * [Veritone Essentials](/apps/) apps are, of course, Veritone-hosted.
