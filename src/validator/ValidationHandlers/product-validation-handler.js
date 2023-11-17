const { validationResult } = require('express-validator');

const productValidate = require('../validation/product-validate');
const validationHandler = require('../../../common/utils/validation-handler');

const productValidator = [
  validationHandler(productValidate),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];

module.exports = productValidator;
