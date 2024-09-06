import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path'
import apiRouter from './routes/api';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);

app.use('/api', apiRouter);

app.listen(3001, () => {
    console.log(`Server is running on port ${PORT}`);
});
