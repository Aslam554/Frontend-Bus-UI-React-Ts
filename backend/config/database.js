const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    }).then(() => console.log('Connected to MongoDB')) .catch((err) => console.error('Error connecting to MongoDB:',err));
 
};



module.exports = connectDB; // Ensure this is the correct export
