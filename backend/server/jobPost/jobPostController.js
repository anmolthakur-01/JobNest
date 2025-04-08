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
    // the code below checking if the jobCategory already exists in the database
    Post.findOne({ jobCategory: req.body.jobCategory })
      .then((post) => {
        if (post) {
          res.send({
            status: 420,
            success: false,
            message: "Job Post already exists",
            data: post,
          });
        } else {
          // If the jobCategory does not exist, the code below creates a new jobCategory object
          const postObj = new Post();
          postObj.jobCategory = req.body.jobCategory;
          postObj.jobTitle = req.body.jobTitle;
          postObj.jobType = req.body.jobType;
          postObj.salaryPackage = req.body.salaryPackage;
          postObj.skillsRequired = req.body.skillsRequired;
          postObj.experience = req.body.experience;
          postObj.jobDuration = req.body.jobDuration;
          postObj.jobDescription = req.body.jobDescription;
          postObj
            .save()
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
          error: err.message,
        });
      });
  }
};

const getAllPost = (req, res) => {
  Post.find()
    .then((data) => {
      if (!data) {
        res.send({
          status: 420,
          success: false,
          message: "Data not found!",
          data: data,
        });
      } else {
        res.send({
          status: 200,
          success: true,
          message: "Data founded successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.send({
        status: 500,
        success: false,
        message: "Internal server error!",
        data: err.message,
      });
    });
};

const getSinglePost = (req, res) => {
  const validationerror = [];
  if (!req.body._id) validationerror.push("_id is required.");
  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Data not found!",
      error: validationerror,
    });
  } else {
    Post.findOne({ _id: req.body._id })
      .then((data) => {
        if (!data) {
          res.send({
            status: 420,
            success: false,
            message: "Data not found!",
            data: data,
          });
        } else {
          res.send({
            status: 200,
            success: true,
            message: "Data founded successfully",
            data: data,
          });
        }
      })
      .catch((err) => {
        res.send({
          status: 500,
          success: false,
          message: "Internal server error!",
          err: err.message,
        });
      });
  }
};

const updatePost = (req, res) => {
  let validationerror = [];
  if (!req.body._id) validationerror.push("_id is required.");
  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Data not found!",
      error: validationerror,
    });
  } else {
    Post.findOne({ _id: req.body._id })
      .then((postData) => {
        if (!postData) {
          res.send({
            status: 420,
            success: false,
            message: "Data not found!",
            data: postData,
          });
        } else {
          if (req.body.jobCategory) postData.jobCategory = req.body.jobCategory;
          if (req.body.jobTitle) postData.jobTitle = req.body.jobTitle;
          if (req.body.jobType) postData.jobType = req.body.jobType;
          if (req.body.salaryPackage)
            postData.salaryPackage = req.body.salaryPackage;
          if (req.body.skillsRequired)
            postData.skillsRequired = req.body.skillsRequired;
          if (req.body.experience) postData.experience = req.body.experience;
          if (req.body.jobDuration) postData.jobDuration = req.body.jobDuration;
          if (req.body.jobDescription)
            postData.jobDescription = req.body.jobDescription;
          postData
            .save()
            .then((postData) => {
              res.send({
                status: 200,
                success: true,
                message: "Data updated successfully",
                data: postData,
              });
            })
            .catch((err) => {
              res.send({
                status: 500,
                success: false,
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
          message: "Internal server error!",
          error: err.message,
        });
      });
  }
};

const deletePost = (req, res) => {
  let validationerror = [];
  if (!req.body._id) validationerror.push("_id is required.");
  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Data not found!",
      error: validationerror,
    });
  } else {
    Post.deleteOne({ _id: req.body._id })
      .then((data) => {
        if (!data) {
          res.send({
            status: 420,
            success: false,
            message: "Data not found!",
            data: data,
          });
        } else {
          res.send({
            status: 200,
            success: true,
            message: "Deleted successfully",
            data: data,
          });
        }
      })
      .catch((err) => {
        res.send({
          status: 500,
          success: false,
          message: "Internal server error!",
          error: err.message,
        });
      });
  }
};

const changeStatus = (req, res) => {
  var validationerror = [];
  if (!req.body._id) validationerror.push("id is required");
  if (!req.body.status) validationerror.push("status is required");
  if (validationerror.length > 0) {
    res.send({
      success: false,
      status: 420,
      message: "Validation error",
      error: validationerror,
    });
  } else {
    Post.findOne({ _id: req.body._id }).then((postData) => {
      if (!postData) {
        res.send({
          success: false,
          status: 404,
          message: "Data not found",
          data: postData,
        });
      } else {
        postData.status = req.body.status;
        postData
          .save()
          .then((postData) => {
            res.send({
              success: true,
              status: 200,
              message: "updated status",
              data: postData,
            });
          })
          .catch((err) => {
            res.send({
              success: false,
              status: 500,
              message: "Internal server error",
              error: err.message,
            });
          });
      }
    });
  }
};

module.exports = {
  addJobPost,
  getAllPost,
  getSinglePost,
  updatePost,
  deletePost,
  changeStatus,
};
