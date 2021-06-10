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

# Overview

The aiWARE platform lets you build and use end-to-end, AI-powered solutions — from data ingestion to intelligent data analysis — accessible in the application of your choice. aiWARE consists of several components include [Edge](/aiware/aiWARE-in-depth/?id=architectural-overview), [Core](/apis/), and various applications & engines.

The aiWARE platform is available on **Cloud** with various SaaS Applications for easy management and development, but we also offer a **Self Hosted aiWARE** package that can be easily installed on your local Mac or Ubuntu machine, as well as a Cluster Installation for production oriented products.

## Self Hosted aiWARE <!-- {docsify-ignore} -->
Run aiWARE on the deployment footprint that suites your needs: 

<br>
<div class="section card-container">
<a class="card" href="/#/aiware/install/install">
<div class="icon">

![local](../laptop.svg)
</div>
<div class="card-content">
<h3>Install on a Single Machine</h3>
<div>
    Learn how to install aiWARE on your MacOS or Ubuntu machine
</div>
</div>
</a>

<a class="card" href="/#/aiware/install/install">
<div class="icon">

![cluster](../install.svg)
</div>
<div class="card-content">
<h3>Install Cluster</h3>
<div>
    Get the best production experience by installing aiWARE on a 2+ node cluster 
</div>
</div>
</a>

<a class="card" href="/#/aiware/install/cluster?id=cluster-deployment">
<div class="icon">

![validate](../validate.svg)
</div>
<div class="card-content">
<h3>Validate Install</h3>
<div>
    Follow these steps to make sure you are on the right path
</div>
</div>
</a>

</div>

## Knowledge and Support <!-- {docsify-ignore} -->

<br>
<div class="section card-container">

<a class="card" href="/#/aiware/install/cluster?id=cluster-deployment">
<div class="icon">

![cluster-management](../cluster-management.svg)
</div>
<div class="card-content">
<h3>Cluster Management Guide</h3>
<div>
    Learn how to keep the cluster working and up-to-date.
</div>
</div>
</a>

<a class="card" href="/#/aiware/install/cluster?id=cluster-deployment">
<div class="icon">

![troubleshooting](../troubleshooting.svg)
</div>
<div class="card-content">
<h3>Troubleshooting</h3>
<div>
    Get a first aid in solving common issues
</div>
</div>
</a>

<a class="card" href="/#/aiware/install/cluster?id=cluster-deployment">
<div class="icon">

![aiware-in-depth](../aiware-in-depth.svg)
</div>
<div class="card-content">
<h3>aiWARE In-Depth</h3>
<div>
    Learn more about aiWARE to maximize your results
</div>
</div>
</a>

</div>




<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>