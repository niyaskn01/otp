const mongoose=require('mongoose')
 
const connect=()=>{
  try { 
    mongoose.connect(process.env.MONGO_URL)
    console.log('connected with database')
  } catch (error) {
    console.log('error in connecting with database')
  }
} 

module.exports=connect