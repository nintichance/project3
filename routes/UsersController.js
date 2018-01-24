const express = require('express')
const User = require('../db/models/User')
const router = express.Router()

router.get('/', async(req, res)=>{
    const users = await User.find({}) 
    try{
        res.json(users)
    } 
    catch(err){
        console.log(err)
    }
})

router.post('/', async(req, res)=>{
    const newUser = new User(req.body)
    const user = await newUser.save() 
    try{
        res.json(user)
    } 
    catch(err){
        console.log(err)
    }
})

module.exports = router