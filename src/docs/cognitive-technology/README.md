<!--TODO: Replace all references to "VDA", "Developer Application", and "Developer App" with "Veritone Developer"-->

<!-- # Veritone's Cognitive Technology -->

<style>

    #learn-aiware-btn {
        display: block;
        background-color: #2F80ED;
        color: #FFF;
        width: 300px;
        height: 30px;
        text-align: center;
        text-decoration: none;
        padding: 5px;
        position: relative;
    }

    a.in-text-link {
        text-decoration: none;
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
        width: 500px;
    }
    
    div.do-more-aiwareFeatureText {
        width: 75%;
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

    div.buttonColumn {
        width: 760px;
        display: flex;
        margin: 0;
        position: absolute;
        left: 350px;
    }

    #view-more-capabilities-btn {
        display: block;
        color: #2F80ED;
        border: 1px solid #2F80ED;
        width: 245px;
        height: 30px;
        position: relative;
        left: -60px;
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
        padding: 4px 6px;  
        text-align: center
    }

</style>

<style>
     p, ul, ol, li { font-size: 18px !important;}
     a {text-decoration: none !important}
     .container{
        /* padding-right: 50px; */
        display: flex;
        flex-direction: column;
    }
    .section{
        display: flex;
        justify-content: center;
        /* align-items: center; */
        flex-direction: row;
        flex-wrap: wrap;
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
        margin: 15px;
        /* justify-content: space-between; */
        min-width: 333px;
        border: 0.5px solid #D5DFE9;
        background: #FFFFFF;
        padding: 10px;
        height: 110px;
        border-radius: 4px;
        text-decoration: none;
        flex: 3;
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
        align-items: center;
        background: #FAFAFA;
        padding: 20px;
        border-radius: 4px;
    }
    .info-text{
        padding-right:30px; 
        padding-top:50px; 
        flex: 6; 
        min-width: 400px
    }
</style>

<!-- <div style="display:flex;">
<div style="width: 650px; height: 300px" display:inline><iframe src="https://player.vimeo.com/video/375686298?color=ff9933&title=0&byline=0&portrait=0" style="border:0;top:0;left:0;width:100%;height:100%;" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

<div style="float:right; width: 200px; padding-top: 125px">
    <a href="/#/developer/engines/tutorial/" id="learn-aiware-btn">LEARN TO DEVELOP COGNITIVE ENGINES</a>
    <br>
    <a href="/#/apis" id="explore-api-basics-btn">EXPLORE API BASICS</a>
</div>

</div> -->

# What is Veritone's Cognitive Technology? <!-- {docsify-ignore} -->

<hr>

<div class="section">
<p class="info-text">
The aiWARE platform lets you build and use end-to-end, AI-powered solutions — from data ingestion to intelligent data analysis — accessible in the application of your choice. Choose from hundreds of available engines across various categories of cognition. Use either our unified API or UI to process your data — audio, video, image, text, and more — at scale, and from multiple sources and formats.
</p>
<div style="width: 500px; height: 350px; flex: 6;" display:inline><iframe style="border: none; width:500px; height:350px" src="https://player.vimeo.com/video/375686298?color=ff9933&title=0&byline=0&portrait=0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
</div>

<hr>

?>[LEARN TO DEVELOP COGNITIVE ENGINES](/#/developer/engines/tutorial/)   |   [EXPLORE API BASICS](/#/apis)

<hr>

## Explore aiWARE Cognitive Capabilities <!-- {docsify-ignore} -->

<br>

<div style="display: flex">
    <div class="featureColumn">
        <div class="featureBox"> 
            <div class="featureText">
                <h3>Anomaly Detection</h3>
                <div>Identify data points, events, and observations that deviate from a dataset's normal behavior.</div>
                <a class="link" href="/#/cognitive-technology/cognitive/text/anomaly-detection/"> EXPLORE</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox"> 
            <div class="featureText">
                <h3>Content Classification</h3>
                <div>Use aiWARE to classify text into particular categories based on what words the text contains.</div>
                <a class="link" href="/#/cognitive-technology/cognitive/text/content-classification/"> EXPLORE</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox">
            <div class="featureText">
                <h3>Entity Extraction</h3>
                <div>Use Natural Language Processing (NLP) engines to label words, phrases or even concepts in text.</div>
                <a class="link" href="/#/cognitive-technology/cognitive/text/entity-extraction/"> EXPLORE</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
    </div>
    <div class="featureColumn">
        <div class="featureBox"> 
            <div class= "featureText">
                <h3>Audio Fingerprinting</h3>
                <div> Identify pre-recorded audio snippets in audio files based on a particular signature or "fingerprint."</div>
                <a class="link" href="/#/cognitive-technology/cognitive/audio/audio-fingerprinting/"> EXPLORE</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox">  
            <div class= "featureText">
                <h3>Correlation</h3>
                <div>Associate data items based on some common factor, such as temporal co-occurrence.</div>
                <a class="link" href="/#/cognitive-technology/cognitive/data/correlation/"> EXPLORE</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
        </br>
        </br>
        <div class="featureBox">  
            <div class= "featureText">
                <h3>Face Detection</h3>
                <div>Detect human faces in media assets, and locate them (within the visual frame) in terms of a bounding polygon.</div>
                <a class="link" href="/#/cognitive-technology/cognitive/biometrics/face-detection/"> EXPLORE</a>
            </div>
            <div class= "featureImage">
                <img src="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4" alt="https://avatars3.githubusercontent.com/u/6934985?s=200&v=4">
            </div>
        </div>
    </div>
</div>
<br>
<br>
<!--<div class="buttonColumn">
    <a href="/#/apis" id="view-more-capabilities-btn">VIEW MORE CAPABILITIES (TODO)</a>
</div>
-->
<br>
<br>
<hr>

<!-- ## Do more with aiWARE {docsify-ignore} -->
<!-- <br> -->
<!-- <div style="display: flex">
    <div class="do-more-aiware-featureColumn">
        <div class="featureBox"> 
            <div class="do-more-aiwareFeatureText">
                <h3>Veritone Automate Studio</h3>
                <div>Automate workflows and processes using a drag and drop platform.</div>
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


<!-- ## Whats New {docsify-ignore} -->
<!-- <div class= "newsSectionColumn">
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
        - New documentation on how to update <a class="in-text-link" href="/#/cognitive-technology/"> cognitive engines</a> for the latest version of aiWARE Edge.
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
<hr> -->

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>