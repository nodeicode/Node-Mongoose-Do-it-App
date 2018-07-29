//connect to mongo and start up the ports
const mongoose = require('mongoose')
const flash = require('connect-flash')
const express = require('express')
require('./models/User.js')
const app = require('./app')
require('dotenv').config({path:'.env'})

mongoose.connect(process.env.MONGODB,{useNewUrlParser:true})
mongoose.Promise = global.Promise
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log('connected to mongdb SERVER')
});

const server = app.listen(process.env.PORT,()=>{console.log("Express Running At Port -> "+process.env.PORT)})