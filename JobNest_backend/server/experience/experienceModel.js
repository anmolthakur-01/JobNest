const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  employerName: {
    type: String,
    default: null,
  },
  typeOfEmployment: {
    type: String,
    default: null,
  },
  designation: {
    type: String,
    default: null,
  },
  ctcPerMonth: {
    type: Number,
    default: null,
  },
  fromDate: {
    type: String,
    default: Date.now,
  },
  toDate: {
    type: String,
    default: Date.now,
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

module.exports = mongoose.model("Experience", experienceSchema);
