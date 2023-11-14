const { body } = require('express-validator');
const valMsg = require('../ValidationConstants');
const SaleAgentDTO = require('/ContainerAPI/dto/SaleAgentDTO');

const validate = (req) => {
  const item = new SaleAgentDTO(req.body);
  const saleAgent = (index) => {
    return Object.keys(item)[index];
  };

  return [
    body(saleAgent(0))
      .exists()
      .withMessage(valMsg.exists(saleAgent(0)))
      .not()
      .isEmpty()
      .withMessage(valMsg.empty(saleAgent(0)))
      .trim()
      .isString()
      .withMessage(valMsg.string(saleAgent(0)))

      .escape(),
    body(saleAgent(1))
      .exists()
      .withMessage(valMsg.exists(saleAgent(1)))
      .not()
      .isEmpty()
      .withMessage(valMsg.empty(saleAgent(1)))
      .trim()
      .isString()
      .withMessage(valMsg.string(saleAgent(0)))

      .escape(),
  ];
};
module.exports = validate;
