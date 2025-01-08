const express = require('express')
const productModel = require('../models/productModel')
const router = express.Router()
const {
    jwtGenerator,
    jwtMiddleware,
    loginController,
    signUpController,
    userControllerGet
} = require('../controllers/authController')

router.post('/login', jwtMiddleware, loginController)

router.post('/register', signUpController)

router.get('/user', userControllerGet)

module.exports = router