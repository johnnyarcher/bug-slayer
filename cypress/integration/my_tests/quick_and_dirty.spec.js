// <reference types="cypress" />
describe("Quick n Dirty Smoke Tester", () => {
  it("Runs Automated Smoke Tests for IMC", () => { 
  cy.visit('http://localhost:3000');
  cy.get('#user_email').type(Cypress.env('G5_AUTH_USERNAME'));
  cy.get('#user_password').type(Cypress.env('G5_AUTH_PASSWORD'));
    cy.server();
  cy.get('.btn-primary').click();
  
  //step 2 - confirm home page layout 
  cy.get('h1').should('contain', 'Welcome to Smarter Marketing');
  cy.get('.support-link').should('contain', 'Contact Support');
  cy.contains('Analytics & Reporting');
  cy.contains('Rep & Social');
  cy.contains('Digital Advertising');
  cy.contains('Websites (CMS)');
  cy.contains('Blog & Events');
  
  //step 3 - validate A&R
  cy.get('.home-link').should('contain', 'Analytics & Reporting')
  cy.get('.home-link').contains('Analytics & Reporting').click();
  cy.get('.match-select-height').should('contain', 'Create/Edit Groups').click();
  cy.get('.ml-8').contains('Create New Group').click();
  cy.get('.v-btn').contains('Cancel').click();  
  cy.get('.logo').should('contain', 'Analytics').click();

  //step 4 - validate R&S
  cy.get('.home-link').contains('Rep & Social').click();
    cy.wait(5000);
  //add iframe validation stuff here
  cy.get('.logo').should('contain', 'Rep & Social').click();

  //step 5 - validate DA
  cy.get('.home-link').contains('Digital Advertising').click();
  cy.get('.heading').contains('Select Client');
  cy.get('.logo').should('contain', 'Digital Advertising').click();

  //step 6 - validate CMS Link
  cy.get('.home-link').contains('Websites (CMS)').click();
  cy.location().should((loc) => {
    expect(loc.href).to.eq('https://cms.g5marketingcloud.com')
  });

  //step 7 - validate NAE Link
  cy.get('.home-link').contains('Blog & Events').click();
  cy.location().should((loc) => {
    expect(loc.href).to.eq('https://g5-news-and-events-service.herokuapp.com')
  });