/// <reference types="cypress" />

context('Online shop search', () => {
    beforeEach(() => {
        // 1. Open link http://automationpractice.com/index.php
        cy.visit('http://automationpractice.com/index.php')
    })


    
    // 5. Now enter the same product name in the search bar present on top of page and click the
    // search button.
    // 6. Validate that the same product is displayed on a searched page with the same details which
    // were displayed on T-Shirt's page.

    it('hover over', () => {
        // 2. Move your cursor over Women's link.
        cy.get('a.sf-with-ul[title="Women"]')
            .next()
            .invoke('show');
        // 3. Click on sub menu 'T-shirts'
        cy.get('.submenu-container a[title="T-shirts"]').click()
        // 4. Get Name/Text of the first product displayed on the page.
        const products = cy.get('.product_list').find('li .product-container');
        products.should('have.length', 1)
        const firstProduct = products.eq(0)
        const name = getName(firstProduct)
        const description = getDescription(firstProduct)
        const price = getPrice(firstProduct)

    })


    const getName = async (el) => await element.find('.product-name').text().trim();
    const getDescription = async (el) => await element.find('.product-desc').text().trim();
    const getPrice = async (el) => await element.find('.price.product-price').text().trim();


})

