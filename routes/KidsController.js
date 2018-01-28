const express = require('express')
const router = express.Router({ mergeParams: true })

const User = require('../db/models/User')

// GET (Read) Kids Index

router.get('/', async (req, res) => {
    try {
        const userId = req.params.userId
        const user = await User.findById(req.params.userId)
        console.log("User being returned:", user)
        res.json(user.kids)
    }
    catch (err) {
        console.log(err)
    }
})


//GET (read) a single kid

router.get('/:kidId', async(req, res)=>{
    const userId = req.params.userId
    const kidId =req.params.kidId
   
    try{
        const user = await User.findById(userId)
        res.json(user.kids.id(kidId))
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})


module.exports = router
