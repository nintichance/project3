const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const ActivitySchema = new Schema({
    name: {
        type: String
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    location: {
        type: String
    },
    contactName: {
        type: String
    },
    contactNumber: {
        type: String
    }
},
{
    timestamps: {},
    usePushEach: true
})


const KidSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    school: {
        type: String
    },
    schedule: {
        type: String
    },
    description: {
        type: String
    },
    img: {
        type: String,
        default: 'https://i.imgur.com/QKCVUFz.jpg?3'
    },
    diet: {
        type: String
    },
    bedTime: {
        type: String
    },
    activities: [ActivitySchema],
    parentOne: {
        type: String
    },
    parentTwo: {
        type: String
    },
    parentOneContact: {
        type: String
    },
    parentTwoContact: {
        type: String
    },
    payRate: {
        type: String
    },
    emergencyName: {
        type: String
    },
    emergencyRelation: {
        type: String
    },
    emergencyContact: {
        type: String
    }
})

const UserSchema = new Schema(
    {   firstName: {
        type: String
    },
        lastName: {
            type: String
        },
        img: {
            type: String,
            default: 'https://i.imgur.com/QKCVUFz.jpg?3'
        },
        kids: [KidSchema]
    },
    {
        timestamps: {},
        usePushEach: true
    })

module.exports = {
    UserSchema,
    KidSchema,
    ActivitySchema
}
