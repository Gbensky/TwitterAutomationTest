class ExplorePage {

    getTweetTextField() {
        return cy.get('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr');
    }

    getExploreSearchField() {
        return cy.get('[data-testid="SearchBox_Search_Input"]');
    }

}

export default ExplorePage;