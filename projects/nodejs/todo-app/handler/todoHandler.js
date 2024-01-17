const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schema/todoSchema");
const checkLogin = require("../middlewares/checkLogin");

// Todo model
const Todo = mongoose.model("Todo", todoSchema);

// GET - get all todos
router.get("/", checkLogin, async (req, res) => {
 try {
  const data = await Todo.find()
   .limit(parseInt(req.body.endAt))
   .skip(parseInt(req.body.startAt));
  res.status(200).json({
   message: "Todos were fetched successfully!",
   data,
  });
 } catch (err) {
  res.status(500).json({
   error: err.message || "Some error occurred!",
  });
 }
});

// GET - get a todo by id
router.get("/:id", async (req, res) => {
 try {
  const data = await Todo.findById(req.params.id) || {};
  res.status(200).json({
   message: "Todo was fetched successfully!",
   data,
  });
 } catch (err) {
  res.status(500).json({
   error: err.message || "Some error occurred!",
  });
 }
});

// POST - create a new todo
router.post("/", async (req, res) => {
 const newTodo = new Todo(req.body);
 try {
  const data = await newTodo.save();
  res.status(201).json({
   message: "Todo was inserted successfully!",
   data,
  });
 } catch (err) {
  res.status(500).json({
   error: err.message || "Some error occurred!",
  });
 }
});

// POST - create multiple todos
router.post("/bulk", async (req, res) => {
 try {
  const data = await Todo.insertMany(req.body);
  res.status(201).json({
   message: "Todos were inserted successfully!",
   data,
  });
 } catch (err) {
  res.status(500).json({
   error: err.message || "Some error occurred!",
  });
 }
});

// PUT - update a todo by id
router.put("/:id", async (req, res) => {
 try {
  let updatedTodo = {
   updatedAt: Date.now(),
  };
  if (req.body.title) updatedTodo.title = req.body.title;
  if (req.body.description) updatedTodo.description = req.body.description;
  if (req.body.status) updatedTodo.status = req.body.status;
  await Todo.updateOne(
   { _id: req.params.id },
   {
    $set: updatedTodo,
   }
  );
  res.status(200).json({
   message: "Todo was updated successfully!",
   data: updatedTodo,
  });
 } catch (err) {
  res.status(500).json({
   error: err.message || "Some error occurred!",
  });
 }
});

// DELETE - delete a todo by id
router.delete("/:id", async (req, res) => {
 try {
  await Todo.deleteOne({ _id: req.params.id });
  res.status(200).json({
   message: "Todo was deleted successfully!",
  });
 } catch (err) {
  res.status(500).json({
   error: err.message || "Some error occurred!",
  });
 }
});

module.exports = router;
