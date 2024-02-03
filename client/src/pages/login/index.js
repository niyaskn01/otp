import React, { useState } from 'react'
import { FormBox, FormButton, FormContainer, FormTitle, InputItem } from '../../styles/login'
import { Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { axiosInstance } from '../../axios/Axios'

function Login() {
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [loading,setLoading]=useState(false)
    const handleSubmit=async(e)=>{
    e.preventDefault();
    if(email==='') return toast.error('email required')
    if(!email.includes('@gmail.com')) return toast.error('enter a valid email')
    try {
      setLoading(true)
      const {data}=await axiosInstance.post('/user/create-otp',{email})
      setLoading(false)
      if(data.success){
        navigate('/otp',{ state: { email } })
        toast.success(data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <FormContainer>
      <FormBox>
        <FormTitle>Welcome Back</FormTitle>
        {loading &&  <Typography 
        sx={{color:'red'}}
        variant="h6">Please wait...</Typography>}
        <InputItem type='email' placeholder='enter email'
        onChange={(e)=>setEmail(e.target.value)}
        />
        <FormButton 
        onClick={handleSubmit} variant='contained'>Login</FormButton>
        <Typography sx={{margin:'20px'}} variant='subtitle1'>
        Don't have an account <Link to='/register'>register</Link>
        </Typography>
      </FormBox>
    </FormContainer>
  )
}

export default Login