<style>
     p, ul, ol, li { font-size: 18px !important; }
</style>

# Engine Output Standard - vtn-standard

## Overview

`vtn-standard` is a file format that engines can use to output their findings for a particular piece of data.
The aiWARE platform and user interfaces know how to interpret the data written to this format.

When engines report their findings, they either write assets or broadcast messages in vtn-standard format.
When apps query information from the engineResults GraphQL query, it responds in vtn-standard format.

For specifications and examples for individual engine capabilities, please see the documentation for [Building Cognitive Engines](/developer/engines/cognitive/).

## Full Specification

The official specification is expressed in [json-schema](https://json-schema.org/) format according to various "validation contracts."
The individual validation contracts are contained in their own schemas, which use definitions in the [master schema](/schemas/vtn-standard/master.json ':ignore').
Engine output should express which validation contract(s) it conforms to by including the validation contract identifier in the validationContracts array at the top level of the output.

> The [veritone-json-schemas npm package](https://www.npmjs.com/package/veritone-json-schemas) includes all the vtn-standard json-schemas and tools for validating against them.

### Validation Contracts

The currently defined validation contracts are:

Validation Contract | Applicable Capabilities | json-schema Definition
------------------- | ----------------------- | ----------------------
`anomaly` | [Anomaly Detection](/developer/engines/cognitive/text/anomaly-detection/) | [anomaly.json](/schemas/vtn-standard/anomaly/anomaly.json ':ignore')
`concept` | [Content Classification](/developer/engines/cognitive/text/content-classification/) | [concept.json](/schemas/vtn-standard/concept/concept.json ':ignore')
`entity` | [Entity Extraction](/developer/engines/cognitive/text/entity-extraction/) | [entity.json](/schemas/vtn-standard/entity/entity.json ':ignore')
`facial-features` | [Facial Features](/developer/engines/cognitive/facial-features/) | [facial-features.json](/schemas/vtn-standard/entity/facial-features.json ':ignore')
`keyword` | [Keyword Extraction](/developer/engines/cognitive/text/keyword-extraction/) | [keyword.json](/schemas/vtn-standard/keyword/keyword.json ':ignore')
`language` | [Language Identification](/developer/engines/cognitive/text/language-identification/) | [language.json](/schemas/vtn-standard/language/language.json ':ignore')
`media-translated` | [Plain Text Translation](/developer/engines/cognitive/text/translation/plain-text/), [Rich Text Translation](/developer/engines/cognitive/text/translation/rich-text/) | [media-translated.json](/schemas/vtn-standard/media-translated/media-translated.json ':ignore')
`object` | [Object Detection](/developer/engines/cognitive/vision/object-detection/) | [object.json](/schemas/vtn-standard/object/object.json ':ignore')
`sentiment` | [Sentiment Analysis](/developer/engines/cognitive/text/sentiment/) | [sentiment.json](/schemas/vtn-standard/sentiment/sentiment.json ':ignore')
`summary` | [Summarization](/developer/engines/cognitive/text/summarization/) | [summary.json](/schemas/vtn-standard/summary/summary.json ':ignore')
`text` | [Text Extraction](/developer/engines/cognitive/text/text-extraction/), [Text Recognition (OCR)](/developer/engines/cognitive/vision/text-recognition/), [Extracted Text Translation](/developer/engines/cognitive/text/translation/extracted-text/), [Recognized (OCR) Text Translation](/developer/engines/cognitive/text/translation/recognized-text/) | [text.json](/schemas/vtn-standard/text/text.json ':ignore')
`transcript` | [Transcription](/developer/engines/cognitive/speech/transcription/), [Transcript Translation](/developer/engines/cognitive/text/translation/transcript/) | [transcript.json](/schemas/vtn-standard/transcript/transcript.json ':ignore')
`verification` | [Verification](/developer/engines/cognitive/verification/) | [verification.json](/schemas/vtn-standard/verification/verification.json ':ignore')

Other validation contracts are in the process of being formalized.
In the meantime, please see the example engine outputs for various capabilities under [Building Cognitive Engines](/developer/engines/cognitive/).

### Annotated Example

An annotated example of the full specification is shown below demonstrating most of the capabilities:

<div class="collapse-accordion"><ul><li>
                <input type="checkbox" id="list-item-0">
                <label for="list-item-0"><span class="expandText">Show Full Example</span><span class="collapseText">Close Full Example.</span></label>
                <ul>
                    <li class="inner-content">

[](vtn-standard.example.js ':include :type=code javascript')

</li>                  
</ul>
</li>          
</ul>
</div>


## Extending The Standard

<!--TODO: Move to a separate page (so we can link from the Developer UI)-->
You can extend the standard with your custom data in multiple ways depending on your needs.

### By adding to the vendor section

The simplest way to add custom data to a vtn-standard file is to include it in one of the `vendor` sections.
The data written in the vendor section will be visible in the generated asset and available through the aiWARE API.
But this data will *not* be visible in any aiWARE applications and will not be available through the search API.
The values must be valid JSON data types but have no other constraints.

The four places you can add data to `vendor` sections are:

- At the asset level (applies to the whole file):

    ```json
    {
      "sourceEngineName": "engine_a",
      "vendor": {
        "myCustomKey1": "custom string value",
        "piNumber": 3.14
      }
    }
    ```

- At the `object` level (applies to a particular object in the whole file):

    ```json
    {
      "sourceEngineName": "engine_b",
      "object": [
        {
          "type": "object",
          "vendor": {
            "myCustomKey1": "custom string value",
            "piNumber": 3.14
          }
        }
      ]
    }
    ```

- At the time slice (`series`) item level (applies to a particular slice of time):

    ```json
    {
      "sourceEngineName": "engine_c",
      "series": [
        {
          "startTimeMs": 10,
          "stopTimeMs": 1060,
          "vendor": {
            "myCustomKey1": "custom string value",
            "piNumber": 3.14
          }
        }
      ]
    }
    ```

- At the time slice (`series`) item `object` level (applies to a particular object in a particular slice of time):

    ```json
    {
      "sourceEngineName": "engine_d",
      "series": [
        {
          "startTimeMs": 0,
          "stopTimeMs": 1000,
          "object": {
            "type": "object",
            "vendor": {
              "myCustomKey1": "custom string value",
              "piNumber": 3.14
            }
          }
        }
      ]
    }
    ```

### By leveraging structured data

If you would like your data to be displayed in a table in the user interface and indexed for searching against via the search API,
you can add your data to the vtn-standard file in one of the `structuredData` sections.
To do this, you first need to [register a schema through Veritone Developer](/developer/data/quick-start/) that expresses the structure of your data.
Then you can reference the schema ID in the `structuredData` section and include your custom data under it.

- At the `object` level (applies to a particular object in the whole file):

    ```json
    {
      "sourceEngineName": "engine_e",
      "object": [
        {
          "type": "object",
          "structuredData": {
            "a0d65cfd-320b-4557-42ff-4e0c6fe9a152": {
              "scale": "Fahrenheit",
              "degrees": "80"
        },
            "ba735caa-fa9b-a4b2-bb72-2e4dc5a23ff5": {
              "25_30": "1000",
              "31_35": "1200",
              "36_40": "200"
            }
          }
        }
      ]
    }
    ```

- At the time slice (`series`) item level (applies to a particular slice of time):

    ```json
    {
      "sourceEngineName": "engine_f",
      "series": [
        {
          "startTimeMs": 10,
          "stopTimeMs": 1060,
          "structuredData": {
            "a0d65cfd-320b-4557-42ff-4e0c6fe9a152": {
              "scale": "Fahrenheit",
              "degrees": "80"
            },
            "ba735caa-fa9b-a4b2-bb72-2e4dc5a23ff5": {
              "25_30": "1000",
              "31_35": "1200",
              "36_40": "200"
            }
          }
        }
      ]
    }
    ```

- At the time slice (`series`) item `object` level (applies to a particular object in a particular slice of time):

    ```json
    {
      "sourceEngineName": "engine_g",
      "series": [
        {
          "startTimeMs": 0,
          "stopTimeMs": 1000,
          "object": {
            "type": "object",
            "structuredData": {
              "a0d65cfd-320b-4557-42ff-4e0c6fe9a152": {
                "scale": "Fahrenheit",
                "degrees": "80"
              },
              "ba735caa-fa9b-a4b2-bb72-2e4dc5a23ff5": {
                "25_30": "1000",
                "31_35": "1200",
                "36_40": "200"
              }
            }
          }
        }
      ]
    }
    ```

### By extending the specification itself

If you would like your data to be displayed in the aiWARE UI as its own new capability, please [contact us](mailto:ecosystem@veritone.com)
to discuss how the specification should be extended and what types of user interfaces should be created.


<style>
label {
        color: #fff;
    }
    
    .markdown-section code {
        border-radius: 2px;
        color: #322;
        font-size: .8rem;
        margin: 0 2px;
        padding: 3px 5px;
        white-space: pre-wrap;
    }
    
    .collapse-accordion { width:83%; }

    .collapse-accordion ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .collapse-accordion label {
        display: block;
        cursor: pointer;
        padding: 4px 32px;
        border: 1px solid #fff;
        border-radius: 7px;
        border-bottom: none;
        background-color: #766;
        position: relative;
    }

    .collapse-accordion label:hover {
        background: #999;
    }

    .collapse-accordion label:after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        text-indent: -9999px;
        border-top: 1px solid #f2f2f2;
        border-left: 1px solid #f2f2f2;
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        text-decoration: none;
        color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transform: rotate(135deg);
        left: 10px;
        top: 50%;
        margin-top: -5px;
    }

    .collapse-accordion input[type="checkbox"]:checked+label:after {
        transform: rotate(-135deg);
        top: 20px;
    }

    .collapse-accordion input[type="radio"]:checked+label:after {
        transform: rotate(-135deg);
        top: 20px;
    }

    .collapse-accordion label.last {
        border-bottom: 1px solid #fff;
    }

    .collapse-accordion ul ul li {
        padding: 10px;
    }

    .collapse-accordion input[type="checkBox"] {
        position: absolute;
        left: -9999px;
    }
    
    .collapse-accordion input[type="radio"] {
        position: absolute;
        left: -9999px;
    }

    .collapse-accordion input[type="checkBox"]~ul {
        height: 0;
        transform: scaleY(0);
      transition: transform .2s ease-out;
    }
    
    .collapse-accordion input[type="radio"]~ul {
        height: 0;
        transform: scaleY(0);
        transition: transform .5s ease-out;
    }

    .collapse-accordion input[type="checkBox"]:checked~ul {
        height: 100%;
        transform-origin: top;
        transition: transform .5s ease-out;
        transform: scaleY(1);
    }

   .collapse-accordion input[type="radio"]:checked~ul {
        height: 100%;
        transform-origin: top;
        transition: transform .2s ease-out;
        transform: scaleY(1);
    }

    .collapse-accordion input[type="checkBox"]:checked+label {
        background:#bda0a0;
        border-bottom: 1px solid #fff;
    }

    .collapse-accordion input[type="radio"]:checked+label {
        background: red;
        border-bottom: 1px solid #fff;
    }

    .collapse-accordion input[type="checkbox"]:checked+label .collapseText {
        display: block;
    }

   .collapse-accordion input[type="radio"]:checked+label .collapseText {
        display: block;
    }

    .collapse-accordion input[type="checkbox"]:checked+label .expandText {
        display: none;
    }

.collapse-accordion input[type="radio"]:checked+label .expandText {
        display: none;
    }

    .collapseText {
        display: none;
    }

.info {
  margin-top: 50px;
color: #000;
  font-size: 24px;
}
.info span {
  color: red;
}

</style>