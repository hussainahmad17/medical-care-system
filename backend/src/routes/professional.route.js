import express from "express";
import {
  createProfessional,
  getProfessionals,
  getProfessionalById,
  updateProfessional,
  deleteProfessional,
} from "../controllers/professionalController.js";

const router = express.Router();

// @route   POST /api/professionals
// @desc    Create new professional
router.post("/", createProfessional);

// @route   GET /api/professionals
// @desc    Get all professionals
router.get("/", getProfessionals);

// @route   GET /api/professionals/:id
// @desc    Get professional by ID
router.get("/:id", getProfessionalById);

// @route   PUT /api/professionals/:id
// @desc    Update professional
router.put("/:id", updateProfessional);

// @route   DELETE /api/professionals/:id
// @desc    Delete professional
router.delete("/:id", deleteProfessional);

export default router;
