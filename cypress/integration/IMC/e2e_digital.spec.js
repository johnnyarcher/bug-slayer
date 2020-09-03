// <reference types="cypress" />

describe("Bug-Slayer | DA | E2E Smoker", () => {
  it("Runs Automated E2E Smoke Tests for DA on IMC", () => { 
  cy.visit(Cypress.env('FIRE'));

  cy.get('#user_email').type(Cypress.env('GLOBAL_USER'));
  cy.get('#user_password').type(Cypress.env('GLOBAL_PASSWORD'));
  cy.get('.btn-primary').click();

  cy.get('h1').should('contain', 'Welcome to Smarter Marketing');
  cy.contains('Digital Advertising');
  cy.get('.home-link').contains('Digital Advertising').click();
  cy.get('.heading').contains('Select Client');
  cy.get('.logo').should('contain', 'Digital Advertising').click();