const express = require('express');
const mainRouter = express.Router();
const cityRouter = require('./city-routes');
const deliveryFeeRouter = require('./delivery-fee-routes');
const zoneRouter = require('./zone-routes');
const sellerRouter = require('./seller-routes');

mainRouter.use('/city', cityRouter);
mainRouter.use('/deliveryFee', deliveryFeeRouter);
mainRouter.use('/zone', zoneRouter);
mainRouter.use('/seller', sellerRouter);

module.exports = mainRouter;
