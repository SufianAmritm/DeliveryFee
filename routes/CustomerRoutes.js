const express = require('express');
const customerRouter = express.Router();
const postCustomer = require('../controllers/Customers');
const validate = require('../validator/CustomerValidationHandler');
customerRouter.post('/', validate, postCustomer);
module.exports = customerRouter;
