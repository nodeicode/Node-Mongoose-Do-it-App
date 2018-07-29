//User Schema and a pre-save (TO Be configured Later)
//Imp to remember points in comments bois!!

const mongoose = require('mongoose')
const slug = require('slugs')
const Schema = mongoose.Schema
const validator = require('validator')
const mongooseLocal = require('passport-local-mongoose')
const errorhandler = require('mongoose-mongodb-errors')

const UserSchema = new Schema({
    email:{
        type:String,
        trim:true,
        unique:true,
        lowercase:true,
        required: 'Please Enter An Email',
        validate: [validator.isEmail,'Invalid email!'], //Always validata a array of methods [ ] not objects { }
    },
    name:{
        type:String,
        required:'Please Enter ur Name!',
        trim:true,
    }
})

UserSchema.plugin(mongooseLocal,{usernameField:'email'})
UserSchema.plugin(errorhandler)


module.exports = mongoose.model('User',UserSchema)