const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
 title: {
  type: String,
  required: true,
  validate: {
   validator: (value) => {
    return value.length > 5 && value.length < 50;
   },
   message: "Title must be longer than 5 and shorter than 50 characters!",
  },
 },
 description: {
  type: String,
  validate: {
   validator: (value) => {
    return value.length < 200;
   },
   message: "Description must be shorter than 200 characters!",
  },
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
