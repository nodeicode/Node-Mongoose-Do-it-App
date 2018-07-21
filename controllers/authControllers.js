//use expres-validator and create a function to validate regster forms and login requests
const mongoose  = require('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')
const passport = require('passport')

exports.validateRegister = (req,res,next)=>{
req.sanitizeBody('name')
req.checkBody('name','We need Your Name!').notEmpty()
req.checkBody('email').isEmail()
req.sanitizeBody('email').normalizeEmail({
    gmail_remove_subaddress:false,
    gmail_remove_dots:false,
})
req.checkBody('password').notEmpty()
var errors  = req.validationErrors()
if(errors){req.flash('error',errors)
return
}
next()
}

exports.register= async (req,res,next) =>  {
const user  = new User({email:req.body.email,name:req.body.name})
console.log(req.body.name)
var register = promisify(User.register,User)
await register(user,req.body.password)
next()
}

exports.login = passport.authenticate('local',{
        failureRedirect:'/',
        failureFlash:'Failed Login Try Again!',
        successRedirect:'/account',
        successFlash:'Loggin In !!'
    })

exports.account = (req,res)=>{
res.render('../views/acc.pug')
}

