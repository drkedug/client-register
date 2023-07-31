const mysql = require('mysql2');

const { 
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_NAME,
} = proccess.env;

const connect = () => {
  return mysql.createConnection({
    host     : DB_HOST,
    user     : DB_USER,
    password : DB_PASS,
    database : DB_NAME,
  });
}

module.exports = {
  connect,
};