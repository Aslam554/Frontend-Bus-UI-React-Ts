const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  departureTime: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: Date,
    required: true,
  },
  seatNumber: {
    type: Number,
    required: true,
    unique: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
