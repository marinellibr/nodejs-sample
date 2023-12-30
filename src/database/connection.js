var knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "password",
    database: "database1",
  },
});

module.exports = knex;
