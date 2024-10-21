require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const Player = require('./models/playerModel'); // Adjust the path as necessary

// Use the MONGO_URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

const players = [
  { name: 'Rohit Sharma', position: 'Batsman', points: 10 },
  { name: 'Virat Kohli', position: 'Batsman', points: 12 },
  { name: 'KL Rahul', position: 'Wicketkeeper', points: 8 },
  { name: 'Shreyas Iyer', position: 'Batsman', points: 9 },
  { name: 'Hardik Pandya', position: 'All-rounder', points: 11 },
  { name: 'Ravindra Jadeja', position: 'All-rounder', points: 10 },
  { name: 'Jasprit Bumrah', position: 'Bowler', points: 9 },
  { name: 'Mohammed Shami', position: 'Bowler', points: 8 },
  { name: 'Yuzvendra Chahal', position: 'Bowler', points: 7 },
  { name: 'Shubman Gill', position: 'Batsman', points: 9 },
  { name: 'Prithvi Shaw', position: 'Batsman', points: 8 },
  { name: 'David Warner', position: 'Batsman', points: 10 },
  { name: 'Steve Smith', position: 'Batsman', points: 12 },
  { name: 'Aaron Finch', position: 'Batsman', points: 9 },
  { name: 'Glenn Maxwell', position: 'All-rounder', points: 11 },
  { name: 'Pat Cummins', position: 'Bowler', points: 9 },
  { name: 'Josh Hazlewood', position: 'Bowler', points: 8 },
  { name: 'Mitchell Starc', position: 'Bowler', points: 10 },
  { name: 'Marcus Stoinis', position: 'All-rounder', points: 9 },
  { name: 'Alex Carey', position: 'Wicketkeeper', points: 8 },
  { name: 'Marnus Labuschagne', position: 'Batsman', points: 10 },
  { name: 'Steve O’Keefe', position: 'Bowler', points: 7 }
];



const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await Player.insertMany(players);
    console.log('Players added successfully!');
  } catch (error) {
    console.error('Error adding players:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
