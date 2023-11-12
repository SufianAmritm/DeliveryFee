const ContainerDTO = require("../dto/ContainerDTO");
const containerValidate = require("./ContainerValidate");

const { validationResult } = require("express-validator");
const productValidate = require("./ProductValidate");
const { reqBodyAssign } = require("./ReqBodyConstants");
const validate = [
  // (req, res, next) => {
  //   const DTO = new ContainerDTO(req.body);
  //   reqBodyAssign(DTO);
  //   next();
  // },
  containerValidate,

  productValidate,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    req.body = new ContainerDTO(req.body);

    next();
  },
];

module.exports = validate;
