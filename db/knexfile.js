// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config();

// console.log(process.env);
console.log();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'postgres',
      user: process.env.USER,
      password: process.env.PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_mig',
    },
  },
};
