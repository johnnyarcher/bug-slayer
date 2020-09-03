// <reference types="cypress" />
describe("Bug-Slayer | Analytics | New Reports", () => {
  it("Validates New Reports", () => { 
  cy.visit(Cypress.env('FIRE'));
  cy.get('#user_email').type(Cypress.env('GLOBAL_USER'));
  cy.get('#user_password').type(Cypress.env('GLOBAL_PASSWORD'));
  cy.get('.btn-primary').click();

  cy.get('h1').should('contain', 'Welcome to Smarter Marketing');
  cy.get('.home-link').should('contain', 'Analytics & Reporting')
  cy.get('.home-link').contains('Analytics & Reporting').click();
  cy.get('.report-nav-item').should('contain', 'Pageview Summary')
  cy.get('.report-nav-item').contains('Pageview Summary').click();


  cy.get('.report-nav-item').should('contain', 'Sessions Overview')
  cy.get('.report-nav-item').contains('Sessions Overview').click();

  cy.get('.report-nav-item').should('contain', 'Monthly Lookback')
  cy.get('.report-nav-item').contains('Monthly Lookback').click();

  cy.get('.report-nav-item').should('contain', 'Calls Report')
  cy.get('.report-nav-item').contains('Calls Report').click();

  cy.get('.report-nav-item').should('contain', 'Call Scoring: Calls')
  cy.get('.report-nav-item').contains('Call Scoring: Calls').click();

  cy.get('.report-nav-item').should('contain', 'Call Scoring: Trends')
  cy.get('.report-nav-item').contains('Call Scoring: Trends').click();

  cy.get('.report-nav-item').should('contain', 'Forms Report')
  cy.get('.report-nav-item').contains('Forms Report').click();

  cy.get('.report-nav-item').should('contain', 'Uber Leasing Renter Flow')
  cy.get('.report-nav-item').contains('Uber Leasing Renter Flow').click();

  cy.get('.report-nav-item').should('contain', 'Advertising Performance Overview')
  cy.get('.report-nav-item').contains('Advertising Performance Overview').click();

  cy.get('.report-nav-item').should('contain', 'Advertising Performance by Location')
  cy.get('.report-nav-item').contains('Advertising Performance by Location').click();

  cy.get('.report-nav-item').should('contain', 'Search Advertising Comparison')
  cy.get('.report-nav-item').contains('Search Advertising Comparison').click();

  cy.get('.report-nav-item').should('contain', 'Display and Remarketing')
  cy.get('.report-nav-item').contains('Display and Remarketing').click();

  cy.get('.report-nav-item').should('contain', 'Advertising Channel Comparison')
  cy.get('.report-nav-item').contains('Advertising Channel Comparison').click();

  cy.get('.report-nav-item').should('contain', 'Advertising Performance')
  cy.get('.report-nav-item').contains('Advertising Performance').click();

  cy.get('.report-nav-item').should('contain', 'Campaign Performance')
  cy.get('.report-nav-item').contains('Campaign Performance').click();

  cy.get('.report-nav-item').should('contain', 'Keyword Performance')
  cy.get('.report-nav-item').contains('Keyword Performance').click();

  cy.get('.report-nav-item').should('contain', 'Social Performance')
  cy.get('.report-nav-item').contains('Social Performance').click();

  cy.get('.logo').should('contain', 'Analytics').click()
  