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


  cy.get('.match-select-height').should('contain', 'Create/Edit Groups').click();
  cy.get('.ml-8').contains('Create New Group').click();
  cy.get('.v-text-area').contains('Group Name').type('TEST |bug-slayer|' {force: true} );
    


  cy.get('.input-85').contains()
  cy.get('.v-btn').contains('Cancel').click();  
  cy.get('.logo').should('contain', 'Analytics').click();
