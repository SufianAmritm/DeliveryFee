const { validationResult } = require('express-validator');
const customerValidate = require('../validation/customer-validate');
const validationHandler = require('../../../common/utils/validation-handler');

const customerValidator = [
  validationHandler(customerValidate),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];

module.exports = customerValidator;
