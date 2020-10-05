// <reference types="cypress" />
describe("Bug-Slayer | CMS", () => {
  it("Visual Regression | Publish Before & After", () => { 
  cy.visit('http://g5-clw-1kgmo3bu4u-robot-vs-slo.g5static.com/');
  cy.screenshot('cypress/screenshots/cms/publish')

  cy.get('.sticky-header').invoke('css', 'position', 'absolute')
	cy.screenshot()
	cy.get('.sticky-header').invoke('css', 'position', null)