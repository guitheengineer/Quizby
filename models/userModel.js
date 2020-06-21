const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
