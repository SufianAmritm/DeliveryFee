const {
  getAllTransaction,
  getSingleTransaction,
} = require('../../db/transactions/GetTransaction');

const getAllService = async (tableName) => {
  return await getAllTransaction(tableName);
};
const getSingleService = async (id, tableName) => {
  return await getSingleTransaction(id, tableName);
};
module.exports = { getAllService, getSingleService };
