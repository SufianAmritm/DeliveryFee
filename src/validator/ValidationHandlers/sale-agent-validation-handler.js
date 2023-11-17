const { validationResult } = require('express-validator');

const saleAgentValidate = require('../validation/sale-agent-validate');

const validationHandler = require('../../../common/utils/validation-handler');
const saleAgentValidator = [
  validationHandler(saleAgentValidate),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];

module.exports = saleAgentValidator;
