const insertIntoTable = require('../services/SaleAgentService');

const saleAgent = async (req, res) => {
  const id = await insertIntoTable(req.body);
  res.json(id);
};

module.exports = saleAgent;
