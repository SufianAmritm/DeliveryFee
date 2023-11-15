const deleteTransaction = require('../../db/transactions/DeleteTransaction');

const deleteService = async (id, tableName) => {
  return await deleteTransaction(id, tableName);
};
module.exports = deleteService;
