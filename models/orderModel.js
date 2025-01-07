const mongoose = require('mongoose');

// Schema untuk item dalam pesanan
const itemSchema = new mongoose.Schema({
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

// Schema untuk pesanan
const orderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true,
    unique: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  address: {
    type: String,
    required: true
  },
  payment_method: {
    type: String,
    required: true
  },
  items: [itemSchema], 
  total_amount: {
    type: Number,
    required: true
  },
  total_price: {
    type: Number,
    required: true
  }
}, { timestamps: true });

// Model untuk pesanan
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
