
/// <reference types="Cypress" />
import Credentials from '../../fixtures/Credentials.json'
import * as pageElems from '../../pageElements/elements.js'


Given('I am on login page', function () {
    cy.visit(Cypress.env('login_url'))
})

When('I fill login form fields', function () {
    cy.get(pageElems.username).type(Credentials.username)
	cy.get(pageElems.password).type(Credentials.password)
})
 
And('click on Login button', function () {
    cy.get(pageElems.submitbtn).click() 
})


Then('I am logged in', function () {
    cy.get(pageElems.title).should('have.text', 'Products')
})

