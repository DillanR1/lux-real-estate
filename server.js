const express = require("express");
const methodOverride = require("method-override");
const app = express();
const PORT = process.env.PORT || 4000;

// Controllers

const propertiesCtrl = require("./controllers/propertiesController");

app.set("view engine", "ejs");

// ------------- Middleware ---------- //

// Serve static assets (Front End JavaScript, CSS, Images ETC. )
app.use(express.static(`${__dirname}/public`));

console.log("Absolute path to projecct directory = ", __dirname);

// Method Override
app.use(methodOverride("_method"));

// Express Body Parser
app.use(express.urlencoded({ extended: false }));

// Custom Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date().toLocaleTimeString()}`);
  next();
});

// -------------- Routes ------------- //

// Home Root Route
app.get("/", (req, res) => {
  res.render("index");
});

// Properties Route
app.use("/properties", propertiesCtrl);

// ------------ Server Listener ----------- //
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
