const { validationResult } = require('express-validator');

const orderValidate = require('../validation/prder-validate');
const validationHandler = require('../../../common/utils/validation-handler');

const orderValidator = [
  validationHandler(orderValidate),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];

module.exports = orderValidator;
