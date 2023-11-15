const bodyValidate = require('../serviceDataError');
const insertTransaction = require('/ContainerAPI/db/transactions/InsertTransaction');
const insertService = async (itemDTO, tableName) => {
  let itemArray = [];

  for (let i in itemDTO) {
    if (itemDTO[i] === undefined) {
      throw new Error(bodyValidate(itemDTO));
    } else {
      itemArray.push(i);
      itemArray.push(itemDTO[i]);
    }
  }

  return await insertTransaction(itemArray, tableName);
};

module.exports = insertService;
