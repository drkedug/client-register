const mysql = require('mysql2');

const dbCreateConnection = () => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "admin",
    database: "sistema",
    port: 3307,
  });

  return con;
}

module.exports = { dbCreateConnection };