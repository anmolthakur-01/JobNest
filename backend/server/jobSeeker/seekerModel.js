const mongoose = require("mongoose");

const seekerSchema = mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, default: null },
  password: { type: String, default: null },
  phone: { type: Number, default: null },
  resume: { type: String, default: null },
  createdAt: { type: Date, default: Date.now() },
  status: { type: Boolean, default: "true" },
});

module.exports = mongoose.model("jobSeeker", seekerSchema);
