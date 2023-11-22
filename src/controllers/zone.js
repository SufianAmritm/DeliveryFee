const errorHandlerMiddleware = require('../middleware/error-handler');
const {
    zoneInsertService,
    zoneUpdateService,
    zoneGetAllService,
    zoneGetSingleService,
    zoneDeleteService
} = require('../services/zone-service');

const zoneInsert = async (req, res) => {
    try {
        const id = await zoneInsertService(req.body);
        res.json(id);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const zoneUpdate = async (req, res) => {
    try {
        const id = await zoneUpdateService(req.body, req.params.id);
        res.json(id);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const zoneGetAll = async (req, res) => {
    try {
        const result = await zoneGetAllService();
        res.json(result);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const zoneGetSingle = async (req, res) => {
    try {
        const result = await zoneGetSingleService(req.params.id);
        res.json(result);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
const zoneDelete = async (req, res) => {
    try {
        const result = await zoneDeleteService(req.params.id);
        res.json(result);
    } catch (err) {
        errorHandlerMiddleware(err, req, res);
    }
};
module.exports = {
    zoneInsert,
    zoneUpdate,
    zoneGetAll,
    zoneGetSingle,
    zoneDelete
};
