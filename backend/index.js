const express = require("express");
const app = express();
const adminroutes = require("./routes/apiRoutes");
const db = require("./config/db");
const seeder = require("./config/seeder");

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

seeder.admin();

app.use("/api", adminroutes);

app.get("/", function (req, res) {
  res.send("Welcome to project");
});

app.listen(3000, (err) => {
  if (err) throw console.log("Server error occur!");
  else console.log("Server running at port no. " + 3000);
});
