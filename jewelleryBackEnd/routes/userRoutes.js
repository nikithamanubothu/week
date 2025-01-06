import express from "express";
const router = express.Router();
import {
  login,
  registerUser,
  getUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authUser.js";

router.post("/", registerUser);
router.route("/login").post(login);
router.route("/profile").get(protect, getUserProfile);
export default router;
