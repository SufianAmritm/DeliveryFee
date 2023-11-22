const db = require('../postgre-db');
const customError = require('../../common/errors');
const insertTransaction = async (itemDTO, tableName) => {
    try {
        const result = await db.transaction(async (trx) => {
            const response = trx(tableName).insert(itemDTO).returning('*');

            return response;
        });

        return result;
    } catch (err) {
        await db.transaction(async (trx) => {
            const id = await trx(tableName).select('id').orderBy('id', 'desc').first();
            if (id) {
                incrementValue = id.id + 1;
                await trx.raw(
                    `ALTER TABLE ${tableName} ALTER COLUMN id RESTART WITH ${incrementValue} `
                );
            }
        });
        throw new customError.TransactionError(err);
    }
};
module.exports = insertTransaction;
