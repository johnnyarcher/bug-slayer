/// <reference types="cypress" />
//Need to create an auth context for each permission level
describe('Logging In To IMC', function () {

  const username = ''
  const password = ''

  context('Auth', function () {
    beforeEach(function () {
      cy.visit('/login')
    })

    it('successfully logs in', () => {
      cy.get('input[name=username]').type(username)
      cy.get('input[name=password]').type(password)
      cy.get('form').submit()

      // we should be in
      cy.url().should('include', '/dashboard')
      cy.get('h1').should('contain', 'User 1')
    })

      // and our cookie should be set to 'cypress-session-cookie'
      cy.getCookie('cypress-session-cookie').should('exist')
    })
  })
