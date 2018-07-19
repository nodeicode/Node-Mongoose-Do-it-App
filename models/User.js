//User Schema and a pre-save (TO Be configured Later)
//Imp to remember points in comments bois!!

const mongoose = require('mongoose')
const slug = require('slugs')
const validator = require('validator')
const mongooseLocal = require('passport-local-mongoose')
const errorhandler = require('mongoose-mongodb-errors')

var UserSchema = new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        unique:true,
        required: "Please Enter An Email",
        validate: [validator.isEmail,validator.NormalizeEmail], //Always validata a array of methods [ ] not objects { }
    },
    Name:{
        type:String,
        required:"Please Enter ur Name!",
        trim:true,
    },
})

UserSchema.plugin(mongooseLocal,{usernameFeild:'email'})
UserSchema.plugin(errorhandler)


module.exports = mongoose.model('User',UserSchema)