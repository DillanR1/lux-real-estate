const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;

// Controllers
const propertiesCtrl = require("./controllers/propertiesController");
const authCtrl = require("./controllers/authorizationController");
const usersCtrl = require("./controllers/usersController");

// Sets view engine config
app.set("view engine", "ejs");

// CORS
app.use(
  cors({
    origin: ["http://localhost:4000"],
    methods: "GET,POST,PUT,DELETE",
    optionsSuccessStatus: 200,
  })
);

// ------------- Middleware ---------- //

// Serve static assets (Front End JavaScript, CSS, Images ETC. )
app.use(express.static(`${__dirname}/public`));

console.log("Absolute path to project directory = ", __dirname);

// Method Override
app.use(methodOverride("_method"));

// Express Body Parser
app.use(express.urlencoded({ extended: false }));

// Custom Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date().toLocaleTimeString()}`);
  next();
});

// Express Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
    },
  })
);
// -------------- Routes ------------- //

// Home Root Route
app.get("/", (req, res) => {
  res.render("index");
});

// Auth Routes
app.use("/", authCtrl);

// Properties Route
app.use("/properties", propertiesCtrl);
console.log("Server Properties Route Fires");

// Users Routes
app.use("/profile", usersCtrl);

// ------------ Server Listener ----------- //
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
