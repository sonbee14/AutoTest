class AmazonHomepage {
    get searchTxtBx(){
        return cy.get('#twotabsearchtextbox')
    }
    get searchBTN(){
        return cy.get('#nav-search-submit-button')
    }
}
export default AmazonHomepage