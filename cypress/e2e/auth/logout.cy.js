describe('Logs the user out', () => {
  it('should successfully log the user out', () => {
    cy.fixture('login.json').then((creds) => {
      cy.login(creds.validLogin.email, creds.validLogin.password);
    });

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
