const db = require('../postgre-db');

const getAllTransaction = async (tableName, id, idSecond) => {
    try {
        if (idSecond) {
            const result = await db.transaction(async (trx) => {
                const response = await trx(tableName)
                    .select('id')
                    .orderBy('id', 'asc')
                    .where({ city_id: id })
                    .returning('id');
                return response;
            });

            if (!Object.values(result).some((value) => value.id == idSecond)) {
                return false;
            } else return true;
        }

        const result = await db.transaction(async (trx) => {
            const response = await trx(tableName).select('*').orderBy('id', 'asc').returning('*');
            return response;
        });

        return result;
    } catch (err) {
        throw new Error(`Cannot perform getAll transaction on ${tableName} -Error:${err}`);
    }
};
const getSingleTransaction = async (idFirst, tableName) => {
    try {
        const result = await db.transaction(async (trx) => {
            const response = await trx(tableName)
                .select('*')
                .where({ id: idFirst })

                .returning('*');
            return response;
        });

        return result;
    } catch (err) {
        throw new customError.TransactionError(err);
    }
};
module.exports = { getAllTransaction, getSingleTransaction };
