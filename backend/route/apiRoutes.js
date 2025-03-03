const router = require("express").Router();
const categoryController = require("../server/jobCategory/categoryController");
const postController = require("../server/jobPost/jobPostController");

// Job Category Routes
router.post("/category/add", categoryController.addJobCategory);
router.post("/category/getall", categoryController.getAllCategory);
router.post("/category/getsingle", categoryController.getSingleCategory);
router.post("/category/update", categoryController.updateCategory);
router.post("/category/delete", categoryController.deleteCategory);

// Job Post Routes
router.use("/post/add", postController.addJobPost);
router.use("/post/getall", postController.getAllPost);
router.use("/post/getsingle", postController.getSinglePost);
router.use("/post/update", postController.updatePost);
router.use("/post/delete", postController.deletePost);

module.exports = router;
