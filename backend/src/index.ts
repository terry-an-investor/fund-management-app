import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { fundRoutes } from './routes/fund.routes';
import { authRoutes } from './routes/auth.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/funds', fundRoutes);
app.use('/api/auth', authRoutes);

// Database connection
createConnection()
  .then(() => {
    console.log('Database connected successfully');
    
    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });
