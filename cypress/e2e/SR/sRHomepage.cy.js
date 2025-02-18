/// <reference types = "Cypress" />
import { sRHomepage } from "./sRHomepage"
describe('test', function () {
    it('test', () => {
        cy.visit('https://www.simplyrecipes.com/')
        const sRHomepagee = new sRHomepage()
        sRHomepagee.heroComponent().cardTitle.then((text) => {
            cy.log(text)
            expect(text).to.be.eq('These 4-Ingredient Cookies Take 30 Minutes to Make')
        })

        cy.wait(500000)
        sRHomepagee.heroComponent().cardTitle.each(($title, index) => {
            cy.log(index)
            cy.log($title.text().trim())
            cy.wrap($title.text().trim())
            .should('eq','These 4-Ingredient Cookies Take 30 Minutes to Make')
            //expect($title.text().trim()).to.be.eq('The (Totally Easy) Holiday Baking Issue')
        })
    })
})