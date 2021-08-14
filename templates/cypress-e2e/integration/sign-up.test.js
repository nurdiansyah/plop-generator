// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />


describe('Sign Up Page Smoke/E2E Testing', () => {
  beforeEach(() => {
    Cypress.env('REACT_APP_API_HOST', 'http://localhost:4000')
  })
  xit('should redirect to the sign up page', () => {
    cy.visit('/')
    cy.get("[data-testid='sign-up-link']").click({ force: true})
    cy.wait(2000)
    cy.url().should('include', '/auth/registration')
  })
  xit('should fill out the sign up form', () => {
    const first = 'A'
    const middle = 'Fake'
    const last = 'Name'
    const email = 'afakename@gmail.com'

    cy.get('input[name=firstName]').type(first)
    cy.get('input[name=middleName]').type(middle)
    cy.get('input[name=lastName]').type(last)
    cy.get('input[name=email]').type(email)

    cy.wait(2000)

    cy.get("[data-testid='sign-up-submit']").click({multiple: true, force: true})

    cy.wait(2000)

    //cy.url().should('include', '/dashboard')

  })
})
