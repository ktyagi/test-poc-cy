
beforeEach(() => {
  cy.visit('/')
    .login('enter username', 'enter password')
    .log(
      "This will run before every scenario."
    );
});