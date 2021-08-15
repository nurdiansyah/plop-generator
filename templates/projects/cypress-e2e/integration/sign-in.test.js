// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

describe('Sign In Page Smoke/E2E Testing', {
  retries: {
    runMode: 3,
    openMode: 2
  }
}, () => {
  it('should navigate to the sign in page', () => {
    cy.visit('/')
    cy.get("[data-testid='sign-in-out-button']").click({ force: true})
    cy.wait(2000)
    cy.url().should('include', '/auth/sign-in')
  })
  it('should accept input into sign in form fields', () => {
    const ssn = 'testemail@domain.com'
    const pin = 'Password123!'

    cy.get('input[name=email]').type(ssn)
    cy.get('input[name=password]').type(pin)

    // cy.wait(2000)
    // cy.url().should('include', '/dashboard')
  })
})
