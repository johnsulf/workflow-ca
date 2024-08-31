describe('Login with invalid email format', () => {
  it('should display an error message if the email is not a Noroff email', () => {
    cy.visit('https://johnsulf.github.io/workflow-ca/');
    cy.wait(1000);

    cy.get('button[data-auth="login"]').last().click();

    cy.get('#loginEmail').should('be.visible').clear();
    cy.get('#loginPassword').should('be.visible').clear();

    cy.fixture('login.json').then((creds) => {
      cy.get('#loginEmail').type(creds.invalidEmail, { delay: 100 });
      cy.get('#loginPassword').type(creds.validLogin.password, { delay: 100 });

      cy.get('#loginForm').submit();

      cy.get('#loginEmail')
        .invoke('attr', 'title')
        .should('contain', creds.invalidEmailError);
    });
  });
});
