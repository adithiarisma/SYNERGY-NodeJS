const { Int32 } = require("mongodb");
const Mongoose = require("mongoose");

var Schema = new Mongoose.Schema({
  username: { type: String },
  password: { type: String },
  fullname: { type: String },
  email: { type: String },
  age: { type: String },
  description: { type: String },
});

const user = Mongoose.model("user", Schema);

module.exports = user;
