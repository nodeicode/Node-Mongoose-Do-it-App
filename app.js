//requiring all app dependencies and configuring middleware
const express = require('express')
const session = require('express-session')
const routes = require('./routes/index.js')
const  validator = require('express-validator')
const flash = require('connect-flash')
const Parser = require('cookie-parser')
const path = require('path')
const passport = require('passport')
const Mongo = require('connect-mongo')(session)

const app  = express()

app.use(passport.initialize())
app.use(passport.session())

app.use(validator())

app.set('views',path.join(__dirname,'./views'))
app.set('view engine','pug')

app.use(express.static(path.join(__dirname,'/public')))

app.use(flash())

app.use(Parser())

app.use(routes)

//app.use passport sesson and initialize left!

module.exports = app