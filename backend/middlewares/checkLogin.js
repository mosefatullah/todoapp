const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
 const { authorization } = req.headers;
 try {
  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const { userId, username } = decoded;
  req.userId = userId;
  req.username = username;
  next();
 } catch {
  next("Authentication failed!");
 }
};

module.exports = checkLogin;
