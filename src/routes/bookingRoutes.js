// routes/bookingRoutes.js

const express = require("express");
const router = express.Router();
const { createNetCourierBooking } = require("../controllers/bookingController");

// Define the booking routes
router.post("/bookings", createNetCourierBooking);

module.exports = router;
