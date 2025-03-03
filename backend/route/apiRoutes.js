const router = require("express").Router();
const categoryController = require("../server/jobCategory/categoryController");

router.post("/category/add", categoryController.addJobCategory);
router.post("/category/getall", categoryController.getAllCategory);
router.post("/category/getsingle", categoryController.getSingleCategory);
router.post("/category/update", categoryController.updateCategory);
router.post("/category/delete", categoryController.deleteCategory);

module.exports = router;
