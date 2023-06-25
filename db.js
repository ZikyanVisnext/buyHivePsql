const { Pool } = require("pg");

const pool = new Pool({
  user: "zikyan",
  host: "localhost",
  database: "thebuyhive",
  password: "dadada",
  port: 5432,
});

module.exports = pool;
