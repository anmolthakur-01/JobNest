const Experience = require("./experienceModel");

const addExperience = (req, res) => {
  var validationerror = [];
  if (!req.body.employerName) validationerror.push("employerName is required.");
  if (!req.body.typeOfEmployment)
    validationerror.push("typeOfEmployment is required.");
  if (!req.body.designation) validationerror.push("designation is required.");
  if (!req.body.ctcPerMonth) validationerror.push("ctcPerMonth is required.");
  if (!req.body.fromDate) validationerror.push("fromDate is required.");
  if (!req.body.toDate) validationerror.push("toDate is required.");
  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Data not found!",
      error: validationerror,
    });
  } else {
    let experienceObj = new Experience();
    experienceObj.employerName = req.body.employerName;
    experienceObj.typeOfEmployment = req.body.typeOfEmployment;
    experienceObj.designation = req.body.designation;
    experienceObj.ctcPerMonth = req.body.ctcPerMonth;
    experienceObj.fromDate = req.body.fromDate;
    experienceObj.toDate = req.body.toDate;
    experienceObj
      .save()
      .then((experienceData) => {
        if (!experienceData) {
          res.send({
            status: 404,
            success: false,
            message: "data not found",
            data: experienceData,
          });
        } else {
          res.send({
            status: true,
            message: "Data Loaded!",
            data: experienceData,
          });
        }
      })
      .catch((err) => {
        res.send({
          status: false,
          message: "Internal server error!",
          error: err.message,
        });
      });
  }
};

const getAllExperience = (req, res) => {
  Experience.find()
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

const getSingleExperience = (req, res) => {
  var validationerror = [];
  if (!req.body._id) validationerror.push("_id is required.");
  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Data not found!",
      error: validationerror,
    });
  } else {
    Experience.findOne({ _id: req.body._id })
      .then((data) => {
        if (!data) {
          res.send({
            status: 420,
            success: false,
            message: "Data not found!",
          });
        } else {
          res.send({
            status: 200,
            success: true,
            message: "Data loaded",
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

const updateExperience = (req, res) => {
  var validationerror = [];
  if (!req.body._id) validationerror.push("_id is required.");
  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Data not found!",
      error: validationerror,
    });
  } else {
    Experience.findOne({ _id: req.body._id })
      .then((experienceData) => {
        if (!experienceData) {
          res.send({
            status: 420,
            success: false,
            message: "Data not found!",
            data: experienceData,
          });
        } else {
          if (req.body.employerName) {
            experienceData.employerName = req.body.employerName;
          }
          if (req.body.typeOfEmployment) {
            experienceData.typeOfEmployment = req.body.typeOfEmployment;
          }
          if (req.body.designation) {
            experienceData.designation = req.body.designation;
          }
          if (req.body.ctcPerMonth) {
            experienceData.ctcPerMonth = req.body.ctcPerMonth;
          }
          if (req.body.fromDate) {
            experienceData.fromDate = req.body.fromDate;
          }
          if (req.body.toDate) {
            experienceData.toDate = req.body.toDate;
          }
          experienceData
            .save()
            .then((data) => {
              res.send({
                status: 200,
                success: true,
                message: "Data updated successfully",
                data: data,
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

const deleteExperience = (req, res) => {
  var validationerror = [];
  if (!req.body._id) validationerror.push("_id is required.");
  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Data not found!",
      error: validationerror,
    });
  } else {
    Experience.deleteOne({ _id: req.body._id })
      .then((experienceData) => {
        res.send({
          status: 200,
          success: true,
          message: "Deleted successfully",
          data: experienceData,
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
};

module.exports = {
  addExperience,
  getAllExperience,
  getSingleExperience,
  updateExperience,
  deleteExperience,
};
