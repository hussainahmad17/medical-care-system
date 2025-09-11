import express from "express";
import {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";

const router = express.Router();

// @route   POST /api/services
// @desc    Create new service
router.post("/", createService);

// @route   GET /api/services
// @desc    Get all services
router.get("/", getServices);

// @route   GET /api/services/:id
// @desc    Get service by ID
router.get("/:id", getServiceById);

// @route   PUT /api/services/:id
// @desc    Update service
router.put("/:id", updateService);

// @route   DELETE /api/services/:id
// @desc    Delete service
router.delete("/:id", deleteService);

export default router;
