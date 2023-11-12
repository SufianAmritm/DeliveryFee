const { body } = require("express-validator");
const valMsg = require("./ValidationConstants");
let prod_date;
let exp_date;
const validate = [
  body("product")
    .exists()
    .withMessage(valMsg.exists("product"))
    .not()
    .isEmpty()
    .withMessage("Must provide product value"),
  body("product.name")
    .exists()
    .withMessage("Must provide product name")
    .not()
    .isEmpty()
    .withMessage("Must provide product name value"),
  body("product.company")
    .exists()
    .withMessage("Must provide product company")
    .not()
    .isEmpty()
    .withMessage("Must provide product company value"),

  body("product.prod_date")
    .isISO8601()
    .withMessage("Production date must be a valid ISO 8601 date.")
    .bail()
    .custom((value) => {
      prod_date = new Date(value);
      return true;
    }),
  body("product.exp_date")
    .isISO8601()
    .withMessage("Expiration date must be a valid ISO 8601 date.")
    .bail()
    .custom((value) => {
      exp_date = new Date(value);

      if (prod_date >= exp_date) {
        throw new Error("Production date must be smaller than expiration date");
      }
      return true;
    }),
];
module.exports = validate;
