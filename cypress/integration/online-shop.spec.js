/// <reference types="cypress" />

context('Online shop', () => {
    beforeEach(() => {
        // 1. Open link http://automationpractice.com/index.php
        cy.visit('http://automationpractice.com/index.php')
    })

    const getName = (el) => el.find('.product-name').text().trim();
    const getPrice = (el) => el.find('[itemprop="price"]').text().trim()

    it('search shoul return product with correct attributes', () => {
        // 2. Move your cursor over Women's link.
        cy.get('a.sf-with-ul[title="Women"]')
            .next()
            .invoke('show');
        // 3. Click on sub menu 'T-shirts'
        cy.get('.submenu-container a[title="T-shirts"]').click()
        // 4. Get Name/Text of the first product displayed on the page.
        cy.get('li .product-container').first().then(($product) => {
            const name = getName($product)
            const price = getPrice($product)
            // 5. Now enter the same product name in the search bar present on top of page and click the search button.
            cy.get('#search_query_top').type(name).should('have.value', name);
            cy.get('[name="submit_search"]').click();
            // 6. Validate that the same product is displayed on a searched page with the same details which
            cy.get('.page-heading.product-listing').should(($heading) => {
                expect($heading.text().toUpperCase()).contain('SEARCH').and.contain(name.toUpperCase())
            })
            cy.get('li .product-container').first().then(($searchResult) => {
                const resultName = getName($searchResult)
                expect(resultName).is.eq(name, 'product name different from expected')
                const resultPrice = getPrice($searchResult)
                expect(resultPrice).is.eq(price, 'product price different from expected')
            });
        });
    })
})