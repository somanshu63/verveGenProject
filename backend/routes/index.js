var express = require("express");
var router = express.Router();
const upload = require("../middlewares/upload");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    console.log(file.path);
    const fileDocument = new File({
      filename: file.filename,
      path: file.path,
      mimeType: file.mimetype,
      size: file.size,
      uploadDate: new Date(),
    });
    const savedDocument = await fileDocument.save();
    console.log(savedDocument);
    res.status(200).send({
      message: "File uploaded successfully",
      file: savedDocument,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
