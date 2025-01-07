require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const routerAuth = require('./routes/authRouter')
const routerProduct = require('./routes/productRouter')
const mongoose = require('mongoose');
const swaggerDocument = require('./openapi.json')
const swaggerUi = require('swagger-ui-express');

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
.then(()=>{
    console.log("connected!")
})

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json())
app.use('/auth', routerAuth)
app.use('/products', routerProduct)


app.listen(port , ()=>{
    console.log(`listening to port ${port}!`)
})



