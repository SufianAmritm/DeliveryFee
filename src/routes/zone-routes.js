const express = require('express');
const zoneRouter = express.Router();
const {
    zoneInsert,
    zoneUpdate,
    zoneGetAll,
    zoneGetSingle,
    zoneDelete
} = require('../controllers/zone');

zoneRouter.post('/', zoneInsert);
zoneRouter.patch('/:id', zoneUpdate);
zoneRouter.get('/', zoneGetAll);
zoneRouter.get('/:id', zoneGetSingle);
zoneRouter.delete('/:id', zoneDelete);
module.exports = zoneRouter;
