const { validationResult } = require('express-validator');

const orderValidate = require('./validation/OrderValidate');

const validateOrder = (req, res, next) => {
  const orderValidationMiddleware = orderValidate(req);
  const runOrderMiddleware = async () => {
    for (const middleware of orderValidationMiddleware) {
      await new Promise((resolve) => middleware(req, res, resolve));
    }
    next();
  };
  runOrderMiddleware();
};

const orderValidator = [
  validateOrder,

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];

module.exports = orderValidator;
