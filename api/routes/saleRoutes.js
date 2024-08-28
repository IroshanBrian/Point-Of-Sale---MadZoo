const express = require('express');
const {
     createSale,
     getSales
} = require('../controllers/saleController');

const router = express.Router();

router.route('/')
     .get(getSales)
     .post(createSale);

module.exports = router;