const express = require('express');
const productRouter = express.Router();
const {
  productInsert,
  productUpdate,
  productGetAll,
  productGetSingle,
  productDelete,
} = require('../controllers/product');
const validate = require('../validator/ValidationHandlers/product-validation-handler');
productRouter.post('/', validate, productInsert);
productRouter.patch('/:id', validate, productUpdate);
productRouter.get('/', productGetAll);
productRouter.get('/:id', productGetSingle);
productRouter.delete('/:id', productDelete);
module.exports = productRouter;
