import { Typography } from '@mui/material';
import React from 'react'
import { useState,useEffect } from 'react';
import { AppbarHeader, FormContainer } from '../styles/login';

function Home() {

  const [isClickable, setIsClickable] = useState(false);
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(17, 0, 0); // Set target time to 5:00 PM
    const endTime = new Date(targetTime.getTime() + 4 * 60 * 60 * 1000); // 4 hours later

    const timer = setInterval(() => {
      const currentTime = new Date();
      const difference = endTime.getTime() - currentTime.getTime();

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown(`${hours}h ${minutes}m ${seconds}s`)
        setIsClickable(true);
      } else {
        setCountdown('Expired');
        setIsClickable(false);
      }
    }, 1000); // Update countdown every second

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    // Handle button click event

    console.log('Button clicked')
  };

const genOTP=()=>{
  let OTP = Math.floor(Math.random()*987654)
  console.log(OTP)
}
  return (
    <div>
      <button onClick={handleClick} disabled={!isClickable}>
        Clickable for 4 hours from 5 PM
      </button>
      <div>{countdown}</div>

      <button onClick={genOTP}>otp</button>
   
        <AppbarHeader textAlign={'center'}>
          Hey buddy! Its home.........
        </AppbarHeader>
      
    </div>
  )
}

export default Home