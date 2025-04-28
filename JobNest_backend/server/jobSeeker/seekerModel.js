const mongoose = require("mongoose");

const seekerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", default: null },
  name: { type: String, default: null },
  email: { type: String, default: null },
  password: { type: String, default: null },
  phone: { type: Number, default: null },
  bio: { type: String, default: null },
  skills: { type: String, default: null },
  profileImage: { type: Array, default: "no_image.jpg" },
  resume: { type: Array, default: "no_image.jpg" },
  createdAt: { type: Date, default: Date.now() },
  status: { type: Boolean, default: true },
});

module.exports = new mongoose.model("jobSeeker", seekerSchema);
