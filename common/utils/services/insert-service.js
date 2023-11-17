const bodyValidate = require('../../errors/service-data-error');
const insertTransaction = require('../../../db/transactions/insert-transaction');
const insertService = async (itemDTO, tableName) => {
  let itemArray = [];

  for (let i in itemDTO) {
    if (itemDTO[i] === undefined) {
      throw new Error(bodyValidate(itemDTO));
    } else {
      itemArray.push(i);
      itemArray.push(itemDTO[i]);
    }
  }

  return await insertTransaction(itemArray, tableName);
};

module.exports = insertService;
