const mongoose = require('mongoose')
require('dotenv').config()

const DB_URL = process.env.mongoURL

const connectDB = async () => {
    try {
      await mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Database Connected');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
}
  
module.exports = connectDB;