// <reference types="cypress" />
describe("Bug-Slayer | Analytics | Classic Reports", () => {
  it("Validates Classic Reports", () => { 
  cy.visit(Cypress.env('FIRE'));
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.get('#user_email').type(Cypress.env('GLOBAL_USER'));
  cy.get('#user_password').type(Cypress.env('GLOBAL_PASSWORD'));
  cy.get('.btn-primary').click();

  //do next - add validation each form loaded successfully
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

  cy.get('.logo').should('contain', 'Analytics').click()