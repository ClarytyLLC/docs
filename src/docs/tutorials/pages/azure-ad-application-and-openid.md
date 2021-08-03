# Setting up a Azure Active Directory Application and OpenID

**APPROXIMATE READING TIME: XXX MINUTES**

>**Tip** Before getting started, we recommend to read XYZXXXXXXX to understand how XXXXXXXXX tutorial.

## Subject Description <!-- {docsify-ignore} -->

The Following is a full steps by step integration guide of creating Org/Azure AD Application/Users and configuration for SCIM Endpoints. With the video recording for each step.

- Create aiWare Organization
- New Org Admin, 
- Azure AD Application, 
- OpenID Provider

### Step 1: Use Admin Console to create your organization 
- Login to super-admin user and create a new Organization

### Step 2: Create an Org Admin 
- Create a new org admin to manage the new organization
- step 1 and 2 recording: https://drive.google.com/file/d/1AO5VQjzD9YROl1M1ZeB4iCkPyjaQvaSU/view

### Step 3: Create a new Enterprise Application in Azure AD
 - Go to Azure AD https://portal.azure.com and create a new Enterprise Application for testing
Record: https://drive.google.com/file/d/151ubvL-Cui3Y2qENuu0AE4s0tvcGCBAH/view

### Step 4: Create new OpenID Provider Connect via GraphQL
 - User Org Admin account to create a new OpenID Provider Connect in aiWare via GraphQL
Video: https://drive.google.com/file/d/1DVc2iBFMP2rJqQ8GMEEm5ldWtVKWWBjQ/view

### Step 5: Start to setup the required configuration for the new Azure AD Application.
- Authentication
- Token configuration
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