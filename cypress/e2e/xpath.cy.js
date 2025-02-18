/// <reference types = "Cypress" />

describe('template spec', function() {
    it('bai10', function() {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.viewport(1280, 720)
        // cy.xpath("//span[normalize-space()='Mega Menu']").click()
        // cy.get('input').each()
        //div[@data-view_id="grid" ]
        cy.xpath("//span[normalize-space()='Mega Menu']").trigger('mouseover')
        cy.get('#entry281_216478 > .menu-wraper > .menu-items > .nav > :nth-child(2) > .nav-link').click()
        //cy.xpath('//div[@data-view_id="grid"]/div').should('have.length', 10)
        // cy.get('div[data-view_id="grid"] > div').should('have.length', 10)
        // .find('div[class="caption"]')
        // cy.title().then(title =>{
        //     cy.log(title)
        // })
        cy.get('.row > .text-right').then(text =>{
            cy.log(text)
        })
        



    })})