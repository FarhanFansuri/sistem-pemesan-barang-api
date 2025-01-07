const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel')

const loginController = async (req,res)=>{
    const username = req.body.username
    const password = req.body.password
    if(await bcrypt.compare(password,realpass)){
        res.json(req.user)
    }else{
        res.json({
            message: "salah kontol"
        })
    }
}

const signUpController = async (req,res)=>{
    const username = req.body.username
    const password = await bcrypt.hash(req.body.password, 10)
    const email = req.body.email
    const data = {
        usename: username,
        password: password,
        email: email
    }
    res.json({
        message: "user registred succesfully",
        data: data,
        token: jwtGenerator(data)
    })
}


const jwtMiddleware = (req,res,next)=>{
    const authToken = req.headers['authorization']
    const token = authToken && authToken.split(" ")[1]

    if(token == null) return res.sendStatus(401)

    try{
        const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = user
        next()
    }catch(err){
        res.sendStatus(403)
    }
}

const jwtGenerator = (data)=>{
    const response = jwt.sign(data,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '15m'})
    return response
}

module.exports = {
    jwtGenerator,
    jwtMiddleware,
    loginController,
    signUpController
}