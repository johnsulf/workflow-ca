describe('Login with credentials from unregistered user', () => {
  it('should not log the user in', () => {
    cy.visit('https://johnsulf.github.io/workflow-ca/');
    cy.wait(1000);

    cy.get('button[data-auth="login"]').last().click();

    cy.get('#loginEmail').should('be.visible').clear();
    cy.get('#loginPassword').should('be.visible').clear();

    cy.fixture('login.json').then((creds) => {
      cy.get('#loginEmail').type(creds.invalidLogin.email, { delay: 100 });
      cy.get('#loginPassword').type(creds.invalidLogin.password, {
        delay: 100,
      });
    });

    cy.get('#loginForm').submit();

    cy.intercept('POST', '**/social/auth/login').as('loginRequest');
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 401);
  });
});
