describe('template spec', () => {
    it('passes', () => {
        cy.visit('http://www.saucedemo.com')
        cy.get('[data-test="username"]').type(Cypress.env('username'))
        cy.get('[data-test="password"]').type(Cypress.env('password'))
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="product-sort-container"]').select(2)
        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
        .invoke('text').then(text => {
            expect(text).eq('$7.99')
            cy.get(':nth-child(2) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
            .invoke('text').then(text2 => {
                let textInt = parseFloat(text.replace('$',''))
                let textInt2 =parseFloat(text2.replace('$',''))
                expect(textInt).lte(textInt2)
            }

            )
            
        }

        )
    })
})