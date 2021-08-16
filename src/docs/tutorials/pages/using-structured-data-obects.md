# Using Structured Data Objects (SDOs)

**APPROXIMATE READING TIME: 8 MINUTES**

>**Tip** Before getting started, we recommend to read about [how to quickly get started with aiWARE](/getting-started/quickstart/) and get familiar with our [cognitive engines](/cognitive-technology/). You must also understand what are [temporal data objects](#using-temporal-data-objects). We recommend you also read the [Customize Engine Input](customizing-engine-input) tutorial.

## Structured Data Objects <!-- {docsify-ignore} -->

In this tutorial, we will learn together how to use Structured Data Objects (SDOs). Structured data is data with well-defined fixed fields, which usually can be stored in relational databases and is readily indexed for searching. Structured data can take any text-based format, and Veritone is initially supporting structured data expressed as JSON.

In aiWARE, you can use SDOs if when working with structured data. This means that you know the schema of the data that you are working with. For example, if your data is in JSON form then you can use a SDO object for the data.

To use SDOs, you must:

- [Register a schema for the data](#step-1-register-a-schema-for-the-sdo)
- [Create SDOs](#create-sdos)



## Expected Result <!-- {docsify-ignore} -->

By the end of this tutorial, you should be able to define your own SDOs and use it your engine.



## Steps To Follow<!-- {docsify-ignore} -->

### Step 1: Register a Schema for the SDO

Before using structured data in the Veritone platform, you need to register a schema for the data. You can regiser You can do this within the Developer App UI by following these steps:

1. Log into [Veritone Developer](https://developer.veritone.com).

2. Click **Create New** and select **Schema**.

   ![Create New Schema](images\SDO_CreateNew.PNG)

   

   The Basic Schema Details page is displayed.

   

3. Enter the following basic details to describe your schema: 

   - **Schema Name**: _(required)_ Enter a name for the schema.
   - **Schema Description**: _(required)_ Describe what your schema covers in a sentence or two. This description will be displayed to users of your schema.

   ![Enter SDO name](images\SDO_EnterSDOName.PNG)

4. Click **Next** to view the Create Schema page. 

   ![New data schema](images\SDO_NewDataSchema.PNG)

5. Enter the schema with valid JSON formatting. For more information about how to create a valid schema, see the [Best practices for creating schemas](#best-practices-for-creating-schemas) section.

6. Click **Submit**. The schema is created and the summary is displayed. Next, we will publish the schema so it can be used by our engines. Close the wizard to go to the home page.

7. In the home page, you will view the schema you created. Click on the kebab menu and select **Publish** to publish the schema.

   ![Publish](images\SDO_Publish.PNG)

   

8. Click **Publish** in the confirmation message. The schema is published and the status of the schema changes accordingly.

![SDO Schema ID](images\SDO_SchemaID.png)



Once it is published, you can obtain the schema ID by clicking on the kebab menu and select **View**. The ID is displayed in the address bar of the browser.



You can edit schemas that are in the draft status, by clicking on the Edit option to the right of every row in the My Schemas table. However, if you edit a published schema then a new entry is created with Draft status and a new version is assigned to the schema.



#### Best practices for creating schemas

Each schema should fully describe the fields for the structured data that you want Veritone to store and index. The schema should include the following fields:

| Field       | Field Type | Required | Description                                                  | Example                                                      |
| ----------- | ---------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| $id         | string     | No       | Defines the URI reference to the schema                      | "$id": "http://example.com/example.json"                     |
| description | string     | No       | Explains what the schema is about.                           | "description": "Employee birthday list"                      |
| type        | string     | No       | Indicates the format type of the schema. If omitted, defaults to "object" | "type": "object"                                             |
| required    | array      | No       | Indicates the fields that are required to be present in the structured data. If a required field is not present in a record, that record will not be saved. | "required": \["id", "name"]                                  |
| properties  | object     | No       | A JSON object containing the names and data types of the fields in the structured data set | "properties": {"firstName":{"type":"string"},"lastName":{"type":"string"}} |

The supported values of the `type` field that Veritone supports are:

| Type       | Example Values                                               | Notes                                                        |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `array`    | `["one", "two", "three"]`                                    | See [json-schema array](https://json-schema.org/latest/json-schema-validation.html#rfc.section.6.4) type |
| `binary`   | `"U29tZSBiaW5hcnkgYmxvYg=="`                                 | See [elasticsearch binary](https://www.elastic.co/guide/en/elasticsearch/reference/current/binary.html) type |
| `boolean`  | `true`, `false`                                              | See [json-schema boolean](https://json-schema.org/latest/json-schema-validation.html#rfc.section.6.7) type |
| `dateTime` | `"2018-02-22T01:00:00.000Z"`                                 | Should be in UTC time and formatted per [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) |
| `geoPoint` | `"34.052235,-118.243683"`                                    | Should be a latitude,longitude coordinate pair as a string   |
| `integer`  | `1`, `4`, `-34`, `32134`                                     | See [json-schema integer](https://json-schema.org/latest/json-schema-validation.html#rfc.section.6.2) type |
| `ip`       | `"192.168.1.1"`                                              | See [elasticsearch ip](https://www.elastic.co/guide/en/elasticsearch/reference/current/ip.html) type |
| `number`   | `1`, `2.0`, `3431455`                                        | See [json-schema number](https://json-schema.org/latest/json-schema-validation.html#rfc.section.6.2) type |
| `object`   | `{"firstName":{"type":"string"},"lastName":{"type":"string"}}` | See [json-schema object](https://json-schema.org/latest/json-schema-validation.html#rfc.section.6.5) type |
| `string`   | `"hello world."`                                             | See [json-schema string](https://json-schema.org/latest/json-schema-validation.html#rfc.section.6.3) type |

> The `binary`, `dateTime`, `geoPoint`, and `ip` types are all custom extensions to the [json-schema](https://json-schema.org/) standard that in some cases dictate additional validation (specified above).
> The rest of the data types are direct implementations of their json-schema counterparts.





### Step 2: Create SDOs 

You can use the following GraphQL mutation use the schema you created and pass data to it.

```graphql
mutation {
  createStructuredData(input: {
    schemaId: "1f2f7561-f067-4c08-948d-4f9827451fa6",
    data: {
      firstName: "Jason",
      lastName: "Bourne",
      bithday: "2000-01-01"
    }
  }) {
    id
  }
}


```



### Final result

This mutation will produce a response similar to:

```json
{
  "data": {
    "createStructuredData": {
      "id": "8cce0161-d0ba-4bc0-8c68-6c37ad237453"
    }
  }
}
```

The data from your original mutation is now in the system as an SDO with `id` `"8cce0161-d0ba-4bc0-8c68-6c37ad237453"`

