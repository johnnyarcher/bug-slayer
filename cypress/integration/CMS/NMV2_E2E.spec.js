/// <reference types="cypress" />
describe("NMV2 Viewport", () => {
  it("Runs Some Mean Automated Tests for NMV2", () => { 
  cy.visit('');
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
//screenshot logic
context('Cypress.Screenshot', function () {
    it('cy.screenshot() - take a screenshot', () => {
      // https://on.cypress.io/screenshot
      cy.screenshot('my-image')
    })

    it('Cypress.Screenshot.defaults() - change default config of screenshots', function () {
      Cypress.Screenshot.defaults({
        blackout: ['.foo'],
        capture: 'viewport',
        clip: { x: 0, y: 0, width: 200, height: 200 },
        scale: false,
        disableTimersAndAnimations: true,
        screenshotOnRunFailure: true,
        onBeforeScreenshot () { },
        onAfterScreenshot () { },
      })
    })
  })
  