const errorHandlerMiddleware = require('../middleware/error-handler');
const {
    sellerInsertService,
    sellerUpdateService,
    sellerGetAllService,
    sellerGetSingleService,
    sellerDeleteService
} = require('../services/seller-service');

const sellerInsert = async (req, res) => {
    try {
        const id = await sellerInsertService(req.body);
        res.json(id);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const sellerUpdate = async (req, res) => {
    try {
        const id = await sellerUpdateService(req.body, req.params.id);
        res.json(id);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const sellerGetAll = async (req, res) => {
    try {
        const result = await sellerGetAllService();
        res.json(result);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const sellerGetSingle = async (req, res) => {
    try {
        const result = await sellerGetSingleService(req.params.id);
        res.json(result);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const sellerDelete = async (req, res) => {
    try {
        const result = await sellerDeleteService(req.params.id);
        res.json(result);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
module.exports = {
    sellerInsert,
    sellerUpdate,
    sellerGetAll,
    sellerGetSingle,
    sellerDelete
};
