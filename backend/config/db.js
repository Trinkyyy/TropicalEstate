// /config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected to tropical database');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); // Exit the application if connection fails
  }
};

module.exports = connectDB;
