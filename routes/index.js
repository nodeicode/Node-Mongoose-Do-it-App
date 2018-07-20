const express = require('express')
const router  = express.Router()
const controller  = require('../controllers/authControllers')
//for params use router.param@)

router.get('/',(req,res)=>{
    res.render('../views/Home.pug')
})

router.post('/',controller.registerNlogin)

module.exports = router