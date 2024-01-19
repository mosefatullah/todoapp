const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./handler/todoHandler");
const userHandler = require("./handler/userHandler");
const dotenv = require("dotenv");
const cors = require("cors");

// express app initialization
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors({
    origin: "*",
    methods: "GET,PUT,POST,DELETE"
}));

// database connection
mongoose
 .connect(process.env.MONGODB_URI)
 .then(() => console.log("Connected to database"))
 .catch((err) => console.log(err));

// application routes
app.use("/api/todo", todoHandler);
app.use("/api/user", userHandler);

// default error handler
app.use((err, req, res, next) => {
 if (req.headersSent) {
  return next(err);
 }
 res.status(500).json({
  error: err || "Some error occurred!",
 });
});

app.listen(3000, () => {
 console.log("Listening on port 3000");
});

export default app;