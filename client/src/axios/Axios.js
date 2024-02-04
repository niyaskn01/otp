import axios from "axios";

export const axiosInstance=axios.create({
  baseURL:'https://otp-sandy.vercel.app'
  // baseURL:'http://localhost:8080'
})