// Express here will allow routing capabilities
const express = require("express");
const router = express.Router();
const db = require("../models");

// Current Path = 'properties'

// Properties Index
router.get("/", (req, res) => {
  // Query the DB for all properties with an empty object {}, (no criteria at this time)
  db.Property.find({}, (err, allProperties) => {
    if (err) return console.log(err);

    // Log all properties
    console.log("All Properties = ", allProperties);

    res.render("properties/index", {
      properties: allProperties,
    });
  });
});

// New Property
router.get("/new", (req, res) => {
  res.render("properties/new");
});

// Create Property
router.post("/", (req, res) => {
  // NOTE configure body parser
  // Query the database to create a new record
  // Redirect to the properties index page or the show page
});

module.exports = router;
