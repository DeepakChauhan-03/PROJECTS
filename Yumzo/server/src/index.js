import express from 'express'
import dotenv from 'dotenv'

const app = express();
dotenv.config();

const PORT = process.env.port || 5000;

app.post("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})