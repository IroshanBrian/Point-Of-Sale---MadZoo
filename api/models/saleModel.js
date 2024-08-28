const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
     products: [
          {
               product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
               quantity: { type: Number, required: true },
               total: { type: Number, required: true }
          }
     ],
     createdDate: { type: Date, default: Date.now },
});

const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;
