const { validationResult } = require('express-validator');
const customerValidate = require('./validation/CustomerValidate');

const validateCustomer = (req, res, next) => {
  const customerValidationMiddleware = customerValidate(req);
  const runCustomerMiddleware = async () => {
    for (const middleware of customerValidationMiddleware) {
      await new Promise((resolve) => middleware(req, res, resolve));
    }
    next();
  };
  runCustomerMiddleware();
};

const customerValidator = [
  validateCustomer,

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];

module.exports = customerValidator;
