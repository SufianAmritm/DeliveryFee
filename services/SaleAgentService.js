const SaleAgent = require('../dto/SaleAgentDTO');
const saleAgentTransaction = require('../db/transactions/SaleAgentTransaction');
const insertIntoTable = async (body) => {
  const item = new SaleAgent(body);
  const { name, password } = item;

  const saleAgentId = await saleAgentTransaction(name, password);
  return saleAgentId;
};
module.exports = insertIntoTable;
