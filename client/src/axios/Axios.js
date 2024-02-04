import axios from "axios";

export const axiosInstance=axios.create({
  baseURL:'https://otp-4ujp.vercel.app'
  // baseURL:'http://localhost:8080'
})