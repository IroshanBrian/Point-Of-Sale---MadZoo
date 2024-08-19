const express = require('express');
const {
     getSales,
     createSale,
     deleteSale,
} = require('../controllers/saleController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
     .get(protect, getSales)
     .post(protect, createSale);

router.route('/:id')
     .delete(protect, admin, deleteSale);

module.exports = router;
