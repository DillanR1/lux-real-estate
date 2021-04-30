const db = require("./models");
const data = require("./propertyData.json");

db.Property.deleteMany({}, (err, deletedProperties) => {
  db.Property.create(data.properties, (err, seededProperties) => {
    if (err) console.log(err);

    console.log(data.properties.length, "properties generated successfully");

    process.exit();
  });
});
