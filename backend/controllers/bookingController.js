const Booking = require('../models/Booking');

const addBooking = async (req, res) => {
  console.log(req.body)
  const { studentName, mobileNumber, from, to, departureTime, arrivalTime } = req.body;


  try {
    // Generate a unique seat number
    const existingBookings = await Booking.find();
    const existingSeatNumbers = existingBookings.map(booking => booking.seatNumber);
    let seatNumber;
    do {
      seatNumber = Math.floor(Math.random() * 40) + 1;
    } while (existingSeatNumbers.includes(seatNumber));

    const newBooking = new Booking({
      studentName,
      mobileNumber,
      from,
      to,
      departureTime,
      arrivalTime,
      seatNumber,
    });

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ message: 'Error adding booking', error });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

module.exports = { addBooking, getBookings };
