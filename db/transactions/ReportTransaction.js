const db = require('../../db/postgredb');

const reportTransaction = async (tableName) => {
  const result = await db.transaction(async (trx) => {
    const response = await trx('orders')
      .join('containers', 'orders.container_id', '=', 'containers.id')
      .join('customers', 'orders.customer_id', '=', 'customers.id')
      .join('sale_agents', 'orders.sale_agent_id', '=', 'sale_agents.id')
      .join(
        'product_skus',
        'containers.product_skus_id',
        '=',
        'product_skus.id'
      )
      .select(
        'orders.id AS Order_Id',
        'containers.container_number AS Container_Name',

        'customers.name AS Customer',
        'sale_agents.name AS Sale_Agent',
        'product_skus.name AS Product',
        'orders.quantity AS Quantity',
        'orders.rate AS Price',
        'orders.total AS Total'
      );

    return response;
  });
  return result;
};
module.exports = reportTransaction;
