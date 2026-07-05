import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './src/config/db.js';
import cookieParser from 'cookie-parser';
import authRouter from './src/routes/auth.routes.js';

const app = express()
dotenv.config();

const port = process.env.PORT || 3000

connectToDB(); //database connection
app.use(express.json())
app.use(cookieParser())

//user routes - Authrouter
app.use("/api/auth",authRouter)

// app.get("/",(req,res)=>{
//     res.send("Hello")
// })

app.listen(port,()=>{
    console.log(`Server is running on port ${port}` )
})