const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Controllers
const propertiesCtrl = require("./controllers/propertiesController");
const authCtrl = require("./controllers/authorizationController");
const usersCtrl = require("./controllers/usersController");

// Sets view engine config
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

app.use((req, res, next) => {
  if (req.url !== "/login" && req.url !== "/" && !req.session.currentUser)
    return res.redirect("/login");
  next();
});

// -------------- Routes ------------- //

// Home Root Route
app.get("/", (req, res) => {
  res.render("index");
});

// Auth Routes
app.use("/", authCtrl);

// Properties Route
app.use("/properties", propertiesCtrl);

// Users Routes
app.use("/profile", usersCtrl);

// ------------ Server Listener ----------- //
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
