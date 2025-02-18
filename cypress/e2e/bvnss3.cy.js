describe('template spec', () => {
    it('passes', () => {
         cy.visit('https://www.saucedemo.com/')
        cy.viewport(1280, 720);

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click()
        // //1

        // for (let i = 0; i <= 3; i++) {
        //     if (i == 0) {
        //         cy.get('[data-test="product-sort-container"]').select(i);
        //         cy.get('[data-test="active-option"]').should('have.text', 'Name (A to Z)');
        //     } else if (i == 1) {
        //         cy.get('[data-test="product-sort-container"]').select(i);
        //         cy.get('[data-test="active-option"]').should('have.text', 'Name (Z to A)');
        //     } else if (i == 2) {
        //         cy.get('[data-test="product-sort-container"]').select(i);
        //         cy.get('[data-test="active-option"]').should('have.text', 'Price (low to high)');
        //     } else {
        //         cy.get('[data-test="product-sort-container"]').select(i);
        //         cy.get('[data-test="active-option"]').should('have.text', 'Price (high to low)');
        //     }
        // }
        const options = [
            { value: 0, text: 'Name (A to Z)' },
            { value: 1, text: 'Name (Z to A)' },
            { value: 2, text: 'Price (low to high)' },
            { value: 3, text: 'Price (high to low)' }
          ];
          cy.log(options.length)
          for (let i = 0; i < options.length; i++) {
            cy.get('[data-test="product-sort-container"]').select(i);
            cy.get('[data-test="active-option"]').should('have.text', options[i].text);
          
          }
        // //2
        // for (let i = 0; i < 6; i++) {
        //     let numberAfter =0
        //     if (i !== 3 && i !== 5) {
        //         cy.get(`[data-test="item-${i}-title-link"] > [data-test="inventory-item-name"]`).click()
        //         // cy.get('[data-test="shopping-cart-badge"]').invoke('text').then(badge1 => {
        //         //     let badge11 = parseFloat(badge1)
        //         cy.get('[data-test="add-to-cart"]').click()
        //         cy.get('[data-test="shopping-cart-badge"]').should('be.visible')
        //         cy.get('[data-test="shopping-cart-badge"]').invoke('text').then(badge2 => {
        //             let badge22 = parseFloat(badge2)
        //             // expect(badge22).eq(badge11 + 1)
        //             numberAfter++
        //         })
        //         // })

        //     } else {
        //         cy.get('[data-test="shopping-cart-badge"]').invoke('text').then(badge => {
        //             let badgea = Number(badge)
        //             cy.get(`[data-test="item-${i}-title-link"] > [data-test="inventory-item-name"]`).click()
        //             cy.get('[data-test="shopping-cart-badge"]').invoke('text').then(badgee => {
        //                 let badgeaa = Number(badgee)
        //                 expect(badgea).eq(badgeaa)
        //             })

        //         })
        //     }
        //     cy.get('[data-test="back-to-products"]').click()







        // if (i == 0) {
        //     cy.get(`[data-test="item-${i}-title-link"] > [data-test="inventory-item-name"]`).click()
        //     cy.get('[data-test="add-to-cart"]').click()
        //     cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', '1')
        //     cy.get('[data-test="back-to-products"]').click()
        // } else if (i == 1) {
        //     cy.get(`[data-test="item-${i}-title-link"] > [data-test="inventory-item-name"]`).click()
        //     cy.get('[data-test="shopping-cart-badge"]').invoke('text').then(badge1 => {
        //         let badge11 = parseFloat(badge1)
        //         cy.get('[data-test="add-to-cart"]').click()
        //         cy.get('[data-test="shopping-cart-badge"]').should('be.visible')
        //         cy.get('[data-test="shopping-cart-badge"]').invoke('text').then(badge2 => {
        //             let badge22 = parseFloat(badge2)
        //             expect(badge22).eq(badge11 + 1)
        //             cy.get('[data-test="back-to-products"]').click()
        //         })
        //     })
        // } else if (i == 2) {
        //     cy.get(`[data-test="item-${i}-title-link"] > [data-test="inventory-item-name"]`).click()
        //     cy.get('[data-test="shopping-cart-badge"]').invoke('text').then(badge3 => {
        //         let badge33 = parseFloat(badge3)
        //         cy.get('[data-test="add-to-cart"]').click()
        //         cy.get('[data-test="shopping-cart-badge"]').should('be.visible')
        //         cy.get('[data-test="shopping-cart-badge"]').invoke('text').then(badge4 => {
        //             let badge44 = parseFloat(badge4)
        //             expect(badge44).eq(badge33 + 1)
        //             cy.get('[data-test="back-to-products"]').click()
        //         })
        //     })
        // } else if (i == 3) {
        //     cy.get('[data-test="shopping-cart-badge"]').invoke('text').then(badge => {
        //         cy.get(`[data-test="item-${i}-title-link"] > [data-test="inventory-item-name"]`).click()
        //         cy.get('[data-test="shopping-cart-badge"]').invoke('text').then(badgee => {
        //             expect(badge).eq(badgee)
        //         })
        //         cy.get('[data-test="back-to-products"]').click()
        //     })
        // } else if (i == 4) {
        //     cy.get(`[data-test="item-${i}-title-link"] > [data-test="inventory-item-name"]`).click()
        //     cy.get('[data-test="shopping-cart-badge"]').invoke('text').then(badge1 => {
        //         let badge11 = parseFloat(badge1)
        //         cy.get('[data-test="add-to-cart"]').click()
        //         cy.get('[data-test="shopping-cart-badge"]').should('be.visible')
        //         cy.get('[data-test="shopping-cart-badge"]').invoke('text').then(badge2 => {
        //             let badge22 = parseFloat(badge2)
        //             expect(badge22).eq(badge11 + 1)
        //             cy.get('[data-test="back-to-products"]').click()
        //         })
        //     })
        // } else {
        //     cy.get('[data-test="shopping-cart-badge"]').invoke('text').then(badge => {
        //         cy.get(`[data-test="item-${i}-title-link"] > [data-test="inventory-item-name"]`).click()
        //         cy.get('[data-test="shopping-cart-badge"]').invoke('text').then(badgee => {
        //             expect(badge).eq(badgee)
        //         })
        //         cy.get('[data-test="back-to-products"]').click()
        //     })
        // }
        // }
        // //3
        // cy.get('[data-test="shopping-cart-link"]').click()
        // cy.get('[data-test="checkout"]').click()
        // cy.fixture('users').then(users => {
        //     cy.get('[data-test="firstName"]').type(users.firstName);
        //     cy.get('[data-test="lastName"]').type(users.lastName);
        //     cy.get('[data-test="postalCode"]').type(users.zipCode);
        // })
        // cy.get('[data-test="continue"]').click()
        // cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').invoke('text').then(price0 => {
        //     let price00 = parseFloat(price0.replace('$', ''))
        //     cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').invoke('text').then(price1 => {
        //         let price11 = parseFloat(price1.replace('$', ''))
        //         cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').invoke('text').then(price2 => {
        //             let price22 = parseFloat(price2.replace('$', ''))
        //             cy.get(':nth-child(6) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').invoke('text').then(price3 => {
        //                 let price33 = parseFloat(price3.replace('$', ''))
        //                 cy.get('[data-test="subtotal-label"]').invoke('text').then(itemTotal => {
        //                     let itemTotall = parseFloat(itemTotal.replace('Item total: $', ''))
        //                     expect(itemTotall).eq(price00 + price11 + price22 + price33)
        //                     cy.get('[data-test="tax-label"]').invoke('text').then(tax => {
        //                         let taxx = parseFloat(tax.replace('Tax: $', ''))
        //                         cy.get('[data-test="total-label"]').invoke('text').then(total => {
        //                             let totall = parseFloat(total.replace('Total: $', ''))
        //                             expect(totall).eq(itemTotall + taxx)
        //                         })
        //                     })
        //                 })
        //             })
        //         })
        //     })
        // })
        //4
        //cy.visit('https://ecommerce-playground.lambdatest.io/')
        // cy.get('.mega-menu > .both').trigger('mouseover')
        // cy.get('#entry281_216477 > .menu-wraper > .menu-items > .nav > :nth-child(2) > .nav-link').click()
        // cy.get('#mz-product-grid-image-28-212439 > .carousel-inner > .active > .lazy-load').click()
        // for (let i = 0; i <= 10; i++) {
        //     cy.get('#entry_216841 > .input-group > .input-group-append > .btn > .fas').click()
        // }
        // cy.get('#entry_216842 > .text').click()
        // cy.wait(5000)
        // cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(badge => {
        //     let badge1 = parseFloat(badge)
        //     console.log(badge1)
        //     for (let i = 0; i <= 5; i++) {
        //         cy.get('#entry_216841 > .input-group > .input-group-prepend > .btn > .fas').click()
        //     }
        //     cy.get('#entry_216841 > .input-group > .form-control').invoke('val').then(quantity => {
        //         let quantity1 = parseFloat(quantity)

        //         cy.get('#entry_216842 > .text').click()
        //         cy.wait(5000)
        //         cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(badgee => {
        //             let bagde2 = parseFloat(badgee);
        //             expect(bagde2).eq(badge1 + quantity1)
        //         })

        //     })
        // })
        //5
        // cy.get('.mega-menu > .both').trigger('mouseover')
        // cy.get('#entry281_216480 > .menu-wraper > .menu-items > .nav > :nth-child(3) > .nav-link').click()
        // cy.get('#input-sort-212403').select(7)
        // for (let i = 1; i < 15; i++) {
        //     cy.get(`:nth-child(${i}) > .product-thumb > .caption > .price > .price-new`).invoke('text').then(product => {
        //         let product1 = parseFloat(product.replace('$', '').replace(',', ''))
        //         cy.get(`:nth-child(${i + 1}) > .product-thumb > .caption > .price > .price-new`).invoke('text').then(product => {
        //             let product2 = parseFloat(product.replace('$', '').replace(',', ''))
        //             expect(product1).gte(product2)
        //         })
        //     })
        // }
        // //6
        // const options = [
        //     { value: 0, text: 'Default' },
        //     { value: 1, text: 'Best sellers' },
        //     { value: 2, text: 'Popular' },
        //     { value: 3, text: 'Newest' },
        //     { value: 4, text: 'Name (A - Z)' },
        //     { value: 5, text: 'Name (Z - A)' },
        //     { value: 6, text: 'Price (Low > High)' },
        //     { value: 7, text: 'Price (High > Low' },
        //     { value: 8, text: 'Rating (Highest)' },
        //     { value: 9, text: 'Rating (Lowest)' },
        //     { value: 10, text: 'Model (A - Z)' },
        //     { value: 11, text: 'Model (Z - A)' }
        // ];

        // for (let i = 0; i <= 11; i++) {
        //     cy.get('#input-sort-212403').select(i);
        //     cy.contains('option', options[i].text).should('be.visible')
        // }
        //7
        // cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(3) > .icon-left').click()
        // cy.get('[href="https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=5"]').click()
        // for(let i=1;i<16;i++){
        //     cy.get(`:nth-child(${i}) > .article-thumb > .caption > .metadata > .viewed`).invoke('text').then(eye =>{
        //         let eye1 =parseInt(eye)
        //         cy.get(`:nth-child(${i}) > .article-thumb > .caption > .btn`).click()
        //         cy.reload()
        //         cy.get('.extra-viewed').invoke('text').then(eye=>{
        //             let eye2 =parseInt(eye)
        //             expect(eye2).eq(eye1 +1)
        //             cy.go('back')
        //         })
        //     })
        //}
        //8



        //9.1
        // cy.get('.mega-menu > .both > .info > .title').trigger('mouseover')
        // cy.get('#entry281_216481 > .menu-wraper > .menu-items > .nav > :nth-child(2) > .nav-link').click()
        // let addtoCart = 'Add to Cart'
        // for (let i = 1; i < 16; i++) {
        //     cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(badge => {
        //         let badge1 = parseInt(badge)
        //         cy.get(`:nth-child(${i}) > .product-thumb > .caption > .title > .text-ellipsis-2`).click()
        //         cy.get('#entry_216842 > .text').invoke('text').then(textt => {
        //             cy.log(textt)
        //             if (textt === addtoCart) {
        //                 cy.get('#entry_216842 > .text').click()
        //                 cy.wait(1000)
        //                 cy.get('body').then(($body) => {
        //                     if (!$body.text().includes('Size Required!')) {
        //                         badge1++
        //                         cy.go('back')
        //                     } else {
        //                         cy.go('back')
        //                         cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(badge2 => {
        //                             expect(Number(badge2)).eq(badge1)
        //                         })
        //                     }
        //                 })
        //             } else {
        //                 cy.go('back')
        //                 cy.get('#entry_217825 > .cart > .cart-icon > .badge').invoke('text').then(badge2 => {
        //                     expect(Number(badge2)).eq(badge1)
        //                 })
        //             }

        //         }
        //         )
        //     })
        // }


















































    })
})