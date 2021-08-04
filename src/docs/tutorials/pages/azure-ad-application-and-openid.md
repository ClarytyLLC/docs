# Setting up a Azure Active Directory Application and OpenID

**APPROXIMATE READING TIME: XXX MINUTES**

>**Tip** Before getting started, we recommend to read XYZXXXXXXX to understand how XXXXXXXXX tutorial.

## Subject Description <!-- {docsify-ignore} -->

The Following is a full steps by step integration guide of creating Org/Azure AD Application/Users and configuration for SCIM Endpoints. With the video recording for each step.

- Create aiWare Organization
- New Org Admin, 
- Azure AD Application, 
- OpenID Provider

?>  Steps 1 & 2 can be skipped if you already have an organization and org admin setup already

### Step 1: Use Admin Console to create your organization 
- Login to super-admin user and create a new Organization

### Step 2: Create an Org Admin 
- Create a new org admin to manage the new organization
- step 1 and 2 recording: https://drive.google.com/file/d/1AO5VQjzD9YROl1M1ZeB4iCkPyjaQvaSU/view

### Step 3: Create a new Enterprise Application in Azure AD
 - Go to Azure AD https://portal.azure.com and create a new Enterprise Application for testing
Record: https://drive.google.com/file/d/151ubvL-Cui3Y2qENuu0AE4s0tvcGCBAH/view

![PortalAzure](images\PortalAzure.png)
- Click on Manage Azure Active Directory


![AzureAd](images\AzureAd.png)

- Click on Enterprise applications in left menu
 
![EnterpriseApplications](images\EnterpriseApplications.png)

- Click on  + New Application

![NewApplication](images\NewApplication.png)

- Click on + Create your own application

![CreateOwnApp](images\CreateOwnApp.png)

- Add a name for your application in the portal that shows on right
- select the (integrate any other application you don't find in the gallery) option
- Click the create button

![NewAppCreated](images\NewAppCreated.png)

- Click on Home in the breadcrumb menu at the top of the page
- Click on Manage Azure Active Directory

![AzureAd](images\AzureAd.png)

- Click on App registrations on left hand menu

![AppRegistrations](images\AppRegistrations.png)

- Make sure the All applications tab is selected - you should see your newly created application there
- Click on your new application in the list (in this image) veri-tutorial-scim-test

![NewApp](images\NewApp.png)

- Copy the Application (client) ID and save it somewhere - we will use it later
- Click on the Endpoints tab at the top

![EndPoints](images\EndPoints.png)

- You should see Endpoints
- Copy the OpenID Connect metadata document and save it somewhere - we will use it later
- Close the Endpoints by clicking on the X
- Click on Certificates and secrets on the left menu

![CertsSecrets](images\CertsSecrets.png)

- Click on + New Client Secret

![CreateSecret](images\CreateSecret.png)

- You should see and Add a client secret portal
- add a description
- select an expiration 
- Click the add button at the bottom

![NewSecret](images\NewSecret.png)

- copy the Value for your new secret and save it somewhere - we will use it next along with the previous values you saved

### Step 4: Create new OpenID Provider Connect via GraphQL
 - Use your Org Admin account to create a new OpenID Provider Connect in aiWare via GraphQL
 - Log in to your veritone account using your org admin credentials 
 - The go to Veritones GraphQL interface and run the following mutation with the values that you copied
 
Video: https://drive.google.com/file/d/1DVc2iBFMP2rJqQ8GMEEm5ldWtVKWWBjQ/view

```graphql
mutation {
    createOpenIdProvider(
        input: {
              name: "Veri-Tutorial-Scim-Test"
              description: "Test OpenID Azure Description"
              websiteUrl: "https://login.microsoftonline.com"
              clientId: "your Client ID XXXXXXXX"
              clientSecret: "your Client Secret XXXXXXXX"
              issuerUrl: "your OpenID Connect Metadata document  XXXXXXXX"
              btnText: "Veri Tutorial Login"
              btnLogo: "https://seeklogo.com/images/A/azure-active-directory-logo-C196F4B2D3-seeklogo.com"
              btnColor: "#FFFFFF"
              isGlobal: false
        }
      ) {
            id
            name
            description
            websiteUrl
            loginUrl
            loginButtonStyle {
              btnText
              btnLogo
              btnColor
            }
            isGlobal
      }
}
```

- Example of mutation and reponse after creating below

![OpenIDConnectGraphql](images\OpenIDConnectGraphql.png)

- Copy the id and the loginUrl that are returned from GraphQL and save them somewhere - We will use them in the next step.


### Step 5: Start to setup the required configuration for the new Azure AD Application.

- Go back to https://portal.azure.com
- Click on Manage Azure Active Directory - same as done previously
- Click on App registrations in side menu - same as done previously
- select the All applications tab and click on your application

![NewApp](images\NewApp.png)

- Click on Authentication on in side menu

![Authentication](images\Authentication.png)
 
- Click on + Add a platform

![ConfigurePlatform](images\ConfigurePlatform.png)

- You should see a portal that says Configure platforms
- Click on the box that says Web

![ConfigureWeb](images\ConfigureWeb.png)

- You should see a portal that says Configure Web
- We will need to add a redirect URI here
- In the input field that says (Enter the redirect URI of the application) paste the loginUrl you previously saved
- in this example it was - https://api.dev.us-1.veritone.com/v1/admin/openid/16f982b7-17fa-4c6c-a17b-9e7e018d42c0/login
- We need to make one alteration to this URL 
- After pasting in the URL - we need to add the word callback/ before login at the end of the URL
- so the the redirect URL will look like this

https://api.dev.us-1.veritone.com/v1/admin/openid/16f982b7-17fa-4c6c-a17b-9e7e018d42c0/callback/login

- Click the configure button at the bottom of the portal

![RedirectUri](images\RedirectUri.png)

- You should see a box under Platform configurations that says Web and contains your redirect URI 
- Click on Token configuration in the left menu

![TokenConfiguration](images\TokenConfiguration.png)

- Click on + Add optional claim under Optional Claims

![OptionalClaim](images\OptionalClaim.png)

- You should see a portal that says Add optional claim
- Under Token type select ID - This will reveal a claims menu
- check the top box that says Claim which will select all the boxes
- Click the Add button at the bottom of the portal

![OptionalClaim2](images\OptionalClaim2.png)

- Check the box that says  - Turn on the Microsoft Graph email, profile permission (required for claims to appear in token).
- Click the Add Button

![OptionalClaim3](images\OptionalClaim3.png)

- You should see a claims table now

Video https://drive.google.com/file/d/1x84zycnEXwD2sCkySovqi4-NXBp2O8GE/view

### Step 6: Create and add new user in Azure AD Application.
- Create and add the new user into Azure Application. 
- Make sure the new User includes “email” information in his profile.
- Create and add new User. 
Recording: https://drive.google.com/file/d/1WhICbOLavCs9iG32GmRNEc_ldVHWp1Cp/view
- Please make sure the new User has “email” information https://drive.google.com/file/d/19DmYILxPMSrNshJiC95eRHLK59H0NBFp/view

### Step 7: Users provisioning with Azure AD via SCIM Endpoints
- User admin account to generate a new API Token which will be used for the SCIM Endpoints. Then save the token somewhere to use in step 2
Video: https://drive.google.com/file/d/1x0HO2_Qffoz75kmO_D1hlorLiguKIYq_/view

- Go to Provisioning page of Azure AD Application to install our aiWare SCIM Endpoint (Our Tennant URL is https://api.dev.us-1.veritone.com/v1/admin/scim/{connectId}, Secret Token is from step 1)
Recording: https://drive.google.com/file/d/1THzAaLFuWMnlAKSeBMNHfDMF-02ttYNN/view

- The Provisioning usually automatically runs per 40 minutes. But we can run on demand so we don’t need to wait for logging in a new User.
Video: https://drive.google.com/file/d/10nzOiZ9T4wHlpXlzsk534FqwjT_8RGDH/view
Login for the new User of Azure AD in aiWare system

### Step 8: Set up ms graph - need to watch video here and adjust description

### Step 9: Use GQL to query the OpenID Connect Provider
 - Use GQL to query the OpenID Connect Provider using this query:
 - Then login the new User by the loginURL from above query
Video for step 1 & 2: https://drive.google.com/file/d/1EKxe1b-AhMGNJrQ5RUSAEZrqE9F_R1Pk/view

### Folder with videos of entire process
- https://drive.google.com/drive/folders/1GRjLvK6TBWp82Ddo7sVn8YZcD8u8yxtL?usp=sharing