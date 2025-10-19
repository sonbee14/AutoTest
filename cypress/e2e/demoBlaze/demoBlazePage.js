export default class DemoBlaze {
  headerMenuItemsList = () => cy.get(".nav-item a");

  getMenuDetails() {
    let menuDetails = [];
    this.headerMenuItemsList().each(($item) => {
      const style = $item.attr("style");
      if (style == undefined || style.includes("display:none")) {
        menuDetails.push({
          text: $item.text(),
          href: $item.attr("href"),
        });
      }
    });
    cy.log("sss" + JSON.stringify(menuDetails));
    return new Cypress.Promise((resolve) => {
      cy.then(() => resolve(menuDetails));
    });
  }

  //_là đánh dấu phương thức là protected theo quy ước, không phải bảo vệ hoàn toàn, chỉ là một thông báo ngầm cho các lập trình viên khác không nên sử dụng trực tiếp phương thức này
  _getCardDetails() {
    let cardData = {};
    cy.get("h4")
      .invoke("text")
      .then((title) => (cardData.itemName = title));
    cy.get("h5")
      .invoke("text")
      .then((price) => (cardData.itemPrice = price));
    //cy.get chạy theo thứ tự queue cypress nên sẽ ko bị bất đồng bộ và data sẽ đc gán vào biến
    //return cy.wrap(cardData);
    return new Cypress.Promise((resolve) => resolve(cardData));
  }
  getallCardData() {
    let allCardData = [];
    cy.get(".card").each(($card) => {
      cy.wrap($card).within(() => {
        this._getCardDetails().then((cardDataa) => {
          cy.wrap("").then(() => {
            cy.log("wrapppp" + JSON.stringify(cardDataa));
            cy.log("clmm" + JSON.stringify(allCardData));
            console.log("wrapppp" + JSON.stringify(cardDataa));
            console.log("clmm" + JSON.stringify(allCardData));
          });

          allCardData.push(cardDataa);
        });
      });
    });
    return new Cypress.Promise((resolve) => {
      cy.wrap("").then(() => {
        resolve(allCardData);
      });
    });
  }
}

