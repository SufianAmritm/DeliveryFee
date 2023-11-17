const { validationResult } = require('express-validator');
const containerValidate = require('../validation/container-validate');
const validationHandler = require('../../../common/utils/validation-handler');

const containerValidator = [
  validationHandler(containerValidate),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];

module.exports = containerValidator;
