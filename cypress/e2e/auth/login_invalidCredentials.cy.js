describe('Login with credentials from unregistered user', () => {
  it('should not log the user in', () => {
    cy.intercept('POST', '**/social/auth/login').as('loginRequest');

    cy.fixture('login.json').then((creds) => {
      cy.login(creds.invalidLogin.email, creds.invalidLogin.password);
    });

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 401);
  });
});
