const Post = require("./jobPostModel");

const addJobPost = (req, res) => {
  var validationerror = [];
  if (!req.body.jobCategory) validationerror.push("jobCategory is required.");
  if (!req.body.jobTitle) validationerror.push("jobTitle is required.");
  if (!req.body.jobType) validationerror.push("jobType is required.");
  if (!req.body.salaryPackage)
    validationerror.push("salaryPackage is required.");
  if (!req.body.skillsRequired)
    validationerror.push("skillsRequired is required.");
  if (!req.body.experience) validationerror.push("experience is required.");
  if (!req.body.jobDuration) validationerror.push("jobDuration is required.");
  if (!req.body.jobDescription)
    validationerror.push("jobDescription is required.");
  if (!req.body.status) validationerror.push("status is required.");

  //  Checking for Errors:
  //  The if (validationerror.length > 0) statement checks if the validationerror(array) contains any error messages. validationerror.length returns the number of elements in the array. If it is greater than 0, it means there are validation errors.
  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Data not found!",
      error: validationerror,
    });
  } else {
    Post.findOne({ jobCategory: req.body.jobCategory })
      .then((Post) => {
        if (Post) {
          res.send({
            status: 420,
            success: false,
            message: "Job Post already exists",
            data: Post,
          });
        } else {
          const postObj = Post();
          postObj.jobCategory = req.body.jobCategory;
          postObj.jobTitle = req.body.jobTitle;
          postObj.jobType = req.body.jobType;
          postObj.salaryPackage = req.body.salaryPackage;
          postObj.skillsRequired = req.body.skillsRequired;
          postObj.experience = req.body.experience;
          postObj.jobDuration = req.body.jobDuration;
          postObj.jobDescription = req.body.jobDescription;
          postObj.status = req.body.status;
          postObj.save()
            .then((postData) => {
              res.send({
                status: true,
                message: "Data Loaded!",
                data: postData,
              });
            })
            .catch((err) => {
              res.send({
                status: false,
                message: "Internal server error!",
                error: err.message,
              });
            });
        }
      })
      .catch((err) => {
        res.send({
          status: 500,
          success: false,
          message: "Error while finding jobCategory",
          error: err,
          message,
        });
      });
  }
};

module.exports = { addJobPost };