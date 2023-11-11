const express = require("express");
const Router = express.Router();
const getContainer = require("../controllers/Container");
Router.route("/").get(getContainer);
