// <reference types="cypress" />
describe("Bug-Slayer | CMS", () => {
  it("Visual Regression | Publish Before & After", () => { 
  cy.visit(Cypress.env('STAGING_CLW'));
  })