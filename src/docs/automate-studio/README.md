<!--TODO: Replace all references to "VDA", "Developer Application", and "Developer App" with "Veritone Developer"-->

# Veritone's Automate Studio

<style>
    * {
        box-sizing: border-box
    }

    div.featureBox {
        -webkit-box-shadow: -2px 2px 6px 3px rgba(207,208,209,1);
        -moz-box-shadow: -2px 2px 6px 3px rgba(207,208,209,1);
        box-shadow: -2px 2px 6px 3px rgba(207,208,209,1);
        width: 425px;
        height: 100px;
        padding: 7px;
        font-size: 80%;
        display: flex;
        background: #FAFAFA;
        margin: 15px 0px;
    }
    
    a.in-text-link {
        text-decoration: none;
    }
    
    div.featureColumn {
        position:relative;
        left:25px;
        width: 500px;
    }
    
    div.featureText {
        width: 75%;
        position: relative; 
        top: -40px
    }
    
    div.featureImage {
        width: 25%;
        position: relative;
        bottom: 8px;
    }
    
    div.do-more-aiware-featureColumn {
        position:relative;
        left:25px;
        width: 400px;
    }
    
    div.do-more-aiwareFeatureText {
        width: 75%;
        position: relative; 
        top: -40px
    }
    
    a.link {
        bottom: -10px;
        position: relative;
    }
    
    div.newsSectionColumn{
        position:relative;
        left:10px;
        display: flex
    }
    
    div.newsDateColumn {
        width: 175px;
    }
    
    div.newsColumn {
        width: 800px
    }
    
    div.buttonColumn {
        display: flex;
        justify-content: center;
    }
    
    #view-more-templates-btn {
        display: block;
        color: #2F80ED;
        border: 1px solid #2F80ED;
        width: 250px;
        height: 30px;
        left: 15px;
        text-align: center;
        padding: 5px;
        text-decoration: none;
    }
    
    #learn-automate-studio-btn {
        display: block;
        background-color: #2F80ED;
        color: #FFF;
        width: 300px;
        height: 30px;
        text-decoration: none;
        text-align: center;
        padding: 5px;
        position: relative;
    }
    
    #explore-templates-btn {
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
    
    .date-text {
        background-color: #d9d9d7;
        width: 110px;
        border-radius: 10px;
        font-size: 95%;
        margin-right: 10px;
        padding: 4px 6px;  
        text-align: center
    }
    
    .wrapper {
        display: flex;
        width: 100%;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .card {
    	 width: 360px;
    	 height: 230px;
    	 border-radius: 5px;
    	 background: white;
    	 position: relative;
    	 display: flex;
         flex-direction: column;
    	 transition: 0.4s ease-out;
    	 box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
         border: 0.5px solid lightgrey;
         margin-bottom: 25px;
    }
    .card:hover {
    	 transform: translateY(20px);
    }
    .card:hover:before {
    	 opacity: 1;
    }
    .card:hover .info {
    	 opacity: 1;
    	 transform: translateY(0px);
    }
    .card:before {
    	 content: "";
    	 position: absolute;
    	 top: 0;
    	 left: 0;
    	 display: block;
    	 width: 100%;
    	 height: 100%;
    	 border-radius: 15px;
    	 background: rgba(0, 0, 0, 0.6);
    	 z-index: 2;
    	 transition: 0.5s;
    	 opacity: 0;
    
    }
    .card img {
    	 width: 360px;
    	 height: 230px;
    	 object-fit: cover;
    	 position: absolute;
    	 padding:15px;
         border-radius: 5px;
    	 left: 0;
    }
    .card .info {
    	 position: relative;
    	 z-index: 3;
    	 opacity: 0;
    	 transform: translateY(30px);
    	 transition: 0.5s;
        padding: 18px 8px;
    }
    .card h3 {
        position: absolute;
        color: #0076a8;
    	margin: 0px;
        z-index: 3;
        width: 360px;
        border-top: 0.5px solid lightgrey;
        padding: 8px 8px;
        margin-top:180px;
    
    }
    .card .level {
        position: absolute;
        color: #0076a8;
    	 margin: 0px;
        z-index: 3;
        width: 360px;
        border-top: 0.5px solid lightgrey;
        border-bottom: 0.5px solid lightgrey;
        padding: 3px 3px;
        margin-top:0px;
        border-radius: 5px 5px 0 0;
        font-size: 12px;
        color: grey;
    
    }
    .card p {
    	 letter-spacing: 1px;
    	 font-size: 13px;
    	 margin-top: 8px;
        max-height: 100px;
        overflow-y: auto;
    }
    .card a {
    	 padding: 8px;
    	 outline: none;
    	 border: none;
    	 border-radius: 3px;
    	 background: #0C7AB8;
    	 color: white;
        text-decoration: none;
    	 font-weight: bold;
        font-size: 13px;
    	 cursor: pointer;
    	 transition: 0.4s ease;
    }
    .card:hover {
    	 color: black;
    }
    
    .card:hover img {
       opacity: 0;
       transition: 0.2s ease;
    }

</style>

<div style="display:flex; align-items:center; justify-content: space-evenly; flex-wrap: wrap;">
<div style="width: 650px; height: 300px; margin-bottom: 20px;"><iframe src="https://player.vimeo.com/video/388620185?color=ff9933&title=0&byline=0&portrait=0" style="border:0;top:0;left:0;width:100%;height:100%;margin:0px;" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

<div>
    <a href="#/automate-studio/getting-started/README" id="learn-automate-studio-btn">LEARN HOW TO USE AUTOMATE STUDIO</a>
    <br>
    <a href="https://automate.veritone.com/flow_template_gallery" id="explore-templates-btn" target="_blank">EXPLORE THE TEMPLATES</a>
</div>

</div>

## What is Veritone's Automate Studio? <!-- {docsify-ignore} -->
Veritone Automate Studio is a low-code workflow designer that empowers technical and business teams to tap into a full-stack AI architecture to design and deploy AI-powered business processes at scale in days, not months. Leverage an intuitive drag-and-drop UI to easily create advanced business logic on a digital canvas, without the need for in-depth coding skills or AI expertise. Automate Studio enables intelligent process automation (IPA) and workflow enrichment across both new and existing systems and applications.

<hr>

## Gets Started By Taking Quick Tutorials <!-- {docsify-ignore} -->

<div class="wrapper">
    <div class="card">
        <span class="level">Quick Start</span>
        <img src='/docs/_media/tutorials/quick-start.png'>
        <h3>Quick Start - Email Sender</h3>
        <div class="info">
            <p>
                Learn to build your first flow in just a few minutes with this quickstart guide of Automate Studio.
            </p>
        <a href='/#/automate-studio/getting-started/README'>View Tutorial</a>
        </div>
    </div>
    <div class="card">
        <span class="level">Basic</span>
        <img src='/docs/_media/tutorials/object-detection.png'>
        <h3>Object Detection</h3>
        <div class="info">
            <p>
                The flow receives a video URL, runs it through an Object Detection Engine, and creates a annoated version of the file. The annotation link is   emailed to the user.
            </p>
        <a href='/#/automate-studio/tutorials/basic/object-detection/tutorial'>View Tutorial</a>
        </div>
    </div>
    <div class="card">
        <span class="level">Basic</span>
        <img src='/docs/_media/tutorials/content-classification.png'>
        <h3>Content Classification</h3>
        <div class="info">
            <p>
                The flow receives a text file URL, runs it through a Content Classification Engine, and creates an ouput of categories based on text excerpts. A summary email is sent to the user.
            </p>
        <a href='/#/automate-studio/tutorials/basic/content-classification/tutorial'>View Tutorial</a>
        </div>
    </div>
    <div class="card">
        <span class="level">Basic</span>
        <img src='/docs/_media/tutorials/transcription.png'>
        <h3>Transcription</h3>
        <div class="info">
            <p>
                The flow receives a video or audio URL, runs it through a Speech-to-Text Engine, and creates a text transcription of the file. The transcript is emailed to the user along with a link to the Veritone CMS page that contains the full engine output.
            </p>
        <a href='/#/automate-studio/tutorials/basic/transcription/tutorial'>View Tutorial</a>
        </div>
    </div>
    <div class="card">
        <span class="level">Advanced</span>
        <img src='/docs/_media/tutorials/customer-recognition-by-face.png'>
        <h3>Customer Recognition by Face</h3>
        <div class="info">
            <p>
                The flow receives a video URL, runs it through an Object Detection Engine, and creates a annoated version of the file. The annotation link is   emailed to the user.
            </p>
        <a href='/#/automate-studio/tutorials/advanced/customer-recognition/tutorial'>View Tutorial</a>
        </div>
    </div>
    <div class="card">
        <span class="level">Advanced</span>
        <img src='/docs/_media/tutorials/negative-posts.png'>
        <h3>Detection of Negative Social Media Posts</h3>
        <div class="info">
            <p>
                The flow receives a video URL, runs it through an Object Detection Engine, and creates a annoated version of the file. The annotation link is   emailed to the user.
            </p>
        <a href='/#/automate-studio/tutorials/advanced/detection-of-negative-social-media-posts/tutorial'>View Tutorial</a>
        </div>
    </div>
</div>

<hr/>

## Explore Automate Studio Templates <!-- {docsify-ignore} -->

<div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
    <div class="featureBox"> 
        <div class="featureText">
            <h3>Estimation of Customer’s Intent</h3>
            <div>Identify caller intent to improve business metrics such as churn or customer satisfaction.</div>
            <a class="link" target="_blank" href="https://automate.veritone.com/flow_template_gallery"> EXPLORE</a>
        </div>
        <div class= "featureImage">
            <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
        </div>
    </div>
    <div class="featureBox"> 
        <div class="featureText">
            <h3>Ad Tracker Summarization</h3>
            <div>Calculate the amount of time an advertiser’s logo spends on the TV screen and email a report.</div>
            <a class="link" target="_blank" href="https://automate.veritone.com/flow_template_gallery" > EXPLORE</a>
        </div>
        <div class= "featureImage">
            <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
        </div>
    </div>
    <div class="featureBox"> 
        <div class= "featureText">
            <h3>Content Moderation</h3>
            <div>Identify media containing a sensitive material such as profanity, weapons, nudity or violence.</div>
            <a class="link" target="_blank" href="https://automate.veritone.com/flow_template_gallery"> EXPLORE</a>
        </div>
        <div class= "featureImage">
            <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
        </div>
    </div>
    <div class="featureBox">  
        <div class= "featureText">
            <h3>Dynamic Language Translation</h3>
            <div>Translate text or audio files that source/target languages are config parameters. </div>
            <a class="link" target="_blank" href="https://automate.veritone.com/flow_template_gallery" > EXPLORE</a>
        </div>
        <div class= "featureImage">
            <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
        </div>
    </div>
</div>
<br>
<br>
<div class="buttonColumn hide-in-embed-mode">
    <a href="https://automate.veritone.com/flow_template_gallery" id="view-more-templates-btn">VIEW MORE TEMPLATES</a>
</div>

## Whats New <!-- {docsify-ignore} -->
<div class="newsSectionColumn">
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


