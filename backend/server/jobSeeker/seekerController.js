const Seeker = require("./seekerModel");
const User = require("../user/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const privateKey = "@#97$787@5#8#$";

const add = (req, res) => {
  var validationerror = [];
  if (!req.body.name) validationerror.push("name is required.");
  if (!req.body.email) validationerror.push("email is required.");
  if (!req.body.password) validationerror.push("password is required.");
  if (!req.body.phone) validationerror.push("phone is required.");
  if (!req.body.resume) validationerror.push("resume is required.");
  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Data not found!",
      error: validationerror,
    });
  } else {
    Seeker.findOne({ email: req.body.email })
    .then((seekerData) => {
      if (seekerData) {
        res.send({
          status: 420,
          success: false,
          message: "Registered data already exist!",
          data: seekerData,
        });
      } else {
        let seekerObj = new Seeker();
        seekerObj.name = req.body.name;
        seekerObj.email = req.body.email;
        seekerObj.password = bcrypt.hashSync(req.body.password, saltRounds);
        seekerObj.phone = req.body.phone;
        seekerObj.resume = req.body.resume;
        seekerObj
          .save()
          .then((seekerData) => {
            if (!seekerData) {
              res.send({
                status: 404,
                success: false,
                message: "data not found",
                data: seekerData,
              });
            } else {
              res.send({
                status: true,
                message: "Data Loaded!",
                data: seekerData,
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
    });
  }
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
      .then((userdata) => {
        // if (!userdata) {
        //   res.send({
        //     status: 420,
        //     success: false,
        //     message: "invalid email",
        //   });
        // } else {
          bcrypt.compare(
            req.body.password,
            userdata.password,
            function (err, data) {
              if (!data) {
                res.send({
                  status: 420,
                  success: false,
                  message: "invalid password",
                });
              } else {
                var tokenObj = {
                  _id: userdata._id,
                  name: userdata.name,
                  email: userdata.email,
                  userType: userdata.userType,
                };
                var token = jwt.sign(tokenObj, privatekey);
                res.send({
                  status: 200,
                  success: true,
                  message: "Login Successfully !!",
                  token: token,
                  data: userdata,
                });
              }
            }
          );
        // }
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

const getAll = (req, res) => {
  Seeker.find()
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

const getSingle = (req, res) => {
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
    Seeker.findOne({ _id: req.body._id })
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

const update = (req, res) => {
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
    Seeker.findOne({ _id: req.body._id })
      .then((seekerData) => {
        if (!seekerData) {
          res.send({
            status: 420,
            success: false,
            message: "Data not found!",
            data: seekerData,
          });
        } else {
          if (req.body.name) {
            seekerData.name = req.body.name;
          }
          if (req.body.email) {
            seekerData.email = req.body.email;
          }
          if (req.body.password) {
            seekerData.password = req.body.password;
          }
          if (req.body.phone) {
            seekerData.phone = req.body.phone;
          }
          if (req.body.resume) {
            seekerData.resume = req.body.resume;
          }
          seekerData
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
    Seeker.deleteOne({ _id: req.body._id })
      .then((seekerData) => {
        res.send({
          status: 200,
          success: true,
          message: "Deleted successfully",
          data: seekerData,
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
  add,
  login,
  getAll,
  getSingle,
  update,
  deleteData,
};
