/// <reference types = "Cypress" />
import AmazonHomepage from "./amazonHomepage"
import AmazonSearchResultPage from "./AmazonSearchResultPage"
describe('Test AmazonHomepage', function () {
    it('Case 1', () => {
        cy.visit('https://www.amazon.com/')
        let amzHomapage = new AmazonHomepage()
        amzHomapage.searchTxtBx.type('Dining table')
        amzHomapage.searchBTN.click()
        let amzSearchResultPage = new AmazonSearchResultPage()
        amzSearchResultPage.searchResultList.should('not.have.length', 0)
    })
})