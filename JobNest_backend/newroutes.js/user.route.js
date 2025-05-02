import express from "express"
import {login, register, updateProfile} from "../controllers/user.controller"

const router = express.Router();

// router.route("/register").post(singleUpload,register);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
// router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);
router.route("/profile/update").post(isAuthenticated,updateProfile);

export default router;