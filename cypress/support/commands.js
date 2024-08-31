// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://johnsulf.github.io/workflow-ca/');
  cy.wait(1000);

  cy.get('button[data-auth="login"]').last().click();

  cy.get('#loginEmail').should('be.visible').clear();
  cy.get('#loginPassword').should('be.visible').clear();

  cy.get('#loginEmail').type(email, { delay: 100 });
  cy.get('#loginPassword').type(password, { delay: 100 });

  cy.get('#loginForm').submit();
  cy.wait(1000);
});
