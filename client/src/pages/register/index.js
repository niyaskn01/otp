import React, { useState } from 'react'
import { FormBox, FormButton, FormContainer, FormTitle, InputItem } from '../../styles/login'
import { Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { axiosInstance } from '../../axios/Axios'

function Register() {
  const [inputData,setInputData]=useState({
    name:'',email:'',password:''
  })
const navigate=useNavigate()
  const handleChange=(e)=>{
    setInputData({...inputData,[e.target.name]: e.target.value})
  }
  const handleClick=async(e)=>{
    e.preventDefault()
    if(inputData.name==='') return toast.error('name is required')
    if(inputData.email==='') return toast.error('email is required')
    if(!inputData.email.includes('@')) return toast.error('enter valid email')
    if(inputData.password==='') return toast.error('password is required')
    try {
      const {data}=await axiosInstance.post('/user/register',inputData)
      if(data.success){
        navigate('/login')
        toast.success(data.message)
      }else{
        toast.error(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <FormContainer>
      <FormBox>
        <FormTitle>Welcome</FormTitle>
        <InputItem name='name' placeholder='enter name' onChange={handleChange}/>
        <InputItem name='email' type='email' placeholder='enter email' onChange={handleChange}/>
        <InputItem name='password' type='password' placeholder='enter password' onChange={handleChange}/>
        <FormButton onClick={handleClick} variant='contained'>Login</FormButton>
        <Typography sx={{margin:'20px'}} variant='subtitle1'>
        Allready a user <Link to='/login'>login</Link>
        </Typography>
      </FormBox>
    </FormContainer>
  )
}

export default Register