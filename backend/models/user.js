var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

var userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: String,
  name: String,
  file: String,
  isAdmin: Boolean,
});
userSchema.pre("save", async function (next) {
  if (this.password && this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
userSchema.methods.verifyPassword = async function (password) {
  var result = await bcrypt.compare(password, this.password);
  return result;
};

userSchema.methods.signToken = async function () {
  var payload = { email: this.email, id: this.id };
  try {
    var token = await jwt.sign(payload, process.env.SECRET);
    return token;
  } catch (error) {
    return error;
  }
};

module.exports = mongoose.model("User", userSchema);
