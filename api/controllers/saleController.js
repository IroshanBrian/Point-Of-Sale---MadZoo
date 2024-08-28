const Sale = require('../models/saleModel');
const Product = require('../models/productModel');

const getSales = async (req, res) => {
     try {
          const sales = await Sale.find({});
          res.status(200).json(sales);
     } catch (error) {
          res.status(500).json({ message: 'Error fetching sales', error });
     }
}

const createSale = async (req, res) => {
     try {
          const { products, grandTotal } = req.body;

          for (let item of products) {
               const product = await Product.findById(item.product);
               if (!product) {
                    return res.status(404).json({ message: `Product with ID ${item.product} not found` });
               }

               if (product.stock < item.quantity) {
                    return res.status(400).json({ message: `Insufficient stock for product ${product.title}` });
               }

               product.stock -= item.quantity;
               await product.save();
          }

          const sale = new Sale({
               products,
               grandTotal,
          });

          const savedSale = await sale.save();

          res.status(201).json({ sale: savedSale });
     } catch (error) {
          console.error('Error creating sale:', error);
          res.status(500).json({ message: 'Error adding sale', error });
     }
};



module.exports = {
     getSales,
     createSale
};