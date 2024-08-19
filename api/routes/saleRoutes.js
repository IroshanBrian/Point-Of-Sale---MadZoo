const express = require('express');
const {
     getSales,
     createSale,
     deleteSale,
} = require('../controllers/saleController');

const router = express.Router();

router.route('/')
     .get(getSales)
     .post(createSale);

router.route('/:id')
     .delete(deleteSale);

module.exports = router;
