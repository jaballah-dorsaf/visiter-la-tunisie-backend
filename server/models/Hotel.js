const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const Schema = mongoose.Schema

const hotelSchema = new Schema ({
    
    title:{type:String, required:true},
    adresse :{type:String, required:true},
    ville:{type:String, required:true},
    description:{type:String, required:true},
    image :{type:String, required:true},
    rating :{type:String, required:true},
    availableDate :{type:String, required:true}
})

const Hotel = mongoose.model('hotels',hotelSchema)
module.exports = Hotel