const express = require('express');
const saleAgentRouter = express.Router();
const postSaleAgent = require('../controllers/SaleAgents');
const validate = require('../validator/SaleAgentValidationHandler');
saleAgentRouter.post('/', validate, postSaleAgent);
module.exports = saleAgentRouter;
