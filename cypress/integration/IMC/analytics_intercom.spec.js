// <reference types="cypress" />
describe("Bug-Slayer | Intercom", () => {
  it("Validates User Eventing", () => { 
  cy.visit(Cypress.env('EARTH'));
  cy.get('#user_email').type(Cypress.env('GLOBAL_USER'));
  cy.get('#user_password').type(Cypress.env('GLOBAL_PASSWORD'));
  cy.get('.btn-primary').click();

  cy.get('h1').should('contain', 'Welcome to Smarter Marketing');
  cy.get('.home-link').should('contain', 'Analytics & Reporting')
  cy.get('.home-link').contains('Analytics & Reporting').click(); 

  cy.get('.match-select-height').should('contain', 'Create/Edit Groups').click();
  cy.get('.ml-8').contains('Create New Group').click();
  cy.get('.data-v-154104ae').contains('Group Name').type('TEST |bug-slayer|' {force: true} );

  //need to add group name, select client & locations and save 

  cy.get('.v-btn').contains('Cancel').click();  
  cy.get('.logo').should('contain', 'Analytics').click();
