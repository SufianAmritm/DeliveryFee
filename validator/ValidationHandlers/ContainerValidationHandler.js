const { validationResult } = require('express-validator');
const containerValidate = require('../validation/ContainerValidate');

const validateContainer = (req, res, next) => {
  const containerValidationMiddleware = containerValidate(req);
  const runContainerMiddleware = async () => {
    for (const middleware of containerValidationMiddleware) {
      await new Promise((resolve) => middleware(req, res, resolve));
    }
    next();
  };
  runContainerMiddleware();
};

const containerValidator = [
  validateContainer,

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];

module.exports = containerValidator;
