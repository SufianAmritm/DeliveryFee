const { BadRequestError, TransactionError } = require('../../common/errors');
const errorHandlerMiddleware = (err, req, res) => {
    if (err instanceof BadRequestError) {
        res.status(err.statusCode).json({ BadRequest: err.message });
        return;
    }
    if (err instanceof TransactionError) {
        res.status(err.statusCode).json({ TransactionError: err.message });
        return;
    }
    res.status(500).send('Something went wrong try again later');
    return;
};

module.exports = errorHandlerMiddleware;
