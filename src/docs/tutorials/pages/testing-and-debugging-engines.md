# Testing and Debugging Engines

**APPROXIMATE READING TIME: 10 MINUTES**

>**Tip** Before getting started, you should read about [how to quickly get started with aiWARE](/getting-started/quickstart/) and get familiar with our [cognitive engines](/cognitive-technology/). It would also help if you read about [training an engine](training-an-engine) and [working with jobs](#/developer/engines).

## Engine Validation and Debugging <!-- {docsify-ignore} -->

In this tutorial, you will learn how to test our engine and debug the most common error. You should validate your engine before you submit a build.

You must perform the following steps to ensure that your engine is completely validated and you can submit the build:

- [Data Validation Testing](#step-1-data-validation-testing)
- [Segment or Stream Engine Testing](#step2-segment-or-stream-engine-testing)



You can review the [Debug](#step-3-debugging) section to understand any issues that you find in the above tests. These tests only validate the structural part of your engine. You must perform functional testing on your engines to ensure it is performing as intended.



## Steps To Validate and Debug <!-- {docsify-ignore} -->

### (NEED_TO_DO)Step 1: Data Validation Testing

Before doing functional testing of your engine, you should take care to see that your engine is outputting valid data according to the [engine output standard (vtn-standard)](/developer/engines/standards/engine-output/).

### Engine Output Validation API (Beta)

To make it easier to write valid engine output, Veritone provides a simple HTTP POST endpoint that you can use to test the validity of your engine's output.

For example, to validate a speech-to-text engine, you can make the following call:

```bash
curl --request POST \
  --url https://api.veritone.com/v3/tools/engine/validate/ \
  --header 'content-type: application/json' \
  --data '{
  "schemaId": "https://docs.veritone.com/schemas/vtn-standard/master.json",
  "validationContracts": [
    "transcript"
  ],
  "series": [
    {
      "startTimeMs": 0,
      "stopTimeMs": 300,
      "words": [
        {
          "word": "this",
          "extra": "not part of the standard"
        }
      ]
    },
    {
      "startTimeMs": 300,
      "stopTimeMs": 500,
      "words": [
        {
          "word": "is"
        }
      ]
    },
    {
      "startTimeMs": 500,
      "stopTimeMs": 800,
      "words": [
        {
          "word": "a"
        }
      ]
    },
    {
      "startTimeMs": 800,
      "stopTimeMs": 1200,
      "words": [
        {
          "word": "sentence"
        }
      ]
    }
  ]
}'
```

If the engine output is valid, you will see `valid: true` under the `data` key of the response, as well as a `processed` field, which will show you only the fields that have been validated against the vtn-standard.

Here is an example of validating the above `transcript` output.

```json
{
  "data": {
    "valid": true,
    "processed": {
      "schemaId": "https://docs.veritone.com/schemas/vtn-standard/master.json",
      "validationContracts": [
        "transcript"
      ],
      "series": [
        {
          "startTimeMs": 0,
          "stopTimeMs": 300,
          "words": [
            {
              "word": "this"
            }
          ]
        },
        {
          "startTimeMs": 300,
          "stopTimeMs": 500,
          "words": [
            {
              "word": "is"
            }
          ]
        },
        {
          "startTimeMs": 500,
          "stopTimeMs": 800,
          "words": [
            {
              "word": "a"
            }
          ]
        },
        {
          "startTimeMs": 800,
          "stopTimeMs": 1200,
          "words": [
            {
              "word": "sentence"
            }
          ]
        }
      ]
    }
  }
}
```

Note how in the processed output, `"extra": "not part of the standard"` has been stripped out of the `words` array in the first element in the `series` array, because `extra` is not part of the vtn-standard for speech-to-text.

You might be wondering _What happens if I submit invalid output?_ Let's find out.

```bash
curl --request POST \
  --url https://api.veritone.com/v3/tools/engine/validate/ \
  --header 'content-type: application/json' \
  --data '{
  "schemaId": "https://docs.veritone.com/schemas/vtn-standard/master.json",
  "validationContracts": [
    "transcript"
  ],
  "series": [
    {
      "startTimeMs": 0,
      "stopTimeMs": 300,
      "words": [
        {
          "word": "this"
        }
      ]
    },
    {
      "startTimeMs": 300,
      "stopTimeMs": 500,
      "words": [
        {
        }
      ]
    },
    {
      "startTimeMs": -1,
      "stopTimeMs": 800,
      "words": [
        {
          "word": "a"
        }
      ]
    },
    {
      "startTimeMs": 800,
      "stopTimeMs": 1200,
      "words": [
        {
          "word": "sentence"
        }
      ]
    }
  ]
}'
```

In the preceding example, the second element in the array has an empty object, and the third element has a negative `startTimeMs`, which would clearly cause problems due to data inconsistency.
Fortunately, the engine output validator can catch a large subset of these sorts of problems.

Here's what you get when you try to validate our less than perfect output:

```json
{
  "errors": [
    {
      "name": "invalid_input",
      "message": "The supplied engine result failed schema validation checks. Details errors are included in the validationErrors field.",
      "validationErrors": [
        {
          "keyword": "required",
          "dataPath": ".series[1].words[0]",
          "schemaPath": "#/else/items/required",
          "params": {
            "missingProperty": "word"
          },
          "message": "should have required property 'word'"
        },
        {
          "keyword": "if",
          "dataPath": ".series[1].words",
          "schemaPath": "#/if",
          "params": {
            "failingKeyword": "else"
          },
          "message": "should match \"else\" schema"
        },
        {
          "keyword": "minimum",
          "dataPath": ".series[2].startTimeMs",
          "schemaPath": "#/properties/series/items/properties/startTimeMs/minimum",
          "params": {
            "comparison": ">=",
            "limit": 0,
            "exclusive": false
          },
          "message": "should be >= 0"
        }
      ]
    }
  ]
}
```

Since the engine output is not valid, the `valid` field is not present.
Instead, an array of `errors` is provided, with detailed information letting us know that the second element in the `series` array, `series[1]` (an empty object), is missing the `word` property, and the third element in the `series` array, `series[2]`, has a `startTimeMs` that is below the required value of `0`.

#### Limitations

> "Testing can be used to show the presence of bugs, but never to show their absence."
> &mdash;*Edsger W. Dijkstra*

The engine output validator can determine if specific test data from your engine is invalid.
It cannot determine whether _all_ the possible outputs of your engine will always be valid.

Also note, the validator does not yet cover the full spectrum of vtn-standard output. (This may change.)

?> As of `4/10/19` only validation of the `transcription` and `object detection` engine capabilities is supported.

Since data validation is a computationally expensive task, the API only allows engine output of `1MB` or less to be validated at a time without rate limiting.

### Step 2: Segment or Stream Engine Testing 




### Step 3: Debugging


### Final result

![screenshoot-success]()

>Learn how to [next steps / something else that is related to this tutorial]  [link](/somewhere/in/the/docs)
