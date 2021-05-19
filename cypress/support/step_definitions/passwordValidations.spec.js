/// <reference types="Cypress" />
import Credentials from '../../fixtures/Credentials.json'
import * as pageElems from '../../pageElements/elements.js'


Given('I am on login page', function () {
    cy.visit(Cypress.env('login_url'))
})

When('I fill username and password fields {string} {string}', function (username, password) {
    cy.get(pageElems.username).type(username)
	cy.get(pageElems.password).type(password)
})
 
And('click on Login button', function () {
    cy.get(pageElems.submitbtn).click() 
})


Then('A Epic sadface: Username and password do not match any user in this service message is displayed', function () {
    cy.get(pageElems.message).should('have.text', 'Epic sadface: Username and password do not match any user in this service')
})