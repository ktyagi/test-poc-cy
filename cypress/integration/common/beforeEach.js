
beforeEach(() => {
  cy.visit('/')
    .login('Tyagitester@gmail.com', '<enter password here>')
    .log(
      "This will run before every scenario."
    );
        // cy.login('Test.poc.clear@gmail.com', 'Clear@123point')
});