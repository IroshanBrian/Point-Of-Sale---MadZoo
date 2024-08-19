const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
     name: { type: String, required: true },
     description: { type: String },
     price: { type: Number, required: true },
     quantity: { type: Number, required: true },
}, {
     timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
