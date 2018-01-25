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

router.patch('/:userId', (req, res) => {
    User.findById(req.params.userId).then((user) => {
      const update = req.body.user
      if (update.firstName) {
        user.firstName = update.firstName
      }
      if (update.lastName) {
        user.lastName = update.lastName
      }
      if (update.img) {
        user.img = update.img
      }
      user.save().then((user) => {
        user = user.reverse()
        res.json(user)
      })
    })
  })

  
//   router.patch('/:userId', (req, res)=>{
//       try{
//           const user = await User.findById(req.params.userId)
//           const update = req.body.user
//           const oneUser = user.users.id(req.params.id)
//           if (update.firstName){
//             user.firstName = update.firstName
//           }
//           if (update.lastName){
//               user.lastName = update.lastName
//           }
//           if (update.img){
//               user.img = update.img
//           }
//           const newUser = await user.save()
//           newUser = newUser.reverse()
//           res.json(newUser)
//         }
//       catch(err){
//           console.log(err)
//       }
//   })


module.exports = router