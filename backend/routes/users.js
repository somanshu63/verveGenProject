var express = require("express");
const User = require("../models/user");
const auth = require("../middlewares/auth");
var router = express.Router();
const upload = require("../middlewares/upload");
var fs = require("fs-extra");
const AWS = require("aws-sdk");
var excelToJson = require("convert-excel-to-json");
AWS.config.update({ region: "your-region" });

const s3 = new AWS.S3({
  accessKeyId: "AKIAXKOITDZOZRDUFLEL",
  secretAccessKey: "uKo09414WoRbqJhn2JPMyr65/Vv2p5z62aH18SQh",
  region: "ap-south-1",
});

/* GET users listing. */
router.get("/", auth.verifyToken, async function (req, res, next) {
  try {
    var user = await User.findOne({ email: req.user.email });
    if (!user) {
      res.status(400).json({ error: "no user" });
    } else {
      var token = await user.signToken();

      res.status(200).json({ user, token });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", upload.single("file"), async (req, res, next) => {
  // console.log(req.file, req.body);
  // const fileContent = fs.readFileSync(req.file.path);
  // const params = {
  //   Bucket: "vervegen",
  //   Key: req.file.originalname,
  //   Body: fileContent,
  //   ContentType: req.file.mimetype,
  // };
  // s3.upload(params, async (err, data) => {
  //   if (err) {
  //     return res.status(500).send(err);
  //   }
  req.body.file = req.file.filename;
  req.body.isAdmin = false;
  var user = await User.create(req.body);
  var token = await user.signToken();
  res.send({ user, token });
  // });
});

router.post("/login", async (req, res, next) => {
  var { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "email/password required" });
  }
  var user = await User.findOne({ email });
  if (!user) {
    res.status(400).json({ error: "email not registered" });
  }
  var result = await user.verifyPassword(password);
  if (!result) {
    res.status(400).json({ error: "wrong password" });
  }
  console.log(user);
  try {
    // const params = {
    //   Bucket: "vervegen",
    //   Key: user.file,
    // };
    // s3.getObject(params, async (err, data) => {
    //   if (err) {
    //     return res.status(500).send(err);
    //   }
    var token = await user.signToken();
    const excelData = excelToJson({
      sourceFile: "uploads/" + user.file,
    });
    res.status(200).json({ user, token, excelData });
    // });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
