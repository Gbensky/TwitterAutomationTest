class LogInPage {

    NON_EXISTENT_USERNAME_MESSAGE = "The username and password that you entered did not match our records. Please double-check and try again.";
    UNUSUAL_ACTIVITY_MESSAGE = "There was unusual login activity on your account. To help keep your account safe, please enter your phone number or email address to verify it’s you.";


    contains(value) {
        cy.contains(value).should('be.visible');
    }

    visit() {
        cy.visit('/login');
    }

    getUsernameField() {
        return cy.get('[name="session[username_or_email]"][type="text"]');
    }

    getPasswordField() {
        return cy.get('[name="session[password]"][type="password"]');
    }

    getDisabledLoginButton() {
        return cy.get('[data-testid="LoginForm_Login_Button"][disabled]');
    }

    fillUsername(value) {
        const field = this.getUsernameField();
        field.clear();
        field.type(value);
        field.should('have.value', value);

        return this;
    }

    fillPassword(value) {
        const field = this.getPasswordField()
        field.clear();
        field.type(value);
        field.should('have.value', value);

        return this;
    }

    clickLogin() {
        const button = cy.get('[data-testid="LoginForm_Login_Button"]');
        button.first().click();
    }
}

export default LogInPage;