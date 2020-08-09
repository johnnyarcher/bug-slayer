// <reference types="cypress" />
describe("Smoke Tester", () => {
  it("Runs Automated Smoke Tests for IMC", () => { 
  cy.visit('http://localhost:3000');
  cy.get('#user_email').type('user_email');
  cy.get('#user_password').type('user_password');
    cy.server();
  cy.get('.btn-primary').click();

  cy.get('h1').should('contain', 'Welcome to Smarter Marketing');
  cy.get('.home-link').should('contain', 'Analytics & Reporting')
  cy.get('.home-link').contains('Analytics & Reporting').click(); 

  cy.get('.match-select-height').should('contain', 'Create/Edit Groups').click();
  cy.get('.ml-8').contains('Create New Group').click();
  cy.get('.v-text-area').contains('Group Name').type('TEST |bug-slayer|' {force: true} );
  //need to add group name, select client & locations and save 

  cy.get('.v-btn').contains('Cancel').click();  
  cy.get('.logo').should('contain', 'Analytics').click();
