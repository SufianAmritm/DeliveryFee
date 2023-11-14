const db = require('../postgredb');

const orderTransaction = async (
  containerId,
  customerId,
  saleAgentId,
  quantity,
  rate
) => {
  tableName = 'orders';
  try {
    const result = await db.transaction((trx) => {
      const id = trx(tableName)
        .insert({
          container_id: containerId,
          customer_id: customerId,
          sale_agent_id: saleAgentId,
          quantity: quantity,
          rate: rate,
          total: Number(quantity) * Number(rate),
        })
        .returning('id');
      return id;
    });
    return result;
  } catch (err) {
    throw new Error(`Cannot perform transaction on ${tableName}`);
  }
};

module.exports = orderTransaction;
