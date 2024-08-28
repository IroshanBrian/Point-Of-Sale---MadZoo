const Product = require('../models/productModel');

const getProducts = async (req, res) => {
     try {
          const products = await Product.find({});
          res.status(200).json(products);
     } catch (error) {
          res.status(500).json({ message: 'Error fetching products', error });
     }
};

const getProductById = async (req, res) => {
     try {
          const product = await Product.findById(req.params.id);
          if (!product) {
               return res.status(404).json({ message: 'Product not found' });
          }
          res.status(200).json(product);
     } catch (error) {
          res.status(500).json({ message: 'Error fetching product', error });
     }
};

const createProduct = async (req, res) => {
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


const updateProduct = async (req, res) => {
     try {
          const product = await Product.updateOne(
               {
                    _id: req.params.id
               },
               {
                    title: req.body.title,
                    price: req.body.price,
                    stock: req.body.stock,
               });

          res.status(200).json({ message: 'Product updated successfully', product: product });
     } catch (error) {
          res.status(500).json({ message: 'Error updating product', error });
     }
};


const deleteProduct = async (req, res) => {
     try {
          const product = await Product.findById(req.params.id);

          if (!product) {
               return res.status(404).json({ message: 'Product not found' });
          }

          await product.deleteOne();
          return res.status(200).json({ message: 'Product removed' });
     } catch (error) {
          console.error('Error removing product:', error);
          return res.status(500).json({ message: 'Error removing product', error: error.message });
     }
};


module.exports = {
     getProducts,
     createProduct,
     updateProduct,
     getProductById,
     deleteProduct,
};
