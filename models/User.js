//User Schema and a pre-save (TO Be configured Later)
//Imp to remember points in comments bois!!

const mongoose = require('mongoose')
const slug = require('slugs')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const validator = require('validator')
const errorhandler = require('mongoose-mongodb-errors')

const UserSchema = new Schema({
    name:{
        type:String,
        required:'Please Enter ur Name!😎✨',
        trim:true,
    },
    email:{
        trim:true,
        type:String,
        unique:true,
        lowercase:true,
        required:'Please Enter an Email!',
        validate:[validator.isEmail,'Invalid Email!! 😮']
    },
    password:{
        trim:true,
        type:String,
        required:'Please Enter a password',
        validate:{validator:function(password){
            return /^\$2[ayb]\$.{56}$/.test(password); //regx for checking a bcrypt salted hash!!
        },msg:'Check database! password is not a hash 🤦‍'}
    }
})

UserSchema.plugin(errorhandler)


module.exports = mongoose.model('User',UserSchema)