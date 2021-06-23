<!-- markdownlint-disable no-inline-html no-trailing-spaces blanks-around-headings heading-increment no-multiple-blanks-->

<style>
th { text-align:left; }
</style>

# Quick Start for First Time Users <!-- {docsify-ignore} -->

**APPROXIMATE READING TIME: 8 MINUTES**

It is easy to get started with Veritone's aiWARE platform. Running a cognition job is just few steps away.


## Step 1: Register for free <!-- {docsify-ignore} -->

The registration is straight forward and requires less then a minute

<div class="collapse-accordion"><ul><li>
                <input type="checkbox" id="list-item-1">
                <label for="list-item-1"><span class="expandText">Registration steps</span><span class="collapseText">Click here to close this section.</span></label>
                <ul>
                    <li class="inner-content">

1. If you still haven't done so, go ahead and follow this [registration link](https://www.veritone.com/onboarding/#/signUp?type=developer)

2. After creating an account, you will receive an email from the **Veritone Team**

3. Confirm your account by clicking the **CONFIRM ACCOUNT** button, using the link.

4. Choose your password 

5. Congratulations! You are in!
</li>                  
</ul>
</li>          
</ul>
</div>

## Step 2: Get introduced to Veritone Apps <!-- {docsify-ignore} -->

Veritone aiWARE platform comes with a set of modern web applications that make AI easy to use

<div class="collapse-accordion"><ul><li>
                <input type="checkbox" id="list-item-2">
                <label for="list-item-2"><span class="expandText">Click here to learn more about Veritone Apps </span><span class="collapseText">Click here to close this section.</span></label>
                <ul>
                    <li class="inner-content">
     

**Veritone Apps** can be found in the Applications menu on the left side of your screen (3rd from the left)

Below, we will present the most frequently used applications:

### ADMIN

> Visit [admin.veritone.com](https://admin.veritone.com/)

Using the **Admin App** it is easy to manage your organization details, edit profile, add, edit, or remove users, grant permissions, generate API keys and manage your billing info.


### DEVELOPER APP

> Visit [developer.veritone.com](https://developer.veritone.com/)

Just like the name says, this is the development platform where you can build your own custom engines, schemas, adapters, or even create your own applications.


In the next sections we will learn how to run an existing engine in few simple steps.


### AUTOMATE STUDIO

> Visit [automate.veritone.com](https://automate.veritone.com/)

Veritone **Automate Studio** is a low-code workflow designer that empowers technical and business teams to tap into a full-stack AI architecture to design and deploy AI-powered business processes at scale in days, not months. Leverage an intuitive drag-and-drop UI to easily create advanced business logic on a digital canvas, without the need for in-depth coding skills or AI expertise. Automate Studio enables intelligent process automation (IPA) and workflow enrichment across both new and existing systems and applications.

?>Learn how to use Automate Studio and build your first flow by visiting the [Automate Studio](/automate-studio/) section


</li>                  
</ul>
</li>          
</ul>
</div>

## Step 3: Run Your First Engine <!-- {docsify-ignore} -->

Veritone provides over 100 active and ready-to-use engines (flows) out of the box. Learn how to run an existing engine using Automate Studio in just few clicks

<div class="collapse-accordion"><ul><li>
                <input type="checkbox" id="list-item-3">
                <label for="list-item-3"><span class="expandText">Click here to learn run your first engine</span><span class="collapseText">Click here to close this section.</span></label>
                <ul>
                    <li class="inner-content">
                    

1. From the Apps menu select the Automate Studio app. It will open in a new tab.

2. Click on the **Add New** button and select *New From Template*

3. Type "Starter Flow: Object Detection" in the search bar

4. Select the flow by clicking on it and then click on the **Create Flow From Template** button

5. Once the flow (engine) is open, click on the **Deploy** button in the headbar.

6. Locate the "aiware-in" node ( the first node in the flow from left to right ) and click on the blue square button on the left side of the node.

7. The flow is now running. Once done, open the *Application Menu* once again and choose the **Data Center** app

8. Under *Streams -> Files* locate and click on the video-like file. That's the video that has been processed. Next, in the same card, click on the long bold number ( this number is the ID of the temporal data object - TDO ). 

9. The result of the engine process is now open. By clicking on each and one of the tabs, we are able to see the frame of the video where the object was detected

10. Cool, isn't it? 


</li>                  
</ul>
</li>          
</ul>
</div>


</li>                  
</ul>
</li>          
</ul>
</div>

## Congratulations on running your first engine!! <!-- {docsify-ignore} -->


## Next steps <!-- {docsify-ignore} -->

[Learn more about Engines](/developer/engines/getting-started/) | 
[Learn more about Apps](/developer/applications/app-tutorial/) |
[Create your first flow in Automate Studio](/automate-studio/getting-started/README) | 

?> Need help or have a question? Contact us in our [Slack Community.](http://veritonedev.slack.com/)

<style>
label {
        color: #fff;
    }
    
    .markdown-section code {
        border-radius: 2px;
        color: #322;
        font-size: .8rem;
        margin: 0 2px;
        padding: 3px 5px;
        white-space: pre-wrap;
    }
    
    .collapse-accordion { width:83%; }

    .collapse-accordion ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .collapse-accordion label {
        display: block;
        cursor: pointer;
        padding: 4px 32px;
        border: 1px solid #fff;
        border-radius: 7px;
        border-bottom: none;
        background-color: #1871E8;
        position: relative;
    }

    .collapse-accordion label:hover {
        background: #999;
    }

    .collapse-accordion label:after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        text-indent: -9999px;
        border-top: 1px solid #f2f2f2;
        border-left: 1px solid #f2f2f2;
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        text-decoration: none;
        color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transform: rotate(135deg);
        left: 10px;
        top: 50%;
        margin-top: -5px;
    }

    .collapse-accordion input[type="checkbox"]:checked+label:after {
        transform: rotate(-135deg);
        top: 20px;
    }

    .collapse-accordion input[type="radio"]:checked+label:after {
        transform: rotate(-135deg);
        top: 20px;
    }

    .collapse-accordion label.last {
        border-bottom: 1px solid #fff;
    }

    .collapse-accordion ul ul li {
        padding: 10px;
    }

    .inner-content p{
        font-size: 18px;
    }
    .inner-content *{
        font-size: 18px;
    }


    .collapse-accordion input[type="checkBox"] {
        position: absolute;
        left: -9999px;
    }
    
    .collapse-accordion input[type="radio"] {
        position: absolute;
        left: -9999px;
    }

    .collapse-accordion input[type="checkBox"]~ul {
        height: 0;
        transform: scaleY(0);
      transition: transform .2s ease-out;
    }
    
    .collapse-accordion input[type="radio"]~ul {
        height: 0;
        transform: scaleY(0);
        transition: transform .5s ease-out;
    }

    .collapse-accordion input[type="checkBox"]:checked~ul {
        height: 100%;
        transform-origin: top;
        transition: transform .5s ease-out;
        transform: scaleY(1);
    }

   .collapse-accordion input[type="radio"]:checked~ul {
        height: 100%;
        transform-origin: top;
        transition: transform .2s ease-out;
        transform: scaleY(1);
    }

    .collapse-accordion input[type="checkBox"]:checked+label {
        background:#00a2ff;
        border-bottom: 1px solid #fff;
    }

    .collapse-accordion input[type="radio"]:checked+label {
        background: red;
        border-bottom: 1px solid #fff;
    }

    .collapse-accordion input[type="checkbox"]:checked+label .collapseText {
        display: block;
    }

   .collapse-accordion input[type="radio"]:checked+label .collapseText {
        display: block;
    }

    .collapse-accordion input[type="checkbox"]:checked+label .expandText {
        display: none;
    }

.collapse-accordion input[type="radio"]:checked+label .expandText {
        display: none;
    }

    .collapseText {
        display: none;
    }

.info {
  margin-top: 50px;
color: #000;
  font-size: 24px;
}
.info span {
  color: red;
}

li {
    font-size: 16px;
}
</style>