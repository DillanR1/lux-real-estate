const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: false,
    },
    zip: {
      type: String,
      required: false,
    },
    list_price: {
      type: String,
      required: false,
    },
    propertyPicUrl: {
      data: Buffer,
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
