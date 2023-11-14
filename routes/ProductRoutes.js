const express = require('express');
const productRouter = express.Router();
const postProduct = require('../controllers/Product');
const validate = require('../validator/ProductValidationHandler');
productRouter.post('/', validate, postProduct);
module.exports = productRouter;
