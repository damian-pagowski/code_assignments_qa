class Categories {
  constructor() {
    catWomen = element(by.css('a[title="Women"]'));
    subCatTshirt = element(by.css('.submenu-container a[title="T-shirts"]'));
  }
}

module.exports = Categories;
