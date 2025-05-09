const multer = require("multer");
const path = require("path");

// Multer setup
const employerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      // path.join(__dirname, "public", "images", "employer-logo-images")
      "D:/Desktop/JobNest/JobNest_backend/public/images/employer-logo-images"
    );
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 100000); // image ke naam ke age random number generate karke dete hai
    const ext = path.extname(file.originalname); // ye file ke extension ko auto detect karta hai OR extension name naa likne se file editor mei open nhi hoge
    cb(null, file.originalname + "-" + ext);
  },
});

const jobseekerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      "D:/Desktop/JobNest/JobNest_backend/public/images/jobseeker-profiles"
    );
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 100000);
    const ext = path.extname(file.originalname);
    cb(null, file.originalname + "-" + ext);
  },
});

const employerUpload = multer({ storage: employerStorage });
const jobseekerUpload = multer({ storage: jobseekerStorage });

module.exports = { employerUpload, jobseekerUpload };
