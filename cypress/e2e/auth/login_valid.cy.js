describe('Login with cridentials from registered user', () => {
  it('should log in successfully with valid credentials', () => {
    cy.fixture('login.json').then((creds) => {
      cy.login(creds.validLogin.email, creds.validLogin.password);
      cy.get('.profile-name').should('contain', creds.validLogin.name);
    });
  });
});
