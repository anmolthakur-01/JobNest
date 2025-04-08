const mongoose = require("mongoose");

const employerSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null },
  name: { type: String, default: null },
  email: { type: String, default: null },
  password: { type: String, default: null },
  companyName: { type: String, default: null },
  description: { type: String, default: null },
  tagline: { type: String, default: null },
  website: { type: String, default: null },
  logo: { type: String, default: "no_image.jpg" },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: "active" },
});

module.exports = mongoose.model("employer", employerSchema);
