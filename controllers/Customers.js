const insertIntoTable = require('../services/CustomerService');

const customer = async (req, res) => {
  const id = await insertIntoTable(req.body);
  res.json(id);
};

module.exports = customer;
