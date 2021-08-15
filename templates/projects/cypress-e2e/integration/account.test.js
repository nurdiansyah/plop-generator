// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

describe('Account Profile Settings Page Smoke/E2E Testing', () => {
  beforeEach(() => {
    Cypress.LocalStorage.clear()
    cy.wait(1000)
  })
  const runBefore = () => {
    // Cypress.env('REACT_APP_API_HOST', 'https://oed-bff-server.default.bff-dev.emp.state.or.us')
    // const email = 'me@you.com'
    // const password = 'Testing' // get from environment variable or mock auth call
    // cy.visit('/')
    // cy.get('input[name=email]').type(email).should('have.value', email)
    // cy.get('input[name=password]').type(`${password}{enter}`)
  }
  xit('should navigate to the account profile page (web)', () => {
    cy.viewport(1400, 750)
    runBefore()
    cy.wait(500)
    cy.get("[data-testid='account-menu-icon']").click({ force: true })
    cy.wait(100)
    cy.get("[data-testid='account-menu-item']").click({ force: true })
    cy.wait(500)
    cy.url().should('include', '/account')
  })
  xit('should navigate to the account profile page (mobile)', () => {
    cy.viewport('iphone-x')
    runBefore()
    cy.wait(500)
    cy.get("[data-testid='menu-icon']").click({ force: true })
    cy.wait(100)
    cy.get("[data-testid='nav-profile-item']").click({ force: true })
    cy.wait(500)
    cy.url().should('include', '/account')
  })
})
