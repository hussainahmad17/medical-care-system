import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

// @route   POST /api/users
// @desc    Create new user
router.post("/", createUser);

// @route   GET /api/users
// @desc    Get all users
router.get("/", getUsers);

// @route   GET /api/users/:id
// @desc    Get user by ID
router.get("/:id", getUserById);

// @route   PUT /api/users/:id
// @desc    Update user
router.put("/:id", updateUser);

// @route   DELETE /api/users/:id
// @desc    Delete user
router.delete("/:id", deleteUser);

export default router;
