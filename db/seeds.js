require('dotenv').config()

const User = require('./models/User')
const Kid = require('./models/Kid')
const Activity = require('./models/Activity')
const mongoose = require('mongoose')


// connect to database
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
    process.exit(-1)
})

mongoose.Promise = global.Promise

// Delete all Users, then add some fake ones

User.remove({}).then(() => {
    const sylvia = new User({
        firstName: 'Sylvia',
        lastName: 'Markson',
        img: 'https://source.unsplash.com/random/300x301'
    })
    const micah = new Kid({
        firstName: 'Micah',
        lastName: 'Johnson',
        schedule: 'Mondays & Wednesdays 5-11pm',
        school: 'Lyric Elementary School',
        description: 'Pick up from Lyric Elementary school at 3:15pm. Get food for him before soccer.',
        age: 6,
        diet: 'Gluten-free',
        img: 'https://i.imgur.com/AqQrCXI.jpg?1',
        bedTime: '10pm',
        payRate: '20/hr',
        parentOne: 'Michael Johnson',
        parentTwo: 'Marie Johnson',
        parentOneContact: '404-555-4389',
        parentTwoContact: '404-555-4389',
        emergencyName: 'Sally Mathers',
        emergencyRelation: 'Neighbor',
        emergencyContact: '404-555-2392'
    })
    const soccer = new Activity({
        subject: 'soccer',
        startTime: '6pm',
        endTime: '8pm',
        location: 'Arder Field',
        contactName: 'Coach Carter',
        contactNumber: '404-555-6734'
    })
    sylvia.kids.push(micah)
    micah.activities.push(soccer)
    return sylvia.save()
})

    .then(() => {
        return User.create({
            firstName: 'Arlind',
            lastName: 'Amarov',
            img: 'https://i.imgur.com/QKCVUFz.jpg?3'
        })
    })
    .then((arlind) => {
        const lola = new Kid({
            firstName: 'Lola',
            lastName: 'Stevenson',
            age: 4,
            img: 'https://i.imgur.com/AqQrCXI.jpg?1',
            diet: 'No candy!',
            bedTime: '9pm',
            schedule: 'Tuesdays & Thursdays 3-11pm',
            school: 'Lyric Elementary School',
            description: 'Pick up from Lyric Elementary school at 3:15pm. Get food for him before soccer.',
            payRate: '15/hr',
            parentOne: 'Avery Stevenson',
            parentTwo: 'Jaime Levit',
            parentOneContact: '404-555-4359',
            parentTwoContact: '404-555-2359',
            emergencyName: 'Houston Marks',
            emergencyRelation: 'Grandfather',
            emergencyContact: '404-555-2245'
        })
        const piano = new Activity({
            subject: 'piano',
            startTime: '4pm',
            endTime: '6pm',
            location: 'Borks Music Emporium',
            contactName: 'Anna Krindrel',
            contactNumber: '404-555-6423'
        })
        arlind.kids.push(lola)
        lola.activities.push(piano)
        return arlind.save()
    })
    .then(() => {
        return User.create({
            firstName: 'Nina',
            lastName: 'Madravan',
            img: 'https://source.unsplash.com/random/300x300'
        })
    })
    .then((nina) => {
        const ngozi = new Kid({
            firstName: 'Ngozi',
            lastName: 'Boudou',
            age: 2,
            img: 'https://i.imgur.com/AqQrCXI.jpg?1',
            diet: 'Vegetarian!',
            bedTime: '10pm',
            schedule: 'Monday-Friday 6am-3pm',
            school: 'Lyric Elementary School',
            description: 'Keep television and technology interaction at a minimum.',
            payRate: '25/hr',
            parentOne: 'Odo Boudou',
            parentTwo: 'Lindsey Boudou',
            parentOneContact: '404-555-4213',
            parentTwoContact: '404-555-6543',
            emergencyName: 'James Boudou',
            emergencyRelation: 'Older brother',
            emergencyContact: '404-555-2455'
        })
        const pt = new Activity({
            subject: 'physical therapy',
            startTime: '4pm',
            endTime: '6pm',
            location: 'Children Center',
            contactName: 'Dr. Leiland Jones',
            contactNumber: '404-555-4353'
        })
        nina.kids.push(ngozi)
        ngozi.activities.push(pt)
        return nina.save()
    })
    .catch((error) => {
        console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
        console.log(error)
    })
    .then(() => {
        mongoose.connection.close()
        console.log(`
            Finished seeding database...
      
            Disconnected from MongoDB
        `)
    })