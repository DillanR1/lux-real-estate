// Express here will allow routing capabilities
const express = require("express");
const router = express.Router();
const db = require("../models");

// Current Path = 'properties'

// Properties Index
router.get("/", (req, res) => {
  db.Property.find({}, (err, allProperties) => {
    if (err) return console.log(err);

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
  db.Property.findById(req.params.id, (err, foundProperty) => {
    if (err) return console.log(err);

    res.render("properties/show", {
      property: foundProperty,
    });
  });
});

// Create Property
router.post("/", (req, res) => {
  console.log("Request body= ", req.body);

  db.Property.create(req.body, (err, newProperty) => {
    if (err) return console.log(err);

    console.log("New Property = ", newProperty);

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

// Delete Properties
router.delete("/:id", (req, res) => {
  console.log("Deleting Property ID = ", req.params.id);
  db.Property.findByIdAndDelete(req.params.id, (err, deletedProperty) => {
    if (err) return console.log(err);

    console.log("Deleted property = ", deletedProperty);
  });

  res.redirect("/properties");
});

module.exports = router;
