const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
 username: {
  type: String,
  required: true,
  unique: true,
  minlength: 3,
  maxlength: 20,
 },
 password: {
  type: String,
  required: true,
  minlength: 6,
  maxlength: 20,
 },
 email: {
  type: String,
  required: true,
  unique: true,
  maxlength: 50,
  validate: {
   validator: function (v) {
    return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
   },
  },
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
