<!-- markdownlint-disable no-inline-html no-trailing-spaces blanks-around-headings heading-increment no-multiple-blanks-->


<style>
     p, ul, ol, li { font-size: 18px !important;}
     
     .container{
        display: flex;
        flex-direction: column;
    }
    .section{
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .image-or-video{
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 500px;
        height: 350px;
        background: #FAFAFA;

    }
    .card{
        display: flex;
        justify-content: space-between;
        width: 333px;
        border: 0.5px solid #D5DFE9;
        background: #FFFFFF;
        padding: 10px;
        height: 110px;
        border-radius: 4px;
        text-decoration: none;
    }
    .card:hover{
        background: #F9FCFF;
        border: 0.5px solid #118BBF;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
        cursor: pointer;
    }
    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 60px;
        height: 90px;
    }
    .card-content h3{
        padding: 0;
        margin: 0;
    }
    .card-content div{
        color: #5C6269;
        font-size: 12px;
    }
    .card-content{
        display: flex;
        flex-direction: column;
        height: 90px;
        justify-content: space-between;
        padding: 15px 0px 25px 15px;
    }
    .card-container{
    justify-content:space-between; 
    background: #FAFAFA;
    padding: 20px;
    border-radius: 4px;
    }
</style>

<!-- DISABLE VIDEO
<div style="display:flex;">
<div style="width: 650px; height: 300px" display:inline><iframe src="https://player.vimeo.com/video/375527305?color=ff9933&title=0&byline=0&portrait=0" style="border:0;top:0;left:0;width:100%;height:100%;" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

<div style="float:right; width: 200px; padding-top: 125px">
    <a href="/#/developer/applications/quick-start/" id="learn-aiware-btn">LEARN AIWARE IN 15 MINUTES</a>
    <br>
    <a href="/#/apis" id="explore-api-basics-btn">EXPLORE API BASICS</a>
</div>
-->

<!-- </div> -->

<!-- <div style="width: 650px; height: 300px" display:inline><iframe src="https://player.vimeo.com/video/548657409?color=ff9933&title=0&byline=0&portrait=0" style="border:0;top:0;left:0;width:100%;height:100%;" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> -->



<!-- ## What is Veritone aiWARE? {docsify-ignore} -->
<div class="container">

# Veritone aiWARE Overview

<div class="section">
<p style="padding-right:30px; padding-top:50px;">
Veritone aiWARE is a production-proven AI platform that lets you harness the power of AI anywhere, any time. Cognitively enable new or existing apps rapidly, using a unified API for more than 300 engines available on the aiWARE platform. Deploy enterprise-grade solutions at scale, using our infrastructure or your own. Process massive amounts of data — audio, video, image, text, and more — to extract actionable intelligence. Boost the productivity of your business and IT teams by intelligently automating manual, repetitive, and data-driven tasks — no in-depth coding skills or AI expertise required.
</p>

<div style="width: 500px; height: 350px;" display:inline><iframe style="border: none; width:500px; height:350px" src="https://player.vimeo.com/video/548657409?color=ff9933&title=0&byline=0&portrait=0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

</div>

<hr>

## aiWARE: The Operating System for Artificial Intelligence <!-- {docsify-ignore} -->

<div class="section">

<div style="min-height:350px; min-width:500px">

![aiWare_OS](aiware_OS.svg)
</div>

<p style="padding-left:30px; padding-top:100px;">
A computer’s operating system connects a processor, peripherals and applications so they can communicate, working together to display what you see on your screen and respond to your commands. An AI operating system works in a similar fashion. It provides a common software infrastructure that lets you use end-to-end, AI-powered solutions — from data ingestion to intelligent data analysis — in either general or industry-specific applications. With thousands of limited cognitive engines on the market, you need an operating system to manage and orchestrate them all, so you can use them with general or industry-specific applications to solve real-world challenges.
</p>
</div>
<hr>

## The Benefits of an OS for AI <!-- {docsify-ignore} -->

* Rapidly develop AI applications to solve business problems

* No need to manage and orchestrate underlying AI engines

* Seamlessly leverage multiple AI engines from multiple vendors

* Mitigate risks of single vendor dependency

* Flexibility to deploy in the Veritone cloud, your private cloud or on-premise

<hr>


## Getting started <!-- {docsify-ignore} -->

<br>
<div class="section card-container">
<a class="card" href="https://www.veritone.com/devsignup/">
<div class="icon">

![cloud](cloud.svg)
</div>
<div class="card-content">
<h3>Signup to Cloud Platform</h3>
<div>
    Gain immediate access to aiware SaaS applications
</div>
</div>
</a>

<a class="card" href="/#/aiware/install/install">
<div class="icon">

![local](laptop.svg)
</div>
<div class="card-content">
<h3>Install on Local Machine</h3>
<div>
    Install aiWARE on a local environment such as a MacBook, VirtualBox instance or on a cloud instance
</div>
</div>
</a>

<a class="card" href="/#/aiware/install/cluster?id=cluster-deployment">
<div class="icon">

![cluster](install.svg)
</div>
<div class="card-content">
<h3>Install Production Cluster</h3>
<div>
    Install aiWARE on a 2+ node cluster.
</div>
</div>
</a>


</div>


## Do More With aiWARE <!-- {docsify-ignore} -->

<br>
<div class="section card-container" style="justify-content:space-around">
<a class="card" href="/#/automate-studio/">
<div class="icon">

![automate](automate.svg)
</div>
<div class="card-content">
<h3>Automate Studio</h3>
<div>
    Start to build AI flows today with Veritone's Automate Studio
</div>
</div>
</a>

<a class="card" href="/#/benchmark/?id=veritone-benchmark-beta">
<div class="icon">

![benchmark](benchmark.svg)
</div>
<div class="card-content">
<h3>Veritone Benchmark</h3>
<div>Compare the performance of different cognitive engines against your own use case.</div>
</div>
</a>

</div>

</div>


<!-- ## Start building with Veritone aiWARE <!-- {docsify-ignore} -->

<!-- tabs:start -->

<!-- #### ** WHAT ARE YOU TRYING TO ACHIEVE? **

<div style="display: flex">
    <div class="featureColumn">
        <div class="featureBox"> 
            <div class="featureText">
                <h3>Use existing model</h3>
                <div>Use any of the existing models to start creating cognitive applications.</div>
                <a class="link" href="/#/quickstart/jobs/?id=working-with-jobs"> GET STARTED</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3>Train a model</h3>
                <div>Use aiWARE to train your models and benchmark their performance.</div>
                <a class="link" href="/#/developer/engines/tutorial/engine-training-tutorial"> GET STARTED</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox">
            <div class="featureText">
                <h3>Run processes at scale</h3>
                <div>Use aiWARE to run proceses at scale in local networks, on and offline, and behind firewalls.</div>
                <a class="link" href="/#/overview/aiware-features"> GET STARTED</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
    </div>
    <div class="featureColumn">
        <div class="featureBox"> 
            <div class= "featureText">
                <h3>Build a custom model</h3>
                <div>Use aiWARE to create custom model based on your own data points.</div>
                <a class="link" href="/#/developer/engines/tutorial/"> GET STARTED</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox">  
            <div class= "featureText">
                <h3>Integrate a model into my app</h3>
                <div>Use your model in production apps and start resolving real technical challenges.</div>
                <a class="link" href="/#/developer/applications/app-tutorial/"> GET STARTED</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox">  
            <div class= "featureText">
                <h3>Automate a process</h3>
                <div>Use aiWARE to automate business processes and maximize your speed and output.</div>
                <a class="link" href="/#/automate-studio/"> GET STARTED</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
    </div>
</div>

#### ** WHAT'S YOUR ROLE?**

<div style="display: flex">
    <div class="featureColumn">
        <div class="featureBox"> 
            <div class="featureText">
                <h3>Developer</h3>
                <div>Learn how to create your own custom engine to analyze and process data.</div>
                <a class="link" href="/#/quickstart/engine-developer/"> GET STARTED</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3>Analyst</h3>
                <div>Learn how to use advanced automation AI techniques to streamline your process and optimize time.</div>
                <a class="link" href="/#/quickstart/ml-explorer/"> GET STARTED</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox">
            <div class="featureText">
                <h3>Product Manager</h3>
                <div>Use aiWARE to rapidly prototype and iterate on ideas with an easy to use GUI-based platform.</div>
                <a class="link" href="/#/automate-studio/"> GET STARTED</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
    </div>
    <div class="featureColumn">
        <div class="featureBox"> 
            <div class= "featureText">
                <h3>Data Scientist</h3>
                <div>Learn how to implement your model quickly and run it at scale in production. </div>
                <a class="link" href="/#/developer/engines/"> GET STARTED</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox">  
            <div class= "featureText">
                <h3>Solutions Architect</h3>
                <div>Solve business problems using AI and take them to market in no time.</div>
                <a class="link" href="/#/quickstart/ml-integrator/"> GET STARTED</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox">  
            <div class= "featureText">
                <h3>Operations</h3>
                <div>Use aiWARE to streamline operations and maximize your efficiency and output.</div>
                <a class="link" href="/#/automate-studio/"> GET STARTED</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
    </div>
</div> -->

<!-- tabs:end -->

<!-- ## Do more with aiWARE {docsify-ignore} -->
<!-- <br>
<div style="display: flex">
    <div class="do-more-aiware-featureColumn">
        <div class="featureBox"> 
            <div class="do-more-aiwareFeatureText">
                <h3>Veritone Automate Studio</h3>
                <div>Automate workflows and processes using a drag and drop platform. Learn how to make money with our Automate flow bounties program by clicking <a class="in-text-link" href="/#/automate-studio/flow-bounties/README"> here</a>!</div>
                <a class="link" href="/#/automate-studio/"> EXPLORE</a>
            </div>
        </div>
    </div>
    <div class="do-more-aiware-featureColumn">
        <div class="featureBox"> 
            <div class="do-more-aiwareFeatureText">
                <h3>Veritone Benchmark</h3>
                <div>Compare the performance of different cognitive engines against your own use case.</div>
                <a class="link" href="/#/benchmark/"> EXPLORE</a>
            </div>
        </div>
    </div>
</div>
<hr>
<div class="joinUsColumn">
    <div class="joinUsBox"> 
        <div class= "joinUsImage">
            <img src="https://s29980.pcdn.co/wp-content/uploads/2017/01/Slack-icon.png" alt="https://s29980.pcdn.co/wp-content/uploads/2017/01/Slack-icon.png">
        </div>
        <div class="do-more-aiwareFeatureText">
            <h3>Join Veritone's Slack Channel</h3>
            <div>For technical and business-related questions, please reach out to us on Slack. We're here to help!</div>
            <a class="link" href="https://veritonedev.slack.com"> JOIN CHANNEL</a>
        </div>
    </div>
</div> -->


<!-- DISABLE THIS FOR NOW
## Whats New 
<div class= "newsSectionColumn">
    <div class="newsDateColumn">
        <div class="date-text">
            06/22/2020
        </div>
    </div>
    <div class="newsColumn">
        - Expanded documentation for <a class="in-text-link" href="/#/automate-studio/"> Automate Studio.</a>
        <br>
        - New <a class="in-text-link" href="/#/quickstart/jobs/?id=working-with-jobs"> "Working with Jobs"</a> quickstart.
        <br>
        - New <a class="in-text-link" href="/#/overview/aiWARE-in-depth/edge/logs"> "How to view job and task logs"</a> guide.
    </div>
</div>
<br>
<div class= "newsSectionColumn">
    <div class="newsDateColumn">
        <div class="date-text">
            3/24/2020
        </div>
    </div>
    <div class="newsColumn">
        - New documentation tells how you can <a class="in-text-link" href="/#/benchmark/"> benchmark</a> your engines with the Benchmark app (beta).
        <br>
        - New documentation on how to update <a class="in-text-link" href="/#/developer/engines/"> cognitive engines</a> for the latest version of aiWARE Edge.
        <br>
        - New Automate Studio <a class="in-text-link" href="/#/automate-studio/faq"> FAQ</a>.
    </div>
</div>
<br>
<div class= "newsSectionColumn">
    <div class="newsDateColumn">
        <div class="date-text">
            2/10/2020
        </div>
    </div>
    <div class="newsColumn">
        - You can now search across all the Cognitive and Ingestion engines your Veritone organization has access to
        <br>
        - The brand new and enhanced engines table now lets you filter and sort your engine results
        <br>
        - All of your engines, both ingestion and cognitive types are displayed in one centralized table for you to view, filter, and query
    </div>
</div>
<hr>
-->