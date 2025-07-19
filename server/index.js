import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/DB.js'
import router from './routes/userRoutes.js'
import historyRouter from './routes/historyRoutes.js'

dotenv.config()
const app = express()

// Middlewares
app.use(express.json())
app.use(cors({
  origin: ['https://ajay-leaderboard.netlify.app', 'http://localhost:5173']
}));



// Database
connectDB()

// Routes
app.use('/api', router)
app.use('/api', historyRouter)

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})
