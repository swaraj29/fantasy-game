require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const playerRoutes = require('./routes/playerRoutes');
const teamRoutes = require('./routes/teamRoutes');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api', playerRoutes);
app.use('/api', teamRoutes);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
