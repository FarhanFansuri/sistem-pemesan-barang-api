const express = require('express')
const productModel = require('../models/productModel')
const router = express.Router()
const {
    jwtGenerator,
    jwtMiddleware,
    loginController,
    signUpController
} = require('../controllers/authController')

router.post('/login', jwtMiddleware, loginController)

router.post('/register', signUpController)

module.exports = router