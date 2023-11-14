const express = require('express');
const orderRouter = express.Router();
const postOrder = require('../controllers/Orders');
const validate = require('../validator/OrderValidationHandler');
orderRouter.post('/', validate, postOrder);
module.exports = orderRouter;
