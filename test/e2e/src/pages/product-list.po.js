const { element } = require("protractor");

const EC = browser.ExpectedConditions;
const WAIT_TIME = 5000;

class ProductList {

    listContainer = element(by.css("ul.product_list"));
    productCard = element(by.css("li .product-container"));
    productDesc = element(by.css(".product-desc"));
    productPrice = element(by.css("li .product-container .content_price"));
    pageHeading = element(by.css(".page-heading"));  // contains 1 result has been found.        
    productColors = element.all(by.css(".color_pick")) // eg id="color_2"
    productAvailability = element(by.css("[itemprop='availability']"))
  
}
module.exports = ProductList;
