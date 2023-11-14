const insertIntoTable = require('../services/OrderService');

const order = async (req, res) => {
  const id = await insertIntoTable(req.body);
  res.json(id);
};

module.exports = order;
