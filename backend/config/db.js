const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/JobNest")
  .then(() => console.log("Database is Connected!"))
  .catch((err) => console.log(err));
