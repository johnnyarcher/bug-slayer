/// <reference types="cypress" />

describe("Digital Advertising Automated Testing", () => {
  it("Bug-Slayer | IMC:DA", () => { 
  cy.visit('http://localhost:3000');

  cy.get('#user_email').type(Cypress.env('G5_AUTH_USERNAME'));
  cy.get('#user_password').type(Cypress.env('G5_AUTH_PASSWORD'));
    cy.server();
  cy.get('.btn-primary').click();

  cy.get('h1').should('contain', 'Welcome to Smarter Marketing');
  cy.contains('Digital Advertising');
  cy.get('.home-link').contains('Digital Advertising').click();
  cy.get('.heading').contains('Select Client');
  cy.get('.logo').should('contain', 'Digital Advertising').click();