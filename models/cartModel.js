const mongoose = require('mongoose');

// Schema untuk item dalam keranjang
const cartItemSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Referensi ke model Product
    required: true
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Schema untuk keranjang belanja
const cartSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referensi ke model User
    required: true
  },
  items: [cartItemSchema], // Array of cartItemSchema
  total_amount: {
    type: Number,
    default: 0 // Jumlah total item dalam keranjang
  },
  total_price: {
    type: Number,
    default: 0 // Total harga keranjang
  }
}, { timestamps: true });

// Model untuk keranjang
const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;
