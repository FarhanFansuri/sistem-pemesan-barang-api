const express = require('express')
const productModel = require('../models/productModel')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const data = await productModel.find(); // Gunakan await untuk mengambil data
        res.status(200).json(data); // Kirim data dalam format JSON
    } catch (err) {
        res.status(500).json({ error: 'Gagal mengambil data produk', details: err.message });
    }
});

module.exports = router
