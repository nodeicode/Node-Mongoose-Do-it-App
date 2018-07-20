//use expres-validator and create a function to validate regster forms and login requests
const mongoose  = require('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')
const passport = require('passport')

exports.registerNlogin = (req,res)=>{
req.sanitizeBody('name')
req.checkBody('name','We need Your Name!').notEmpty()
}