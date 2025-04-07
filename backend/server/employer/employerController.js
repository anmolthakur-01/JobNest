const Employer = require("./employerModel");

const add = (req, res) => {
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
    Employer.findOne({ companyName: req.body.companyName }).then(
      (employerData) => {
        if (employerData) {
          res.send({
            status: 420,
            success: false,
            message: "Employer data already exist!",
            data: employerData,
          });
        } else {
          let employerObj = new Employer();
          employerObj.name = req.body.name;
          employerObj.email = req.body.email;
          employerObj.password = req.body.password;
          employerObj.companyName = req.body.companyName;
          employerObj.description = req.body.description;
          employerObj.tagline = req.body.tagline;
          employerObj.website = req.body.website;
          employerObj.logo = req.body.logo;
          employerObj
            .save()
            .then((employerData) => {
              if (!employerData) {
                res.send({
                  status: 404,
                  success: false,
                  message: "data not found",
                  data: employerData,
                });
              } else {
                res.send({
                  status: true,
                  message: "Data Loaded!",
                  data: employerData,
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
          if (req.body.name) { employerData.name = req.body.name; }
          if (req.body.email) { employerData.email = req.body.email; }
          if(req.body.password) { employerData.password = req.body.password;}
          if(req.body.companyName) { employerData.companyName = req.body.companyName;}
          if(req.body.description) { employerData.description = req.body.description;}
          if(req.body.tagline) { employerData.tagline = req.body.tagline;}
          if(req.body.website) { employerData.website = req.body.website;}
          if(req.body.logo) { employerData.logo = req.body.logo;}
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

module.exports = {
  add,
  getEmployerData,
  getSingleEmployerData,
  updateData,
  deleteData,
};
