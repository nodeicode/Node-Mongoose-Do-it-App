//connect to mongo and start up the ports
const mongoose = require('mongoose')
const flash = require('connect-flash')
const express = require('express')
const app = require('./app')

const server = app.listen(3000,()=>{console.log("EXPRESS PORT RUNNING AT -> 3000")})