const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema({
  jobCategory: { type: String, required: true, default: null },
  jobTitle: { type: String, required: true, default: null },
  jobType: { type: String, required: true, default: null },
  salaryPackage: { type: Number, required: true, default: null },
  skillsRequired: { type: [String], required: true, default: null },
  experience: { type: String, required: true, default: null },
  jobDuration: { type: String, required: true, default: null },
  jobDescription: { type: String, required: true, default: null },
  createdAt: { type: Date, default: Date.now },
  status: { type: Boolean, default: true },
});

module.exports = mongoose.model("JobPost", jobPostSchema);
