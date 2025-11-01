import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'
configDotenv()
import connectDB from './config/db.js'
import noteRoutes from './routes/noteRoutes.js'


const app = express()
connectDB()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000;

app.use('/api/notes', noteRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})