
beforeEach(() => {
  cy.visit('/')
    .login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"))
    .log(
      "This will run before every scenario."
    );
});