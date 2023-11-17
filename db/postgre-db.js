const knex = require('knex');

const knexfile = require('./knex-file');
require('dotenv').config();

const db = knex(knexfile.development);
module.exports = db;
