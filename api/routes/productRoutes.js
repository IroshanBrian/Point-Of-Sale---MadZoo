const express = require('express');
const {
     getProducts,
     createProduct,
     updateProduct,
     getProductById,
     deleteProduct,
} = require('../controllers/productController');


const router = express.Router();

router.route('/')
     .get(getProducts)
     .post(createProduct);

router.route('/:id')
     .put(updateProduct)
     .get(getProductById)
     .delete(deleteProduct);

module.exports = router;
