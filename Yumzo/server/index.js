import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './src/config/db.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(PORT,()=>{
  connectToDB();
  console.log(`Server is running on port ${PORT}`);
})