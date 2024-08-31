describe('Login with cridentials from registered user', () => {
  it('should log in successfully with valid credentials', () => {
    cy.visit('https://johnsulf.github.io/workflow-ca/');
    cy.wait(1000);

    cy.get('button[data-auth="login"]').last().click();

    cy.get('#loginEmail').should('be.visible').clear();
    cy.get('#loginPassword').should('be.visible').clear();

    cy.fixture('login.json').then((creds) => {
      cy.get('#loginEmail').type(creds.validLogin.email, { delay: 100 });
      cy.get('#loginPassword').type(creds.validLogin.password, { delay: 100 });
    });

    cy.get('#loginForm').submit();

    cy.fixture('login.json').then((creds) => {
      cy.get('.profile-name').should('contain', creds.validLogin.name);
    });
  });
});
