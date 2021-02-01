const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

// DB
const db = require("../models");

// Login Form Route
router.get("/login", (req, res) => {
  res.render("auth/login");
});

// Register form route
router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/login", (req, res) => {
  // Find User via Email
  db.User.findOne({ email: req.body.email }, (err, foundUser) => {
    if (err) return console.log(err);

    // Respond with 400 error if user is not found
    if (!foundUser) {
      return res.send("No User Found");
    }
    // Compare User Password and foundUser Password
    bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
      if (err) return console.log(err);

      // Create Session and Respong with 200 if passwords match
      if (isMatch) {
        // Create currentUser Object (Hide User Password)
        const currentUser = {
          _id: foundUser._id,
          name: foundUser.name,
          email: foundUser.email,
          isLoggedIn: true,
        };

        // Create A New Session and Respond 200
        req.session.currentUser = currentUser;
        res.redirect("/profile");
      } else {
        // Respond with 400 If Passwords Do Not Match
        return res.send("Passwords do not match");
      }
    });
  });
});

// Register Create
router.post("/register", (req, res) => {
  // Check For Existing User Account
  db.User.findOne({ email: req.body.email }, (err, foundUser) => {
    if (err) return console.log("User Already Exists");

    // Return Error If Account Already Exists
    if (foundUser) return console.log("User Already Exists");

    // Generate Hash Salt to Make Password Harder To Crack
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return console.log(err);

      // Turn plain text to hashed Password
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) return console.log(err);

        // Destructure New User Data From Request
        const { name, email, password } = req.body;

        // Construct New User Object with Hashed Password
        const newUser = {
          name,
          email,
          password: hash, // IMPORTANT to hash passwords! Never save plain test password
        };

        // Create New User
        db.User.create(newUser, (err, createdUser) => {
          if (err) return console.log(err);

          res.redirect("/login");
        });
      });
    });
  });
});

// Logout Route
router.get("/logout", (req, res) => {
  if (!req.session.currentUser)
    return res.send("You must be logged in to logout");

  req.session.destroy((err) => {
    if (err) return console.log(err);

    res.redirect("/login");
  });
});

module.exports = router;
