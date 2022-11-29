const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "house_data",
});

connection.connect((err) => {
  if (err) {
    log.error(err);
  } else {
    console.log("yup conected !!");
  }
});

module.exports = connection;
