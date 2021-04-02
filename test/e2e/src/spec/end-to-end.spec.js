const ProductList = require("../pages/product-list.po");
const Categories = require("../pages/categories.po");
const Search = require("../pages/search.po");

const {
    waitForElementToBeVisible,
    waitForTextToBe,
    waitForProductListToLoad,
    waitForElementToBeClickable,
    currentUrl,
} = require("../helpers/wait");

describe("test suite for online store", function () {

    let productList = new ProductList();
    let categories = new Categories();
    let search = new Search();


    // Assignment 1 - Automate 'Search Product' functionality of an e-commerce website (candidate is
    // able to choose any automation test tool and please give a reason why choose that automation
    // test tool)
    // Steps to Automate:
    // 1. Open link http://automationpractice.com/index.php
    // 2. Move your cursor over Women's link.
    // 3. Click on sub menu 'T-shirts'
    // 4. Get Name/Text of the first product displayed on the page.
    // 5. Now enter the same product name in the search bar present on top of page and click the
    // search button.
    // 6. Validate that the same product is displayed on a searched page with the same details which
    // were displayed on T-Shirt's page.

    it("searchin for product should return product with correct details", () => {

        browser.actions().mouseMove(categories.catWomen).perform();
        expect(categories.subCatTshirt.isDisplayed()).toBeTruthy();


    });
});
