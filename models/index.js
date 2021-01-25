// Here mongoose is going to give us the ability to make DB connections

const mongoose = require("mongoose");
require("dotenv").config();
const connectionString = process.env.MONGODB_URI;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

// Make All Models Available
module.exports = {
  Property: require("./Property"),
  User: require("./User"),
};
