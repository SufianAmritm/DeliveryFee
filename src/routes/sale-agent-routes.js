const express = require('express');
const saleAgentRouter = express.Router();
const {
  saleAgentInsert,
  saleAgentUpdate,
  saleAgentGetAll,
  saleAgentGetSingle,
  saleAgentDelete,
} = require('../controllers/sale-agent');
const validate = require('../validator/ValidationHandlers/sale-agent-validation-handler');
saleAgentRouter.post('/', validate, saleAgentInsert);
saleAgentRouter.patch('/', validate, saleAgentUpdate);
saleAgentRouter.get('/', saleAgentGetAll);
saleAgentRouter.get('/:id', saleAgentGetSingle);
saleAgentRouter.delete('/:id', saleAgentDelete);
module.exports = saleAgentRouter;
