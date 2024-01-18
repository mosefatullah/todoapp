const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
 title: {
  type: String,
  required: true,
  minlength: 3,
  maxlength: 20,
 },
 description: {
  type: String,
  maxlength: 250,
 },
 status: {
  type: String,
  enum: ["undone", "done"],
 },
 user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
 },
 createdAt: {
  type: Date,
  default: Date.now,
 },
 updatedAt: {
  type: Date,
  default: Date.now,
 },
});

module.exports = todoSchema;
