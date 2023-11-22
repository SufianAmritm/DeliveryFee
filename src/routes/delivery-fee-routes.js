const express = require('express');
const deliveryFeeRouter = express.Router();
const {
    deliveryFeeInsert,
    deliveryFeeUpdate,
    deliveryFeeGetAll,
    deliveryFeeGetSingle,
    deliveryFeeDelete
} = require('../controllers/delivery-fee');

deliveryFeeRouter.post('/', deliveryFeeInsert);
deliveryFeeRouter.patch('/:id', deliveryFeeUpdate);
deliveryFeeRouter.get('/', deliveryFeeGetAll);
deliveryFeeRouter.get('/:id', deliveryFeeGetSingle);
deliveryFeeRouter.delete('/:id', deliveryFeeDelete);
module.exports = deliveryFeeRouter;
