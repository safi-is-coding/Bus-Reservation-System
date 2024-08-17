const express = require('express');
const { bookSeats, getUserBookings } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/book', bookSeats);
router.get('/mybookings', protect, getUserBookings);

module.exports = router;
