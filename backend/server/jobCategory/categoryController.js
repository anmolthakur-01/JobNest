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

module.exports = { addJobCategory, getAllCategory };
