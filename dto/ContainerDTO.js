class Container {
  constructor(ContainerSpec) {
    this.container = ContainerSpec.container;
    this.quantity = ContainerSpec.quantity;
    this.price = ContainerSpec.price;
  }

  toObject() {
    return {
      containerName: this.container,
      containerQuantity: this.quantity,
      containerPrice: this.price,
    };
  }
}

module.exports = Container;
