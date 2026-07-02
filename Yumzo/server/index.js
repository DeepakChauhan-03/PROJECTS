import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './src/config/db.js';

const app = express()
dotenv.config();

const port = process.env.PORT || 3000

connectToDB(); //database connection

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}` )
})