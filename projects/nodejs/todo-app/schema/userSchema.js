const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
 username: {
  type: String,
  required: true,
  unique: true,
  validate: [
   {
    validator: function (v) {
     return /^[a-zA-Z0-9_-]+$/.test(v);
    },
    message: "Username should only contain alphanumeric, underscore, and dash!",
   },
   {
    validator: function (v) {
     return v.length > 3 && v.length < 20;
    },
    message: "Username must be longer than 3 and shorter than 20 characters!",
   },
  ],
 },
 password: {
  type: String,
  required: true,
  validate: [
   {
    validator: function (v) {
     return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v);
    },
    message:
     "Password must be longer than 8 characters and contain at least 1 letter and 1 number!",
   },
   {
    validator: function (v) {
     return v.length > 8 && v.length < 20;
    },
    message: "Password must be longer than 8 and shorter than 20 characters!",
   },
  ],
 },
 email: {
  type: String,
  required: true,
  unique: true,
  validate: [
   {
    validator: function (v) {
     return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
    },
    message: "Email is not valid!",
   },
   {
    validator: function (v) {
     return v.length > 5 && v.length < 20;
    },
    message: "Email must be longer than 5 and shorter than 20 characters!",
   },
  ],
 },
 todos: [
  {
   type: mongoose.Schema.Types.ObjectId,
   ref: "Todo",
  },
 ],
 createdAt: {
  type: Date,
  default: Date.now,
 },
 lastLoginAt: {
  type: Date,
  default: Date.now,
 },
});

module.exports = userSchema;
