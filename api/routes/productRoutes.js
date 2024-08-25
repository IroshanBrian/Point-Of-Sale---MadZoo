const express = require('express');
const {
     getProducts,
     createProduct,
     updateProduct,
     deleteProduct,
} = require('../controllers/productController');
const { upload } = require('../middleware/upload');

const router = express.Router();

router.route('/')
     .get(getProducts)
     .post(createProduct)

router.route('/:id')
     .put(updateProduct)
     .delete(deleteProduct);


module.exports = router;
