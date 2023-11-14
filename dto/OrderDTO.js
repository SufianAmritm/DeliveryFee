class order {
  constructor(order) {
    this.containerId = order.containerId;
    this.customerId = order.customerId;
    this.saleAgentId = order.saleAgentId;
    this.quantity = order.quantity;
    this.rate = order.rate;
  }
}

module.exports = order;
