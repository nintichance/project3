const express = require('express')
const router = express.Router({ mergeParams: true })

const User = require('../db/models/User')

// GET (Read) Kids Index
// router.get('/', async(req, res) => {
//     try{
//     const userId = req.params.userId
//     const user = await User.findById(userId)
//     res.json(user)
//     }
//     catch(err){
//       console.log(err)
//     }
// })



router.get('/', (req, res)=>{
    const userId = req.params.userId
    User.findById(userId)
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router
