/// <reference types="cypress" />

import LogInPage from "../../pages/login.page";

const nonExistingUsername = cy.faker.lorem.words(3);
const existingUsername = 'Pamela'
const invalidPassword = cy.faker.internet.password();
const validUsername = 'casimers@putsbox.com'
const validPassword = 'letsautomate12'

let login = new LogInPage();

context('Login', () => {
    beforeEach(() => {
        login.visit()
    })

    it('logs in with no username and password', () => {
        login.getUsernameField().clear()
        login.getPasswordField().clear()
        login.getDisabledLoginButton().first()
            .should('be.visible')
    })

    it.skip('logs in with an existing username', () => {
        login.fillUsername(existingUsername)
        login.fillPassword(invalidPassword)
        login.clickLogin()

        login.contains(login.UNUSUAL_ACTIVITY_MESSAGE)
    })

    it('logs in with non existent username', () => {
        login.fillUsername(nonExistingUsername)
        login.fillPassword(invalidPassword)
        login.clickLogin()
        login.contains(login.NON_EXISTENT_USERNAME_MESSAGE)
    })

    it('logs in with only username', () => {
        login.fillUsername(validUsername)
        login.getDisabledLoginButton().first()
            .should('be.visible')
    })

    it('logs in with only password', () => {
        login.fillPassword(validPassword)
        login.getDisabledLoginButton().first()
            .should('be.visible')
    })

    it('logs in with valid username and password', () => {

        login.fillUsername(validUsername)
        login.fillPassword(validPassword)
        login.clickLogin()

        login.contains('TestingTheMan')
        login.contains('Home')
        login.contains('Explore')
        login.contains('Notifications')
        login.contains('Messages')
        login.contains('Notifications')
    })
})