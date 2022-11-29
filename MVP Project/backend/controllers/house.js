const house = require("../database/models/house.js");

module.exports = {
  //method to fetch all users from the blog database.
  getAllhouse: function (req, res) {
    house.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  //method to add a user to the database via the respective model function.
  addhouse: (req, res) => {
    house.add(
      (err, result) => {
        if (err) res.status(500).send(err);
        else res.json(result);
      },
      req.body.name,
      req.body.description,
      req.body.location,
      req.body.surface,
      req.body.price,
      req.body.image
    );
  },




  updatehouse: (req, res) => {
    house.update(
      (err, result) => {
        if (err) res.status(500).send(err);
        else res.json(result);
      },
      req.body.name,
      req.params.id
    );
  },

  deletehouse: (req, res) => {
    house.delete((err, result) => {
      if (err) res.status(500).send(err);
      else res.json(result);
    }, req.params.id);
  },
};
