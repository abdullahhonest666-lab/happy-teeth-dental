import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';

dotenv.config();
const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api/appointments', appointmentRoutes);
app.use('/api/inquiries', inquiryRoutes);

app.get('/', (req, res) => res.send('Happy Teeth Dental Clinic Multan API Running...'));

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
});