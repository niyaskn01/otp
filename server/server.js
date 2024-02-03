const express=require('express')
const  app = express();
require('dotenv').config()
const cors=require('cors')
const db=require('./config/connect')
const userRouter=require('./routes/userRouter')

db()
app.use(cors()) 
app.use(express.json())

//routes 
app.get('/',(req,res)=>{
  res.send('hey buddy..api checked')
})
app.use('/user',userRouter)

const port =process.env.PORT || 8080

app.listen(port,()=>console.log('server is running at port ' ,port))