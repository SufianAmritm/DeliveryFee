const insertIntoTable = require('../services/ContainerService');

const Container = async (req, res) => {
  const id = await insertIntoTable(req.body);
  res.json(id);
};

module.exports = Container;
