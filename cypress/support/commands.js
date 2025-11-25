// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command to wait for page load
Cypress.Commands.add('waitForPageLoad', () => {
  cy.window().should('have.property', 'document')
  cy.document().should('have.property', 'readyState', 'complete')
  cy.wait(1000) // Additional wait for dynamic content
})

// Custom command for screenshots
Cypress.Commands.add('takeScreenshot', (name) => {
  cy.screenshot(name)
})