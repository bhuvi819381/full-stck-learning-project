import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';

const app = express();
connectDB();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors())
app.use(express.json());

app.use('/api/todos', todoRoutes);


app.get('/', (req, res)=> {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
