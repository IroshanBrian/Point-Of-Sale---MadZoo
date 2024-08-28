const Sale = require('../models/saleModel');

const getSales = async (req, res) => {
     try {
          const sales = await Sale.find({}).populate('product');
          res.status(200).json(sales);
     } catch (error) {
          res.status(500).json({ message: 'Error fetching sales', error });
     }
}