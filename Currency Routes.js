// routes/currencyRoutes.js
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Public conversion API
router.get("/convert", async (req, res) => {
  const { from, to, amount } = req.query;

  // Example conversion logic (replace with real API)
  const rate = 83; // example USD → INR
  const result = amount * rate;

  res.json({ result });
});

// Protected route (only logged-in users)
router.get("/history", authMiddleware, (req, res) => {
  res.json({ message: "User conversion history" });
});

// Admin-only route
router.delete(
  "/delete-history",
  authMiddleware,
  roleMiddleware("admin"),
  (req, res) => {
    res.json({ message: "All history deleted (admin only)" });
  }
);

module.exports = router;