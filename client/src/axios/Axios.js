import axios from "axios";

export const axiosInstance=axios.create({
  // baseURL:'https://otp-ouv7.vercel.app'
  baseURL:'http://localhost:8080'
})