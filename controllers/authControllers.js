//use expres-validator and create a function to validate regster forms and login requests
const mongoose  = require('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')
const passport = require('passport')

exports.home = (req,res)=>{
    res.render('Home')
}

exports.validateRegister = (req,res,next)=>{
req.sanitizeBody('name')
req.checkBody('name','We need Your Name!').notEmpty()
req.checkBody('email','That email is invalid!').isEmail()
req.sanitizeBody('email').normalizeEmail({
    gmail_remove_subaddress:false,
    remove_extension:false,
    gmail_remove_dots:false,
})
req.checkBody('password','Where is ur password?').notEmpty()
const  errors  = req.validationErrors()
if(errors){
req.flash('error',errors.map(err => err.msg))
res.render('Home',  {body:req.body,flashes:req.flash()})
return
}
next()
}

exports.register= async (req,res,next) =>  {
var user  = new User({email:req.body.email,name:req.body.name})
var register = promisify(User.register,User)
await register(user,req.body.password)
next()
}

exports.login = passport.authenticate('local',{
        failureRedirect:'/',
        failureFlash:'Failed Login Try Again!',
        successRedirect:'/account',
        successFlash:'Logged In !!'
    })

exports.isLogged = (req,res,next)=>{
    if(req.isAuthenticated()){
    next()
    return}
req.flash('error','Looks like ur not logged in plz log in !')
res.redirect('/')
}

exports.account = (req,res)=>{
res.render('../views/acc.pug')
}

