# How to get your engine approved

**APPROXIMATE READING TIME: 9 MINUTES**

>**Tip** Before getting started, you recommend to read about [training an engine](training-an-engine.md) and [engine developer's toolkit](deploy-to-veritone).
>
>You can also review this video to understand how to build a cognitive engine.
>
><div style="width: 35%">
><iframe src="https://player.vimeo.com/video/375527778?color=ff9933&title=0&byline=0&portrait=0" style="border:0;top:0;left:0;width:75%;height:75%;" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
><script src="https://player.vimeo.com/api/player.js"></script>

## Engine Approval Process <!-- {docsify-ignore} -->

In this tutorial you'll learn how get your engine approved. Before you can start with the approval process, be sure that you have:

1. Registered your engine
2. Used Docker to create a build
3. Tested the engine locally: The foolproof way to do this is to generate a real task using GraphQL queries in the [GraphQL Sandbox](https://api.veritone.com/v3/graphiql). You can also create one in the Tasks tab of the engine's page. If you are using the  [Veritone Engine Developer's Toolkit](/developer/engines/toolkit/) to build your engine, then you can use the local testing harness available as part of toolkit SDK. 

> This tutorial assumes that you have done the above steps, and will talk only about pushing your engine to Veritone.

The relationship between engine states, VDA build status, and the onboarding process is shown in the diagram below.

![Certification workflow](\images\EngineOnboarding.svg)



The  build for the engine must have passed compliance testing and should be in _Available_ state, so that you can submit it to Veritone for review. Veritone performs the following tests on all engines:

- **Manifest validation:** The `manifest.json` file is extracted from the Docker image during the initial upload process. The content of the manifest is then checked against the [manifest standards](/developer/engines/standards/engine-manifest/).
  
- **Security vulnerabilities:** The layers of the Docker image are analyzed for critical security flaws. As you build our Docker container image, you should be sure about what goes into each layer. You do not use a source (base image) if it is not trusted. You'll use the latest version from a trusted source, and keep the host operating system properly patched and updated. Similarly, processes running inside the container should have the latest security updates.

- **Network awareness:** When registering an engine with Veritone, you have to specify whether the engine should be considered network-isolated, or network-aware. (For more information on available choices, see [Engine Deployment Models](/developer/engines/deployment-model/?id=engine-deployment-models).) The engines that are network-isolated should not make calls outside the network. If an engine is _network-isolated_ and yet it makes calls to an external IP address using a wire protocol, then the engine will be `disapproved`.
  
- **Build test**: The build test looks to see if your engine produces output that conforms to the [vtn-standard](/developer/engines/standards/engine-output/).



Once you are done with these steps, you can go ahead and push your engine to Veritone. This tutorial talks about how you can get your engine approved, and how you can fix any issues you see on the way to approval.



## Expected Result <!-- {docsify-ignore} -->

After review, the build status changes to *Approved* or *Disapproved*. If the build is approved, then it can be hosted in the aiWARE platform and deployed at any time. If the build was disapproved, then it cannot be deployed to production. You must try resolving the build issues and resubmit the engine. See the [troubleshooting](#troubleshooting-approval-issues) section to check the most common approval issues with the build. If you cannot resolve the issue, then contact Vertione's support team for more information. 

Once your engine is approved, you can view it on the Veritone platform. The engine can be deployed and made available to users in the aiWARE platform. Users can then submit jobs to the engine on the platform.



## Steps To Reproduce <!-- {docsify-ignore} -->

### Step 1: Create a new build

You'll start by creating a new build:

1. Log in to [Veritone](https://developer.veritone.com/).

2. Click **ENGINES** in the left-hand navigation sidebar to display the engines that you have onboarded. You'll be creating a build for the hello-world engine.

   ![Engine list](\images\Onboarding-1.png)

3. Click on the engine's name to see the Builds page. If there are no uploaded builds, then the page will show **Create a New Build** option with the instructions to create a build.

   ![Create a New Build](\images\Onboarding-1a.png)

   

   If there are uploaded builds available, then you'll see a list of them with status information for each one:
   ![Builds list](\images\Onboarding-2.png)

   > Note that the **Create a New Build** detailed UI (with associated instruction list) can be toggled into or out of view with the &or; or &and; control at the right edge of the content widget.

4. You must review the **Create a New Build** checklist and complete any pending tasks. The checklist starts with "Include your manifest with your build" that you must completed by now. For more information about building the manifest, see [creating manifest](/developer/engines/tutorial/engine-tutorial-step-3).
   If you have created a new build, then you can skip down to the checklist item that says "Log into the Veritone Docker server." You can login by running this command in the terminal console and using your Veritone credentials.

   ```dockerfile
   docker login docker.veritone.com
   ```

   

### Step 2: Tag and push your build

Now you'll tag your build and push it for approval.

1.  You'll run the following command to tag the engine, where `custom-tag` is the tag you'll use to recognize your build:

   ```bash
   docker tag hello-world docker.veritone.com/17532/hello-world:custom-tag
   ```

   > Use your org number (instead of 17532) and your own arbitrary tag (rather than 'custom-tag') in this command. You'll use these same values to push our engine in the next step.

2. Let's push your build in a terminal session:

   ```bash
   docker push docker.veritone.com/17532/hello-world:custom-tag
   ```

   You'll use the organization number (rather than 17532) and the custom tag that you used in the previous step.

3. You'll check the **Builds** listing in Veritone Developer UI. You'll see a new build (the one you just pushed) appear in the list, with the status AVAILABLE.

   The possible status values for a build are:

   ```pre
   approved
   available
   deleted
   deploying
   deployed
   deployFailed
   disapproved
   fetching
   invalid
   paused
   pending
   uploaded
   ```

4. If you see an abnormal status, then you'll download the build report using the menu control at the right edge of the list item and select the **Download Build Report** command. 

   ![Download Build Report](\images\Onboarding-3.png)

   

   The Build Report is a JSON file that will information about the build.

5. When the build upload is successful, you  will click on the blue **SUBMIT** link in the list item, on the right. The build's status will change to **PENDING**

   Veritone will review the build to determine that it meets security and other requirements for onboarding.

### Step 3: Check approval status 

Vertione performs various checks on your build after it is pushed to the Veritone Docker registry. Once the build is approved, the engine can be considered ready for use.

Here is a brief overview of the engine approval journey:

<img src="\images\EngineApproval.svg" alt="Approval process"  />

The engine will be checked in terms of:

* Manifest validation
* Security vulnerabilities
* Network-awareness
* Build soundness (output validation)

You are notified (within 72 hours) about the status of the engine. If the engine is approved, you can Deploy it immediately. If not, then you'll have to take appropriate steps to fix any problems. See the [troubleshooting](#troubleshooting-approval-issues) section to know how you can troubleshoot the most common issues with the build.



### Final result

The status of a build changes to **APPROVED** if everything is fine with it. You can then deploy the engine by clicking on the blue **DEPLOY** button in the UI, to deploy the engine. This makes the engine available to use in API (GraphQL) commands.

> If the engine appears with a status of **DEPLOYING**, then refresh the page to until it changes to **DEPLOYED**.

![Deployed status](\images\Onboarding-4.png)



### Troubleshooting Approval Issues

Below are some issues you must look out for and fix to get the engine approved quickly. Review the [manifest documentation](https://docs.veritone.com/#/developer/engines/standards/engine-manifest/) before staring engine approval.

- **Manifest Issues**: The most common issues are around the manifest. Here are some issues you must watch out for:
  - **Engine does not appear in the builds list**: If the engine does not appear in the builds table after pushing to the Veritone registry, then you must check the manifest to ensure that the `engineId` is correct. You must also ensure that the JSON is valid JSON and not malformed.
  - **Error `invalid <MANIFEST_FIELD>`**:  This error means you gave an invalid value for a manifest field. You must check [the docs](https://docs.veritone.com/#/developer/engines/standards/engine-manifest/?id=fields) to find the field and its correct data type. Note that for URL fields, you must provide a real URL.
  - **Error `Unknown media format: <MEDIA_FORMAT>`**.  The tells us that the media format provided is not included in Veritone's [list of supported MIME types](https://docs.veritone.com/#/developer/engines/standards/engine-manifest/?id=mimetypes). For a media format that is not listed, contact support@veritone.com.
  - **Error `Need a valid <MANIFEST_FIELD>`**: A required manifest field is missing from the manifest file. You must review [the manifest documentation](https://docs.veritone.com/#/developer/engines/standards/engine-manifest/?id=fields) to see the fields required for cognitive engines.

- **Common Output Issues**: Issues with outputs are often caused by outputs that do not follow the Veritone [engine output standard](/developer/engines/standards/engine-output/).
  If the result does not appear in CMS, then you must first make sure the engine output is created by the task. Next, you must check to see if the output follows the Veritone standard.

- **Logging Issues:** Ensure your engine log outputs to stdout. The task log is accessible in the tasks info section of the task table in [Veritone Developer](https://developer.veritone.com) after completion.

- **Vulnerability Issues**: If the engine failed certification due to a critical security vulnerability, then you must try updating the docker base image in the Dockerfile. The best practice is to use the `latest` tag so that it always points to the latest stable release.

- **VTN Standard Issues**: VTN Standard describes aiWARE's standard format for data output. For more information, see [engine output](https://docs.veritone.com/#/developer/engines/standards/engine-output/) as well as the [master.json file](https://docs.veritone.com/schemas/vtn-standard/master.json). Here are some issues to look out for:
  - **VTN Standard check failed with an error `json: unknown field <UNKNOWN_FIELD>`**: You have included an additional and unexpected field in the results of the engine. The relevant results from the engine are sent as an attachment in the e-mail containing your certification results. You must compare that with the expected VTN Standard output for the cognitive category.
  - **VTN standard check with an error: `label is required`**: Oops! You forgot to include a label for the custom data in the result. You must include both label and type in the custom data. For more information on customizing engine output, see [Customizing Engine Output](customizing-engine-output).



>Learn how to [test and debug engines](testing-and-debugging-engines),  [compare engine results using benchmark](comparing-engine-results-using-benchmark), and [integrate aiWARE in third part applications](integrate-aiware-in-third-party-applications).