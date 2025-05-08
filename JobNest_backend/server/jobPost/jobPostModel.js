const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema({
  jobCategory: { type: String, default: null },
  jobTitle: { type: String, default: null },
  jobDescription: { type: String, default: null },
  jobType: { type: String, default: null },
  salaryPackage: { type: String, default: null },
  requirements: [{ type: String, }],
  // skills: { type: String, default: null },
  location: { type: String, required: true, default: null },
  jobType: { type: String, required: true },
  position: { type: Number, required: true },
  companyName: { type: String, required: true },
  // applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application", }],
  experience: { type: String, default: null },
  jobDuration: { type: String, default: null },
  createdAt: { type: Date, default: Date.now() },
  status: { type: String, default: "active" },
});

module.exports = mongoose.model("JobPost", jobPostSchema);
