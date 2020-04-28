/// <reference types="cypress" />

import TweetHomePage from "../../pages/tweethome.page";

const tweetLessThanCharacterLimit = cy.randomstring.generate(10)
const tweet279Characters = cy.randomstring.generate(279)
const tweetExactly280 = cy.randomstring.generate(280)
const tweet281Characters = cy.randomstring.generate(281)

let tweetHome = new TweetHomePage()

context('Tweet', () => {
    beforeEach(() => {
        cy.login()
    })

    it('tweets with less than 280 characters', () => {

        tweetHome.fillTweetTextField(tweetLessThanCharacterLimit)
        tweetHome.tweet()

        tweetHome.contains(tweetLessThanCharacterLimit)
    })

    it('tweets with 279 characters (Boundary Value)', () => {

        tweetHome.fillTweetTextField(tweet279Characters)
        tweetHome.tweet()

        tweetHome.contains(tweet279Characters)
    })

    it('tweets with 280 characters (Boundary Value)', () => {

        tweetHome.fillTweetTextField(tweetExactly280)
        tweetHome.tweet()

        tweetHome.contains(tweetExactly280)
    })

    it('tweets with 281 characters (Boundary Value)', () => {

        tweetHome.fillTweetTextField(tweet281Characters)
        tweetHome.getDisabledTweetButton().should('be.visible')
    })

    it('tweets with no character', () => {

        tweetHome.getTweetTextField().clear()
        tweetHome.getDisabledTweetButton().should('be.visible')
    })
})