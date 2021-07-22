# Adding Custom Fields

**APPROXIMATE READING TIME: 4 MINUTES**

>**Tip** Before getting started, you recommend to read about [Build Your Own Engine](/developer/engines/tutorial/) and [Training an Engine](training-an-engine).

## Custom Fields <!-- {docsify-ignore} -->

Based on the engine's functionality, you may use additional parameters. The user can enter the values for these additional parameters, and then process the task based on user inputs.

For example, a detection-based engine may need to know the minimum confidence level to consider a result as valid. In this case, you can define these parameters in `Custom Fields` . The end-users of our engine can configure these parameters. These configured parameters will be available to your engine inside of the payload it receives at runtime.

You can create the custom fields inside of VBA either when creating a new engine or on the details page of an existing engine.



## Expected Result <!-- {docsify-ignore} -->

By the end of this tutorial, you would have learnt how to create custom fields and how to query custom fields.



## Steps To Reproduce <!-- {docsify-ignore} -->

### Step 1: Create a Custom Field 

You will start by creating a custom field in the Veritone Developer App.

1. Go to the [developer.veritone.com](https://developer.veritone.com) page and login using your credentials.

2. On the Custom Fields table, click on `New Field`.

   ![Custom Fields](images\table.png)

   

3. You will be prompted to enter properties for the custom field in the `Add Field`. You will discuss the purpose of each of these properties in the next step.



### Step 2: Add Custom Field's Properties 

You must enter the following properties of the custom field before you can save it:

| Property Name | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| Field Name    | The `key` of the parameter inside the `taskPayload` given to our engine at runtime. |
| Field Label   | The user friendly name of the parameter to be displayed to the end user. |
| Field Info    | The description that talks about the purpose of the field.   |
| Field Type    | The type of input that the parameter needs. See the list below for more information. |
| Default Value | The default value that will be used as the initial value of the parameter. |



#### Field Type Values

| Type            | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| Text            | Standard text input                                          |
| Number          | Standard number input with optional min/max/step restrictions |
| Picklist        | Define a list of KVP options, where only a single value is selectable |
| MultiPicklist   | Define a list of KVP options, where multiple values are selectable |
| SchemaSelection | For engines that accept a data schema as an input            |



### Final result

After you have created and saved your custom field, you can use the below query to retrieve a list of fields used by our engine. You can use the query below to view an engines fields by replacing id `replaceMe` with the id of our engine.

```graphql
query {
  engine(id: "replaceMe") {
    fields {
      name
      label
      info
      type
      min
      max
      step
      options {
        key
        value
      }
      defaultValue
      defaultValues
    }
  }
}
```



>Now that you know how to add custom fields, we recommend you review the [Customize Engine Input](customizing-engine-input) and the [Customize Engine Output](customizing-engine-output) tutorials.