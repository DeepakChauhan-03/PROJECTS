import mongoose from "mongoose"

const connectToDB = async()=>{
   try {
       await mongoose.connect(process.env.MONGO_URI)
       console.log("Databse Connected")
   } catch (error) {
     console.log("Error in connecting the database", error)
   }
}

export default connectToDB