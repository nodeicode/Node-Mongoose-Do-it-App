//connect to mongo and start up the ports
const mongoose = require('mongoose')
const flash = require('connect-flash')
const express = require('express')
const app = require('./app')
require('dotenv').config({path:'.env'})

mongoose.connect(process.env.MONGODB,{useNewUrlParser:true})
mongoose.Promise = global.Promise
mongoose.connection.on('connection',()=>{
    console.log('Connected to Mongoose Server !!! ')
})

require('./models/User.js')

const server = app.listen(process.env.PORT,()=>{console.log("Express Running At Port -> "+process.env.PORT)})