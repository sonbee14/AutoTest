describe('template spec', () => {
    it('passes', () => {
        //1
        cy.visit('https://ecommerce-playground.lambdatest.io/');
        cy.viewport(1280,720);
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        //2
        // cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link').trigger('mouseover');
        // cy.get('.mz-sub-menu-96 > :nth-child(2) > .icon-left > .info > .title').click();
        //3
        //4
        // cy.fixture('users').then(users => {
        //     cy.get('#input-firstname').type(users.firstName);
        //     cy.get('#input-lastname').type(users.lastName);
        //     cy.get('#input-telephone').type(users.telephone);
        //     cy.get('#input-password').type(users.passWord);
        //     cy.get('#input-confirm').type(users.passWord);
        // }
        // )
        // cy.get('#input-firstname').type(Cypress.env('firstName'));
        // cy.get('#input-lastname').type(Cypress.env('lastName'));
        // cy.get('#input-telephone').type(Cypress.env('telephone'));
        // cy.get('#input-password').type(Cypress.env('passWord'));
        // cy.get('#input-confirm').type(Cypress.env('passWord'));
        // cy.get('.float-right > .btn').click();
        // cy.get('.text-danger').should('be.visible');
        // //5
        // cy.get('#input-email').type(Cypress.env('email'));
        // cy.get('.float-right > .btn').click();
        // cy.get('#account-register > .alert').should('have.text', ' Warning: You must agree to the Privacy Policy!').and('have.css', 'background-color', 'rgb(248, 215, 218)');
        // //6
        // cy.get('.float-right > .custom-control > .custom-control-label').click();
        // cy.get('.float-right > .btn').click();
        // cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(1) > .icon-left').click();
        // //8
        // cy.get('.mega-menu > .both').trigger('mouseover');
        // cy.get('#entry281_216477 > .menu-wraper > .menu-items > .nav > :nth-child(1) > .nav-link').click();
        // //9
        // cy.get('#input-sort-212434').select(6);
        // cy.get(':nth-child(1) > .product-thumb > .caption > .price > .price-new').invoke('text').then(son1 => {
        //     expect(son1).eq('$122.00');
        //     cy.get(':nth-child(2) > .product-thumb > .caption > .price > .price-new').invoke('text').then(son2 => {
        //         let textInt = parseFloat(son1.replace('$', ''))
        //         let textInt2 = parseFloat(son2.replace('$', ''))
        //         expect(textInt).lte(textInt2)
        //     })

        // })
        // //10
        // cy.get('#mz-product-grid-image-36-212439 > .carousel-inner > .active > .lazy-load').click();
        // cy.get('#input-name').type('son');
        // cy.get('#input-review').type('like shit');
        // cy.get('[for="rating-4-216860"]').click();
        // cy.get('#button-review').click();
        // cy.get('#form-review > .alert').should('be.visible');
        // //11
        // cy.get('#input-review').clear().type('I hate it because the weather tod');
        // cy.get('#button-review').click();
        // cy.get('#form-review > .alert').should('be.visible');
        // //12
        // cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .btn').click();
        // cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .dropdown-menu > [data-category_id="18"]').click();
        // //13
        // cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('imac');
        // cy.get(':nth-child(2) > .dropdown-menu > :nth-child(1)').should('be.visible');
        // cy.get('.type-text').click();
        // //14
        // cy.get(':nth-child(1) > .product-thumb > .caption > .title > .text-ellipsis-2')
        //     .invoke('text').then(label1 => {
        //         expect(label1).eq('iMac');
        //         cy.get(':nth-child(2) > .product-thumb > .caption > .title > .text-ellipsis-2')
        //             .invoke('text').then(label2 => {
        //                 expect(label2).eq(label1);
        //                 cy.get(':nth-child(2) > .product-thumb > .caption > .title > .text-ellipsis-2')
        //                     .invoke('text').then(label3 => {
        //                         expect(label3).eq(label2)
        //                     })
        //             })
        //     })
        //15
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link').trigger('mouseover');
        cy.get('.mz-sub-menu-96 > :nth-child(1) > .icon-left').click();
        cy.get('#input-email').type(Cypress.env('email'));
        cy.get('#input-password').type(Cypress.env('passWord'));
        cy.get('form > .btn').click();
        cy.get(':nth-child(1) > .card-body > .row > :nth-child(1) > .d-inline-flex').click();
        cy.get('#input-telephone').clear();
        cy.get('.float-right > .btn').click();
        cy.get('.text-danger').should('have.text', 'Telephone must be between 3 and 32 characters!');
        //16
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(3) > .icon-left > .info > .title').click();
        cy.contains('amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus').click();
        cy.get('#input-comment').type('xin chao cac ban toi la hoc sinh tuyet voi nhat vu tru');
        cy.get('#button-comment').click();
        cy.get('#form-comment > .alert').should('be.visible');
        const firstName = Cypress.env('firstName');
        const lastName = Cypress.env('lastName');
        cy.get('.media-body > .comment-author').first().should('contain.text', `${Cypress.env('firstName')} ${Cypress.env('lastName')}`);
        //su dung .eq(0) thay cho first() cung dc
        //17
        // cy.get('.extra-comments').invoke('text').then(cmt1 => {
        //     let cmtt1 = parseFloat(cmt1.replace('comments', ''));
        //     cy.get('#input-comment').type('xin chao cac ban toi la hoc sinh tuyet voi nhat vu tru');
        //     cy.get('#button-comment').click();
        //     cy.reload();
        //     cy.get('.extra-comments').invoke('text').then(cmt2 => {
        //         let cmtt2 = parseFloat(cmt2.replace('comments', ''));
        //         // cy.get('.extra-comments').should('contain.text', `${cmtt1 +1.0}`);
        //         expect(cmtt2).gt(cmtt1)

        //     })
        // })
        //18
        // cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(1) > .icon-left > .info > .title').click();
        // cy.get('#mz-product-listing-image-39217949-0-0 > .carousel-inner > .active > .lazy-load').click();
        // cy.get('#entry_216841 > .input-group > .input-group-append > .btn > .fas').dblclick();
        // cy.get('#entry_216841 > .input-group > .form-control')
        // .invoke('val').then(quantity =>{
        //     let quantityy = parseFloat(quantity);
        //     cy.get('#entry_216842 > .text').click();
        //     cy.wait(5000)
        //     cy.get('.ml-2 > span').click();
        //     cy.get('#entry_217825 > .cart > .cart-icon > .badge').click();
        //     cy.get('tr > .text-center').invoke('text').then(quantity1 =>{
        //         // let quantityy1 =parseFloat(quantity1.replace('x',''))
        // //         expect(quantityy).eq(parseFloat(quantity1.replace('x','')))

        //     }

        //     )


        // }

        // )
        // //19
        // cy.get('#entry_217851 > .icon-right').click();
        // let quantity
        // let price
        // let total
        // cy.get('#quantity_74489').invoke('val').then(value =>{
        //     quantity=parseFloat(value.replace)
        // }
        // )
        // cy.get('#checkout-cart > .table > tbody > tr > :nth-child(4)').invoke('text').then(value =>{
        //     price=parseFloat(value.replace('$',''));
        //     expect(total).equal(quantity*price);
        // }
        // )
        





















    })
})