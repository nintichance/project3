const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../db/models/User')

//Show all activities

router.get('/', async (req, res) => {
    try {
        const userId = req.params.userId
        const kidId = req.params.kidId
        const user = await User.findById(userId)
        const kid = user.kids.id(kidId)
        res.json(kid.activities)
        
    }
    catch (err) {
        console.log(err)
    }
})



module.exports = router
