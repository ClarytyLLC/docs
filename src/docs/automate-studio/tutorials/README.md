# Tutorials

A step-by-step guide to building some basic and more advanced **AI Flows** from scratch.

<!-- ### Content

- [Basic](/automate-studio/tutorials/basic/README)
  - [Transcription](/automate-studio/tutorials/basic/transcription/tutorial)
  - [Content Classification](/automate-studio/tutorials/basic/content-classification/tutorial)
  - [Object Detection](/automate-studio/tutorials/basic/object-detection/tutorial) -->
  <!-- - Chained Cognition -->
<!-- - [Advanced](/automate-studio/tutorials/advanced/README)
  - [Customer Recognition by Face](/automate-studio/tutorials/advanced/customer-recognition-by-face/tutorial)
  - [Detection of Negative Social Media Posts](/automate-studio/tutorials/advanced/detection-of-negative-social-media-posts/tutorial) -->
  <!-- - Dynamic Language Translation -->

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

> More Tutorials are coming soon

<style>
* {
box-sizing: border-box
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
