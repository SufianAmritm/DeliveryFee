const { body } = require('express-validator');
const valMsg = require('../ValidationConstants');
const ContainerDTO = require('/ContainerAPI/dto/ContainerDTO');

const validate = (req) => {
  const con = new ContainerDTO(req.body);
  const container = (index) => {
    return Object.keys(con)[index];
  };
  return [
    body(container(0))
      .exists()
      .withMessage(valMsg.exists(container(0)))
      .not()
      .isEmpty()
      .withMessage(valMsg.empty(container(0)))
      .trim()
      .isString()
      .withMessage(valMsg.string(container(0)))
      .matches(/^[A-Z]{3}-\d+$/)
      .withMessage(valMsg.format(container(0)))
      .escape(),

    body(container(1))
      .exists()
      .withMessage(valMsg.exists(container(1)))
      .not()
      .isEmpty()
      .withMessage(valMsg.empty(container(1)))
      .trim()
      .isNumeric()
      .withMessage(valMsg.number(container(1)))

      .isInt({ min: 0 })
      .withMessage(valMsg.nonNegative(container(1)))
      .escape(),

    body(container(2))
      .exists()
      .withMessage(valMsg.exists(container(2)))
      .not()
      .isEmpty()
      .withMessage(valMsg.empty(container(2)))
      .trim()
      .isString()
      .withMessage(valMsg.string(container(0)))

      .escape(),
    body(container(3))
      .exists()
      .withMessage(valMsg.exists(container(3)))
      .not()
      .isEmpty()
      .withMessage(valMsg.empty(container(3)))
      .trim()
      .isNumeric()
      .withMessage(valMsg.number(container(3)))

      .isInt({ min: 0 })
      .withMessage(valMsg.nonNegative(container(3)))
      .escape(),
  ];
};
module.exports = validate;
