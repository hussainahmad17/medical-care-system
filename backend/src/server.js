import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Import Routes (we’ll create them later)
import userRoutes from "./routes/User.route.js";
import professionalRoutes from "./routes/professional.route.js";
import serviceRoutes from "./routes/service.route.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

connectDB()

// Routes
app.use("/api/users", userRoutes);
app.use("/api/professionals", professionalRoutes);
app.use("/api/services", serviceRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Care At Home API is running...");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ error: err.message || "Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
