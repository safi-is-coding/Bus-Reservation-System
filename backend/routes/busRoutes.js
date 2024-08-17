const express = require('express');
const { addBus, getBuses, getBusDetails } = require('../controllers/busController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', protect, admin, addBus);
router.get('/', getBuses);
router.get('/:id', getBusDetails);

module.exports = router;
