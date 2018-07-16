const express = require('express')
const router  = express.Router()
//const controller  = require('./controllers/UserController.')
//for params use router.param@)

router.get('/',(req,res)=>{
    res.render('../views/home')
})
module.exports = router