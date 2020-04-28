/// <reference types="cypress" />

import ExplorePage from "../../pages/explore.page";

let explore = new ExplorePage()

context('Explore', () => {
    beforeEach(() => {
        cy.visit('/explore')
    })

    it('explores', () => {
        explore.getTweetTextField().should('not.exist')
        explore.getExploreSearchField().should('be.visible')
    })
})