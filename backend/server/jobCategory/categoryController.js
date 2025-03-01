const Category = require("./categoryModel");

const addJobCategory = (req, res) => {
  var validationerror = [];
  if (!req.body.categoryName) validationerror.push("categoryName is required.");
  if (!req.body.description) validationerror.push("description is required.");
  if (validationerror) {
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
    categoryObj.save()
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

module.exports = { addJobCategory };
