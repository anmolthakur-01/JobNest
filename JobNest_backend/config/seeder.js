const User = require("../server/user/userModel");

const admin = () => {
  User.findOne({ email: "admin@gmail.com" })
    .then((userdata) => {
      if (!userdata) {
        let userObj = new User();
        userObj.name = "admin";
        userObj.email = "admin@gmail.com";
        userObj.password = "123";
        userObj.userType = 1;
        userObj.save();
        console.log(userdata);
      } else {
        console.log("admin already exist");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { admin };
