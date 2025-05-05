const express = require("express");
const cookieParser = require("cookie-parser");
const adminroutes = require("./routes/apiRoutes");

const app = express();
const cors = require("cors");
app.use(cors());

const bodyparser = require("body-parser");
app.use(bodyparser.json);

app.use(cookieParser());

const db = require("./config/db");
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

app.use("/api", adminroutes);

const seeder = require("./config/seeder");
seeder.admin();

app.use("/", (req, res) => {
  res.send("Welcome to JobNest API");
});

app.listen(3000, (err) => {
  if (err) throw console.log("Server error occur!");
  else console.log("Server running at port no. " + 3000);
});
