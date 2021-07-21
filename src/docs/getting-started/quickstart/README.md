<!-- markdownlint-disable no-inline-html no-trailing-spaces blanks-around-headings heading-increment no-multiple-blanks-->

<style>
th { text-align:left; }
</style>

# Quick Start for First Time Users <!-- {docsify-ignore} -->

**APPROXIMATE READING TIME: 8 MINUTES**

It's easy to get started with Veritone's aiWARE platform. Running a cognition job is just a few steps away.


## Step 1: Register for free <!-- {docsify-ignore} -->

Registering takes less then a minute.

<div class="collapse-accordion"><ul><li>
                <input type="checkbox" id="list-item-1">
                <label for="list-item-1"><span class="expandText">Registration steps</span><span class="collapseText">Click here to close this section.</span></label>
                <ul>
                    <li class="inner-content">

1. [Register for Veritone's platform and applications](https://www.veritone.com/onboarding/#/signUp?type=developer). If you've already registered, skip to Step 2.

2. After registering, open the email you received from the Veritone team, then confirm your account by selecting **Confirm account**. A new tab will open for you to create a password.

4. Create your password, then select **Continue**. Your developer portal will load. Congratulations, you're registered!
</li>                  
</ul>
</li>          
</ul>
</div>

## Step 2: Learn about Veritone Apps <!-- {docsify-ignore} -->

Veritone aiWARE platform comes with a set of modern web applications (apps) that make AI easy to use.

<div class="collapse-accordion"><ul><li>
                <input type="checkbox" id="list-item-2">
                <label for="list-item-2"><span class="expandText">Learn more about Veritone Apps </span><span class="collapseText">Click here to close this section.</span></label>
                <ul>
                    <li class="inner-content">
     

Your Veritone apps are listed on the left side of your developer portal under **Applications**.

Some of the most frequently used applications are:

* ADMIN

    The [Admin app](https://admin.veritone.com/) enables you to manage your organization details, edit profiles, add, edit, or remove users, grant permissions, generate API keys, and manage your billing info.


* DEVELOPER APP

    The [Developer app](https://developer.veritone.com/) is the development platform where you can build your own custom engines, schemas, adapters, or even create your own applications.

* AUTOMATE STUDIO

    The [Automate Studio app](https://automate.veritone.com/) is a low-code workflow designer that enables you to tap into a full-stack AI architecture to design and deploy AI-powered business processes at scale in days. Leverage an intuitive drag-and-drop UI to easily create advanced business logic on a digital canvas, without the need for in-depth coding skills or AI expertise. Automate Studio enables intelligent process automation (IPA) and workflow enrichment across both new and existing systems and applications.

    Learn how to use Automate Studio and build your first flow by visiting the [Automate Studio](/automate-studio/) section.


</li>                  
</ul>
</li>          
</ul>
</div>

## Step 3: Run Your First Engine <!-- {docsify-ignore} -->

Veritone provides over 100 active and ready-to-use engines (flows) out of the box. Learn how to run an existing engine using Automate Studio in just a few clicks.

<div class="collapse-accordion"><ul><li>
                <input type="checkbox" id="list-item-3">
                <label for="list-item-3"><span class="expandText">Learn how to run your first engine</span><span class="collapseText">Click here to close this section.</span></label>
                <ul>
                    <li class="inner-content">
                    

1. From the Apps menu, select the **Automate Studio** app. It'll open in a new tab.

2. Select **Add New**, then select **New From Template**.

3. Type _Starter Flow: Object Detection_ in the search bar.

4. Select the flow by clicking on it, then select **Create Flow From Template**.

5. Once the flow (engine) is open, select **Deploy** in the headbar.

6. Locate the **aiware-in** node (the first node in the flow from left to right), then select the blue square button to the left of the node. The flow is now running.

7. Once you're done, open the **Application Menu** and select the **Data Center** app.

8. Under **Streams > Files**, select the video-like file (the video that's been processed). Next, in the same card, select the long bold number, which is the ID of the Temporal Data Object (TDO). The result of the engine process will appear. You can see the frame of the video where the object was detected by clicking on each of the tabs. Congratulations, you've run your first engine!


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

## Next steps <!-- {docsify-ignore} -->

* [Learn more about Engines](/developer/engines/getting-started/)
* [Learn more about Apps](/developer/applications/app-tutorial/)
* [Create your first flow in Automate Studio](/automate-studio/getting-started/README)


## Need help?

Need help or have a question? Contact us in our [Slack Community](http://veritonedev.slack.com/).

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