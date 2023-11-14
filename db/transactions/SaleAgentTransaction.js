const db = require('../postgredb');

const saleAgentTransaction = async (name, password) => {
  tableName = 'sale_agents';
  try {
    const [result] = await db.transaction((trx) => {
      const id = trx(tableName)
        .insert({
          name: name,
          password: password,
        })
        .returning('id');
      return id;
    });
    return result;
  } catch (err) {
    throw new Error(`Can not perform transaction on ${tableName}`);
  }
};

module.exports = saleAgentTransaction;
