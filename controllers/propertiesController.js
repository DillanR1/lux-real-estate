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

// Show Property
router.get("/:id", (req, res) => {
  // Query the database for the author by ID
  db.Property.findById(req.params.id, (err, foundProperty) => {
    if (err) return console.log(err);

    res.render("properties/show", {
      property: foundProperty,
    });
  });
});

// Create Property
router.post("/", (req, res) => {
  // NOTE configure body parser
  // Query the database to create a new record

  // Log the request body
  console.log("Request body= ", req.body);

  db.Property.create(req.body, (err, newProperty) => {
    if (err) return console.log(err);

    // Log the new property
    console.log("New Property = ", newProperty);

    // Redirect to the properties index page or the show page
    res.redirect("/properties");
  });
});

// Edit Properties
router.get("/:id/edit", (req, res) => {
  db.Property.findById(req.params.id, (err, foundProperty) => {
    if (err) return console.log(err);

    res.render("properties/edit", {
      property: foundProperty,
    });
  });
});

// Update Properties
router.put("/:id", (req, res) => {
  // Log the data from the client
  console.log("Updated Property = ", req.body);

  db.Property.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedProperty) => {
      if (err) return console.log(err);

      res.redirect("/properties");
    }
  );
});

module.exports = router;
