const express=require('express')
const { userRegisterController, generateOtpController, userLoginController } = require('../controllers/userController')
const router=express.Router()

router.post('/register',userRegisterController)

router.post('/create-otp',generateOtpController)

router.post('/login',userLoginController)

module.exports=router  