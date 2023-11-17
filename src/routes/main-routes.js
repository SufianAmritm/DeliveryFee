const express = require('express');
const mainRouter = express.Router();
const productRouter = require('./product-routes');
const containerRouter = require('./container-routes');
const customerRouter = require('./customer-routes');
const saleAgentRouter = require('./sale-agent-routes');
const orderRouter = require('./order-routes');
mainRouter.use('/product', productRouter);
mainRouter.use('/container', containerRouter);
mainRouter.use('/customer', customerRouter);
mainRouter.use('/saleagents', saleAgentRouter);
mainRouter.use('/order', orderRouter);

module.exports = mainRouter;
