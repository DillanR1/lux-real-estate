// Here mongoose is going to give us the ability to make DB connections

const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/lux-real-estate";

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
};
