const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = require("../schema/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User model
const User = mongoose.model("User", userSchema);

// GET - get all users
router.get("/", async (req, res) => {
 try {
  const data = await User.find()
   .limit(parseInt(req.body.endAt))
   .skip(parseInt(req.body.startAt))
   .select("-password");
  res.status(200).json({
   message: "Users were fetched successfully!",
   data,
  });
 } catch (err) {
  res.status(500).json({
   error: err.message || "Some error occurred!",
  });
 }
});

// GET - get a user by id
router.get("/:username", async (req, res) => {
 try {
  const data = await User.findOne({ username: req.params.username }).select(
   "-password"
  ) || {};
  res.status(200).json({
   message: "User was fetched successfully!",
   data,
  });
 } catch (err) {
  res.status(500).json({
   error: err.message || "Some error occurred while retrieving the User.",
  });
 }
});

// POST - create a new user
router.post("/signup", async (req, res) => {
 if (req.body.username && req.body.password && req.body.email) {
  const newUser = new User({
   username: req.body.username,
   password: bcrypt.hashSync(req.body.password, 10),
   email: req.body.email,
   createdAt: Date.now(),
   lastLoginAt: Date.now(),
  });
  try {
   const data = await newUser.save();
   res.status(201).json({
    message: "User was created successfully!",
    data,
   });
  } catch (err) {
   res.status(500).json({
    error: err.message || "Some error occurred!",
   });
  }
 } else {
  res.status(400).json({
   error: "Please provide all required fields!",
  });
 }
});

// POST - login a user
router.post("/login", async (req, res) => {
 try {
  let reqObj = {};
  if (req.body.username) reqObj = { username: req.body.username };
  if (req.body.email) reqObj = { email: req.body.email };
  const user = await User.findOne(reqObj);
  if (user) {
   if (bcrypt.compareSync(req.body.password, user.password)) {
    const token = jwt.sign(
     {
      username: user.username,
      userId: user._id,
     },
     process.env.JWT_SECRET,
     {
      expiresIn: "1h",
     }
    );
    res.status(200).json({
     message: "User was logged in successfully!",
     accessToken: token,
    });
   } else {
    res.status(401).json({
     error: "Authentication failed!",
    });
   }
  } else {
   res.status(401).json({
    error: "Authentication failed!",
   });
  }
 } catch (err) {
  res.status(500).json({
   error: "Some error occurred!",
  });
 }
});

// PUT - update a user by id
router.put("/:id", async (req, res) => {
 try {
  let updatedUser = {
   updatedAt: Date.now(),
  };
  if (req.body.title) updatedUser.title = req.body.title;
  if (req.body.description) updatedUser.description = req.body.description;
  if (req.body.status) updatedUser.status = req.body.status;
  await User.updateOne(
   { _id: req.params.id },
   {
    $set: updatedUser,
   }
  );
  res.status(200).json({
   message: "User was updated successfully!",
   data: updatedUser,
  });
 } catch (err) {
  res.status(500).json({
   error: err.message || "Some error occurred!",
  });
 }
});

// DELETE - delete a user by id
router.delete("/:id", async (req, res) => {
 try {
  await User.deleteOne({ _id: req.params.id });
  res.status(200).json({
   message: "User was deleted successfully!",
  });
 } catch (err) {
  res.status(500).json({
   error: err.message || "Some error occurred!",
  });
 }
});

module.exports = router;
