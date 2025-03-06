const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  qualification: {
    type: String,
    default: null,
  },
  collageName: {
    type: String,
    default: null,
  },
  yearOfPassing: {
    type: Number,
    default: null,
  },
  percentage: {
    type: Number,
    default: null,
  },
  stream: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Education", educationSchema);