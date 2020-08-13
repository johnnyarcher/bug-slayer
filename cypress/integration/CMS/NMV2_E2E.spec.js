/// <reference types="cypress" />
describe("NMV2 Viewport", () => {
  it("Runs a Mean Automated Regression for NMV2", () => { 
  cy.visit('www.storquest.comm');
  })

  it('cy.viewport() - set the viewport size and dimension', () => {

    // lets see what our app looks like on a super large screen
    cy.viewport(2999, 2999)

    cy.viewport('macbook-15')
    cy.wait(200)
    cy.viewport('macbook-13')
    cy.wait(200)
    cy.viewport('macbook-11')
    cy.wait(200)
    cy.viewport('ipad-2')
    cy.wait(200)
    cy.viewport('ipad-2', 'landscape')
    cy.wait(200)
    cy.viewport('ipad-mini')
    cy.wait(200)
    cy.viewport('ipad-mini', 'landscape')
    cy.wait(200)
    cy.viewport('iphone-x')
    cy.wait(200)
    cy.viewport('iphone-x', 'landscape')
    cy.wait(200)
	cy.viewport('iphone-xr')
    cy.wait(200)
    cy.viewport('iphone-xr', 'landscape')
    cy.wait(200)
    cy.viewport('iphone-6+')
    cy.wait(200)
    cy.viewport('iphone-6+','landscape')
    cy.wait(200)
    cy.viewport('iphone-6')
    cy.wait(200)
    cy.viewport('iphone-6', 'landscape')
    cy.wait(200)
  })
})
  