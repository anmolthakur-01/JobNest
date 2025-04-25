const mongoose = require("mongoose");

const seekerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", default: null },
  name: { type: String, default: null },
  email: { type: String, default: null },
  password: { type: String, default: null },
  phone: { type: Number, default: null },
  resume: { type: String, default: null },
  bio: { type: String, default: null },
  skills: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  status: { type: Boolean, default: true },
});

module.exports = new mongoose.model("jobSeeker", seekerSchema);
