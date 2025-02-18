//Describe blocks: your tests will exist in a describe block. This block takes two arguments. The first is a description of what you are testing. The second is a callback function for your actually tests within that block
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    //   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    //   cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text','Remove');
    //   cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.css','color','rgb(226, 35, 26)');
    //   cy.get('[data-test="product-sort-container"]').select(2);
    //   cy.get('[data-test="active-option"]').should('have.text','Price (low to high)');
    //   cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('have.css','color','rgb(24, 88, 58)');
    //   //3
    //   cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]').should('have.text','Sauce Labs Onesie');
    //   //4
    //   cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should('have.text','$7.99');
    //   //5
    //   cy.get('#react-burger-menu-btn').click();
    //   //6
    //   cy.get('[data-test="reset-sidebar-link"]').should('have.text','Reset App State').and('have.css','color','rgb(24, 88, 58)');
    //   //7
    //   cy.contains('Reset App State').click();
    //   cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
    // //9
    //   cy.contains('Logout').click();
    //   //10
    //   cy.get('[data-test="login-button"]').click();
    //   cy.get('[data-test="error"]').should('be.visible');
    //   //11
    //   cy.get('.error-message-container').should('have.css','color','rgb(19, 35, 34)');
    //   //12
    //   cy.get('[data-test="login-button"]').should('have.css','color','rgb(19, 35, 34)');
    //   //13
    //   cy.get('[data-test="username"]').type('standard_user');
    //   cy.get('[data-test="login-button"]').click();
    //   cy.get('[data-test="error"]').should('be.visible');
    //   //14
    //   cy.get('[data-test="username"]').clear().type('standard_user');
    //   cy.get('[data-test="password"]').type('secret_sauce');
    //   cy.get('[data-test="login-button"]').click();
    //   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    //   cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    //   //14
    //   cy.get('[data-test="shopping-cart-link"]').click();
    //   cy.get('[data-test="checkout"]').click();
    //   //15
    //   cy.get('[data-test="continue"]').click();
    //   cy.get('[data-test="error"]').should('be.visible').and('have.css','color','rgb(255, 255, 255)');
    //   //16
    //   cy.get('[data-test="firstName"]').type('son');
    //   cy.get('[data-test="lastName"]').type('bee');
    //   cy.get('[data-test="postalCode"]').type('1000');
    //   cy.get('[data-test="continue"]').click();
    //   cy.get('[data-test="finish"]').click();
    //   //17
    //   cy.get('[data-test="pony-express"]').should('be.visible');
    //   //18
    //   cy.get('[data-test="back-to-products"]').click();
    //   cy.get('[data-test="product-sort-container"]').select(0);
    //   cy.get('[data-test="active-option"]').should('have.text','Name (A to Z)');
    //   cy.get('[data-test="product-sort-container"]').select(1);
    //   cy.get('[data-test="active-option"]').should('have.text','Name (Z to A)');
    //   cy.get('[data-test="product-sort-container"]').select(2);
    //   cy.get('[data-test="active-option"]').should('have.text','Price (low to high)');
    //   cy.get('[data-test="product-sort-container"]').select(3);
    //   cy.get('[data-test="active-option"]').should('have.text','Price (high to low)');
    //   //19
    //   cy.get('#react-burger-menu-btn').click();
    //   cy.contains('Logout').click();
    //   cy.get('[data-test="username"]').type('error_user');
    //   cy.get('[data-test="password"]').type('secret_sauce');
    //   cy.get('[data-test="login-button"]').click(); 
    //   //20
    //   cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    //   cy.get('[data-test="error"]').should('be.visible');
    const dataTest = [
      '[data-test="add-to-cart-sauce-labs-backpack"]',
      '[data-test="add-to-cart-sauce-labs-bike-light"]',
      '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
      '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
      '[data-test="add-to-cart-sauce-labs-onesie"]',
      '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]',
    ]
    for (let i = 0; i < dataTest.length; i++) {
      cy.get(dataTest[i]).click();
      cy.get('[data-test="shopping-cart-badge"]').should('be.visible');
      cy.get('[data-test="shopping-cart-badge"]').should('have.text', i + 1)
    }

    cy.get('[data-test="product-sort-container"]').select(2);
    for (let i = 1; i < 6; i++) {
      cy.get(`:nth-child(${i}) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]`)
        .invoke('text').then(price => {
          cy.get(`:nth-child(${i + 1}) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]`)
            .invoke('text').then(price2 => {
              let pricee = parseFloat(price.replace('$', ''))
              let price22 = parseFloat(price2.replace('$', ''))
              expect(pricee).lte(price22)
            })
        })
    }
  })
})