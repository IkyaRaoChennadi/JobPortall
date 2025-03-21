import express from "express";
import {
  createJob,
  getJobs,
  recommendJobs,
} from "../controllers/jobController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();
router.post("/", protect, createJob);
router.get("/", getJobs);
router.post("/recommend", protect, recommendJobs);

export default router;
