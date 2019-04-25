import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`User sees {string} in the url`, (title) => {
  cy.url().should('include', title)
})