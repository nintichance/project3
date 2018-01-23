const mongoose = require('mongoose')
const Schema = require('../schema')
 
const Kid = mongoose.model('Kid', Schema.KidSchema)

module.exports = Kid