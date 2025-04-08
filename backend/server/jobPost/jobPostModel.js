const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema({
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", default: null },
  jobCategory: { type: String, default: null },
  jobTitle: { type: String, default: null },
  jobType: { type: String, default: null },
  salaryPackage: { type: String, default: null },
  skills: { type: String, default: null },
  experience: { type: String, default: null },
  jobDuration: { type: String, default: null },
  jobDescription: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: "active" },
});

module.exports = mongoose.model("JobPost", jobPostSchema);
