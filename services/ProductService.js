const Product = require('../dto/ProductDTO');
const productTransaction = require('../db/transactions/ProductTransaction');
const insertIntoTable = async (body) => {
  const item = new Product(body);
  const { name, region } = item;

  return await productTransaction(name, region);
};
module.exports = insertIntoTable;
