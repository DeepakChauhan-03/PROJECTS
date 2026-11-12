import express from 'express'
import dotenv from 'dotenv'

const app = express();
dotenv.config();

const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Hello World"
    })
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})
 