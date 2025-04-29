const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  isPatient: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: Number, required: true }
});

module.exports = mongoose.model("User", userSchema);