const Sale = require('../models/saleModel');

// @desc    Get all sales
// @route   GET /api/sales
// @access  Private
const getSales = async (req, res) => {
     const sales = await Sale.find({}).populate('product', 'name');
     res.json(sales);
};

// @desc    Create a sale
// @route   POST /api/sales
// @access  Private
const createSale = async (req, res) => {
     const { product, quantity, totalPrice } = req.body;

     const sale = new Sale({
          product,
          quantity,
          totalPrice
     });

     const createdSale = await sale.save();
     res.status(201).json(createdSale);
};

// @desc    Delete a sale
// @route   DELETE /api/sales/:id
// @access  Private/Admin
const deleteSale = async (req, res) => {
     const sale = await Sale.findById(req.params.id);

     if (sale) {
          await sale.remove();
          res.json({ message: 'Sale removed' });
     } else {
          res.status(404);
          throw new Error('Sale not found');
     }
};

module.exports = {
     getSales,
     createSale,
     deleteSale,
};
