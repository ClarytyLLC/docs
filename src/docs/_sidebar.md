<!-- markdownlint-disable no-inline-html first-line-h1 -->

<!-- Sidebar Logo -->

<style>
.sidebar ul li.active>a {
  color:#222;
  font-size: 18px;
}
.sidebar ul li a {
  font-size: 18px;
  height: 28px;
}
.sidebar {
    font-size: 12pt;
}

.app-sub-sidebar li:before {
    content: "";
    padding-right: 0px;
    float: left
}

</style>

<a href="/"><div class="logo hide-in-embed-mode"><img src="https://static.veritone.com/assets/favicon/favicon.ico" alt="Veritone logo"/><span class="logo-text">Veritone Docs<span></div></a>

<!-- Hide the logo in the embed mode and only show text -->
<div class="logo show-in-embed-mode"><span class="logo-text">Documentation<span></div>


- [Getting Started](/getting-started/)
    <!--- [For Beginners](/page-under-construction)-->
    - [For Application Developers](/getting-started/app-developer/)
    - [For Data Scientists](/getting-started/engine-developer/)
    - [For Machine Learning Integrator](/getting-started/ml-integrator/) <!-- remove or change to developer? -->
    - [For Machine Learning Explorer](/getting-started/ml-explorer/) <!-- remove? -->
    - [For MLOps Engineer](/getting-started/mlops/)
- [aiWARE](/aiware/)
  - [Quickstart](/aiware/install/aiware-anywhere-quickstart.md) 
  - [Installation Guide](/aiware/install/installation-guide-overview.md)  
    - [Install Single Machine](/aiware/install/install.md) <!-- installation guide overview --><!-- Single machine, small cluster, expanded cluster, should be part of the CLI -->
    - [Install Cluster](/aiware/install/cluster.md) <!-- everything you need to know -->
    - [Validate Install](/aiware/install/validate.md) <!-- move under installation -->
  - [Cluster Management Guide](/aiware/manage/) <!-- advanced steps, platform mgmt -->
    - [Prerequisites](/aiware/install/prereq.md) <!-- split this page -->
    - [Sizing](/aiware/manage/sizing.md)
    - [Usage Reporting](/aiware/manage/usage.md)
    - [Maintenance](/aiware/manage/maintenance.md)
  - [Troubleshooting](/aiware/troubleshooting/)
  - [aiWARE In-Depth](/aiware/aiWARE-in-depth/) <!-- rewrite this section -->
    - [aiWARE Architecture](/aiware/aiWARE-in-depth/architecture-overview/)
    - [Environment Variables](/aiware/install/envs.md) 
    - [GPU Support](/aiware/aiWARE-in-depth/gpu-support.md)
    - [Controller](/aiware/aiWARE-in-depth/controller)
    - [Engines](/aiware/aiWARE-in-depth/engines)
    - [Adapters (Ingestion)](/developer/engines/adapters/)
    - [Job Processing](/aiware/aiWARE-in-depth/job-processing)
    - [Job Examples](/aiware/aiWARE-in-depth/job-examples)
    - [Single-Engine Jobs](/aiware/aiWARE-in-depth/single-engine-jobs)
    - [File System](/aiware/aiWARE-in-depth/file-system)
    - [Stream Ingestor 2](/aiware/aiWARE-in-depth/stream-ingestor)
    - [More About aiWARE](/aiware/aiware-features.md)
    - [Path to Monetization](/developer/engines/getting-started/path-to-monetization/)
    - [Support](/developer/engines/getting-started/support/)
    - [Technologies Used](/developer/engines/getting-started/technologies/)
- [Tutorials](/apis/tutorials/) <!-- distribute those tutorials to the appropriate sectioins; make this page a hub/toc for deep links into docs in other sections. -->
  - [Jobs, Tasks, and TDOs](/apis/jobs-tasks-tdos.md)
  - [Job Quickstart Guide](/apis/job-quickstart/)
  - [Search Quickstart Guide](/apis/search-quickstart/)
  - [Using Eventing](/apis/eventing/eventing.md)
  - [Uploading and Processing Files](/apis/tutorials/upload-and-process.md)
  - [Uploading Large Files](/apis/tutorials/uploading-large-files.md)
  - [Handling File Upload Errors](/apis/tutorials/file-upload-error-handling.md)
  - [Authentication and Authorization Tokens](/apis/tutorials/tokens.md)
  - [Paging](/apis/tutorials/paging.md)
  - [Asset Types](/apis/tutorials/asset-types.md)
- [Cognitive Technology](/cognitive-technology/) <!-- Maybe Cognitive Engines? -->
  - Audio <!-- These class pages need to be clickable and have a quick intro plus toc. Also, are we still using classes? maybe better just flatted the list of categories here -->
    - [Audio Fingerprinting](/developer/engines/cognitive/audio/audio-fingerprinting/)
  - Biometrics
    - [Face Detection](/developer/engines/cognitive/biometrics/face-detection/)
    - [Face Recognition](/developer/engines/cognitive/biometrics/face-recognition/)
  - Data
    - [Data Correlation](/developer/engines/cognitive/data/correlation/)
    - [Geolocation](/developer/engines/cognitive/data/geolocation/)
  - Facial Features
    - [Facial Features](/developer/engines/cognitive/facial-features/)
  - Speech
    - [Speaker Detection](/developer/engines/cognitive/speech/speaker-detection/)
    - [Speaker Recognition](/developer/engines/cognitive/speech/speaker-recognition/)
    - [Transcription](/developer/engines/cognitive/speech/transcription/)
  - Text
    - [Anomaly Detection](/developer/engines/cognitive/text/anomaly-detection/)
    - [Content Classification](/developer/engines/cognitive/text/content-classification/)
    - [Entity Extraction](/developer/engines/cognitive/text/entity-extraction/)
    - [Keyword Extraction](/developer/engines/cognitive/text/keyword-extraction/)
    - [Language Identification](/developer/engines/cognitive/text/language-identification/)
    - [Sentiment Analysis](/developer/engines/cognitive/text/sentiment/)
    - [Summarization](/developer/engines/cognitive/text/summarization/)
    - [Text Extraction](/developer/engines/cognitive/text/text-extraction/)
    - [Translation](/developer/engines/cognitive/text/translation/)
      - [Extracted Text Translation](/developer/engines/cognitive/text/translation/extracted-text/)
      - [Plain Text Translation](/developer/engines/cognitive/text/translation/plain-text/)
      - [Recognized Text (OCR) Translation](/developer/engines/cognitive/text/translation/recognized-text/)
      - [Rich Text Translation](/developer/engines/cognitive/text/translation/rich-text/)
      - [Transcript Translation](/developer/engines/cognitive/text/translation/transcript/)
  - Verification
    - [Face Verification](/developer/engines/cognitive/verification/face-verification/)
    - [Speaker Verification](/developer/engines/cognitive/verification/speaker-verification/)
  - Vision
    - [Image classification](/developer/engines/cognitive/vision/image-classification/)
    - [License Plate Recognition (ALPR)](/developer/engines/cognitive/vision/license-plate/)
    - [Logo Detection](/developer/engines/cognitive/vision/logo-detection/)
    - [Object Detection](/developer/engines/cognitive/vision/object-detection/)
    - [Text Recognition (OCR)](/developer/engines/cognitive/vision/text-recognition/)
  - [Working with Jobs](/quickstart/jobs/?id=working-with-jobs)
  - [Working with Libraries](/developer/libraries/)
  - [Library-enabled Engines](/developer/libraries/engines.md)
  - [Training Engines](/developer/libraries/training.md)
  - [Running Engines](/developer/libraries/running.md)
  - [Machine Box](/developer/machine-box/)
    - [Getting Started](/developer/machine-box/setup/)
      - [Install Docker](/developer/machine-box/setup/docker)
      - [Box Keys](/developer/machine-box/setup/box-key)
    - [API Reference](/developer/machine-box/api-guidelines)
    - [Boxes](/developer/machine-box/boxes/)
      - [Facebox](/developer/machine-box/boxes/facebox-overview)
        - [Facebox tutorial: Teaching Facebox](/developer/machine-box/boxes/teaching-facebox)
      - [Tagbox](/developer/machine-box/boxes/tagbox)
        - [Tagbox tutorial: Recognizing images](/developer/machine-box/boxes/tagbox/recognizing-images)
      - [Textbox](/developer/machine-box/boxes/textbox)
      - [Classificationbox](/developer/machine-box/boxes/classificationbox)
        - [Best practices for using Classificationbox](/developer/machine-box/boxes/classificationbox/best-practices)
      - [Nudebox](/developer/machine-box/boxes/nudebox)
      - [Objectbox](/developer/machine-box/boxes/objectbox)
      - [Fakebox](/developer/machine-box/boxes/fakebox)
      - [Veritone Applications](/apps/)
- [Automate Studio](/automate-studio/)
  - [Quickstart](/automate-studio/getting-started/README)
  - [Overview & Concepts](/automate-studio/application/README)
    - [Automate Studio Application](/automate-studio/application/README)
      - [Canvas](/automate-studio/application/README?id=canvas)
      - [Node Palette](/automate-studio/application/README?id=node-palette)
      - [Debug/Info](/automate-studio/application/README?id=debug-info)
      - [Variables](/automate-studio/application/README?id=variables)
        - [Message (msg)](/automate-studio/application/README?id=message-msg)
        - [Context, Flow, and Global](/automate-studio/application/README?id=context-flow-and-global)
  - [Working with Flows](/automate-studio/working-with-flows/README)
    - [Flow Basics](/automate-studio/working-with-flows/README?id=flow-basics) 
      - [Create New Flow](/automate-studio/working-with-flows/README?id=create-new-flow)
      - [Create New Flow From Template](/automate-studio/working-with-flows/README?id=create-new-flow-from-template)
      - [Open An Existing Flow](/automate-studio/working-with-flows/README?id=open-an-existing-flow)
      - [Flow Details](/automate-studio/working-with-flows/README?id=flow-details)
    - [Editing Flows](/automate-studio/working-with-flows/README?id=editing-flows)
      - [Save Flow Settings](/automate-studio/working-with-flows/README?id=save-flow-settings)
      - [Flow Revisions](/automate-studio/working-with-flows/README?id=flow-revisions)
      - [Export and Import](/automate-studio/working-with-flows/README?id=export-and-import)
    - [Debugging a Flow](/automate-studio/working-with-flows/README?id=debugging-a-flow)
    - [Deploying & Running Flows](/automate-studio/working-with-flows/README?id=deploying-amp-running-flows)
      - [Run in the studio](/automate-studio/working-with-flows/README?id=run-in-the-studio)
      - [Run via HTTP](/automate-studio/working-with-flows/README?id=run-via-http)
      - [Run as a Job](/automate-studio/working-with-flows/README?id=run-as-a-job)
    - [Graphql API for Flows](/automate-studio/working-with-flows/README?id=graphql-api-for-flows)
    - [Subflows](/automate-studio/subflow/README)
      - [Create Subflow](/automate-studio/subflow/README?id=create-subflow)
      - [Edit Subflow Properties](/automate-studio/subflow/README?id=edit-subflow-properties)
      - [Organize Your Flow](/automate-studio/subflow/README?id=organize-your-flow)
  - [Working with Nodes](/automate-studio/working-with-nodes/README)
    - [Nodes Basics](/automate-studio/working-with-nodes/README?id=nodes-basics)
      - [Structure](/automate-studio/working-with-nodes/README?id=structure)
      - [Properties](/automate-studio/working-with-nodes/README?id=properties)
      - [Typed Inputs](/automate-studio/working-with-nodes/README?id=typed-inputs)
      - [Help](/automate-studio/working-with-nodes/README?id=help)
    - [aiWARE Nodes](/automate-studio/working-with-nodes/README?id=aiware-nodes)
    - [Add Nodes To Palette](/automate-studio/working-with-nodes/README?id=add-nodes-to-palette)
  - [Tutorials](/automate-studio/tutorials/README)
    - [Basic](/automate-studio/tutorials/basic/README)
      - [Transcription](/automate-studio/tutorials/basic/transcription/tutorial)
      - [Content Classification](/automate-studio/tutorials/basic/content-classification/tutorial)
      - [Object Detection](/automate-studio/tutorials/basic/object-detection/tutorial)
      <!-- - Chained Cognition -->
    - [Advanced](/automate-studio/tutorials/advanced/README)
      - [Customer Recognition by Face](/automate-studio/tutorials/advanced/customer-recognition/tutorial)
      - [Detection of Negative Social Media Posts](/automate-studio/tutorials/advanced/detection-of-negative-social-media-posts/tutorial)
      <!-- - Dynamic Language Translation -->
  - [Alteryx Tools](/automate-studio/alteryx/)
    - [aiWARE for Alteryx](/automate-studio/Training/intro-to-automate/unit-3.md)
  - [Get Paid!](/automate-studio/flow-bounties/README)

  <!-- - [Getting Started](/automate-studio/getting-started/README) -->
  <!-- - [Automate Traininig Course](/automate-studio/Training/intro-to-automate/unit-1.md) page-under-construction) -->
    <!-- - [Unit 1: Introduction to aiWARE and Cognitive Engines](/automate-studio/Training/intro-to-automate/unit-1.md) 
    - [Unit 2: Using Automate Studio](/automate-studio/Training/intro-to-automate/unit-2.md)
    - [Unit 3: aiWARE for Alteryx](/automate-studio/Training/intro-to-automate/unit-3.md) -->
  <!-- - [Tutorials](/automate-studio/tutorials/automate-tutorials)
    - [The Basics](/automate-studio/Training/crawl)
    - [Working with Flows](/automate-studio/Training/walk/README.md)
    - [Cognition within a Flow](/automate-studio/Training/run/run)
    - [Orchestrating AI with a Flow](/automate-studio/tutorials/orchestrating-ai.md)
    - [Create aiWARE Custom API Endpoints](/automate-studio/tutorials/your-ai-flow.md)
    - [AI Recognized Your Face. Now What?](/automate-studio/tutorials/ai-recognized-your-face.md)
    - [Sentiment Analysis on Helpdesk Tickets](/automate-studio/tutorials/sentiment-analysis.md)
    - [Creating new training data with a flow](/automate-studio/tutorials/automate-tutorial-6-flow-face-libraries.md)
    - [Automate Studio and Flow Engines](/automate-studio/tutorials/automate-tutorial-7-flow-engines.md) -->
  <!-- - [Alteryx Tools](/automate-studio/alteryx/)
    - [aiWARE for Alteryx](/automate-studio/Training/intro-to-automate/unit-3.md) -->
  <!-- - [Get Paid!](/automate-studio/flow-bounties/README) -->

- [Building Engines](/developer/engines/)
  - [Getting Started with Engines](/developer/engines/getting-started/)
  - [Partner with Veritone](/developer/benefits.md)
  - [Overview: Cognitive Engines](/developer/engines/cognitive/)
  - [Overview: Correlation Engines](/developer/engines/correlation/)
  - [Build Your Own Engine](/developer/engines/tutorial/)
    - [Step 0 - Introduction and Project Setup](/developer/engines/tutorial/)
    - [Step 1 - Register Your Project with Veritone](/developer/engines/tutorial/engine-tutorial-step-1.md)
    - [Step 2 - Use Docker to Create a Build](/developer/engines/tutorial/engine-tutorial-step-2.md)
    - [Step 3 - Test Your Build Locally](/developer/engines/tutorial/engine-tutorial-step-3.md)
    - [Step 4 - Upload Your Build to Veritone](/developer/engines/tutorial/engine-tutorial-step-4.md)
    - [Step 5 - Test Your Engine in aiWARE](/developer/engines/tutorial/engine-tutorial-step-5.md)
  - [Customizing Engine Output](/developer/engines/tutorial/customizing-engine-output.md)
  - [Customizing Engine Input](/developer/engines/tutorial/engine-custom-fields)
  - [Training an Engine](/developer/engines/tutorial/engine-training-tutorial)
  - [Engine Developer's Toolkit (V3F)](/developer/edge/engines)
  - [Engine Approval Process](/developer/engines/approval/)
  - [Deployment Models](/developer/engines/deployment-model/)
  - [Processing Modes](/developer/engines/processing-modes/)
    - [Segment Engine Processing](/developer/engines/processing-modes/segment-processing/)
    - [Stream Engine Processing](/developer/engines/processing-modes/stream-processing/)
  - [Engine Standards](/developer/engines/standards/)
    - [Engine Output (vtn-standard)](/developer/engines/standards/engine-output/)
    - [Engine Manifest](/developer/engines/standards/engine-manifest/)
  - [Custom Fields](/developer/engines/custom-fields/)
  - [Polling](/developer/engines/polling/)
  - [Callbacks](/developer/engines/callbacks/)
  - [Testing & Debugging](/developer/engines/testing-and-debugging/)
  - [Building Adapters](/developer/adapters/)
    - [Quickstart](/developer/adapters/quick-start/)
      - [Step 1 - Register Your Adapter](/developer/adapters/quick-start/step-1.md)
      - [Step 2 - Construct Your Code for the Veritone Platform](/developer/adapters/quick-start/step-2.md)
      - [Step 3 - Create Your Manifest File](/developer/adapters/quick-start/step-3.md)
      - [Step 4 - Package and Upload a Build](/developer/adapters/quick-start/step-4.md)
      - [Step 5 - Submit Your Build for Approval](/developer/adapters/quick-start/step-5.md)
      - [Step 6 - Deploy Your Adapter](/developer/adapters/quick-start/step-6.md)
    - [Construction Guidelines](/developer/adapters/guidelines.md)
    - [Adapter Manifest](/developer/adapters/manifest.md)
  - [Data Science Resources](/developer/resources/)
- [Building Applications](/developer/applications/)
  - [Tutorial: Build Your Own AI App](/developer/applications/app-tutorial/)
    - [Step 1: Register Your App](/developer/applications/app-tutorial/app-tutorial-step-1.md)
    - [Step 2: Set Up Authentication](/developer/applications/app-tutorial/app-tutorial-step-2.md)
    - [Step 3: Add Processing Logic](/developer/applications/app-tutorial/app-tutorial-step-3.md)
    - [Step 4: Run Object Detection on a Video](/developer/applications/app-tutorial/app-tutorial-step-4.md)
  - [Application Integration](/developer/applications/integration/)
  - [Context Menu Extensions](/developer/applications/context-menu-extensions.md)
  - [OAuth](/developer/applications/oauth.md)
  - [Resources](/developer/applications/resources.md)
  - [FAQ](/developer/applications/faq.md)
- [Working with Structured Data](/developer/data/)
  - [Quickstart](/developer/data/quick-start/)
- [API, SDK, & CLI Reference](/apis/using-graphql.md)
  - [Core APIs](/apis/using-graphql.md)
    - [Mutation Methods](/apis/reference/mutation/)
    - [Query Methods](/apis/reference/query/)
    - [The Veritone Data Model](/apis/data-model.md)
    - [Using GraphQL](/apis/using-graphql.md)
    - [Authentication](/apis/authentication.md)
    - [Error Handling](/apis/error-codes.md)
    - [Endpoints](/apis/endpoints/)
    - [API Examples](/apis/examples)
      - [GraphQL API Basics](/apis/tutorials/graphql-basics.md)
      - [Clean up TDO data](/apis/tutorials/cleanup-tdo.md)
      - [Creating Export Requests](/apis/tutorials/create-export-request/)
      - [Posting Engine Results](/apis/tutorials/engine-results.md)
      - [Lookup Available Engines](/apis/tutorials/get-engines.md)
      - [Error Handling in the GraphQL API](/apis/tutorials/graphql-error-handling.md)
  - [Edge APIs](/api/md/docs-md/README.md) <!--/page-under-construction)-->
    - [REST](/api/md/docs-md/README.md)
    - [Golang API](/api/golang/README.md)
      - [Admin API](/api/golang/docs/AdminApi.md)
      - [Engine API](/api/golang/docs/EngineApi.md)
      - [Flow API](/api/golang/docs/FlowApi.md)
      - [Host API](/api/golang/docs/HostApi.md)
      - [Process API](/api/golang/docs/ProcessApi.md)
    - [bash API](/api/bash/README.md)
    - [Java API](/api/java/README.md)
    - [JS API](/api/js/README.md)
    - [Python API](/api/python/README.md)
  - [CLI](/cli/aiware-agent.md)
  - [Configuration](/config/admin.md) <!--/page-under-construction)-->
    - [Admin](/config/admin.md)
    - [Controller](/config/controller.md)
    - [DB](/config/db.md)
    - [NFS](/config/nfs.md)
    - [Registry](/config/registry.md)
- [Clarity (BETA)](/benchmark/)
- [Developer Terms & Conditions](/terms-and-conditions)
