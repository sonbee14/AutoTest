describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.get('.mega-menu > .both > .info > .title').trigger('mouseover')
        cy.contains('Smart Watch').click()
        cy.viewport(1200, 800)
        let numbercart = 0
        let addToCart
        for (let i = 1; i < 16; i++) {
            cy.log(i)
            cy.get(`:nth-child(${i}) > .product-thumb > .caption > .title > .text-ellipsis-2`).click()
            cy.get('#entry_216842 > .text').invoke('text').then(text => {
                cy.log(text)
                addToCart = text
                if (addToCart === 'Add to Cart') {
                    cy.get('#entry_216842 > .text').click()
                    //{ force: true }
                    cy.wait(1000)
                    cy.get('body').then(body1 => {
                        cy.log(body1.text().includes('Size required!'))
                        if (!body1.text().includes('Size required!')) {
                            numbercart++
                            cy.go('back')
                            cy.reload()
                            cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(text => {
                                expect(Number(text)).eq(numbercart)
                            })
                        }
                        else {
                            cy.go('back')
                            cy.reload()
                            cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(text => {
                                expect(Number(text)).eq(numbercart)
                            })
                        }
                    })
                } else {
                    cy.go('back')
                    cy.log('hjshuvfhukeshukwhfhiewfhsuuiqwfhuuieuwfhiewfhiwefh')
                }
            })

        }







































    })
})