const { validationResult } = require('express-validator');

const productValidate = require('../validation/ProductValidate');

const validateProduct = (req, res, next) => {
  const productValidationMiddleware = productValidate(req);
  const runProductMiddleware = async () => {
    for (const middleware of productValidationMiddleware) {
      await new Promise((resolve) => middleware(req, res, resolve));
    }
    next();
  };
  runProductMiddleware();
};

const productValidator = [
  validateProduct,

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];

module.exports = productValidator;
