/// <reference types = "Cypress" />
import DemoBlaze from "./demoBlazePage"
import { HomepageAPI } from "./Homepage"
describe('test', function () {
    let apiProduct
    beforeEach(()=>{
        cy.visit('https://www.demoblaze.com/')
        //arrow function nếu chỉ có 1 dòng thì remove cặp ngoặc nhọn {} cũng đc
        HomepageAPI.getHomepageProduct().then(entries => apiProduct = entries)
    })
    it('test', () => {
        const proData = [{ "itemName": "Samsung galaxy s6", "itemPrice": "$360" }, { "itemName": "Nokia lumia 1520", "itemPrice": "$820" }, { "itemName": "Nexus 6", "itemPrice": "$650" }, { "itemName": "Samsung galaxy s7", "itemPrice": "$800" }, { "itemName": "Iphone 6 32gb", "itemPrice": "$790" }, { "itemName": "Sony xperia z5", "itemPrice": "$320" }, { "itemName": "HTC One M9", "itemPrice": "$700" }, { "itemName": "Sony vaio i5", "itemPrice": "$790" }, { "itemName": "Sony vaio i7\n", "itemPrice": "$790" }]
        cy.visit('https://www.demoblaze.com/')
        const demoBlaze = new DemoBlaze()
        demoBlaze.getallCardData().then(data => {
            cy.wrap('').then(() =>{
                cy.log(JSON.stringify(data)) 
            })
            // cy.log(JSON.stringify(data))
            // expect(data).deep.eq(proData)
        })
    })
    it('test', () => {
            let apiProductdata = apiProduct.response.body.Items
            cy.log('data 0 '+ JSON.stringify(apiProductdata))
            //.map(): chuyển dữ liệu thành 1 mảng mới
            apiProductdata = apiProductdata.map(item => {
                return {
                    itemName: item.title,
                    itemPrice: `$${item.price}`
                }
            })
            cy.log('data2 '+ JSON.stringify(apiProductdata))
            new DemoBlaze().getallCardData().then(data => {
                    cy.log('data1 '+ JSON.stringify(data))
                    expect(data).to.be.deep.eq(apiProductdata)
            })
        
    })
})