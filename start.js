//connect to mongo and start up the ports
const mongoose = require('mongoose')
const flash = require('connect-flash')
const express = require('express')
const app = require('./app')
require('dotenv').config({path:'.env'})

const server = app.listen(process.env.PORT,()=>{console.log("EXPRESS PORT RUNNING AT ->"+process.env.PORT)})