const Employer = require("./employerModel");
const User = require("../user/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const privateKey = "@jij7&uh##33$4U@9!";

const add = (req, res) => {
  var validationerror = [];
  if (!req.body.name) validationerror.push("name is required.");
  if (!req.body.email) validationerror.push("email is required.");
  if (!req.body.password) validationerror.push("password is required.");
  if (!req.body.phoneNumber) validationerror.push("phoneNumber is required.");
  if (!req.body.companyName) validationerror.push("companyName is required.");
  if (!req.body.description) validationerror.push("description is required.");
  if (!req.body.tagline) validationerror.push("tagline is required.");
  if (!req.body.website) validationerror.push("website is required.");
  //  if (!req.files) validationerror.push("logo is required.");
  // if (!req.body.profileImage) validationerror.push("profileImage is required.");
  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Data not found!",
      error: validationerror,
    });
  }
  User.findOne({ email: req.body.email })
    .then((employerData) => {
      if (!employerData) {
        let userObj = new User();
        userObj.name = req.body.name;
        userObj.email = req.body.email;
        userObj.userType = 3;
        userObj.password = bcrypt.hashSync(req.body.password, saltRounds);
        userObj.save().then((employerSave) => {
          let employerObj = new Employer();
          employerObj.name = req.body.name;
          employerObj.email = req.body.email;
          employerObj.password = bcrypt.hashSync(req.body.password, saltRounds);
          employerObj.phoneNumber = req.body.phoneNumber;
          employerObj.companyName = req.body.companyName;
          employerObj.description = req.body.description;
          employerObj.tagline = req.body.tagline;
          employerObj.website = req.body.website;
          employerObj.logo = req.files; // multiple file ke liye req.files OR single ke liye req.file.filename
          employerObj.profileImage = req.files;
          employerObj.userId = req.body.userId;
  
          console.log(employerObj.logo);
          console.log(employerObj.profileImage);
          employerObj
            .save()
            .then((employerData) => {
              res.send({
                status: 200,
                success: true,
                message: "Employer register success",
                data: employerData,
              });
            })
            .catch((err) => {
              res.send({
                status: false,
                message: "Internal server error!",
                error: err.message,
              });
            });
        });
      } else {
        res.send({
          status: false,
          message: "Record is already exist",
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
};

const login = (req, res) => {
  var validationerror = [];
  if (!req.body.email) validationerror.push("email is required");
  if (!req.body.password) validationerror.push("password is required");
  if (validationerror.length > 0) {
    res.send({
      status: 404,
      success: false,
      message: "validationerror error occur",
      error: validationerror,
    });
  } else {
    User.findOne({ email: req.body.email })
      .then((employerdata) => {
        if (!employerdata) {
          res.send({
            status: 420,
            success: false,
            message: "invalid email",
          });
        } else {
          bcrypt.compare(
            req.body.password,
            employerdata.password,
            (err, result) => {
              if (!result) {
                res.send({
                  status: 420,
                  success: false,
                  message: "invalid password",
                });
              } else {
                var tokenObj = {
                  _id: employerdata._id,
                  name: employerdata.name,
                  email: employerdata.email,
                  userType: employerdata.userType,
                };
                var token = jwt.sign(tokenObj, privateKey);
                res.send({
                  status: 200,
                  success: true,
                  message: "Login Successfully !!",
                  token: token,
                  data: employerdata,
                });
              }
            }
          );
        }
      })
      .catch((err) => {
        res.send({
          status: 500,
          success: false,
          message: "Internal server error",
          error: err.message,
        });
      });
  }
};

const getEmployerData = (req, res) => {
  Employer.find()
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

const getSingleEmployerData = (req, res) => {
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
    Employer.findOne({ _id: req.body._id })
      .then((data) => {
        res.send({
          status: 200,
          success: true,
          message: "Data loaded",
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
};

const updateData = (req, res) => {
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
    Employer.findOne({ _id: req.body._id })
      .then((employerData) => {
        if (!employerData) {
          res.send({
            status: 420,
            success: false,
            message: "Data not found!",
            data: employerData,
          });
        } else {
          if (req.body.name) {
            employerData.name = req.body.name;
          }
          if (req.body.email) {
            employerData.email = req.body.email;
          }
          if (req.body.password) {
            employerData.password = req.body.password;
          }
          if (req.body.phoneNumber) {
            employerData.phoneNumber = req.body.phoneNumber;
          }
          if (req.body.companyName) {
            employerData.companyName = req.body.companyName;
          }
          if (req.body.description) {
            employerData.description = req.body.description;
          }
          if (req.body.tagline) {
            employerData.tagline = req.body.tagline;
          }
          if (req.body.website) {
            employerData.website = req.body.website;
          }
          if (req.body.logo) {
            employerData.logo = req.body.logo;
          }
          // if (req.body.profileImage) {
          //   employerData.profileImage = req.body.profileImage;
          // }
          employerData
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

const deleteData = (req, res) => {
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
    Employer.deleteOne({ _id: req.body._id })
      .then((employerData) => {
        res.send({
          status: 200,
          success: true,
          message: "Deleted successfully",
          data: employerData,
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

const changeStatus = (req, res) => {
  var validationerror = [];
  if (!req.body._id) validationerror.push("_id is required.");
  if (!req.body.status) validationerror.push("status is required.");
  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Validation error",
      error: validationerror,
    });
  } else {
    Employer.findOne({ _id: req.body._id }).then((employerData) => {
      if (!employerData) {
        res.send({
          status: 404,
          success: false,
          message: "Data not found",
          data: employerData,
        });
      } else {
        employerData.status = req.body.status;
        employerData
          .save()
          .then((data) => {
            res.send({
              status: 200,
              success: true,
              message: "Status updated successfully",
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
    });
  }
};

module.exports = {
  add,
  login,
  getEmployerData,
  getSingleEmployerData,
  updateData,
  deleteData,
  changeStatus,
};
