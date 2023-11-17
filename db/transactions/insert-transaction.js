const db = require('../postgre-db');

const insertTransaction = async (array, tableName) => {
  let insertObj = {};
  for (let i = 0; i < array.length - 1; i = i + 2) {
    insertObj[array[i]] = array[i + 1];
  }
  if (tableName === 'orders') {
    insertObj['total'] = insertObj.rate * insertObj.quantity;
  }

  try {
    const result = await db.transaction(async (trx) => {
      const response = await trx(tableName).insert(insertObj).returning('*');
      return response;
    });

    return result;
  } catch (err) {
    throw new Error(
      `Cannot perform insert transaction on ${tableName} -Error:${err}`
    );
  }
};

module.exports = insertTransaction;
