class Product {
  constructor(ProductSpec) {
    this.name = ProductSpec.product.name;
    this.company = ProductSpec.product.company;
    this.prodDate = ProductSpec.product.prodDate;
    this.expDate = ProductSpec.product.expDate;
  }
  toObject() {
    return {
      productName: this.name,
      productCompany: this.company,
      productExpDate: this.expDate,
      productProdDate: this.prodDate,
    };
  }
}
module.exports = Product;
