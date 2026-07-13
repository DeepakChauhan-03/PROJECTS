import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './src/config/db.js';
import cookieParser from 'cookie-parser';
import authRouter from './src/routes/auth.routes.js';
import cors from 'cors'

const app = express()
dotenv.config();

const port = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))



//user routes - Authrouter
app.use("/api/auth",authRouter)


app.listen(port,()=>{
    connectToDB();
    console.log(`Server is running on port ${port}` )
})