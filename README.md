# Overview

This project is an example that uses Angular generated package in Flotiq.

## Prerequisites

1. Node >= 8.9
2. Npm >= 5.5.1
3. Flotiq Account - you can create one [here](https://editor.flotiq.com)
4. Your own content type definition. For example purpose I have created a `ToDoList` (API name) content object definition which contains:
    * title : type string
    * date : type string
    * description : type string
    * status : type string
5. Angular generated package which can be downloaded from your Flotiq dashboard after you log in.

## Installation instructions
Remember you have to build your generated package before injecting it into application. Read package README for detailed instructions or follow these below:
### In downloaded package directory:
1. npm install
2. npm run build

This will generate a `dist` folder in your downloaded package directory, which will be used later.

### In application directory:
1. npm install
2. npm install (path to your generated package)/dist
3. In (path to your generrated package)/dist run `npm link`
4. In your project directory run `npm link flotiq`



In `environment.ts` and `environment.prod.ts` provide an FLOTIQ_API_KEY suitable to your needs (full, readOnly, restricted to specific Content Type Definition);

## Run

1. ng serve

## Generate application files for production mode that can be deployed to your server:

1. ng build --prod

## Available demo:

https://flotiq-example.firebaseapp.com/entries

## Free hosting option

1. [Firebase hosting](https://firebase.google.com/docs/hosting)

## Known problems

If you receive an error `Error: You need to import the HttpClientModule in your AppModule!` you have to add a following line in your `tsconfig.app.json` file 
in `compilerOptions` section:

`"paths": { "@angular/*": [ "./node_modules/@angular/*" ] }`

There might be a case when names of "ToDoList" content type definition won't match. Change the name of import `ContentXService` in `flotiq.service.ts` file to your definition.