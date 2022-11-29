const connection = require("../index.js");

module.exports = {
  //a function which fetches all the users.
  getAll: function (callback) {
    const sql = `SELECT * FROM house`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  add: function (callback, name, description, location, surface, price, image) {
    const sql = `INSERT INTO house (name,description,location ,surface , price , image  ) VALUES("${name}",   "${description}", "${location}", "${surface}" , "${price}","${image}")`;
    connection.query(sql, (err, result) => {
      callback(err, result);
    });
  },

  update: function (callback, name, id) {
    const sql = `UPDATE house SET name = '${name}' WHERE id =${id}`;
    connection.query(sql, (err, result) => {
      callback(err, result);
    });
  },

  delete: function (callback, id) {
    const sql = `DELETE FROM house WHERE id = ${id}`;
    connection.query(sql, (err, result) => {
      callback(err, result);
    });
  },
};
