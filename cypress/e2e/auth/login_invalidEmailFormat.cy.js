describe('Login with invalid email format', () => {
  it('should display an error message if the email is not a Noroff email', () => {
    cy.fixture('login.json').then((creds) => {
      cy.login(creds.invalidEmail, creds.validLogin.password);

      cy.get('#loginEmail')
        .invoke('attr', 'title')
        .should('contain', creds.invalidEmailError);
    });
  });
});
