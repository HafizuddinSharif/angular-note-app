# ✏️ Note app

A front-end pet project that works as note taking app with rich text editor feature. No back-end is used.

Angular CLI: **13.3.8** </br>
Node: **17.3.0**

## Demo

You can visit [here](https://hafizuddinsharif.github.io/angular-note-app/login) for demo </br>
Read **LOGIN DETAILS** section for login credentials
> ❗ Not optimised for mobile yet, please use computer screen size

## Setup

Run:

```
$ npm install
```
And then run:

```
$ ng serve --open
```
And then navigate to `http://localhost:4200/`

## Login details

Currently there is no sign up option. You can log in using the credentials. There are currently 2 accounts, mainly to show that each account have their own respective notes:

```
Username: admin1
Password: admin1
```
```
Username: admin2
Password: admin2 
```

Which you can edit in `src/app/services/auth/auth.service.ts`