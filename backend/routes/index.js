var express = require("express");
var router = express.Router();
const upload = require("../middlewares/upload");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "vervegen project" });
});


module.exports = router;
