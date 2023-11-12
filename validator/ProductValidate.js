const { body } = require("express-validator");
const valMsg = require("./ValidationConstants");
const productDTO = require("../dto/ProductDTO");
let prodDate;
let expDate;
const validate = (req) => {
  const pro = new productDTO(req.body);
  const product = (index) => {
    return `product.${Object.keys(pro)[index]}`;
  };

  return [
    body(product(0))
      .exists()
      .withMessage(valMsg.exists(product(0)))
      .not()
      .isEmpty()
      .withMessage(valMsg.empty(product(0)))
      .escape(),
    body(product(1))
      .exists()
      .withMessage(valMsg.exists(product(1)))
      .not()
      .isEmpty()
      .withMessage(valMsg.empty(product(1)))
      .escape(),

    body(product(2))
      .isISO8601()
      .withMessage(valMsg.validDate(product(2)))
      .bail()
      .escape()
      .custom((value) => {
        prodDate = new Date(value);
        return true;
      }),
    body(product(3))
      .isISO8601()
      .withMessage(valMsg.validDate(product(3)))
      .bail()
      .escape()
      .custom((value) => {
        expDate = new Date(value);

        if (prodDate >= expDate) {
          throw new Error(
            "Production date must be smaller than expiration date"
          );
        }
        return true;
      }),
  ];
};
module.exports = validate;
