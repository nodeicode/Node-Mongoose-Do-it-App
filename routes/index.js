const express = require('express')
const router  = express.Router()
//const controller  = require('./controllers/authController.')
//for params use router.param@)

router.get('/',(req,res)=>{
    res.render('../views/Home.pug')
})
module.exports = router