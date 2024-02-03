const otpModel=require('../model/otpModel')
const nodemailer=require('nodemailer')
const userModel=require('../model/userModel')
const bcrypt=require('bcrypt')
require('dotenv').config()
const jwt=require('jsonwebtoken')

const trasnspoter=nodemailer.createTransport({
  service:'gmail',
  auth:{
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  },
}) 

//register user 
const userRegisterController=async(req,res)=>{
  const {name,email,password}=req.body
  try {
    const userExist=await userModel.findOne({email})
    if(userExist) return res.send('user already exists')
    const hashedPassword=await bcrypt.hash(password,10)
    const newUser=await new userModel({
      name,email,password:hashedPassword
    }).save()
    console.log('hey buddy')
    res.status(200).send({
      success:true,
      message:'created new user',
      user:newUser
    })
  } catch (error) {
    console.log(error),
    res.send('error in register',error)
  }
}

// generate otp  and send to the mail
const generateOtpController=async(req,res)=>{
  const {email}=req.body
  try {
    const validUser=await userModel.findOne({email});
    let OTP = Math.floor(Math.random()*9876)
    const existingUser=await otpModel.findOne({email})
    if(!validUser) return res.send('invalid email')
    if(existingUser){
      const updateData=await otpModel.findByIdAndUpdate(existingUser._id,{
        otp:OTP
      },{new:true})
      await updateData.save() 

      const mailOptions={
        from:process.env.EMAIL,
        to:email,
        subject:"Your One Time Password",
        text:`OTP -${OTP}`
      }
      trasnspoter.sendMail(mailOptions,(error,info)=>{
        if(error){
          console.log(error,'email is not send')
          res.send('email is not send')
        }else{
          console.log('sent mail',info.response)
          res.status(200).send({
            success:true,
            message:'email is sent'
          })
        }
      })
    }else{
      await new otpModel({
        email,
        otp:OTP
      }).save()

      const mailOptions={
        from:process.env.EMAIL,
        to:email,
        subject:"Your One Time Password",
        text:`OTP -${OTP}`
      }
      trasnspoter.sendMail(mailOptions,(error,info)=>{
        if(error){
          console.lo(error,'email is not send')
          res.send('email is not send')
        }else{
          console.log('sent mail',info.response)
          res.status(200).send({
            success:true,
            message:'email is sent'
          })
        }
      })
    }
  } catch (error) {
    console.log(error)
  }
}

//login
const userLoginController=async(req,res)=>{
  const {email,otp}=req.body
  try {
    const user=await otpModel.findOne({email})
    if(user.otp===otp){
      //generate token
      let token=jwt.sign({_id:user._id},'secret',{expiresIn:'7d'})
      const validUser=await userModel.findOneAndUpdate({email:email},{token})

      res.status(200).send({
        success:true,
        token:token,
        user:{
          _id:validUser._id,
          name:validUser.name,
          email:validUser.email
        }
      })
    }else{
      res.send({
        success:false,
        message:"Invalid OTP"
      })
    }
  } catch (error) {
    console.log(error)
  }
}



module.exports={
  userRegisterController,
  generateOtpController,
  userLoginController
}
