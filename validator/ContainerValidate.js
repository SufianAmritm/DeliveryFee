const { body } = require("express-validator");
const valMsg = require("./ValidationConstants");
const { reqBodyAssign, reqBody } = require("./ReqBodyConstants");

const validate = [
  body("container")
    .exists()
    .withMessage(valMsg.exists("container"))
    .not()
    .isEmpty()
    .withMessage(valMsg.empty("container"))
    .matches(/^[A-Z]{3}-\d+$/)
    .withMessage(valMsg.format("container")),

  body("quantity")
    .exists()
    .withMessage(valMsg.exists("quantity"))
    .not()
    .isEmpty()
    .withMessage(valMsg.empty("quantity"))
    .isNumeric()
    .withMessage(valMsg.number("quantity"))

    .isInt({ min: 0 })
    .withMessage(valMsg.nonNegative("quanitity")),

  body("price")
    .exists()
    .withMessage(valMsg.exists("price"))
    .not()
    .isEmpty()
    .withMessage(valMsg.empty("price"))
    .isNumeric()
    .withMessage(valMsg.number("price"))

    .isInt({ min: 0 })
    .withMessage(valMsg.nonNegative("price")),
];
module.exports = validate;
