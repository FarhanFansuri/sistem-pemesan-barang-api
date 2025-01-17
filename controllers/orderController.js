const orderModel = require('../models/orderModel')
const orderControllerGet = async (req, res) => {
    try {
        const data = await orderModel.find(); // Gunakan await untuk mengambil data
        res.status(200).json(data); // Kirim data dalam format JSON
    } catch (err) {
        res.status(500).json({ error: 'Gagal mengambil data produk', details: err.message });
    }
}

const orderControllerPost= async (req, res) => {
    try {
        const data = await orderModel.find(); // Gunakan await untuk mengambil data
        res.status(200).json(data); // Kirim data dalam format JSON
    } catch (err) {
        res.status(500).json({ error: 'Gagal mengambil data produk', details: err.message });
    }
}


module.exports = {
    orderControllerGet,
    orderControllerPost
}