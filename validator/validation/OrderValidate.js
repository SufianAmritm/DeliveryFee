const { body } = require('express-validator');
const valMsg = require('../ValidationConstants');
const OrderDTO = require('/ContainerAPI/dto/OrderDTO');

const validate = (req) => {
  const con = new OrderDTO(req.body);
  const order = (index) => {
    return Object.keys(con)[index];
  };
  return [
    body(order(0))
      .exists()
      .withMessage(valMsg.exists(order(0)))
      .not()
      .isEmpty()
      .withMessage(valMsg.empty(order(0)))
      .trim()
      .isNumeric()
      .withMessage(valMsg.number(order(0)))

      .isInt({ min: 0 })
      .withMessage(valMsg.nonNegative(order(0)))
      .escape(),

    body(order(1))
      .exists()
      .withMessage(valMsg.exists(order(1)))
      .not()
      .isEmpty()
      .withMessage(valMsg.empty(order(1)))
      .trim()
      .isNumeric()
      .withMessage(valMsg.number(order(1)))

      .isInt({ min: 0 })
      .withMessage(valMsg.nonNegative(order(1)))
      .escape(),

    body(order(2))
      .exists()
      .withMessage(valMsg.exists(order(2)))
      .not()
      .isEmpty()
      .withMessage(valMsg.empty(order(2)))
      .trim()
      .isNumeric()
      .withMessage(valMsg.number(order(2)))
      .isInt({ min: 0 })
      .withMessage(valMsg.nonNegative(order(2)))
      .escape(),
    body(order(3))
      .exists()
      .withMessage(valMsg.exists(order(3)))
      .not()
      .isEmpty()
      .withMessage(valMsg.empty(order(3)))
      .trim()
      .isNumeric()
      .withMessage(valMsg.number(order(3)))

      .isInt({ min: 0 })
      .withMessage(valMsg.nonNegative(order(3)))
      .escape(),

    body(order(4))
      .exists()
      .withMessage(valMsg.exists(order(4)))
      .not()
      .isEmpty()
      .withMessage(valMsg.empty(order(4)))
      .trim()
      .isNumeric()
      .withMessage(valMsg.number(order(4)))

      .isInt({ min: 0 })
      .withMessage(valMsg.nonNegative(order(4)))
      .escape(),
  ];
};
module.exports = validate;
