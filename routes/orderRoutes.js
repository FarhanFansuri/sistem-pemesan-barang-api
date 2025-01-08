const express = require('express')
const router = express.Router()
const {
    orderControllerGet,
    orderControllerPost
} = require('../controllers/orderController') 

router.get('/', orderControllerGet);
router.post('/', orderControllerPost);

module.exports = router
