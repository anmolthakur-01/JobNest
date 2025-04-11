const Education = require("./educationModel");

const addEducation = (req, res) => {
  var validationerror = [];
  if (!req.body.qualification)
    validationerror.push("qualification is required.");
  if (!req.body.collageName) validationerror.push("collageName is required.");
  if (!req.body.yearOfPassing)
    validationerror.push("yearOfPassing is required.");
  if (!req.body.percentage) validationerror.push("percentage is required.");
  if (!req.body.stream) validationerror.push("stream is required.");
  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Data not found!",
      error: validationerror,
    });
  } else {
    let educationObj = new Education();
    educationObj.qualification = req.body.qualification;
    educationObj.collageName = req.body.collageName;
    educationObj.yearOfPassing = req.body.yearOfPassing;
    educationObj.percentage = req.body.percentage;
    educationObj.stream = req.body.stream;
    educationObj
      .save()
      .then((educationData) => {
        if (!educationData) {
          res.send({
            status: 404,
            success: false,
            message: "data not found",
            data: educationData,
          });
        } else {
          res.send({
            status: true,
            message: "Data Loaded!",
            data: educationData,
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

const getAllEducation = (req, res) => {
  Education.find()
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

const getSingleEducation = (req, res) => {
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
    Education.findOne({ _id: req.body._id })
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

const updateEducation = (req, res) => {
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
    Education.findOne({ _id: req.body._id })
      .then((educationData) => {
        if (!educationData) {
          res.send({
            status: 420,
            success: false,
            message: "Data not found!",
            data: educationData,
          });
        } else {
          if (req.body.qualification) {
            educationData.qualification = req.body.qualification;
          }
          if (req.body.collageName) {
            educationData.collageName = req.body.collageName;
          }
          if (req.body.yearOfPassing) {
            educationData.yearOfPassing = req.body.yearOfPassing;
          }
          if (req.body.stream) {
            educationData.stream = req.body.stream;
          }
          if (req.body.percentage) {
            educationData.percentage = req.body.percentage;
          }
          educationData
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

const deleteEducation = (req, res) => {
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
    Education.deleteOne({ _id: req.body._id })
      .then((educationData) => {
        res.send({
          status: 200,
          success: true,
          message: "Deleted successfully",
          data: educationData,
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
  addEducation,
  getAllEducation,
  getSingleEducation,
  updateEducation,
  deleteEducation,
};