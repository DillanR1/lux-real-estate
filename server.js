const express = require("express");

/* saving all of the functionality of the express var to app as express() returns an object
can later invoke express() and it's methods thru app. */
const app = express();

/* looks at process that is running. In this app it is node.
 through node we can access the environment, which is the global object.
 can create vars within the env object.
 when we deploy, we are looking for a var within the env called PORT. If it exists, we will use it.
 if one does not exist, and we are working locally then const PORT = process.env.PORT || 4000; is acceptable */

const PORT = process.env.PORT || 4000;

// Controllers

const propertiesCtrl = require("./controllers/propertiesController");

app.set("view engine", "ejs");

// ------------- Middleware ---------- //

// Serve static assets (Front End JavaScript, CSS, Images ETC. )
app.use(express.static(`${__dirname}/public`));

console.log("Absolute path to projecct directory = ", __dirname);

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
