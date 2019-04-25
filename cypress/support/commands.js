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
Cypress.Commands.add("login", { prevSubject: true }, ($subject, username, password) => {
    cy.debug()
        .get('[data-testid="royal_email"]').type(username)
        .get('[data-testid="royal_pass"]').type(password)
        .get('[data-testid="royal_login_button"]').click()
    return cy.wrap($subject);
})

Cypress.Commands.add("scrollPage", { prevSubject: 'optional' }, ($subject, noOfTimes) => {
    for (let i = 1; i <= noOfTimes; i++) {
      cy.window().then((win) => {
        win.scrollBy(0, 500)
      }).wait(10)
    }
    return cy.wrap($subject)
  })


//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
