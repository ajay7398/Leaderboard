import mongoose, { Mongoose } from 'mongoose'
const connectDB=async()=>{
await mongoose.connect(process.env.DB_URI);
console.log("database is connected")
}

export default connectDB;

