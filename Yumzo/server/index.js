import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();
import cookieParser from 'cookie-parser'
import connectToDB from './src/config/db.js';
import authRouter from './src/routes/auth.routes.js';

const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/auth",authRouter) //auth Routes


app.listen(PORT,()=>{
  connectToDB();
  console.log(`Server is running on port ${PORT}`);
})