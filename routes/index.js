const express = require('express')
const router  = express.Router()
const controller  = require('../controllers/authControllers')
const {catchErrors} = require('../handlers/catcErrors')
//for params use router.param@)

router.get('/',controller.home)

router.post('/register',controller.validateRegister,catchErrors(controller.register),controller.login)

router.get('/account',controller.isLogged,controller.account)


module.exports = router