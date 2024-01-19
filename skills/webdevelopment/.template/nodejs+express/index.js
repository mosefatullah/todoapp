// Dependencies
const express = require("express");

// app object - module scaffolding
const app = express();

// Configuration
app.set("PORT", process.env.PORT || 5000);
app.use(express.json());

// Routes
app.get("/", (req, res) => {
 res.send("Hello World");
});
app.use((req, res) => {
 res.status(404).send("<h1>404 Page Not Found</h1>");
});
app.listen(app.get("PORT"), () => {
 console.log(`Server is listening on PORT ${app.get("PORT")}`);
});

// export the app
module.exports = app;