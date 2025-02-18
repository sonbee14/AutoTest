export default class DemoBlaze {
    //_là đánh dấu phương thức là protected theo quy ước, không phải bảo vệ hoàn toàn, chỉ là một thông báo ngầm cho các lập trình viên khác không nên sử dụng trực tiếp phương thức này
    _getCardDetails() {
        let cardData = {}
        cy.get('h4').invoke('text').then($title => cardData.itemName = $title)
        cy.get('h5').invoke('text').then($price => cardData.itemPrice = $price)
        return cy.wrap(cardData)
        //return new Cypress.Promise(resolve => resolve(cardData))
    }
    getallCardData() {
        let allCardData = []
        cy.get('.card').each($card => {
            cy.wrap($card).within(() => {
                this._getCardDetails().then(cardData => allCardData.push(cardData))
            })
        })
        return new Cypress.Promise(resolve =>{
            cy.wrap('').then(()=>{
                resolve(allCardData)
            })
        })
    }


}