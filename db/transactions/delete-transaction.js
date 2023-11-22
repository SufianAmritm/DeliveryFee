const db = require('../postgre-db');
const deleteTransaction = async (id, tableName) => {
    try {
        const result = await db.transaction(async (trx) => {
            const response = await trx(tableName)
                .where({ id })
                .update({ deleted_at: trx.raw('CURRENT_TIMESTAMP') })
                .returning('*');
            return response;
        });

        return result;
    } catch (err) {
        throw new customError.TransactionError(err);
    }
};

module.exports = deleteTransaction;
