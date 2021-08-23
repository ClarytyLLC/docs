# Customizing Engine Output

**APPROXIMATE READING TIME: 8 MINUTES**

>**Tip** Before getting started, we recommend reading  [Build Your Own Engine](/developer/engines/tutorial/) to understand how you can build your engine and generate an output.

## Engine Output Customization <!-- {docsify-ignore} -->

In this tutorial we will learn together how to customize an engine's output to contain additional data. For interoperability, Veritone requires all cognitive engines to produce a [standardized output](/developer/engines/standards/engine-output/?id=engine-output-standard-vtn-standard). However, we can easily include data that is beyond the minimum requirements of the `vtn-standard` schema. 

For most cases, you need to include a summary block of data as a part of the engine's output. You can do this by including a `jsondata` blob (arbitrary JSON data) under a `vendor` field, as shown in [Extending the Standard](/developer/engines/standards/engine-output/?id=extending-the-standard). The disadvantage of this approach is that your summary data will not be indexed and so will not be searchable.



We will instead take the following approach and create a searchable engine output:

1. [Define a JSON schema for your summary blob](#step_1_create_a_summary_schema).
2. [Register the schema with Veritone and get its schema ID](#step_2_register_the_schema_with_veritone).
3. [Refer the schema in your final output *using the schema ID*](step_3_update_the_engine_output_to_include_the_schema). 



This lets aiWARE to validate your engine's *entire* output and index everything (for searchability). 

## Expected Result <!-- {docsify-ignore} -->

In the end, we will create a JSON schema for our summary blob. This structured summary blob can be validated by aiWARE and is searchable.



## Steps To Reproduce <!-- {docsify-ignore} -->

### Step 1: Create a Summary Schema

We will first create a summary schema and include it in our output. We will be continuing the [Build Your Own Engine](/developer/engines/tutorial/) tutorial, where we created a simple cognitive engine that extracts vocabulary from text. We include some summary stats for the job, such this:

```
{
  "stats": {
    "totalWords": 950,
    "vocabWords": 223,
    "processingTimeMS": 4
  }
}
```



The sample `stats` object has three fields, all of type integer. However, your summary object can include any number of fields of any data type supported by JavaScript.

In order to use this data structure in our output, we will need to create the JSON schema that supports it. You could use any of the easy-to-use online tools, such as  https://jsonschema.net/, to create a schema. A schema that supports the above data structure looks like:

```
{
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "stats"
  ],
  "properties": {
    "stats": {
      "$id": "#/properties/stats",
      "type": "object",
      "title": "The Stats Schema",
      "required": [
        "totalWords",
        "vocabWords",
        "processingTimeMS"
      ],
      "properties": {
        "totalWords": {
          "$id": "#/properties/stats/properties/totalWords",
          "type": "integer",
          "title": "The Totalwords Schema",
          "default": 0,
          "examples": [
            123
          ]
        },
        "vocabWords": {
          "$id": "#/properties/stats/properties/vocabWords",
          "type": "integer",
          "title": "The Vocabwords Schema",
          "default": 0,
          "examples": [
            123
          ]
        },
        "processingTimeMS": {
          "$id": "#/properties/stats/properties/processingTimeMS",
          "type": "integer",
          "title": "The Processingtimems Schema",
          "default": 0,
          "examples": [
            123
          ]
        }
      }
    }
  }
}
```



In the above example, we have customized some of the titles just to suit our needs. Next, let 's register this schema with Veritone. Registering with Vertione is super-easy!

### Step 2: Register the Schema with Veritone

1. Log in to [Veritone Developer](https://developer.veritone.com/).

2. In the upper left, click **NEW > Schema**.

   ![new_schema](.\images\NewSchema.png)

   

   

3. Enter Basic Schema Details, such as Name and Description, for your schema.

   ![Basic_Schema_Details](.\images\BasicSchemaDetails.png)

   

4. Click **NEXT** to go to the Create Schema page.

5. In the Create Schema editor window, paste or type your JSON schema.

   ![Create Schema](.\images\CreateSchema.png)

   

6. When you're done, click **SUBMIT**. Your schema is registered and is displayed in the schema summary view. 

   ![Schema summary](.\images\SchemaSummaryView.png)

   

7. Click the three-vertical-dots ("kebab") menu on the right in the row for your schema, and select **PUBLISH**. This publishes our schema and makes it available. Next, we need to get the schema Id for our schema.

8. Click the *kebab* menu for our schema, and select **VIEW**. In the view page, select copy the schema ID from the browser address bar.

   ![SchemaID](.\images\SchemaID.png)

   

   In this case, our schema ID is `1842b38c-ab34-401f-9715-d668f0c6ebd3`. We will add the schema ID to reference it in the engine output.



### Step 3: Update the Engine Output to Include the Schema

The easiest way to insert our schema into our engine's output is to append an extra element to the keyword `object` array.

> For this example, we will update the `keyword-extraction.js` file used in the [Build Your Own Engine](#/developer/engines/tutorial/) tutorial. You can find the complete code for the tutorial in [the repo for that project](https://github.com/veritone/V3-Engine-Examples). 



To display the `stats` object correctly in our data, we must wrap in a way that allows aiWARE to recognize it. It should reference the schema ID that we got in the previous step. Bottom line, we need to insert a Structured Data Object, in our engine's data array, that looks like this:

```json
{
  "type": "object",
  "structuredData": {
    "1842b38c-ab34-401f-9715-d668f0c6ebd3": {
      "stats": {
        "totalWords": 0,
        "vocabWords": 0,
        "processingTimeMS": 0
      }
    }
  }
}
```



We will now create a code that will actually do this. The [`keyword-extraction.js`](https://github.com/veritone/V3-Engine-Examples/hello-world/keyword-extraction.js) file has a public method called `getOutput()`. We will add code that appends a proper `stats` object to our data immediately before the `return` statement of the `getOutput()` method.

```javascript
// First we'll put this inner method inline:
function getStructuredData() {
  let schemaId = "1842b38c-ab34-401f-9715-d668f0c6ebd3"; // Use your own schema ID here!
  let sdo = {}; // create empty structured-data object (sdo)
  sdo.type = "object"; // start building the object
  sdo.structuredData = {};
  sdo.structuredData[schemaId] = {};
  sdo.structuredData[schemaId].stats = {};
  sdo.structuredData[schemaId].stats.totalWords = _words.length;
  sdo.structuredData[schemaId].stats.vocabWords = output.length;
  sdo.structuredData[schemaId].stats.processingTimeMS = (1 * new Date) - _startTime;

  return sdo;
}

// Now we can add the structured data to our output:
output.push( getStructuredData() );

return output;
```



We also need to add the following two lines at the topic of the file:

```javascript
let _startTime = 1 * new Date;
let _words = null;

```

These lines support our timing variable, `_startTime`, and a new global `_words` (for word count), in this snippet.

You can save the file, re-build the engine, and test it locally (using Test Mode) as described in the [Build Your Own Engine](#/developer/engines/tutorial/) tutorial. After you verify that the engine works as planned, you can deploy it to Veritone.

### Final Results

We ran the modified `hello-world` engine (from  [Build Your Own Engine](#/developer/engines/tutorial/) tutorial) on a large text file, and got a vocabulary-extraction dataset that included stats as show below:

![Engine Results](.\images\EngineResults.png)

The highlighted portion is our custom summary block, showing that 8,104 vocabulary words were extracted from 96,059 total words in just 185 milliseconds.



Sometimes, you need to add an extra field to each data item in a series. For example, in our vocabulary extraction engine, it would be great to have an *occurrence count* for every vocabulary word, so that we can see how many times a given word occurs in the input.

To do this, just insert a Structured Data Object (having its own schema ID) into *every item of the data series*. Then repeat the steps in this tutorial for creating and registering your custom schema. You can then modify your engine's code to output data array elements that contain the corresponding Structured Data Object (one per array element). See the discussion at [Extending the Standard](/developer/engines/standards/engine-output/?id=extending-the-standard) for more information.



>Now that you know how to customize an engine output, we recommend you review the [Customize Engine Input](customizing-engine-input) tutorial. You can further review [Training an Engine](training-an-engine).