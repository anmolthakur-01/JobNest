const router = require("express").Router();
const categoryController = require("../server/jobCategory/categoryController");

router.post("/category/add", categoryController.addJobCategory);
router.post("/category/getall", categoryController.getAllCategory);

module.exports = router;
