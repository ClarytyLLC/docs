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

- Copy the id and the loginUrl that are returned from GraphQL and save them somewhere - We will use them in the next step and later.


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
- Go back to https://portal.azure.com
- Click on Manage Azure Active Directory - same as done previously
- Click on Users in left Side Menu

![Users](images\Users.png)

- CLick + New user tab at top

![NewUser](images\NewUser.png)

- Add User name password and fill in any other fields in job info section you like
- Click the Create button at bottom of page

![AllUsers](images\AllUsers.png)

- Click on your new User that you created and make sure thier email is in the contact info section

![NewUserCreated](images\NewUserCreated.png)

- if the users email is not in the Contact info Section
- Click the Edit Tab and add their email in the Contact info section
- Click the Save Tab 

- Go back to https://portal.azure.com
- Click on Manage Azure Active Directory - same as done previously
- Click on Enterprise Applications
- Click on our Application
- Click on Users and groups in left menu

![AddUser](images\AddUser.png)

- Click on + Add user/group at the top

![AddAssignment](images\AddAssignment.png)

- Click on None Selected under Users
- a portal should open called Users
- Select the user we created earlier
- Click the Select button at the bottom of the portal
- Click the Assign button at the bottom of page that should blue now




Recording: https://drive.google.com/file/d/1WhICbOLavCs9iG32GmRNEc_ldVHWp1Cp/view
https://drive.google.com/file/d/19DmYILxPMSrNshJiC95eRHLK59H0NBFp/view

### Step 7: Users provisioning with Azure AD via SCIM Endpoints

- Sign into Veritone Admin Console with your User Admin Account

![AdminConsole](images\AdminConsole.png)

- Click on API Keys
- Click on NEW API KEY button

![NewApiKey](images\NewApiKey.png)

- Add a Key Name for your token
- the User input is left blank
- Check the Box for User under Select Permissions 
- Click Generate Token

![TokenGenerated](images\TokenGenerated.png)

- Copy Your Token and save it somewhere - we will use it next

- Go back to https://portal.azure.com
- Click on Manage Azure Active Directory - same as done previously
- Click on Enterprise Applications 

![Application](images\Application.png)

- Click on your Application

![ApplicationOverview](images\ApplicationOverview.png)

- Click on Provisioning in left Menu

![ProvisionStart](images\ProvisionStart.png)

- Click the Get Started button

![Provisioning](images\Provisioning.png)

- Select Automatic under the Provisioning Mode
- Next under Admin Credentials we are going to use two values we have previously saved 
- Get the ID we copied at the end of step 4 above and add it to the end of this URL https://api.dev.us-1.veritone.com/v1/admin/scim/{connectId}
- so for this example the Tenant URL that you would use is https://api.dev.us-1.veritone.com/v1/admin/scim/16f982b7-17fa-4c6c-a17b-9e7e018d42c0
- Paste it into the Tenant URL
- Paste the API token we just created in the last step into the secret token field
- Click the test connection button
- You should see a message saying the test was successful
- Click the Save button at the top


- Go back to https://portal.azure.com
- Click on Manage Azure Active Directory - same as done previously
- Click on Enterprise Applications 
- Click on Provisioning in left Menu

![EditProvisioning](images\EditProvisioning.png)

- Click the Edit Provisioning Button at the Top 

![ProvisioningMapping](images\ProvisioningMapping.png)
- Expand the section that says Mappings
- Click on Provision Azure Active Directory Groups

![AttributeMappings](images\AttributeMappings.png)

- Make sure the name field says Provision Azure Active Directory Groups
- Change the Enabled Toggle to No
- Click the Save Button at the Top
- You will be prompted to Save Changes 
- Click Yes

![EditProvisioning](images\EditProvisioning.png)

- Click the Edit Provisioning Button at the Top 

![TurnOnProvisioning](images\TurnOnProvisioning.png)

- Toggle the Provisioning Status at the bottom of page to On
- Click the Save button at the top  
- Close by clicking X on the right

![ProvisionSuccess](images\ProvisionSuccess.png)

- Provisioning cycles every 40 minutes - so you can also provision immediately
- Click the Provision on Demand Button at the Top 

![ProvisionOnDemand](images\ProvisionOnDemand.png)

- Start typing user to provision in search bar
- Select the user
- Click the Provision button at the bottom of the Page

![OnDemandUser](images\OnDemandUser.png)

- You can now log into Veritones Admin Console and verify the new user was Created.

![AdminConsoleUser](images\AdminConsoleUser.png)



 
- User admin account to generate a new API Token which will be used for the SCIM Endpoints. Then save the token somewhere to use in step 2
Video: https://drive.google.com/file/d/1x0HO2_Qffoz75kmO_D1hlorLiguKIYq_/view

- Go to Provisioning page of Azure AD Application to install our aiWare SCIM Endpoint (Our Tennant URL is https://api.dev.us-1.veritone.com/v1/admin/scim/{connectId}, Secret Token is from step 1)
Recording: https://drive.google.com/file/d/1THzAaLFuWMnlAKSeBMNHfDMF-02ttYNN/view

- The Provisioning usually automatically runs per 40 minutes. But we can run on demand so we don’t need to wait for logging in a new User.
Video: https://drive.google.com/file/d/10nzOiZ9T4wHlpXlzsk534FqwjT_8RGDH/view
Login for the new User of Azure AD in aiWare system

### Step 8: Set up ms graph - need to watch video here and adjust description

- Go back to https://portal.azure.com
- Click on Manage Azure Active Directory - same as done previously
- Click on App registrations in side menu - same as done previously
- Select the All applications tab and click on your application 
- Select your Application

![NewApp](images\NewApp.png)

- Click on Owners in the left menu

![Owners](images\Owners.png)

- Click on the Add Owners button

![OwnersSelection](images\OwnersSelection.png)

- You should see a portal titled Owners
- Select the administrator  - not the user you recently created
- Click Select at the bottom of the Owners portal

![OwnerSuccess](images\OwnerSuccess.png)

- You should see your owner listed now
- Click API Permissions from the left menu

![ApiPermissions](images\ApiPermissions.png)

- Click the + add a permission tab in the Configured permissions section

![RequestApiPermissions](images\RequestApiPermissions.png)

- You will see a Request API permissions portal
- Click on the My APIs Tab at the top

![MyApis](images\MyApis.png)

- Click on your Application

![SelectPermissions](images\SelectPermissions.png)

- Check the box next to user_impersonation
- Click the Add permissions button at the bottom of portal

![UpdatedPermissions](images\UpdatedPermissions.png)

- You should see your updated permissions 
- Click the + add a permission tab in the Configured permissions section

![RequestApiPermissions](images\RequestApiPermissions.png)

- Click on the APIs my organization uses Tab

![ApisOrg](images\ApisOrg.png)

- Click on Microsoft Graph in the portal

![MsGraph](images\MsGraph.png)

- Click on the box titled Delegated Permissions - Then more info will appear
- Make sure all 4 boxes in the above image are checked under Openid permissions
- Click the Add permissions button at the bottom of the portal

![AdminConsent](images\AdminConsent.png)

- Click the Grant Admin Consent for (your AD) Tab - under Configured Permissions 
- A popup will show up to ask you to confirm 
- Click Yes

![Consent](images\ConsentSuccess.png)

- All the permissions should have a green checkmark next to them now


### Step 9: Use GQL to query the OpenID Connect Provider
 - You can now place the loginUrl you copied in Step3 into the browser 
 - Log in using the email of the user you created
 
 
 - Use GQL to query the OpenID Connect Provider using this query:
 - Then login the new User by the loginURL from above query
Video for step 1 & 2: https://drive.google.com/file/d/1EKxe1b-AhMGNJrQ5RUSAEZrqE9F_R1Pk/view

### Folder with videos of entire process
- https://drive.google.com/drive/folders/1GRjLvK6TBWp82Ddo7sVn8YZcD8u8yxtL?usp=sharing