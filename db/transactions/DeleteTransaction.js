const db = require('../postgredb');
const deleteTransaction = async (id, tableName) => {
  try {
    const result = await db.transaction(async (trx) => {
      const response = await trx(tableName)
        .where({ id })
        .update({ deleted_At: trx.raw('CURRENT_TIMESTAMP') })
        .returning('*');
      return response;
    });
    return result;
  } catch (err) {
    throw new Error(
      `Cannot perform Delete transaction on ${tableName} -Error:${err}`
    );
  }
};

module.exports = deleteTransaction;
