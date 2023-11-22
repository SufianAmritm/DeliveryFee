const {
    getAllTransaction,
    getSingleTransaction
} = require('../../../db/transactions/get-transaction');

const getAllService = async (tableName, id, idSecond) => {
    if (idSecond) {
        return await getAllTransaction(tableName, id, idSecond);
    }
    return await getAllTransaction(tableName);
};
const getSingleService = async (id, tableName) => {
    return await getSingleTransaction(id, tableName);
};
module.exports = { getAllService, getSingleService };
