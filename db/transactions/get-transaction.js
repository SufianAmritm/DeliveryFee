const db = require('../postgre-db');

const getAllTransaction = async (tableName) => {
  try {
    const result = await db.transaction(async (trx) => {
      const response = await trx(tableName).select('*').returning('*');
      return response;
    });
    return result;
  } catch (err) {
    throw new Error(
      `Cannot perform getAll transaction on ${tableName} -Error:${err}`
    );
  }
};
const getSingleTransaction = async (id, tableName) => {
  try {
    const result = await db.transaction(async (trx) => {
      const response = await trx(tableName)
        .select('*')
        .where({ id })
        .returning('*');
      return response;
    });
    return result;
  } catch (err) {
    throw new Error(
      `Cannot perform getSingle transaction on ${tableName} -Error:${err}`
    );
  }
};
module.exports = { getAllTransaction, getSingleTransaction };
