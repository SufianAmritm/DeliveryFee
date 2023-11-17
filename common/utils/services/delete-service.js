const deleteTransaction = require('../../../db/transactions/delete-transaction');

const deleteService = async (id, tableName) => {
  return await deleteTransaction(id, tableName);
};
module.exports = deleteService;
