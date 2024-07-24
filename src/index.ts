import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/user', userRoutes)

mongoose.connect(process.env.DB_URI || '').then(() => console.log('Mongo connect')).catch(err => console.log('Mongo erro', err));

app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);

})