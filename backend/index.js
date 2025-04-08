const express = require("express");
const app = express();

const adminroutes = require("./routes/apiRoutes");
app.use("/api", adminroutes);

const db = require("./config/db");
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

const seeder = require("./config/seeder");
seeder.admin();

app.use("/", (req,res)=>{
  res.send("Welcome to JobNest API");
});

app.listen(3000, (err) => {
  if (err) throw console.log("Server error occur!");
  else console.log("Server running at port no. " + 3000);
});
