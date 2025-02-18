describe('template spec', () => {
    it('bai10', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.viewport(1280, 720)
        cy.get('.mega-menu > .both').trigger('mouseover')
        cy.get('#entry281_216478 > .menu-wraper > .menu-items > .nav > :nth-child(1) > .nav-link').click()
        cy.get('.row > .text-right').invoke('text').then((text) => {
            cy.log('text:', text)
            const matches = text.match(/of (\d+)/);
            const totalNumber = matches ? matches[1] : null;
            for (let i = 0; i < 5; i++) {
                cy.get('#input-limit-212433').select(i)
                cy.get('#input-limit-212433').find('option').then(options => {
                    cy.log('text:', options)
                    cy.wrap(options[i]).invoke('text').then(text => {
                        let option = Number(text)
                        let remider = totalNumber % option
                        let sotrang
                        remider === 0 ? sotrang = Number(totalNumber) / option : sotrang = (Number(totalNumber) - remider) / option + 1
                        for (let j = 1; j <= sotrang; j++) {
                            if (sotrang > 1 && j === 1) {
                                cy.get(`:nth-child(${sotrang + j}) > .page-link`).click();
                                cy.get(':nth-child(2) > .page-link').should('be.visible')
                            } else if (sotrang > 1 && j === sotrang) {
                                cy.get(`:nth-child(${sotrang + 3}) > .page-link`).should('not.exist')
                            } else if (sotrang > 1 && j < sotrang) {
                                cy.get(`:nth-child(${sotrang + 3}) > .page-link`).click();
                            }
                        }
                    })
                })
            }
        })
    })
})
