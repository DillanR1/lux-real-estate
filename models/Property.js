const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
