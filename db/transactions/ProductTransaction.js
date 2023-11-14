const db = require('../postgredb');

const productTransaction = async (name, region) => {
  tableName = 'product_skus';
  try {
    const result = await db.transaction((trx) => {
      const id = trx(tableName)
        .insert({
          name: name,
          region: region,
        })
        .returning('id');
      return id;
    });
    return result;
  } catch (err) {
    throw new Error('cant insert');
  }
};

module.exports = productTransaction;
