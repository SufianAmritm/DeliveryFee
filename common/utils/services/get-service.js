const {
  getAllTransaction,
  getSingleTransaction,
} = require('../../../db/transactions/get-transaction');

const getAllService = async (tableName) => {
  return await getAllTransaction(tableName);
};
const getSingleService = async (id, tableName) => {
  return await getSingleTransaction(id, tableName);
};
module.exports = { getAllService, getSingleService };
