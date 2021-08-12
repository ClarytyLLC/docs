# Customizing Engine Input

**APPROXIMATE READING TIME: 7 MINUTES**

>**Tip** Before getting started, we recommend reading [Build Your Own Engine](/developer/engines/tutorial/) to understand how you can build your engine. We recommend you also read the [Customize Engine Output](customizing-engine-output) tutorial.

## Engine Input Customization<!-- {docsify-ignore} -->

In this tutorial we will learn together how to pass a custom input to your engine. We may want to specific custom configuration parameters for our engines to:

- Specify the input or output language (such as *en-US*) using ISO 639-1 standard language codes.
- Specify a particular time zone.
- Set minimum confidence thresholds.
- Specify the URL of a web hook.
- Point to a schema.

These are just a few examples. There could be many other possible scenarios where you would use custom parameters.  You can easily pass an arbitrary JSON data to an engine in aiWARE. Let us quickly go through how it is done.



## Expected Result <!-- {docsify-ignore} -->

At the end of this tutorial, we would have created a custom input field that is displayed in the engine output.



## Steps To Reproduce <!-- {docsify-ignore} -->

### Step 1: Add a  Custom Field

In the GraphQL schema definition for aiWARE's [Task object](https://api.veritone.com/v3/graphqldocs/task.doc.html), the `payload` field points to a `JSONData` blob. This means that you can pass any JSON data to the engine at runtime, as long as it is referenced in the Task's `payload`.

For example, let's say we want our engine to receive a `cutoff` value, which is a floating-point number between 0 and 1. In this case, you might kick off the job using this:

```graphql
mutation runMyEngineJob {
  createJob(
    input: {
      targetId: "531117144"
      isReprocessJob: true
      tasks: [
        {
          engineId: "386e022f-edd1-46ec-b1cc-84d203a37250"
          payload: { cutoff: 0.5 }
        }
      ]
    }
  ) {
    id
  }
}
```



At the runtime, the engine will receive a variety of form fields as part of the request body. For more information about what the engine receives, see [webhook process](https://docs.veritone.com/#/developer/engines/toolkit/?id=process-webhook). 

The parsed JSON object will look something like this:

?> Note that the API token in this `json` is a sample and not usable.

```json
{
    "applicationId": "a22cb5c0-dc00-4c3f-adef-18e28e5b561d",
    "cutoff": 0.5,
    "jobId": "19104428_GvNQ57jXtG",
    "organizationId": "17532",
    "recordingId": "531117144",
    "taskId": "19104428_GvNQ57jXtGlRXJv",
    "taskPayload": {
        "cutoff": 0.5,
        "organizationId": 17532
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZW50QXBwbGljYXRpb25JZCI6ImEyMmNiNWMwLWRjMDAtNGMzZi1hZGVmLTE4ZTI4ZTViNTYxZCIsImNvbnRlbnRPcmdhbml6YXRpb25JZCI6MTc1MzIsImVuZ2luZUlkIjoiOTk5MjgxMWItOWNlMi00ZmFiLTk0MGItYzU2NmIwMzJlMmUyIiwic2NvcGUiOlt7ImFjdGlvbnMiOlsiYXNzZXQ6dXJpIiwiYXNzZXQ6YWxsIiwicmVjb3JkaW5nOnJlYWQiLCJyZWNvcmRpbmc6dXBkYXRlIl0sInJlc291cmNlcyI6eyJyZWNvcmRpbmdJZHMiOlsiNzMwMTUyMjExIl19fSx7ImFjdGlvbnMiOlsidGFzazp1cGRhdGUiXSwicmVzb3VyY2VzIjp7ImpvYklkcyI6WyIxOTEwNDQyOF9Hdk5RNTdqWHRHIl0sInRhc2tJZHMiOlsiMTkxMDQ0MjhfR3ZOUTU3alh0R2xSWEp2Il0sInNvdXJjZUlkcyI6bnVsbH19XSwiaWF0IjoxNTcyMjc2NjczLCJleHAiOjE1NzI4ODE0NzMsInN1YiI6ImVuZ2luZS1ydW4iLCJqdGkiOiIxZmNlNGI5NC0xMmFlLTQ3NWItOTY1My1hMmE3YWQ3YmIzNDEifQ.egCKGRp58wPR-fDIAHPixI5ahGQ6E2aM5qw4ZWS3Vfg",
    "veritoneApiBaseUrl": "https://api.veritone.com"
}
```

In this case, the `cutoff` field (our custom input) is the second field listed.



> Note: The `taskPayload` field is a legacy field that should be considered deprecated.



### Step 2: Add a Custom Field Using the Veritone CMS

This section is relevant only if you care how your engine appears in the Veritone CMS online UI. It does not impact how custom `payload` properties work. You *need not* use the Custom Fields UI to use custom input to your engine, and this is only for users of the Veritone CMS.

You can specify  [custom fields](https://docs.veritone.com/#/developer/adapters/quick-start/step-1?id=_3-add-custom-fields-optional) when you create and register a new engine in Veritone Developer using the online UI. If you add one or more custom fields to your engine project using the UI, each Field Name becomes a property name (key) in the request body that your engine receives at runtime. Each Field Label you specify becomes a form-field label in the Advanced Cognitive Workflow UI of the [Veritone CMS](https://cms.veritone.com/).

Let us say we are registering a new engine with Veritone. At the bottom of the first page of the Registration Wizard, you can click **ADD CUSTOM FIELD** button to view the **Add Custom Field** dialog:

![Add custom field](images\AddCustomField.png)



In the above example, we have added a custom field with name `outputLanguage` and label Output Language. When we run our cognitive engine on the [Veritone CMS](https://cms.veritone.com/), the UI prompts us to specify a value for Output Language. The value specified will be passed as  `outputLanguage` form-field parameter in the body and is POSTed to the engine's `/process` handler at runtime.

Next, we will run the engine and view the output.

### Step 3: Run the Engine and View Output

You can include additional custom `payload` fields, in addition to the Custom Fields, as a part of a Task. You can pass different input parameters (of different keys and values) on different invocations of the same engine. You can have different custom-input JSONData blob for each task of the same engine. The custom fields are not displayed in the `body` if you do not provide any value to the respective form fields in the Advanced Cognitive Workflow UI. 

**To run the engine:**

1. Log onto Veritone and go to the Content Management System [(https://cms.veritone.com)](https://cms.veritone.com/).

2. Click on the *title* (not the thumbnail) of any media file. (See arrow in the example below.)

   ![CRM Selection](images\cmsSelection.png)

   

3. In the Media Details page that opens, click **RUN COGNITIVE ENGINE** . We can ignore the "No Engines Found" warning.

   ![Media Details](images\MediaDetails.png)

   

4. In the Processing page, click **Show Advanced Cognitive Workflow** link in the upper right.

   ![Processing](images\Processing.png)

   

5. Search for your engine from the **Available Engines** picker.

   ![Advanced Cognitive ](images\SelectedEngine.png)

   

6. Click the green circle+ icon to select your engine and move it into the *Selected Engines* column on the right.

Before you use the value a field, ensure that:

- The field exists in the Advanced Cognitive Workflow UI.
- The field has a value and that the value is not null.



### Final result

We see that the **Selected Engine** UI shows the **Output Language** field (with a default value **en-US**). The engine at runtime will receive a `body` payload that includes a property of the custom field name (`outputLanguage`).

```json
{
    "applicationId": "a22cb5c0-dc00-4c3f-adef-18e28e5b561d",
    "outputLanguage": "en-US",
    "jobId": "19104498_AxUQ57jXtT",
    "organizationId": "17532",
    "recordingId": "532237145",
    "taskId": "19104428_GvNQ57jXtGlRXJv",
    "taskPayload": {
        "outputLanguage": "en-US",
        "organizationId": 17532
    },
    "token": "ezJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZW50QXBwbGljYXRpb25JZCI6ImEyMmNiNWMwLWRjMDAtNGMzZi1hZGVmLTE4ZTI4ZTViNTYxZCIsImNvbnRlbnRPcmdhbml6YXRpb25JZCI6MTc1MzIsImVuZ2luZUlkIjoiOTk5MjgxMWItOWNlMi00ZmFiLTk0MGItYzU2NmIwMzJlMmUyIiwic2NvcGUiOlt7ImFjdGlvbnMiOlsiYXNzZXQ6dXJpIiwiYXNzZXQ6YWxsIiwicmVjb3JkaW5nOnJlYWQiLCJyZWNvcmRpbmc6dXBkYXRlIl0sInJlc291cmNlcyI6eyJyZWNvcmRpbmdJZHMiOlsiNzMwMTUyMjExIl19fSx7ImFjdGlvbnMiOlsidGFzazp1cGRhdGUiXSwicmVzb3VyY2VzIjp7ImpvYklkcyI6WyIxOTEwNDQyOF9Hdk5RNTdqWHRHIl0sInRhc2tJZHMiOlsiMTkxMDQ0MjhfR3ZOUTU3alh0R2xSWEp2Il0sInNvdXJjZUlkcyI6bnVsbH19XSwiaWF0IjoxNTcyMjc2NjczLCJleHAiOjE1NzI4ODE0NzMsInN1YiI6ImVuZ2luZS1ydW4iLCJqdGkiOiIxZmNlNGI5NC0xMmFlLTQ3NWItOTY1My1hMmE3YWQ3YmIzNDEifQ.egCKGRp58wPR-fDIAHPixI5ahGQ6E2aM5qw4ZWS3Vfg",
    "veritoneApiBaseUrl": "https://api.veritone.com"
}
```



>We recommend you also read the [Customize Engine Output](customizing-engine-output) tutorial. Also, watch the below great videos about custom fields and customizing engine input.
>
>**Custom Fields**
>
><div style="width: 35%"><iframe src="https://player.vimeo.com/video/379805420?color=ff9933&title=0&byline=0&portrait=0" style="border:0;top:0;left:0;width:75%;height:75%;" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
>
>
>
>**Customizing Engine Input**
>
><div style="width: 35%"><iframe src="https://player.vimeo.com/video/379805503?color=ff9933&title=0&byline=0&portrait=0" style="border:0;top:0;left:0;width:75%;height:75%;" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
