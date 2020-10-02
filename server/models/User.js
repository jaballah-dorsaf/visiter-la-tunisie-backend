const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    
    name:{type:String, required:true},
    phone:{type:String, required:true},
    password:{type:String, required:true},
    role :{type:String, required:true}
})

const User = mongoose.model('users',userSchema)
module.exports = User