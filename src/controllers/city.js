const errorHandlerMiddleware = require('../middleware/error-handler');
const {
    cityInsertService,
    cityUpdateService,
    cityGetAllService,
    cityGetSingleService,
    cityDeleteService
} = require('../services/city-service');

const cityInsert = async (req, res) => {
    try {
        const id = await cityInsertService(req.body);
        res.json(id);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const cityUpdate = async (req, res) => {
    try {
        const id = await cityUpdateService(req.body, req.params.id);
        res.json(id);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const cityGetAll = async (req, res) => {
    try {
        const result = await cityGetAllService();
        res.json(result);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const cityGetSingle = async (req, res) => {
    try {
        const result = await cityGetSingleService(req.params.id);
        res.json(result);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const cityDelete = async (req, res) => {
    try {
        const result = await cityDeleteService(req.params.id);
        res.json(result);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
module.exports = {
    cityInsert,
    cityUpdate,
    cityGetAll,
    cityGetSingle,
    cityDelete
};
