import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import mongoConnect from './util/database.js';

import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/user', authRoutes);

// Connect to database and Launch server
const startServer = async () => {
  try {
    await mongoConnect();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch(err) {
    console.log('Failed to connect ot database', err);
    process.exit(1);
  }
}

startServer();