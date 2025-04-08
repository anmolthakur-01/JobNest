const router = require("express").Router();
const categoryController = require("../server/jobCategory/categoryController");
const postController = require("../server/jobPost/jobPostController");
const employerController = require("../server/employer/employerController");
const seekerController = require("../server/jobSeeker/seekerController");
const educationController = require("../server/education/educationController");
const experienceController = require("../server/experience/experienceController");

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
// router.use("/post/changestatus", postController.changeStatus);

// Employer Routes
router.post("/employer/add", employerController.add);
router.post("/employer/login", employerController.login);
router.post("/employer/getall", employerController.getEmployerData);
router.post("/employer/getsingle", employerController.getSingleEmployerData);
router.post("/employer/update", employerController.updateData);
router.post("/employer/delete", employerController.deleteData);

// Job Seeker Routes
router.post("/jobseeker/add", seekerController.add);
router.post("/jobseeker/login", seekerController.login);
router.post("/jobseeker/getall", seekerController.getAll);
router.post("/jobseeker/getsingle", seekerController.getSingle);
router.post("/jobseeker/update", seekerController.update);
router.post("/jobseeker/delete", seekerController.deleteData);

// Education Routes
router.post("/education/add", educationController.addEducation);
router.post("/education/getall", educationController.getAllEducation);
router.post("/education/getsingle", educationController.getSingleEducation);
router.post("/education/update", educationController.updateEducation);
router.post("/education/delete", educationController.deleteEducation);

// Job Experience Routes
router.post("/experience/add", experienceController.addExperience);
router.post("/experience/getall", experienceController.getAllExperience);
router.post("/experience/getsingle", experienceController.getSingleExperience);
router.post("/experience/update", experienceController.updateExperience);
router.post("/experience/delete", experienceController.deleteExperience);

module.exports = router;
