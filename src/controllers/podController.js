// controllers/podController.js

const axios = require("axios");
const {
  NETCOURIER_API_KEY,
  NETCOURIER_POD_UPDATE_ENDPOINT,
} = require("../.env");

// Function to update POD tracking events in NetCourier
const updatePODTrackingEvents = async (req, res) => {
  try {
    // Extract data from the request body
    const podData = req.body;

    // Make a request to NetCourier API to update POD tracking events
    const response = await axios.post(NETCOURIER_POD_UPDATE_ENDPOINT, podData, {
      headers: {
        Authorization: `Bearer ${NETCOURIER_API_KEY}`,
      },
    });

    // Send the response from NetCourier back to the client
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error updating POD tracking events in NetCourier:",
      error.message
    );
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

module.exports = { updatePODTrackingEvents };
