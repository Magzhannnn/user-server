const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  marriage: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
