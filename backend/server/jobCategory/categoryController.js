const Category = require("./categoryModel");

const addJobCategory = (req, res) => {
  var validationerror = [];
  if (!req.body.categoryName) validationerror.push("categoryName is required.");
  if (!req.body.description) validationerror.push("description is required.");
  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Data not found!",
      error: validationerror,
    });
  } else {
    const categoryObj = Category();
    categoryObj.categoryName = req.body.categoryName;
    categoryObj.description = req.body.description;
    categoryObj
      .save()
      .then((categoryData) => {
        res.send({
          status: true,
          message: "Data Loaded!",
          data: categoryData,
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
};

const getAllCategory = (req, res) => {
  Category.find()
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

const getSingleCategory = (req, res) => {
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
    Category.findOne({ _id: req.body._id })
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

const updateCategory = (req, res) => {
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
    Category.findOne({ _id: req.body._id })
      .then((categoryData) => {
        if (!categoryData) {
          res.send({
            status: 420,
            success: false,
            message: "Data not found!",
            data: categoryData,
          });
        } else {
          if (req.body.categoryName)
            categoryData.categoryName = req.body.categoryName;
          if (req.body.description)
            categoryData.description = req.body.description;
          categoryData
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

const deleteCategory = (req, res) => {
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
    Category.deleteOne({ _id: req.body._id })
      .then((categoryData) => {
        res.send({
          status: 200,
          success: true,
          message: "Deleted successfully",
          data: categoryData,
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
  addJobCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
