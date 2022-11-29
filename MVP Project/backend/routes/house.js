const express = require("express");
const router = express.Router();

const {
  getAllhouse,
  addhouse,
  updatehouse,
  deletehouse,
} = require("../controllers/house.js");

router.get("/getAll", getAllhouse);

router.post("/add", addhouse);

router.put("/put/:id", updatehouse);

router.delete("/delete/:id", deletehouse);

module.exports = router;
