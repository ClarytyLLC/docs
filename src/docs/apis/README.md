# aiWARE APIs

Veritone's full suite of APIs enables you to easily add cognitive functionality and intelligent features to your custom solution.

![Integration](../aiware/aiWARE-in-depth/architecture-overview/stack-integration.svg)

## The Best of Both Worlds <!-- {docsify-ignore} -->

Veritone's aiWARE platform exposes a comprehensive set of [GraphQL APIs](/apis/reference/mutation/), as well as a route-based [HTTP API](/apis/edge/index.html) for customers who prefer a more RESTful approach.
You can mix and match API styles to suit your need.

### GraphQL API

Our extensive GraphQL API (containing [mutations](/apis/reference/mutation/) as well as [queries](/apis/reference/query/)) provides a powerful, flexible, and efficient way to access and aggregate data, allowing you to fetch exactly the data you need (as ready-to-use JSON), with a single query.
GraphQL is a powerful query language that operates via a single endpoint using conventional HTTP POST requests.
Its JSON-based structure not only lets you call multiple nested resources in a single query, it also allows you to shape requests so as to specify the _exact data_ you want sent back.
(No more sifting through a "kitchen sink" REST response.
*You* decide which fields to aggregate in the response.)

### HTTP API

For even greater flexibility, you can (optionally) use Veritone's [aiWARE Edge HTTP API](/apis/edge/index.html) to achieve your integration goals using standard HTTP verbs like PUT, POST, and GET.
The HTTP API is especially useful for customers who wish to manage their own on-premise instance(s) of Veritone aiWARE Edge, or who may have complex deployment requirements involving hybrid on-prem/virtual-private-cloud architectures.

## Base URL <!-- {docsify-ignore} -->

Veritone API uses a single endpoint for ad-hoc requests and to integrate API into third-party applications. All requests must be HTTP POST to [https://api.veritone.com/v3/graphql](https://api.veritone.com/v3/graphql) with *application/json* encoded bodies.

<!-- markdownlint-disable MD031 -->

### Base URL for Engine Development

Engines in Veritone follow a different endpoint protocol for accessing the API.
To ensure successful API execution across different environments, the API base URL is passed in the Task Payload at engine runtime.
Once your engine receives the Task Payload, use the `veritoneApiBaseUrl` field value to construct the GraphQL endpoint for requests.
For example:

```javascript
const apiUrl = payload.veritoneApiBaseUrl + '/v3/graphql';
```

It’s important that the standard API endpoint (referenced above) is not hard coded in your engine and that only the base URL provided in the Task Payload is used to make requests.
For more information, see [Building Engines](/developer/engines/).
<!-- markdownlint-enable MD031 -->

### Authentication

All API requests must be authenticated using an API Token. To authenticate your calls, provide the token in the *Authentication* header of the request with a value *Bearer \<token\>*. Requests made without this header or with an invalid token will return an error code. For information about generating an API Token, see [Authentication](/apis/authentication).

### GraphQL Sandbox

To make it easier to explore, write, and test the API, we set up a [GraphQL Sandbox](https://api.veritone.com/v3/graphql) &mdash; an interactive playground that gives you a code editor with autocomplete, validation, and syntax error highlighting features. Use the Sandbox interface to construct and execute queries, experiment with different schema modifications, and browse documentation. In addition, GraphiQL bakes authorization right into the schema and automatically passes the *Authentication* header with a valid token when you’re logged into the Veritone system.

Veritone’s Sandbox interface is the recommended client for ad-hoc API requests, but calls can be made using any HTTP client. All requests must be sent via HTTP POST to the https://api.veritone.com/v3/graphql endpoint with the *query* parameter and *application/json* encoded bodies. If you’re using a raw HTTP client, the query body contents must be sent in a string with all quotes escaped (see [GraphQL Basics](/apis/tutorials/graphql-basics) for more information).

### API Documentation

For full Veritone API documentation, see:

* [GraphQL Schema](https://api.veritone.com/v3/graphqldocs/) &mdash; Veritone's GraphQL Schema
* [Mutations](/apis/reference/mutation/) &mdash; the complete GraphQL Mutations API
* [Queries](/apis/reference/query/) &mdash; the complete GraphQL Query API
* [aiWARE Edge HTTP API](/apis/edge/index.html) &mdash; REST-style API

### We’re Here to Help!

We’ve tried to pack our API section with detailed information and a variety of [examples](/apis/examples) to assist you in your development. But if you have questions or need assistance, don’t hesitate to reach out to our Developer Support Team by [email](mailto:devsupport@veritone.com) or on [Slack](https://veritonedev.slack.com).

### Continue Reading

<!--TODO: Remove these links and leverage the sidebar or some embeddable widget-->

* [The Veritone API Data Model](/apis/data-model)

* [Using GraphQL](/apis/using-graphql)

* [Authentication](/apis/authentication)

* [Error Codes](/apis/error-codes)

* [Tutorials](/apis/tutorials/)
