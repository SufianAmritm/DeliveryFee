const Order = require('../dto/OrderDTO');
const orderTransaction = require('../db/transactions/OrderTransaction');
const insertIntoTable = async (body) => {
  const item = new Order(body);
  const { containerId, customerId, saleAgentId, quantity, rate } = item;

  const orderId = await orderTransaction(
    containerId,
    customerId,
    saleAgentId,
    quantity,
    rate
  );
  return orderId;
};
module.exports = insertIntoTable;
