const Container = require("../dto/ContainerDTO");
const containerValidate = require("./ContainerValidate");

const { validationResult } = require("express-validator");
const productValidate = require("./ProductValidate");
const Product = require("../dto/ProductDTO");
const ContProd = require("../dto/ContProdDTO");

const validateContainer = (req, res, next) => {
  const containerValidationMiddleware = containerValidate(req);
  const runContainerMiddleware = async () => {
    for (const middleware of containerValidationMiddleware) {
      await new Promise((resolve) => middleware(req, res, resolve));
    }
    next();
  };
  runContainerMiddleware();
};

const validateProduct = (req, res, next) => {
  const productValidationMiddleware = productValidate(req);
  const runProductMiddleware = async () => {
    for (const middleware of productValidationMiddleware) {
      await new Promise((resolve) => middleware(req, res, resolve));
    }
    next();
  };
  runProductMiddleware();
};

const validate = [
  validateContainer,
  validateProduct,

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];

module.exports = validate;
