# Documentation

## Setting up Project from Git

#### Requirements

The minimum requirement by this project is node version: >= 8.0.0

#### Node
* [Node 8.0.0 and above](https://nodejs.org/en/) 

#### Clone repo
Run the following commands in your terminal

`git clone project`

`cd clone_project_path`

#### Install dependencies
Run the following command in your terminal

`npm install`

### Running the tests
 To run test from command line
  
`npm run e2etest_with_report`

To run test from Cypress GUI
 
`npm run cy:open`


## Setting up new Cypress project

#### Requirements

The minimum requirement by this project is node version: >= 8.0.0

#### Node
* [Node 8.0.0 and above](https://nodejs.org/en/) 

### Test Setup
 - Create a directory for your project `mkdir name_of_project`
 - Go into directory from your command line/terminal `cd /your/project/path`
 - run command `npm init` in the created directory
 - rum command `npm install cypress --save-dev` to install cypress
 - Create a cypress.json file in your project directory for custom configuration. `touch cypress.json`
 - Add json content
 ```json 
 {
   "projectId": "any_id_of_your_choice"
 }
 ```
Note: If projectId is gotten from Cypress (after sign-up with them) it should not be changed. See [here](https://docs.cypress.io/guides/dashboard/projects.html#Project-ID)

 - Create a file structure for tests. See [here](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure)
 
### Test creation
 - Create test files & folders in cypress/integration folder (This path can be reconfigured in your cypress.json)
 
### Running the tests
 To run test from command line
  
`./node_modules/cypress/bin/cypress run`
 
To run test from Cypress GUI
 
`./node_modules/cypress/bin/cypress open`
 
### Note
 - Cypress has a default configuration. You can change this in your cypress. json file. See [here](https://on.cypress.io/guides/configuration)
 - npm dependencies and libraries can be added in the package.json file
 - Text in this block `code block` should ran in a terminal/ command prompt