import express from "express";
import {
  applyForJob,
  getApplicationsForJob,
  updateApplicationStatus,
} from "../controllers/applicationController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/apply", protect, applyForJob);
router.get("/job/:jobId", protect, getApplicationsForJob);
router.put("/:applicationId/status", protect, updateApplicationStatus);

export default router;
