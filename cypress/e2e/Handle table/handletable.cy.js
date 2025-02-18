/// <reference types = "Cypress" />

describe('Handle table', function () {
    this.beforeEach(() => {
        cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
        cy.viewport(1280, 720)
        // cy.get('[id="input-username"]').type('demo')
        // cy.get('[id="input-password"]').type('demo')
        cy.get('button[type="submit"]').click()
        cy.get('li[id="menu-customer"]').click()
        cy.get('li[id="menu-customer"]>ul>li').eq(0).click()
    })
    it('Handle table', () => {
        //cy.wait(10000)
        cy.get('table > tbody > tr').each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col, index, $cols) => {
                    cy.log($col.text())
                })
            })
        })
        let totalPage
        cy.get('.row > .text-end').then(text => {
            cy.log(typeof text)
            let mytext = text.text()
            totalPage = mytext.substring(mytext.indexOf("(") + 1, mytext.indexOf("Pages") - 1)
            cy.log(totalPage)
        })
        cy.log(totalPage)
    })
})