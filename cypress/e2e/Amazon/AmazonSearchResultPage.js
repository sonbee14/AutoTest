const searchResultList_elm = '[cel_widget_id^="MAIN-SEARCH_RESULTS"]'
class AmazonSearchResultPage {
    get searchResultList(){
        return cy.get(searchResultList_elm)
    }
}
export default AmazonSearchResultPage