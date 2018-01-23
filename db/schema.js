const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const ActivitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contactName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
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
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    school: {
        type: String,
        required: false
    },
    schedule: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
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
        type: String,
        required: true
    },
    parentTwo: {
        type: String,
        required: true
    },
    parentOneContact: {
        type: String,
        required: true
    },
    parentTwoContact: {
        type: String,
        required: true
    },
    payRate: {
        type: String,
        required: false
    },
    emergencyName: {
        type: String,
        required: true
    },
    emergencyRelation: {
        type: String,
        required: true
    },
    emergencyContact: {
        type: String,
        required: true
    }
})

const UserSchema = new Schema(
    {   firstName: {
        type: String,
        required: false
    },
        lastName: {
            type: String,
            required: false
        },
        img: {
            type: String,
            default: 'https://i.imgur.com/QKCVUFz.jpg?3',
            required: false
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
