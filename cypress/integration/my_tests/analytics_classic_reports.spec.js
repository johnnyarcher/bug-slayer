// <reference types="cypress" />
describe("Smoke Tester", () => {
  it("Runs Automated Smoke Tests for IMC", () => { 
  cy.visit('http://localhost:3000');j
  cy.get('#user_email').type('user_email');
  cy.get('#user_password').type('user_password');
    cy.server();
  cy.get('.btn-primary').click();

  cy.get('h1').should('contain', 'Welcome to Smarter Marketing');
  cy.get('.home-link').should('contain', 'Analytics & Reporting')
  cy.get('.home-link').contains('Analytics & Reporting').click(); 

  cy.get('.report-nav-item').should('contain', 'Classic Reports')
  cy.get('.Classic Reports').contains('Classic Reports').click();

  cy.get('.tabs-component-tab').should('contain', 'Key Metrics')
  cy.get('.report-nav-item').contains('Key Metrics').click();

  cy.get('.report-nav-item').should('contain', 'Overview Report')
  cy.get('.report-nav-item').contains('Overview Report').click();

  cy.get('.report-nav-item').should('contain', 'Website Users')
  cy.get('.report-nav-item').contains('Website Users').click();

  cy.get('.report-nav-item').should('contain', 'Users by Medium')
  cy.get('.report-nav-item').contains('Users by Medium').click();
  
  cy.get('.report-nav-item').should('contain', 'Users by Devise Type')
  cy.get('.report-nav-item').contains('Users by Devise Type').click();

  cy.get('.report-nav-item').should('contain', 'Call Marketing Channel')
  cy.get('.report-nav-item').contains('Call Marketing Channel').click();

  cy.get('.report-nav-item').should('contain', 'Top Referrel Sources')
  cy.get('.report-nav-item').contains('Top Referrel Sources').click();

  cy.get('.report-nav-item').should('contain', 'Interaction Breakdown')
  cy.get('.report-nav-item').contains('Interaction Breakdown').click();

  cy.get('.report-nav-item').should('contain', 'Lead Breakdown')
  cy.get('.report-nav-item').contains('Lead Breakdown').click();

  cy.get('.report-nav-item').should('contain', 'Lead/Lease Detail')
  cy.get('.report-nav-item').contains('Lead/Lease Detail').click();

  cy.get('.report-nav-item').should('contain', 'Glossery')
  cy.get('.report-nav-item').contains('Glossery').click();