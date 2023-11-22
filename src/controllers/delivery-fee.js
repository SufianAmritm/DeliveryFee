const errorHandlerMiddleware = require('../middleware/error-handler');
const {
    deliveryFeeInsertService,
    deliveryFeeUpdateService,
    deliveryFeeGetAllService,
    deliveryFeeGetSingleService,
    deliveryFeeDeleteService
} = require('../services/delivery-fee-service');

const deliveryFeeInsert = async (req, res) => {
    try {
        const id = await deliveryFeeInsertService(req.body);
        res.json(id);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const deliveryFeeUpdate = async (req, res) => {
    try {
        const id = await deliveryFeeUpdateService(req.body, req.params.id);
        res.json(id);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const deliveryFeeGetAll = async (req, res) => {
    try {
        const result = await deliveryFeeGetAllService();
        res.json(result);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const deliveryFeeGetSingle = async (req, res) => {
    try {
        const result = await deliveryFeeGetSingleService(req.params.id);
        res.json(result);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const deliveryFeeDelete = async (req, res) => {
    try {
        const result = await deliveryFeeDeleteService(req.params.id);
        res.json(result);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
module.exports = {
    deliveryFeeInsert,
    deliveryFeeUpdate,
    deliveryFeeGetAll,
    deliveryFeeGetSingle,
    deliveryFeeDelete
};
