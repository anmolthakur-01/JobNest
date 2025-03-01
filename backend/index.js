const express = require("express");
const app = express();

const adminroutes = require("./route/apiRoutes");
const db = require("./config/db");

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());
app.use("/api", adminroutes);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, (err) => {
  if (err) {
    console.log("Server error occur!");
  } else {
    console.log("Server running at port no. " + 3000);
  }
});
