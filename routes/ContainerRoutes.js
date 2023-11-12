const express = require("express");
const Router = express.Router();
const getContainer = require("../controllers/Container");
const validate = require("../validator/validator");
Router.route("/").post(validate, getContainer);
module.exports = Router;
