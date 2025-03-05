const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, default: null },
  password: { type: String, default: null },
  companyName: { type: String, default: null },
  description: { type: String, default: null },
  tagline: { type: String, default: null },
  website: { type: String, default: null },
  logo: { type: String, default: null },
  createdAt: { type: Date, default: Date.now() },
  status: { type: Boolean, default: "true" },
});

module.exports = mongoose.model("register", registerSchema);
