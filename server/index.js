import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/UserAuthentication/UserAuthentication.js'; 

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json());

app.use('/auth', router);

const mongoURI = process.env.MONGO_URI; 

const startServer = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('✅ MongoDB connected');
  
      app.listen(5001, () => {
        console.log('🚀 Server running on port 5001');
      });
    } catch (error) {
      console.error('❌ Failed to connect to MongoDB:', error);
    }
  };
  
  startServer();