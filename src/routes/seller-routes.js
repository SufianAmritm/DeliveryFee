const express = require('express');
const sellerRouter = express.Router();
const {
    sellerInsert,
    sellerUpdate,
    sellerGetAll,
    sellerGetSingle,
    sellerDelete
} = require('../controllers/seller');

sellerRouter.post('/', sellerInsert);
sellerRouter.patch('/:id', sellerUpdate);
sellerRouter.get('/', sellerGetAll);
sellerRouter.get('/:id', sellerGetSingle);
sellerRouter.delete('/:id', sellerDelete);
module.exports = sellerRouter;
