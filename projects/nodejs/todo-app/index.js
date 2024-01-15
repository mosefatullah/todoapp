const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./handler/todoHandler");

// express app initialization
const app = express();
app.use(express.json());

// database connection
mongoose
 .connect("mongodb://localhost:27017/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then(() => console.log("Connected to database"))
 .catch((err) => console.log(err));

// application routes
app.use("/api/todo", todoHandler);

// default error handler

app.listen(3000, () => {
 console.log("Listening on port 3000");
});
