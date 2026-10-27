import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    mongoose.set('bufferCommands', false);
    if (!process.env.MONGO_URI) {
      console.warn('[AI Studio] MONGO_URI not provided. App running in offline/mock database mode.');
      return null;
    }
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 2500,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.warn(`[AI Studio] MongoDB Connection Warning: ${error.message}. Running with in-memory database fallback.`);
    return null;
  }
};