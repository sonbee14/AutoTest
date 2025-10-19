/// <reference types = "Cypress" />
import amzHomapage from "./amazonHomepage";
import amzSearchResultPage from "./AmazonSearchResultPage";
describe("Test AmazonHomepage", function () {
  afterEach(() => {
    cy.visit("about:blank"); // chuyển sang trang rỗngg
  });
  it.only("Case 1", () => {
    cy.visit("https://www.amazon.com/");
    //let amzHomapage = new AmazonHomepage()
    amzHomapage.searchTxtBx.type("Dining table");
    amzHomapage.searchBTN.click();
    //let amzSearchResultPage = new AmazonSearchResultPage()
    amzSearchResultPage.searchResultList.should("not.have.length", 0);
  });
});
