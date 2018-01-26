const express = require('express')
const User = require('../db/models/User')
const router = express.Router()


//GET (read) all users
router.get('/', async(req, res)=>{
    const users = await User.find({}) 
    try{
        res.json(users)
    } 
    catch(err){
        console.log(err)
    }
})

//POST (create) a new user
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

//GET (read) a single user
router.get('/:userId', async(req, res)=>{
    const userId = req.params.userId
    try{
        const user = await User.findById(userId)
        console.log(user)
        res.json({
            user
        })
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

//DELETE (delete) a user
router.get('/:userId/delete', async(req, res)=>{
    console.log("DELETING")
    const userId = req.params.userId
    try{
        await User.findByIdAndRemove(userId)
        res.redirect('/api/users')
    }
    catch(err){
        console.log(err)
    }
})

//Update a user

router.patch('/:userId', async (req, res)=>{
    try{
        const updatedUser = req.body
        const userId = req.params.userId
        await User.findByIdAndUpdate(userId, updatedUser)
        res.json(user)
    }
    catch(err){
        console.log(err)
    }    
})

module.exports = router