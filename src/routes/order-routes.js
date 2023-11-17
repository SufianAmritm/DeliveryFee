const express = require('express');
const orderRouter = express.Router();
const {
  orderInsert,
  orderUpdate,
  orderGetAll,
  orderGetSingle,
  orderDelete,
  orderReport,
} = require('../controllers/orders');
const validate = require('../validator/ValidationHandlers/order-validation-handler');
orderRouter.get('/report', orderReport);
orderRouter.post('/', validate, orderInsert);
orderRouter.patch('/:id', validate, orderUpdate);
orderRouter.get('/', orderGetAll);
orderRouter.get('/:id', orderGetSingle);
orderRouter.delete('/:id', orderDelete);

module.exports = orderRouter;
