const mongoose = require("mongoose");

const jobCategorySchema = mongoose.Schema({
  categoryName: { type: String, default: null },
  description: { type: String, default: null },
  status: { type: Boolean, default: true },
  createAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("jobCategory", jobCategorySchema);
