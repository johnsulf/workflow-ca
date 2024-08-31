describe('Logs the user out', () => {
  it('should successfully log the user out', () => {
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

    cy.wait(2000);

    cy.window().then((win) => {
      const token = win.localStorage.getItem('token');
      expect(token).to.be.a('string');
    });

    cy.wait(2000);
    cy.get('button[data-auth="logout"]').click();

    cy.window().then((win) => {
      const token = win.localStorage.getItem('token');
      expect(token).to.be.null;
    });
  });
});
