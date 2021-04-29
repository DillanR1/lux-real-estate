const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// NOTE I left the below console log in to console log the API
//connection string in the .env backup file for learning purposes

//console.log(process.env.GOOGLE_BOOKS_API)

// Controllers
const propertiesCtrl = require("./controllers/propertiesController");
const authCtrl = require("./controllers/authorizationController");
const usersCtrl = require("./controllers/usersController");
const apiCtrl = require("./controllers/apiController");

// Sets view engine config
app.set("view engine", "ejs");

// CORS   --- NOTE: Allows cookies to be sent back and forth from the server to the client
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

// app.use((req, res, next) => {
//   if (req.url !== "/login" && req.url && req.url !== "/" && !req.session.currentUser)
//     return res.redirect("/login");
//   next();
// });

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

// API Routes
app.use("/api/v1", apiCtrl);

// ------------ Server Listener ----------- //
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
