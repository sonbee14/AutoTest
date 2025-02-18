describe('Buoi 8', () => {
    it('Fix Homework Session 3_No 10', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.viewport(1280, 720)
        cy.get('.mega-menu > .both').trigger('mouseover') //Hover vào Mega Market
        cy.get('#entry281_216481 > .menu-wraper > .menu-items > .nav > :nth-child(1) > .nav-link').click()
        cy.viewport(1080, 720)

        for (let i = 0; i < 5; i++) {
            let option
            const totalProduct = 75
            cy.get('#input-limit-212402').select(i)
            cy.get('#input-limit-212402').find('option').then(options => {
                cy.wrap(options[i]).invoke('text').then(text => {
                    option = Number(text)
                    // Tính phần dư
                    let remainder = totalProduct % option
                    // Trong TH phần dư = 0 => số page = totalProduct/option
                    // TRong TH phần dư > 0 => số page = (totalProduct - remainder)/option + 1
                    let pageNumber = remainder === 0 ? totalProduct / option : (totalProduct - remainder) / option + 1
                    cy.log(pageNumber)
                    for (let j = 0; j < pageNumber - 1; j++) {
                        // Ở page 1, check button back không tồn tại
                        if (j === 0) {
                            cy.get(`:nth-child(${pageNumber + 1}) > .page-link`).click()
                            cy.get(':nth-child(2) > .page-link').should('exist')
                        }
                        else {
                            cy.get(`:nth-child(${pageNumber + 3}) > .page-link`).click()
                        }
                        if (j === pageNumber - 2) {
                            cy.get(`:nth-child(${pageNumber + 3}) > .page-link`).should('not.exist')
                        }
                    }
                })
            })
        }
    })

//     it('New Homework', () => {
//         cy.visit('https://ecommerce-playground.lambdatest.io/')
//         Cypress.on('uncaught:exception', (err, runnable) => {
//             return false;
//         });
//         cy.get('.mega-menu > .both').trigger('mouseover') //Hover vào Mega Market
//         cy.get('#entry281_216481 > .menu-wraper > .menu-items > .nav > :nth-child(1) > .nav-link').click()
//         cy.viewport(1080, 720)

//         const addToCart = 'Add to Cart'
//         let cartNumber = 0
//         let totalClick = 0
//         const productInPage = 15
//         const totalProduct = 75

//         for (let i = 0; i < totalProduct; i++) {
//             if (totalClick !== 0 && (totalClick % productInPage) === 0) {
//                 cy.xpath("//a[normalize-space()='>']").click()
//                 cy.wait(1000)
//             }
//             cy.get('.carousel-inner > .active > .lazy-load').eq(i % productInPage).click() // Khi sang page 2 sẽ quay lại từ eq(0)
//             totalClick++
//             // Check button Add to Cart tồn tại
//             cy.get('#entry_216842 > .text').invoke('text').then(text => {
//                 if (text === addToCart) {
//                     cy.get('#entry_216842 > .text').click()
//                     cy.wait(1000)
//                     //Check có text Size required!
//                     cy.get('body').then(body => {
//                         const sizeRequire = body.text().includes('Size required!')
//                         if (!sizeRequire) {
//                             cartNumber++
//                         }
//                         cy.go('back')
//                         cy.reload()
//                         // Check số trên giỏ hàng
//                         cy.get('#entry_217825 > .cart > .cart-icon > .badge')
//                             .invoke('text').then(text => {
//                                 expect(Number(text)).eq(cartNumber)
//                             })
//                     })
//                 }
//                 else {
//                     cy.go('back')
//                 }
//             })
//         }
//     })
})