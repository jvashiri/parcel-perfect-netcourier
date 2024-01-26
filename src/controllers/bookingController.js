// controllers/bookingController.js

const axios = require("axios");
const { PARCEL_PERFECT_API_KEY, NETCOURIER_API_KEY } = require("../.env");

const createNetCourierBooking = async (req, res) => {
  try {
    // Extract data from the request body
    const bookingData = req.body;

    // Example: Add authentication headers for Parcel Perfect and NetCourier
    const parcelPerfectHeaders = {
      Authorization: `Bearer ${PARCEL_PERFECT_API_KEY}`,
      "Content-Type": "application/json",
    };

    const netCourierHeaders = {
      Authorization: `Bearer ${NETCOURIER_API_KEY}`,
      "Content-Type": "application/json",
    };

    // Example: Call Parcel Perfect API to get shipment data
    const parcelPerfectResponse = await axios.get(
      "https://parcelperfectapi.com/get_shipment/your_shipment_id",
      {
        headers: parcelPerfectHeaders,
      }
    );

    // Example: Process and format Parcel Perfect data if needed
    const formattedData = {
      // Customize the formatting based on the actual response structure
      trackingNumber: parcelPerfectResponse.data.trackingNumber,
      origin: parcelPerfectResponse.data.originAddress,
      destination: parcelPerfectResponse.data.destinationAddress,
      weight: parcelPerfectResponse.data.weight,
    };

    // Example: Call NetCourier API to book the shipment
    const netCourierResponse = await axios.post(
      "https://netcourierapi.com/book_shipment",
      formattedData,
      {
        headers: netCourierHeaders,
      }
    );

    res
      .status(201)
      .json({ message: "Booking created successfully", netCourierResponse });
  } catch (error) {
    console.error("Error creating booking:", error.message);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

module.exports = { createNetCourierBooking };
