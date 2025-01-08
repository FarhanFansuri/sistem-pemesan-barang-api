const cartModel = require('../models/cartModel')
const cartControllerGet = async (req, res) => {
    try {
        const data = await cartModel.find(); // Gunakan await untuk mengambil data
        res.status(200).json(data); // Kirim data dalam format JSON
    } catch (err) {
        res.status(500).json({ error: 'Gagal mengambil data produk', details: err.message });
    }
}

const cartControllerPost= async (req, res) => {
    try {
        const data = await cartModel.find(); // Gunakan await untuk mengambil data
        res.status(200).json(data); // Kirim data dalam format JSON
    } catch (err) {
        res.status(500).json({ error: 'Gagal mengambil data produk', details: err.message });
    }
}


module.exports = {
    cartControllerGet,
    cartControllerPost
}