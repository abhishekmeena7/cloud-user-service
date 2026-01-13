const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobile: {
    type: String,
    match: /^[0-9]{10}$/
  },
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/
  },
  address: {
    street: String,
    city: String,
    state: String,
    country: String
  },
  loginId: {
    type: String,
    match: /^[A-Za-z0-9]{8}$/
  },
  password: {
    type: String,
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
