// <reference types="cypress" />
describe("Bug-Slayer | CMS", () => {
  it("Visual Regression | Publish Before & After", () => { 
  cy.visit('https://cms.g5marketingcloud.com');
  cy.clearLocalStorage();
  cy.get('#user_email').type(Cypress.env('GLOBAL_USER'));
  cy.get('#user_password').type(Cypress.env('GLOBAL_PASSWORD'));
  cy.get('.btn-primary').click();