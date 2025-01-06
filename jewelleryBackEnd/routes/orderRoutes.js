import express from "express";
const router = express.Router();
import {
  addOrderItem,
  getOrderById,
  updateOrderToPay,
} from "../controllers/orderController.js";
import { protect } from "../middlewares/authUser.js";

router.route("/").post(protect, addOrderItem);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPay);

export default router;
