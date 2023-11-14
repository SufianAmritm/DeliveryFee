const express = require('express');
const containerRouter = express.Router();
const postContainer = require('../controllers/Container');
const validate = require('../validator/ContainerValidationHandler');
containerRouter.post('/', validate, postContainer);
module.exports = containerRouter;
