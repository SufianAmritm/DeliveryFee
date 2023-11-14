const db = require('../postgredb');

const containerTransaction = async (number, quantity, vendor, productId) => {
  tableName = 'containers';
  try {
    const result = await db.transaction((trx) => {
      const id = trx(tableName)
        .insert({
          container_number: number,
          quantity: quantity,
          vendor: vendor,
          product_skus_id: productId,
        })
        .returning('id');
      return id;
    });
    return result;
  } catch (err) {
    throw new Error(`Cannot perform transaction on ${tableName}`);
  }
};

module.exports = containerTransaction;
