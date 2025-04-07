const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, default: null },
  password: { type: String, default: null },
  userType: { type: String, default: 3},  // 1.admin 2.jobseeker 3.employer
  createdAt: { type: Date, default: Date.now() },
  status: { type: Boolean, default: true },
});

module.exports = mongoose.model("user", userSchema);
