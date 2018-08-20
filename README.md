# UrbanConnectionFrontend
# README

#This repo is for frontend only
For backend: https://github.com/abhishekjain16/urban-connections
READ ME:
The project uses AngularCLI for the front end ,rails for the backend and mysql for database.
So you need to have all three installed and running before executing the project.

Step 1:
Git clone the project

Step 2: Install npm, ruby and mysql if not installed.

Step 3: Install npm modules 
Command: npm install

Step 3: ruby bundle
Command: bundle

Step 4: Database
rake db:create to create database
rake db:migrate to add all migrations

Step 5: Run Ruby server
Command: rails s

Step 6: Run Nodejs server
Go to the root folder of project and type in command: ng serve
Navigate to http://localhost:4200/



Make sure to replace your API_KEY from YELP to have data coming through.

















## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
