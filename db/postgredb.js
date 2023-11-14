const knex = require('knex');

const knexFile = require('./knexfile');
require('dotenv').config();

const db = knex(knexFile.development);
module.exports = db;
