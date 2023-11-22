const insertTransaction = require('../../../db/transactions/insert-transaction');
const insertService = async (itemDTO, tableName) => {
    for (let i in itemDTO) {
        if (!itemDTO[i]) {
            delete itemDTO[i];
        }
    }

    return await insertTransaction(itemDTO, tableName);
};

module.exports = insertService;
