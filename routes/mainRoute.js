const express = require('express');
const mainRouter = express.Router();
const productRouter = require('./ProductRoutes');
const containerRouter = require('./ContainerRoutes');
const customerRouter = require('./CustomerRoutes');
const saleAgentRouter = require('./SaleAgentRoutes');
const orderRouter = require('./OrderRoutes');
mainRouter.use('/product', productRouter);
mainRouter.use('/container', containerRouter);
mainRouter.use('/customer', customerRouter);
mainRouter.use('/saleagents', saleAgentRouter);
mainRouter.use('/order', orderRouter);

module.exports = mainRouter;
