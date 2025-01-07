const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  id:   { type: Number, required: true },
  name: { type: String, required: true },          // Nama produk
  type: { type: String, required: true },      // Kategori produk (e.g., "Pakaian", "Alat Tulis", "Buku")
  price: { type: Number, required: true },         // Harga produk
  stock: { type: Number, required: true },         // Stok produk                                 // Tag tambahan (e.g., "diskon", "best seller")
});


const Product = mongoose.model("product", productSchema);

module.exports = Product;
