const Customer = require('../dto/CustomerDTO');
const customerTransaction = require('../db/transactions/CustomerTransaction');
const insertIntoTable = async (body) => {
  const item = new Customer(body);
  const { name, mobile, accountNumber, address, identificationNumber } = item;

  return await customerTransaction(
    name,
    mobile,
    accountNumber,
    address,
    identificationNumber
  );
};
module.exports = insertIntoTable;
