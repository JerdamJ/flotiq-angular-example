# Overview

This project is an example that uses Angular generated package in Flotiq.

## Prerequisites

1. Node >= 8.9
2. Npm >= 5.5.1
3. Flotiq Account - you can create one [here](https://editor.flotiq.com)
4. Your own content type definition. For example purpose I have created a To-Do-List content object which contains:
    * title : type string
    * date : type string
    * description : type string
    * status : type string
5. Angular generated package which can be downloaded from your Flotiq dashboard after you log in.

## Installation instructions

1. npm install
2. npm install (path to your generated package)/dist
3. In (path to your generrated package)/dist run `npm link`
4. In your project directory run `npm link flotiq`

Remember you have to build your generated package before injecting it into application. Read package README for detailed instructions.

## Run

1. ng serve

## Generate application files for production mode that can be deployed to your server:

1. ng build --prod

## Free hosting option

1. [Firebase hosting](https://firebase.google.com/docs/hosting)

## Known problems

If you receive an error `Error: You need to import the HttpClientModule in your AppModule!` you have to add a following line in your `tsconfig.app.json` file 
in `compilerOptions` section:

`"paths": { "@angular/*": [ "./node_modules/@angular/*" ] }`