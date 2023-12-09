# Welcome to Healthy Place
**Healthy Place** is website about healthy lifestyle. This website is developed for Softuni as final project for ReactJS course. 
For its creation ReactJS, HTML, CSS and Bootstap as used. Back end - Softuni practice server. 

# Installation and usage
1. Clone this repository to your local machine
2. Open project and navigate to server folder
3. Start server with command: ```node server.js```
     - server will start on: http://localhost:3030
4. To start client part navigate to client folder
5. Run: ```npm install``` - to install all packages and dependencies
6. Run: ```npm run dev``` - to start dev sever:
    - server will start on: http://localhost:5173

# Deployment
**Healthy Place** website is deployed on: (https://healthy-place-project.web.app/)](https://healthy-place-project.web.app/)

# Brief overview
The project is separated in to two roles - Guest and User.

## Account types
- **Guest** - The **_Guest_** profile allows you to browse through the site
- **User** - The **_User_** profile gives you access to profile page, adding article, editing and deleting owned articles. Also
logged users can like/unlike other authors articles.

### User profile
- **Users** needs to Login with email and password.
- **Users** can access their personal profile page.
- **Users** can edit owned wines.
- **Users** can delete owned wines.

There are 3 already registered user, which can be used for immediate testing:
- user: peter@abv.bg password: 123456
- user: george@abv.bg password: 123456
- user: admin@abv.bg password: admin

## Home Page
![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/79882c09-3595-43f6-96fb-764a0ce350de)

## Page Navigation

### Guest View
***Navigation bar view from guest***

### User View
***Navigation bar view from user***

### Footer
***The footer is visible on every page***

## Registration page

### _User registration form expects the following inputs:_
- **_First name_**;
- **_Last name_**;
- **_Email_** address;
- **_Password_**;
- Repeat **_Password_**;

**_The user password needs to be minimum 6 characters long._**
  

## User Login page
### _User Login form expects the following inputs:_
- **_email_** address;
- **_password_**;

## User profile page
