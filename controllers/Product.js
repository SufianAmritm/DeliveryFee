const insertIntoTable = require('../services/ProductService');

const product = async (req, res) => {
  const id = await insertIntoTable(req.body);
  res.json(id);
};

module.exports = product;
