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
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookies = require('cookie-parser')
const promisify =  require('es6-promisify')
const errorHandler = require('./handlers/catcErrors')
require('./handlers/passport')

const app  = express()

app.set('views',path.join(__dirname,'./views'))
app.set('view engine','pug')

app.use(express.static(path.join(__dirname,'/public')))

app.use(Parser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(validator())
app.use(cookies())

app.use(session({
    secret:'lllolll',
    secure:true,
    resave: false,
    saveUninitialized: false,
    store :new Mongo ({mongooseConnection:mongoose.connection  })
  }));

app.use(passport.initialize())
app.use(passport.session())

app.use((req,res,next)=>{
  req.login = promisify(req.login,req)
  next()
})

app.use(flash())

app.use((req,res,next)=>{
  res.locals.flashes = req.flash();
  res.locals.user = req.user || null;
  next()
})

app.use('/',routes)

//error handlers
app.use(errorHandler.flashes)
app.use(errorHandler.ntFnd)


module.exports = app