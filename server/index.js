import express from 'express'
const app=express();
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/DB.js';
import router from './routes/userRoutes.js';
import historyRouter from './routes/historyRoutes.js'
import cors from 'cors'

app.use(express.json());
app.use(cors());
//database connection
connectDB();

//routes
app.use('/api',router);
app.use('/api',historyRouter);

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log("server is running on port",PORT);
})