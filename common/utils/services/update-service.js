const updateTransaction = require('../../../db/transactions/update-transaction');
const updateService = async (itemDTO, tableName, id) => {
    let itemArray = [];

    for (let i in itemDTO) {
        if (itemDTO[i] !== undefined) {
            itemArray.push(i);
            itemArray.push(itemDTO[i]);
        }
    }

    return await updateTransaction(itemArray, tableName, id);
};
module.exports = updateService;
