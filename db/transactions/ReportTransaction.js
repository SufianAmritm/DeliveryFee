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
        'customers.name AS Customer_Name',
        'sale_agents.name AS SaleAgent_Name',
        'product_skus.name AS Product_Name'
      );

    return response;
  });
  return result;
};
module.exports = reportTransaction;
