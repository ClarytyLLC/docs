<!-- markdownlint-disable no-inline-html -->

<style>
    .container{ 
        display: flex;
        flex-direction: column;

    }
    div.featureBox {
        -webkit-box-shadow: -2px 2px 6px 3px rgba(207,208,209,1);
        -moz-box-shadow: -2px 2px 6px 3px rgba(207,208,209,1);
        box-shadow: -2px 2px 6px 3px rgba(207,208,209,1);
        width: 400px;
        height: 100px;
        padding: 7px;
        font-size: 80%;
        display: flex;
        background: #FAFAFA;
    }

    div.featureColumn {
        position:relative;
        left:25px;
        width: 500px;
    }
    
    div.featureText {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 75%
    }

    div.featureImage {
        width: 25%;
        position: relative;
        bottom: 8px;
    }

    div.do-more-aiware-featureColumn {
        position:relative;
        left:50px;
        width: 500px;
    }
    
    div.do-more-aiwareFeatureText {
        position: relative; 
        top: -40px
    }

    a.link {
        text-decoration: none;
        bottom: -10px;
        position: relative;
        font-size:90%;
        bottom: -5px;
    }

    a.in-text-link {
        text-decoration: none;
    }
    
    div.joinUsBox {
        -webkit-box-shadow: -2px 2px 6px 3px rgba(207,208,209,1);
        -moz-box-shadow: -2px 2px 6px 3px rgba(207,208,209,1);
        box-shadow: -2px 2px 6px 3px rgba(207,208,209,1);
        background: #FAFAFA;
        width: 400px;
        height: 100px;
        padding: 7px;
        font-size: 80%;
        display: flex;
        position: relative; 
        left: 515px;
        transform: translateX(-50%);
    }
    
    div.joinUsColumn {
        width: 760px;
    }

    div.joinUsImage {
        width: 24%;
        padding: 5px;
        padding-right: 15px
    }

    div.newsSectionColumn{
        width: 975px;
        position:relative;
        left:10px;
        display: flex
    }
    
    div.newsDateColumn {
        width: 175px
    }

    div.newsColumn {
        width: 800px
    }



    .date-text {
        background-color: #d9d9d7;
        width: 110px;
        border-radius: 10px;
        font-size: 95%;
        padding: 4px 6px;  
        text-align: center
    }

    #learn-aiware-btn {
        display: block;
        background-color: #2F80ED;
        text-decoration: none;
        color: white;
        width: 300px;
        height: 30px;
        text-align: center;
        padding: 5px;
        position: relative;
    }

    #explore-api-basics-btn {
        display: block;
        color: #2F80ED;
        border: 1px solid #2F80ED;
        width: 300px;
        height: 30px;
        text-align: center;
        padding: 5px;
        position: relative;
        text-decoration: none;
    }


</style>

# Tutorials <!-- Don't remove -->

## Featured <!-- {docsify-ignore} -->

<div class="container">
<div style="transform:scaleX(.99);">
<img alt="cognition" width="15%" style="float:left;margin:11px;" src="docs/developer/engines/tutorial/CogEngine.png">
<div
style="font-family:Georgia;
font-size:12.5pt;
line-height:150%;
padding:1px 0px 0px 150px;
transform:scaleX(.99);
transform-origin: top left; "><div class="topruled"><br/></div>
<a href="/#/developer/engines/tutorial/">How to Build Your Own Cognitive Engine</a> <br/>Would you believe it takes only 25 lines of JavaScript to create a Hello World cognitive engine using NodeJS? Learn how to create engine builds with Docker, test them locally, and onboard your creation to Veritone's aiWARE platform. It's easy!
</div>
</div>
<br/><br/><br/>

<div style="transform:scaleX(.99);">
<img alt="cognition" width="18%" style="float:left;margin:11px;" src="docs/developer/engines/tutorial/ML.png">
<div
style="font-family:Georgia;
font-size:12.5pt;
line-height:150%;
padding:1px 0px 0px 150px;
transform:scaleX(.99);
transform-origin: top left; "><div class="topruled"><br/></div>
<a href="/#/developer/engines/tutorial/engine-training-tutorial">How to Train a Cognitive Engine</a><br/>In aiWARE, training is practically an automatic process. But first, you need to know how to set up libraries of learnable entities. That part's easy &mdash; and fun, too! Follow along as we lead you through the GraphQL queries for doing facial recognition.
</div>
</div>
<br/>

## Tutorials: The Full List <!-- {docsify-ignore} -->

<!-- - [GraphQL API Basics](/apis/tutorials/graphql-basics.md) &mdash; Start here if you're new to GraphQL.
- [API Examples](/apis/examples.md) &mdash;  GraphQL-based API tips and tricks, as runnable queries.
- [Build Your Own AI App](/developer/applications/app-tutorial/) &mdash; A step-by-step guide to building an AI-powered web app.
- [Build Your Own Cognitive Engine](/developer/engines/tutorial/) &mdash; Step-by-step instructions for building a cognitive engine.
- [Customizing Engine Output](/developer/engines/tutorial/customizing-engine-output) &mdash; Extend the VTN Standard schema for custom output data.
- [Customizing Engine Input](/developer/engines/tutorial/engine-custom-fields) &mdash; Learn how to pass custom data in to your engine.
- [How to Train a Cognitive Engine](/developer/engines/tutorial/engine-training-tutorial) &mdash; A tutorial that shows how to train an engine to recognize faces.
- [Clean up TDO data](/apis/tutorials/cleanup-tdo.md) &mdash; Learn how to clean up and reuse Temporal Data Objects.
- [Creating Export Requests](/apis/tutorials/create-export-request/) &mdash; Export data out of aiWARE in specific formats.
- [Posting Engine Results](/apis/tutorials/engine-results.md) &mdash; If you're building a `batch` engine, read this.
- [Look Up Available Engines](/apis/tutorials/get-engines.md) &mdash; This mini-tutorial shows how to interrogate aiWARE so as to discover which engines are available.
- [Error Handling in the GraphQL API](/apis/tutorials/graphql-error-handling.md) &mdash; Learn about the different error messages available on query responses.
- [Uploading and Processing Files](/apis/tutorials/upload-and-process.md) &mdash; This tutorial will show you how to process arbitrary file.
- [Uploading Large Files](/apis/tutorials/uploading-large-files.md) &mdash; Learn how to overcome challenges presented by large files.
- [Handling File Upload Errors](/apis/tutorials/file-upload-error-handling.md) &mdash; Learn how to handle File Upload errors.
- [Authentication and Authorization Tokens](/apis/tutorials/tokens.md) &mdash; Read about bearer tokens and how aiWARE uses them.
- [Paging](/apis/tutorials/paging.md) &mdash; GraphQL handles large-result-set paging in a particular way.
- [Asset Types](/apis/tutorials/asset-types.md) &mdash; When you create assets on a temporal data object (TDO), you are required to specify a *type*.
- [Job Quickstart Guide](/apis/job-quickstart/) &mdash; It's easy to run an AI job. Here's how!
- [Search Quickstart Guide](/apis/search-quickstart/) &mdash; Learn how to use the Veritone Search API on processed results. -->


<div style="display: flex">
    <div class="featureColumn">
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">GraphQL API Basics</h3>
                <div>Start here if you're new to GraphQL.</div>
                <a class="link" href="/#/apis/tutorials/graphql-basics.md"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">API Examples</h3>
                <div>GraphQL-based API tips and tricks, as runnable queries.</div>
                <a class="link" href="/#/apis/examples.md"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Build Your Own AI App</h3>
                <div>A step-by-step guide to building an AI-powered web app</div>
                <a class="link" href="/#/developer/applications/app-tutorial/"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Build Your Own Cognitive Engine</h3>
                <div>Step-by-step instructions for building a cognitive engine.</div>
                <a class="link" href="/#/developer/engines/tutorial/"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Customizing Engine Output</h3>
                <div>Extend the VTN Standard schema for custom output.</div>
                <a class="link" href="/#/developer/engines/tutorial/customizing-engine-output"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Customizing Engine Input</h3>
                <div>Learn how to pass custom data in to your engine.</div>
                <a class="link" href="/#/developer/engines/tutorial/engine-custom-fields"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">How to Train a Cognitive Engine</h3>
                <div> A tutorial that shows how to train an engine to recognize faces.</div>
                <a class="link" href="/#/developer/engines/tutorial/engine-training-tutorial"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Clean up TDO data</h3>
                <div>Learn how to clean up and reuse Temporal Data Objects.</div>
                <a class="link" href="/#/apis/tutorials/cleanup-tdo.md"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
                <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Creating Export Requests</h3>
                <div>Export data out of aiWARE in specific formats.</div>
                <a class="link" href="/#/apis/tutorials/create-export-request/"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Posting Engine Results</h3>
                <div>If you're building a `batch` engine, read this.</div>
                <a class="link" href="/#/apis/tutorials/engine-results.md"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
    </div>
    <div class="featureColumn">
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Look Up Available Engines</h3>
                <div>This mini-tutorial shows how to interrogate aiWARE so as to discover which engines are available.</div>
                <a class="link" href="/#/apis/tutorials/get-engines.md"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Error Handling in the GraphQL API]</h3>
                <div>Learn about the different error messages available on query responses.</div>
                <a class="link" href="/#/apis/tutorials/graphql-error-handling.md"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Uploading and Processing Files</h3>
                <div>This tutorial will show you how to process arbitrary file.</div>
                <a class="link" href="/#/apis/tutorials/upload-and-process.md"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Uploading Large Files</h3>
                <div>Learn how to overcome challenges presented by large files.</div>
                <a class="link" href="/#/apis/tutorials/uploading-large-files.md"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Handling File Upload Errors</h3>
                <div>Learn how to handle File Upload errors.</div>
                <a class="link" href="/#/apis/tutorials/file-upload-error-handling.md"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Authentication and Authorization Tokens</h3>
                <div>Read about bearer tokens and how aiWARE uses them.</div>
                <a class="link" href="/#/apis/tutorials/tokens.md"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Paging</h3>
                <div>GraphQL handles large-result-set paging in a particular way.</div>
                <a class="link" href="/#/apis/tutorials/paging.md"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Asset Types</h3>
                <div>When you create assets on a temporal data object (TDO), you are required to specify a *type*.</div>
                <a class="link" href="/#/apis/tutorials/asset-types.md"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Job Quickstart Guide</h3>
                <div>It's easy to run an AI job. Here's how!</div>
                <a class="link" href="/#/apis/job-quickstart/"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3 style="margin: 0; padding: 0; padding-top: 10px">Search Quickstart Guide</h3>
                <div> Learn how to use the Veritone Search API on processed results.</div>
                <a class="link" href="/#/apis/search-quickstart/"> LAUNCH TUTORIAL</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
    </div>
</div>

</div>


_This page changes frequently, so be sure to bookmark it and come back often!_