var jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = {
  verifyToken: async (req, res, next) => {
    var token = req.headers.authorization;
    try {
      if (token) {
        var payload = await jwt.verify(token, process.env.SECRET);
        req.user = payload;
        next();
      } else {
        res.status(400).json({ error: "no user logged in" });
      }
    } catch (error) {
      next(error);
    }
  },
};
