const { validationResult } = require('express-validator');

const saleAgentValidate = require('./validation/SaleAgentValidate');

const validateSaleAgent = (req, res, next) => {
  const saleAgentValidationMiddleware = saleAgentValidate(req);
  const runSaleAgentMiddleware = async () => {
    for (const middleware of saleAgentValidationMiddleware) {
      await new Promise((resolve) => middleware(req, res, resolve));
    }
    next();
  };
  runSaleAgentMiddleware();
};

const saleAgentValidator = [
  validateSaleAgent,

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];

module.exports = saleAgentValidator;
