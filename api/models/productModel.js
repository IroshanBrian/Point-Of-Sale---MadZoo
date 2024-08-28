const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
     title: { type: String, required: true, index: true },
     price: { type: Number, required: true, min: 0 },
     stock: { type: Number, required: true, min: 0 },
     createdDate: { type: Date, default: Date.now },
     updatedDate: { type: Date, default: Date.now }
});

productSchema.pre('save', function (next) {
     if (this.isModified()) {
          this.updatedDate = Date.now();
     }
     next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
