const router = require("express").Router();
const categoryController = require("../server/jobCategory/categoryController");

router.post("/addcategorydata", categoryController.addJobCategory);

module.exports = router;
