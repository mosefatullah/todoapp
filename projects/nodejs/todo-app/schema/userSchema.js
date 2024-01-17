const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
 username: {
  type: String,
  required: true,
  unique: true,
  minlength: 3,
 },
 password: {
  type: String,
  required: true,
  minlength: 6,
 },
 email: {
  type: String,
  required: true,
  unique: true,
  validate: {
   validator: function (v) {
    return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
   },
  },
 },
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
