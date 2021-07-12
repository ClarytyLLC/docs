# Users on aiWARE

Explain the users in aiWARE

## Creating an Initial Edge User Account

An initial, new user needs to be created to access tools such as the Edge UI. 

Running the following using the aiWARE CLI will create a new user `admin-user` with the password `test123`
    
```bash
ai users create -a --display-name Admin -e admin@admin.com --password test123 admin-user
```

## Creating an Edge User Account

1. If this is a first-time installation, log onto the Edge UI by visiting `http://<ip address>:9000` in a browser window. `<ip address>` represents the IP address of your instance's contorller node. For a `single` instance, it's the IP address where your installation is installed. 

   ![screenshot 1](https://user-images.githubusercontent.com/53197964/122964970-a7b3a980-d33c-11eb-969b-9a1493a52376.png)


2. After logging in, you can find new users by clicking on `User Management` > `Users` on the navbar to the left. 

   ![screenshot 2](https://user-images.githubusercontent.com/53197964/122964887-91a5e900-d33c-11eb-972d-cc0482942f1d.png)

3. This is the User Management page. From here, an admin can:

   * Add a new user by clicking the `Add new` button to the top left corner of the user table
   * Edit a user by click on the user's name under the table column `Login`. Clicking on `Edit` under the `Actions` menu to the right of a user's row opens Edit
   * Delete a user by clicking on `Edit` under the `Actions` menu to the right of a user's row 

   ![screenshot 3](https://user-images.githubusercontent.com/53197964/122965255-da5da200-d33c-11eb-8644-99b3b87218d1.png)

   ![screenshot 4](https://user-images.githubusercontent.com/53197964/122965939-9cad4900-d33d-11eb-9db9-9a72a8466ff5.png)

## Create a User Token
1. If this is a first-time installation, log onto the Edge UI by visiting `http://<ip address>:9000` in a browser window. `<ip address>` represents the IP address of your instance's contorller node. For a `single` instance, it's the IP address where your installation is installed.

   ![screenshot 5](https://user-images.githubusercontent.com/53197964/122964970-a7b3a980-d33c-11eb-969b-9a1493a52376.png)

2. After logging in, you can find new users by clicking on `User Management` > `Token` on the navbar to the left.

   ![screenshot 6](https://user-images.githubusercontent.com/53197964/122964887-91a5e900-d33c-11eb-972d-cc0482942f1d.png)

3. This is the Token Management page. From here, an admin can: 

   * Add a new token attached to an organization by clicking on Add Token

4. New Token Details Modal

   ![screenshot 7](https://user-images.githubusercontent.com/53197964/125144061-87704280-e0d1-11eb-8542-0c23e84e1a7e.png)

   ![screenshot 7](https://user-images.githubusercontent.com/53197964/125143991-4b3ce200-e0d1-11eb-992c-b9f6deab2c5f.png)
