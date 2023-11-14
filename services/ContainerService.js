const Container = require('../dto/ContainerDTO');
const containerTransaction = require('../db/transactions/ContainerTransaction');

const insertIntoTable = async (body) => {
  const item = new Container(body);
  const { number, quantity, vendor, productId } = item;

  return await containerTransaction(number, quantity, vendor, productId);
};
module.exports = insertIntoTable;
