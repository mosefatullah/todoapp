const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
 title: {
    type: String,
    required: true,
 },
 description: String,
 status: {
    type: String,
    enum: ["undone", "done"],
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