# Content Classification Flow Tutorial

**APPROXIMATE READING TIME: 4 MINUTES**

>**Tip** Before getting started, make sure to understand [Variables](/automate-studio/application/README?id=variables) and [Typed Inputs](/automate-studio/working-with-nodes/README?id=typed-inputs)

## Flow Description

In this tutorial, you will understand how you can create a content classification flow. The flow takes a text file URL, runs it through a Content Classification Engine, and creates an output of categories based on the text excerpts. It also sends a summary email to the user.

## Expected Result

![content-classification](content-classification.png)

## Steps To Reproduce

### Step 1: Setup the aiware-in Node

We will first add the aiware-in node and set it up to accept a text file.

**To set up the aiware-in node:**

1. Add the **aiware-in** node from the Node Palette and drop it to the canvas and double-click on the Node to open the *Node Properties*. 

2. Rename the node to *Input* in the **Name** Input Field. We do this only for clarity on the flow.

3. Click on the *Output format* dropdown menu, and select the *Simple* option.

4. Now, let's set up the **Manually Inject Data** area. 

   1. Click on the **Sample Input** dropdown and select the *Default* option. Optionally, you can select an existing sample input or create a new one.

   2. In the Edit JSON tab, paste the following JSON object and click on *Done*.

      ```json
      {
          "url": "https://pollin8-ab.s3-us-west-1.amazonaws.com/sample-2.txt"
      }
      ```

      

5. Once done, click the *Done* button once again to close the Node Properties and save the changes.

   

<hr/>

### Step 2: Setup the 'Cognition - Core' Node

Next, you will configure the core cognition node that classifies the content.

**To set up the cognition node:**

1. Drag the **Cognition - Core** node from the Node Palette and drop it next to the previous node. Once done, wire up the two nodes.
2. Double-click on the **Cognition - Core** node to open the node properties. 
3. We will rename this node by typing *Content Classification* in the name field.
4. From the *Category* dropdown, select the **Content Classification** option.
5. Next, from the *Engine* dropdown select the **eContext Classify (IAB) V3** option.
6. Scroll down to **Advanced Settings**, and from the *Cluster* option select the *prd5 - Adhoc Cluster*.
7. Give the Job a high priority by selecting the *Very High* option from the *Job Priority* dropdown.
8. Check the *Wait for results* checkbox. This pauses the flow and proceeds to the next node **only** when the job is done and the results are generated. 
9. Once done, click on the *Done* button to close the node properties and save the settings.

<hr/>

### Step 3: Setup the Function Node

We will next add a function node that does a little custom processing using a JavaScript code.

**To set up the function node:**

1. Drag the **Function** node from the Node Palette and drop it next to the previous (cognition) node. Once done, wire up the two nodes.

   We will use this node to add some custom JavaScript code that formats the Engine Result output to an email.

2. Double-click on the **Function** node to open the node properties and rename it to *Format Results*.

3. Copy the below code and paste it in the **Function** node.

   This code iterates through the Engine Result and groups all categories found by the **Cognition** node into an array. It then generates an output that will be sent to the logged in user. The output of this function will be returned in the **msg** object in a new property that you created at runtime and named **emailBody**.

   ```javascript
   var output = []
   msg.payload.aiware.engineResult.object.forEach(function(source, index) {
       var categories = [];
       
       (source.objectCategory || []).forEach(function(category) {
           if (category.class) {
               categories.push(category.class);
           }
       }); 
   
       output.push(`<i><b>${categories.length ? ('(' + categories.join(', ') + ')') : ''}</b></i> ${source.text !== undefined ? source.text : ''}`);
   })
   
   var last = msg.payload.aiware.engineResult.object.pop();
   var summary = [];
   (last.objectCategory || []).forEach(function(category, index) {
       if (category.class) {
           summary.push( (index+1) + '. '+category.class);
       }
   }); 
   
   
   var fullOutput = JSON.stringify(msg.payload.aiware.engineResult.object,null ,2);
   
   msg.emailBody = `
   Congratulations on running your Automate Studio flow! The Content Classification engine has just finished processing <a href="https://s3.amazonaws.com/static.veritone.com/sample.txt">this sample input file</a>, here are the results:
   <br><br>   
       ${output.join(' ')}
   <br>
   <br>
   Summary of Categories below
   <br>
       ${summary.join('<br>')}
   <hr>
   <br>
   Want to do more with this flow? Here are some suggestions to try out:
   <br>
   <br>
   1. This email is sent via the aiware-email node. It is a great tool for debugging or notifying you when a process is complete. Try changing the email subject and re-run the flow. <a href="https://docs.veritone.com/#/automate-studio/getting-started/README?id=step-2-add-nodes-to-your-flow">Learn more</a>. 
   <br>
   <br>
   2. Try changing the input data by editing the "url" within the input node. <a href="https://docs.veritone.com/#/automate-studio/getting-started/README?id=step-3-add-cognition">Learn more</a>.
   <br>
   <br>
   3. Want to get even more technical? Check out the raw output below. Inside the flow, this output exists in the variable msg.payload.aiware.engineResult.object, try looking for it in the 'debug' panel on the right. <a href="https://docs.veritone.com/#/automate-studio/Training/crawl"> Learn more</a>.
   <br>
   <br>
   <hr>    
       ${fullOutput}
   `;
   return msg
   ```

   

4. Once done, click the *Done* button to close the node properties and save the changes.

<hr/>

### Step 4: Setup the User Details Node

Next, you will add user details so that you can use it to send the email.

**To set up the user details node:**

1. Drag the **User Details** node from the Node Palette and drop it next to the previous node.

   The previous node is the **Function** Node. As you can see it has two outputs. The upper grey square on the right side of the node represents the *Success* output. The grey square below represents the *Failure* or *Error* output. 

2. Wire the *Success output* from the **Function** node to the *input port* of the **User details** Node. 

3. The **User Details** node doesn't need any special settings. It accepts *Username* and *Password* as inputs in the Node's properties. If not provided it will get the user details of the logged-in user by default.

4. We can view the user details in the **msg** object under **.payload.aiware.user**. The logged-in user email will be available under the **name** property in msg.payload.aiware.user. The full path to the logged-in user email is **msg.payload.aiware.user.name**.

   

<hr/>

### Step 5: Setup the Email Node

**To set up the email node:**

1. Drag the **email** node from the Node Palette.
2. Wire the success output from the **User Details** node to the **aiware email** node.
3. Double-click on the **email** Node to open the node properties.
4. Setup the properties in the following way:

   - **To Email**: Click on the *Input Type* dropdown and select the **msg.** type. This means that Node will look for the email in the **msg** object
     In the Input Field, paste the following path: **payload.aiware.user.name**. 

   - **Email Subject**: Click on the *Input Type* dropdown and select the **string** type. This means that Node will take the actual value provided in the Input Field as a string. In the Input Field, paste the 'Automate Hello World Content Classification'.

   - **Email Body**: Click on the *Input Type* dropdown and select the **msg.** type. In the Input Field type *emailBody*. It means that the email body that is sent to the user will be taken from **msg.emailBody**, which appears to be the property you stored your result in in the **Function** node.
5. Once done, click on the *Done* button to close the editor, and then once again to close the Node Properties and save the changes.

<hr/>

### Step 6: Add output nodes

We will now add output nodes to the flow - one for success and the other for failure.

**To add output nodes:**

1. Drag the **aiware out** Node from the Node Palette and drop it to the canvas next to the previous Node. 

2. Click on the **aiware out** node once to select it. 

3. Press `Control + C` and `Control + V` on your keyboard to copy and paste the node. Now you have two output nodes. One for success and one for failure.

4. Move one of the two identical **aiware out** down a little bit.

5. Double click on the node you have just moved to open the Node Properties, and from the  *Output Status* dropdown select *failure*.

6. Wire the **aiware email** node success output to the **aiware out \[success\]** node.

7. Next, you will add three **link out** nodes from the Node Palette and place them just below the **Content Classification**, **Get User Details**, and **aiware email** node and wire each to the **Failure** output of the node above.

8. Now grab a **link in** node, put it in front of the **aiware out \[failure\]]** node, and wire it to its port.

9. Finally, select the **link out** nodes one by one by clicking on them once and wire each of them to the **link in** node.

   

<hr/>

### Step 7: Run your flow

If you followed the steps, your flow should look something like the flow from the beginning of this tutorial. Have a quick look.

If so, go to the **aiware in** node and click on the **Inject** button (the sky-blue square on the left side of the node). You can follow the job progress and debug your node from the **Debug** window by clicking on the *Bug* icon on the sidebar.



Within a few minutes, the flow will complete and you will be able to see the result in the email you signed up with.

![content-classification-success](content-classification-success.png)



>Learn how to run your Flow via [HTTP API](/automate-studio/working-with-flows/README?id=run-via-http)