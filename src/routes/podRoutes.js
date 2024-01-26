// routes/podRoutes.js

const express = require("express");
const router = express.Router();
const { updatePODTrackingEvents } = require("../controllers/podController");

// Define the POD routes
router.post("/update-pod", updatePODTrackingEvents);

module.exports = router;
