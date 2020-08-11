import "cypress-audit/commands";

Cypress.Commands.add('login', (overrides = {}) => {
  Cypress.log({
    name: 'login',
  });

  const options = {
    method: 'POST',
    url: Cypress.env('auth_url'),
    body: {
      grant_type: 'password',
      username: Cypress.env('auth_username'),
      password: Cypress.env('auth_password'),
    },
  };
  cy.request(options);
});