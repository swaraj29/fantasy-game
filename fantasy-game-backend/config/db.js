const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to MongoDB with the URI stored in the MONGO_URI environment variable
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    // Log a success message when the connection is established
    console.log('MongoDB connected');
  } catch (error) {
    // Log an error message if there's a problem connecting
    console.error(error);
    // Exit the process if there's a connection error
    process.exit(1);
  }
};

// Export the connectDB function
module.exports = connectDB;
