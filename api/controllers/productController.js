const Product = require('../models/productModel');

// Fetch all products
const getProducts = async (req, res) => {
     try {
          const products = await Product.find({});
          res.status(200).json(products);
     } catch (error) {
          res.status(500).json({ message: 'Error fetching products', error });
     }
};

const createProduct = async (req, res) => {
     console.log(req.body);
     try {
          const { title, price, stock } = req.body;

          const newProduct = new Product({
               title,
               price,
               stock,
          });

          const savedProduct = await newProduct.save();
          res.status(201).json({ product: savedProduct });
     } catch (error) {
          console.error('Error creating product:', error);
          res.status(500).json({ message: 'Error adding product', error });
     }
};



// Update an existing product
const updateProduct = async (req, res) => {
     try {
          const { title, price, stock, image } = req.body;
          const product = await Product.findById(req.params.id);

          if (product) {
               product.title = title || product.title;
               product.price = price || product.price;
               product.stock = stock || product.stock;
               product.image = image || product.image;

               const updatedProduct = await product.save();
               res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
          } else {
               res.status(404).json({ message: 'Product not found' });
          }
     } catch (error) {
          res.status(500).json({ message: 'Error updating product', error });
     }
};

// Delete a product
const deleteProduct = async (req, res) => {
     try {
          const product = await Product.findById(req.params.id);

          if (product) {
               await product.remove();
               res.status(200).json({ message: 'Product removed' });
          } else {
               res.status(404).json({ message: 'Product not found' });
          }
     } catch (error) {
          res.status(500).json({ message: 'Error removing product', error });
     }
};

module.exports = {
     getProducts,
     createProduct,
     updateProduct,
     deleteProduct
};
