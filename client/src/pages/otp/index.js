import React, { useEffect, useState } from 'react'
import { FormBox, FormButton, FormContainer, FormTitle, InputItem } from '../../styles/login'
import { Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { axiosInstance } from '../../axios/Axios'

function Otp() {
  const [otp,setOtp]=useState('')
  const [err,setErr]=useState(false)
  const location=useLocation()
  const [loading,setLoading]=useState(false)
  const email=location?.state?.email || ''
  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()

    const isValidOTP = /^\d+$/.test(otp);
    if(!isValidOTP) return toast.error('enter valid otp')

    try {
      const {data}=await axiosInstance.post('/user/login',{email,otp})
      if(data.success){
        navigate('/home')
        toast.success('welcome')
      }else{
        toast.error(data.message)
        setErr(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const resendOtp=async(e)=>{
    e.preventDefault()
    console.log(email)
    try{
      setLoading(true)
      setErr(false)
      const {data}=await axiosInstance.post('/user/create-otp',{email})
      setLoading(false)
      if(data.success){
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    if(email===''){
      navigate('/login')
    } 
  },[email,navigate])
  return (
    <FormContainer>
    <FormBox>
      <FormTitle>Validate your OTP</FormTitle>
      {err &&  <Typography 
      onClick={(e)=>resendOtp(e)}
      sx={{color:'blue',cursor:'pointer'}}
      variant="h6">resend OTP</Typography>}
      {
        loading && 
        <Typography 
        sx={{color:'red'}}
        variant="h6">please wait...</Typography>
      }
      <InputItem  placeholder='enter otp'
      onChange={(e)=>setOtp(e.target.value)}
      />
      <FormButton 
      onClick={handleSubmit} variant='contained'>Submit</FormButton>
      <Typography sx={{margin:'20px'}} variant='subtitle1'>
      </Typography>
    </FormBox>
  </FormContainer>
  )
}

export default Otp