const express = require('express')
const router = express.Router()
const {
    cartControllerGet,
    cartControllerPost
} = require('../controllers/cartController') 

router.get('/', cartControllerGet);
router.post('/', cartControllerPost);

module.exports = router
