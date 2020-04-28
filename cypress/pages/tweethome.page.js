class TweetHomePage {

    contains(value) {
        cy.contains(value).should('be.visible');
    }

    getTweetTextField() {
        return cy.get('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr');
    }

    getDisabledTweetButton() {
        return cy.get('[data-testid="tweetButtonInline"][disabled]');
    }

    fillTweetTextField(text) {
        const field = this.getTweetTextField();
        field.clear();
        field.type(text);
        field.should('have.text', text);

        return this;
    }

    tweet() {
        const button = cy.get('[data-testid="tweetButtonInline"');
        button.first().click();
    }
}

export default TweetHomePage;