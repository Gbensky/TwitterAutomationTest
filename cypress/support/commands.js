// A great place to define or overwrite commands is in your cypress/support/commands.js file,
// since it is loaded before any test files are evaluated via an import statement in your
// supportFile (cypress/support/index.js by default).

//Read more on https://docs.cypress.io/api/cypress-api/custom-commands.html


import LogInPage from "../pages/login.page";

Cypress.Commands.add('login', (token) => {
    const login = new LogInPage()
    login.visit()
    login.fillUsername('casimers@putsbox.com')
    login.fillPassword('letsautomate12')
    login.clickLogin()
})