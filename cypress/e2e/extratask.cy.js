describe('template spec', () => {
    it('bai10', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.viewport(1280, 720)
        const addtoCart = 'Add to Cart'
        cy.get('.mega-menu > .both').trigger('mouseover')
        cy.get('#entry281_216478 > .menu-wraper > .menu-items > .nav > :nth-child(1) > .nav-link').click()
        cy.get('.row > .text-right').invoke('text').then((text) => {
            const matches = text.match(/of (\d+)/);
            const totalNumber = matches ? matches[1] : null;
            for (let i = 0; i < 5; i++) {
                cy.get('#input-limit-212433').select(i)
                cy.get('#input-limit-212433').find('option').then(options => {
                    cy.wrap(options[i]).invoke('text').then(text => {
                        let option = Number(text)
                        let remider = totalNumber % option
                        let sotrang
                        remider === 0 ? sotrang = Number(totalNumber) / option : sotrang = (Number(totalNumber) - remider) / option + 1
                        for (let j = 1; j <= sotrang; j++) {
                            if(j===1){
                                for (let a = 1; a <= option; a++) {
                                    cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(badge => {
                                        let badge1 = parseInt(badge)
                                        cy.get(`:nth-child(${a}) > .product-thumb > .caption > .title > .text-ellipsis-2`).click()
                                        cy.get('#entry_216842 > .text').invoke('text').then(textt => {
                                            if (textt === addtoCart) {
                                                cy.get('#entry_216842 > .text').click()
                                                cy.wait(1000)
                                                cy.get('body').then(($body) => {
                                                    if (!$body.text().includes('Size Required!')) {
                                                        badge1++
                                                        cy.go('back')
                                                    } else {
                                                        cy.go('back')
                                                        cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(badge2 => {
                                                            expect(Number(badge2)).eq(badge1)
                                                        })
                                                    }
                                                })
                                            } else {
                                                cy.go('back')
                                                cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(badge2 => {
                                                    expect(Number(badge2)).eq(badge1)
                                                })
                                            }

                                        }
                                        )
                                    })
                                }
                                cy.get(`:nth-child(${sotrang + j}) > .page-link`).click()
                            }else if (j === sotrang) {
                                for (let b = 1; b <= (totalNumber - (option * (sotrang - 1))); b++) {
                                    cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(badge => {
                                        let badge1 = parseInt(badge)
                                        cy.get(`:nth-child(${b}) > .product-thumb > .caption > .title > .text-ellipsis-2`).click()
                                        cy.get('#entry_216842 > .text').invoke('text').then(textt => {
                                            cy.log(textt)
                                            if (textt === addtoCart) {
                                                cy.get('#entry_216842 > .text').click()
                                                cy.wait(1000)
                                                cy.get('body').then(($body) => {
                                                    if (!$body.text().includes('Size Required!')) {
                                                        badge1++
                                                        cy.go('back')
                                                    } else {
                                                        cy.go('back')
                                                        cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(badge2 => {
                                                            expect(Number(badge2)).eq(badge1)
                                                        })
                                                    }
                                                })
                                            } else {
                                                cy.go('back')
                                                cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(badge2 => {
                                                    expect(Number(badge2)).eq(badge1)
                                                })
                                            }

                                        }
                                        )
                                    })
                                }
                                cy.get(`:nth-child(${sotrang + 3}) > .page-link`).should('not.exist')
                            } else if (j < sotrang) {
                                for (let a = 1; a <= option; a++) {
                                    cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(badge => {
                                        let badge1 = parseInt(badge)
                                        cy.get(`:nth-child(${a}) > .product-thumb > .caption > .title > .text-ellipsis-2`).click()
                                        cy.get('#entry_216842 > .text').invoke('text').then(textt => {
                                            if (textt === addtoCart) {
                                                cy.get('#entry_216842 > .text').click()
                                                cy.wait(1000)
                                                cy.get('body').then(($body) => {
                                                    if (!$body.text().includes('Size Required!')) {
                                                        badge1++
                                                        cy.go('back')
                                                    } else {
                                                        cy.go('back')
                                                        cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(badge2 => {
                                                            expect(Number(badge2)).eq(badge1)
                                                        })
                                                    }
                                                })
                                            } else {
                                                cy.go('back')
                                                cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(badge2 => {
                                                    expect(Number(badge2)).eq(badge1)
                                                })
                                            }

                                        }
                                        )
                                    })
                                }
                                cy.get(`:nth-child(${sotrang + 3}) > .page-link`).click();
                            }
                        }
                    })
                })
            }
        })
    })
})
