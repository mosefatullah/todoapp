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
     return v.length > 2 && v.length < 20;
    },
    message: "Username must be longer than 2 and shorter than 20 characters!",
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
     return v.length > 5 && v.length < 50;
    },
    message: "Email must be longer than 5 and shorter than 50 characters!",
   },
  ],
 },
 password: {
  type: String,
  required: true,
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
