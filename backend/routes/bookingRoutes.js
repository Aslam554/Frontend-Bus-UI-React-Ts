const express = require('express');
const { addBooking, getBookings } = require('../controllers/bookingController');

const router = express.Router();

router.post('/', addBooking);
router.get('/', getBookings);

module.exports = router;
