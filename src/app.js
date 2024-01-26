// app.js

const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./.env");
const bookingRoutes = require("./routes/bookingRoutes");
const podRoutes = require("./routes/podRoutes");

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", bookingRoutes);
app.use("/api", podRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
