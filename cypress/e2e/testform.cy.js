/// <reference types = "Cypress" />

describe('template spec', function () {
    it('check box', function () {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.viewport(1280, 720)
        cy.get("#male").check().should('be.checked')
        //cy.get('#sunday').check()
        //cy.get('#sunday').uncheck().should('not.be.checked')
        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get('#country').select('canada').should('have.value', 'canada')
    })
    it('dropdown', function () {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.viewport(1280, 720)
        cy.get('#select2-billing_country-container').click()
        cy.get('input[class="select2-search__field"]').type('Italy').type('{enter}')
    })
    it('suggestion list', function () {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Viet')
        cy.get('.suggestion-title').contains('Vietnamese people').then(text => {
            cy.log(text)
        })
    })
    it.only('suggestion dynamic', function () {
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('vietnam')
        cy.wait(2000)
        cy.get('div.wM6W7d > span').each(($el, index, $list) => {
            cy.log($el.text())
            if ($el.text() == 'vietnamplus') {
                //cy.get($el).click()
                cy.wrap($el).click()
            }
        })
        cy.wait(2000)
        cy.get('#APjFqb').should('have.value', 'vietnamplus')

    })
    it('suggestion dynamic', function () {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'windows/new')
        cy.wait(4000)
        cy.go('back')
    })
    it('suggestion dynamic', function () {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then(e => {
            let url = e.prop('href')
            cy.visit(url)
        })
        cy.url().should('include', 'windows/new')
        cy.wait(4000)
        cy.go('back')

    })
    it('suggestion dynamic', function () {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then(e => {
            let url = e.prop('href')
            cy.visit(url)
        })
        cy.url().should('include', 'windows/new')
        cy.wait(4000)
        cy.go('back')
    })
})
  
  