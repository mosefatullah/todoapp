const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schema/todoSchema");
const userSchema = require("../schema/userSchema");
const checkLogin = require("../middlewares/checkLogin");

// Todo model
const Todo = mongoose.model("Todo", todoSchema);
const User = mongoose.model("User", userSchema);

// GET - get all todos
router.get("/", checkLogin, async (req, res) => {
 try {
  const data = await Todo.find()
   .populate("user", "username")
   .limit(parseInt(req.body.endAt))
   .skip(parseInt(req.body.startAt))
   .where("user", req.userId);
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
router.get("/:id", checkLogin, async (req, res) => {
 try {
  const data = (await Todo.findById(req.params.id)) || {};
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
router.post("/", checkLogin, async (req, res) => {
 const newTodo = new Todo({
  user: req.userId,
  ...req.body,
 });
 try {
  const data = await newTodo.save();
  await User.updateOne(
   { _id: req.userId },
   {
    $push: {
     todos: data._id,
    },
   }
  );
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

// PUT - update a todo by id
router.put("/:id", checkLogin, async (req, res) => {
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

// PUT - change status of a todo by id
router.put("/status/:id", checkLogin, async (req, res) => {
 try {
  await Todo.updateOne(
   { _id: req.params.id },
   {
    $set: {
     status: req.body.status,
     updatedAt: Date.now(),
    },
   }
  );
  res.status(200).json({
   message: "Todo status was updated successfully!",
  });
 } catch (err) {
  res.status(500).json({
   error: err.message || "Some error occurred!",
   body: req.body,
  });
 }
});

// DELETE - delete a todo by id
router.delete("/:id", checkLogin, async (req, res) => {
 try {
  await Todo.deleteOne({ _id: req.params.id });
  await User.updateOne(
   { _id: req.userId },
   {
    $pull: {
     todos: req.params.id,
    },
   }
  );
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
