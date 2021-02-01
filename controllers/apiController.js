const express = require("express");
const router = express.Router();

// DB
const db = require("../models");

// Current Path + 'api/v1'

// API Routes Always Respond With Json

router.get("/properties", (req, res) => {
  console.log("Properties API Hit...");
  // Get all properties from DB
  db.Property.find({}, (err, allProperties) => {
    if (err) res.status(400).json(err);

    res.json(allProperties);
  });
});

router.delete("/properties/:id", (req, res) => {
  db.Property.findByIdAndDelete(req.params.id, (err, deletedProperty) => {
    if (err) return res.json(err);

    res.json({ successs: true });
  });
});

module.exports = router;
