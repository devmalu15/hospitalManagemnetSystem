const mongoose = require("mongoose");

const airportSchema = new mongoose.Schema({
  hospitalName: { type: String, required: true, trim: true },
  location: { type: String, required: true },
  numberOfBeds: { type: Number, required: true },
  numberOfDoctors: { type: Number, required: true }
});

module.exports = mongoose.model("Airport", airportSchema);
