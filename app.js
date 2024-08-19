import express from 'express';
import dotenv from 'dotenv';
import pointRoutes from './routes/pointRoutes.js';
import polygonRoutes from './routes/polygonRoutes.js';
import { connectDB } from './utils/database.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api', pointRoutes);
app.use('/api', polygonRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
