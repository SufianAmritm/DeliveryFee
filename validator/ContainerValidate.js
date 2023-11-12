const { body } = require("express-validator");
const valMsg = require("./ValidationConstants");
const containerDTO = require("../dto/ContainerDTO");

const validate = (req) => {
  const con = new containerDTO(req.body);
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
      .matches(/^[A-Z]{3}-\d+$/)
      .withMessage(valMsg.format(container(0)))
      .escape(),

    body(container(1))
      .exists()
      .withMessage(valMsg.exists(container(1)))
      .not()
      .isEmpty()
      .withMessage(valMsg.empty(container(1)))
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
      .isNumeric()
      .withMessage(valMsg.number(container(2)))

      .isInt({ min: 0 })
      .withMessage(valMsg.nonNegative(container(2)))
      .escape(),
  ];
};
module.exports = validate;
