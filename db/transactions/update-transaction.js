const db = require('../postgre-db');

const updateTransaction = async (array, tableName, id) => {
  let updateObj = {};

  for (let i = 0; i < array.length - 1; i = i + 2) {
    updateObj[array[i]] = array[i + 1];
  }

  try {
    const result = await db.transaction(async (trx) => {
      const response = await trx(tableName)
        .where({ id })
        .update(updateObj)
        .returning('*');

      return response;
    });

    return result;
  } catch (error) {
    throw new Error(
      `Cannot perform update transaction on ${tableName}-Error:${err}`
    );
  }
};

module.exports = updateTransaction;
