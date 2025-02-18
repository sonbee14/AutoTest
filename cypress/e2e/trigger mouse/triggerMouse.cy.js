/// <reference types = "Cypress" />

describe('Trigger mouse', function () {
    it('Hover', () => {
        cy.visit('https://demo.opencart.com/en-gb?route=account/login')
        //cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover')
        cy.get('li[class="nav-item dropdown"]').eq(0).trigger('mouseover').click()
    })
})