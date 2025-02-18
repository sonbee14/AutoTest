describe('template spec', () => {
    it('pass', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.viewport(1280, 720)
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(3) > .icon-left').click()
        cy.get('[href="https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=5"]').click()
        for (let i = 0; i < 9; i++) {
            if (i === 0) {
                for (let j = 0; j < 2; j++) {
                    if (j === 0) {
                        cy.get(`:nth-child(${j + 1}) > .article-thumb > .caption > .metadata > .viewed`).invoke('text').then(view1 => {
                            cy.go('back')
                            cy.get('.swiper-slide-active > .article-thumb > .caption > .title > .text-ellipsis-2').eq(0).click()
                            cy.reload()
                            cy.get('.extra-viewed').invoke('text').then(view2 => {
                                expect(Number(view2)).eq(Number(view1) + 1)
                                cy.go('back')
                                cy.get('[href="https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=5"]').click()
                            })
                        })
                    } else if (j === 1) {
                        cy.get(`:nth-child(${j + 1}) > .article-thumb > .caption > .metadata > .viewed`).invoke('text').then(view1 => {
                            cy.go('back')
                            cy.get('.swiper-slide-next > .article-thumb > .caption > .title > .text-ellipsis-2').eq(0).click()
                            cy.reload()
                            cy.get('.extra-viewed').invoke('text').then(view2 => {
                                expect(Number(view2)).eq(Number(view1) + 1)
                                cy.go('back')
                                cy.get('[href="https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=5"]').click()
                            })
                        })
                    }

                }
            } else {
                cy.get(`:nth-child(${i + 2}) > .article-thumb > .caption > .metadata > .viewed`).invoke('text').then(view3 => {
                    cy.go('back')
                    Cypress._.times(i, () => {
                        cy.get('#mz-article-listing-76210960 > .mz-tab-listing-header > .d-flex > .mz-tab-listing-navigation > .mz-swiper-nav-next > .icon > svg > use').click()
                    })
                    cy.get('.swiper-slide-next > .article-thumb > .caption > .title > .text-ellipsis-2').eq(0).click()
                    cy.reload()
                    cy.get('.extra-viewed').invoke('text').then(view2 => {
                        expect(Number(view2)).eq(Number(view3) + 1)
                        cy.go('back')
                        cy.get('[href="https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=5"]').click()
                    })
                })
            }
        }
    })
})