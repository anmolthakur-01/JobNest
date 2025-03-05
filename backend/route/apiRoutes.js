const router = require("express").Router();
const categoryController = require("../server/jobCategory/categoryController");
const postController = require("../server/jobPost/jobPostController");
const registerController = require("../server/register/registerController");
const seekerController = require("../server/jobSeeker/seekerController");

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

// Register Routes
router.post("/register/add", registerController.register);
router.post("/register/getall", registerController.getRegisterData);
router.post("/register/getsingle", registerController.getSingleRegisterData);
router.post("/register/update", registerController.updateData);
router.post("/register/delete", registerController.deleteData);

// Job Seeker Routes
router.post("/jobseeker/add", seekerController.add);
router.post('/jobseeker/getall', seekerController.getAll);
router.post('/jobseeker/getsingle', seekerController.getSingle);
router.post('/jobseeker/update', seekerController.update);
router.post('/jobseeker/delete', seekerController.deleteData);

module.exports = router;
