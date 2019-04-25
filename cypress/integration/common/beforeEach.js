
beforeEach(() => {
  cy.visit('/')
    .login('enter username', 'enter password')
    .log(
      "This will run before every scenario."
    );
        // cy.login('Test.poc.clear@gmail.com', 'Clear@123point')
});