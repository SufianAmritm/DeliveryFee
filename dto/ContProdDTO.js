const Container = require("./ContainerDTO");
const Product = require("./ProductDTO");

class ContProd {
  constructor(info) {
    this.container = new Container(info).toObject();
    this.product = new Product(info).toObject();
  }
  toObject() {
    return {
      Container: this.container,
      Product: this.product,
    };
  }
}
module.exports = ContProd;
