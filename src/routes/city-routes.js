const express = require('express');
const cityRouter = express.Router();
const {
    cityInsert,
    cityUpdate,
    cityGetAll,
    cityGetSingle,
    cityDelete
} = require('../controllers/city');

cityRouter.post('/', cityInsert);
cityRouter.patch('/:id', cityUpdate);
cityRouter.get('/', cityGetAll);
cityRouter.get('/:id', cityGetSingle);
cityRouter.delete('/:id', cityDelete);
module.exports = cityRouter;
