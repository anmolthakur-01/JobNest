const Register = require("./registerModel");

const register = (req, res) => {
  var validationerror = [];
  if (!req.body.name) validationerror.push("name is required.");
  if (!req.body.email) validationerror.push("email is required.");
  if (!req.body.password) validationerror.push("password is required.");
  if (!req.body.companyName) validationerror.push("companyName is required.");
  if (!req.body.description) validationerror.push("description is required.");
  if (!req.body.tagline) validationerror.push("tagline is required.");
  if (!req.body.website) validationerror.push("website is required.");
  if (!req.body.logo) validationerror.push("logo is required.");

  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Data not found!",
      error: validationerror,
    });
  } else {
    Register.findOne({ companyName: req.body.companyName }).then(
      (registerData) => {
        if (registerData) {
          res.send({
            status: 420,
            success: false,
            message: "Registered data already exist!",
            data: registerData,
          });
        } else {
          let registerObj = new Register();
          registerObj.name = req.body.name;
          registerObj.email = req.body.email;
          registerObj.password = req.body.password;
          registerObj.companyName = req.body.companyName;
          registerObj.description = req.body.description;
          registerObj.tagline = req.body.tagline;
          registerObj.website = req.body.website;
          registerObj.logo = req.body.logo;
          registerObj
            .save()
            .then((registerData) => {
              if (!registerData) {
                res.send({
                  status: 404,
                  success: false,
                  message: "data not found",
                  data: registerData,
                });
              } else {
                res.send({
                  status: true,
                  message: "Data Loaded!",
                  data: registerData,
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
      }
    );
  }
};

const getRegisterData = (req, res) => {
  Register.find()
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

const getSingleRegisterData = (req, res) => {
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
    Register.findOne({ _id: req.body._id })
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
    Register.findOne({ _id: req.body._id })
      .then((registerData) => {
        if (!registerData) {
          res.send({
            status: 420,
            success: false,
            message: "Data not found!",
            data: registerData,
          });
        } else {
          if (req.body.name) { registerData.name = req.body.name; }
          if (req.body.email) { registerData.email = req.body.email; }
          if(req.body.password) { registerData.password = req.body.password;}
          if(req.body.companyName) { registerData.companyName = req.body.companyName;}
          if(req.body.description) { registerData.description = req.body.description;}
          if(req.body.tagline) { registerData.tagline = req.body.tagline;}
          if(req.body.website) { registerData.website = req.body.website;}
          if(req.body.logo) { registerData.logo = req.body.logo;}
          registerData
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
    Register.deleteOne({ _id: req.body._id })
      .then((registerData) => {
        res.send({
          status: 200,
          success: true,
          message: "Deleted successfully",
          data: registerData,
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
  register,
  getRegisterData,
  getSingleRegisterData,
  updateData,
  deleteData,
};
